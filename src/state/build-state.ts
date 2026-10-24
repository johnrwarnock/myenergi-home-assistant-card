import { COLORS } from "../layout/theme.js";
import type { CardConfig } from "../types/config.js";
import type { CardState, NodeDef, SpokeDef, NodeId } from "../types/flow.js";

/** Minimal slice of the HA `hass` object we use. */
export interface HassLike {
  states: Record<
    string,
    { state: string; attributes: Record<string, unknown> } | undefined
  >;
}

/** Read a power entity in W, converting kW/MW. Returns null if missing/unavailable. */
export function readPowerW(hass: HassLike, entityId?: string): number | null {
  if (!entityId) return null;
  const st = hass.states[entityId];
  if (!st) return null;
  const v = parseFloat(st.state);
  if (!Number.isFinite(v)) return null;
  const unit = String(st.attributes.unit_of_measurement ?? "W").toLowerCase();
  if (unit === "kw") return v * 1000;
  if (unit === "mw") return v * 1_000_000;
  return v;
}

function readNumber(hass: HassLike, entityId?: string): number | null {
  if (!entityId) return null;
  const v = parseFloat(hass.states[entityId]?.state ?? "");
  return Number.isFinite(v) ? v : null;
}

function readText(hass: HassLike, entityId?: string): string | undefined {
  if (!entityId) return undefined;
  const s = hass.states[entityId]?.state;
  if (!s || s === "unavailable" || s === "unknown") return undefined;
  return s;
}

function hasStatus(status: string | undefined, pattern: RegExp): boolean {
  return !!status && pattern.test(status);
}

export function buildState(hass: HassLike, cfg: CardConfig): CardState {
  const thr = cfg.display?.idle_threshold_w ?? 30;
  const pos = (w: number | null) => Math.max(0, w ?? 0);

  // ---- raw readings -------------------------------------------------------
  const solarW = pos(readPowerW(hass, cfg.solar?.power_entity));
  const gridW = readPowerW(hass, cfg.grid?.power_entity) ?? 0;
  const gridImportW = pos(gridW);
  const gridExportW = pos(-gridW);

  let battW = readPowerW(hass, cfg.battery?.power_entity) ?? 0;
  if (cfg.battery?.invert) battW = -battW;
  const battDischargeW = pos(battW);
  const battChargeW = pos(-battW);
  const soc = readNumber(hass, cfg.battery?.soc_entity);

  const homeW = pos(readPowerW(hass, cfg.home?.power_entity));
  const zappiW = pos(readPowerW(hass, cfg.zappi?.power_entity));
  const eddiW = pos(readPowerW(hass, cfg.eddi?.power_entity));

  // ---- what's feeding the hub, and who's winning ------------------------
  const inbound = solarW + gridImportW + battDischargeW;
  const generationW = solarW + battDischargeW;
  let mixColour: string = COLORS.solar;
  if (inbound > thr) {
    if (solarW >= inbound / 2) mixColour = COLORS.solar;
    else if (gridImportW >= battDischargeW) mixColour = COLORS.grid;
    else mixColour = COLORS.battery;
  }

  // Self-consumption: entity if given, else share of inbound supplied by solar
  let selfPct = readNumber(hass, cfg.hub?.self_consumption_entity);
  if (selfPct === null && cfg.solar?.power_entity) {
    selfPct = inbound > thr ? Math.round((solarW / inbound) * 100) : null;
  }
  if (selfPct !== null) selfPct = Math.max(0, Math.min(100, Math.round(selfPct)));

  // ---- nodes --------------------------------------------------------------
  const nodes: NodeDef[] = [];
  const spokes: SpokeDef[] = [];
  const idleIn = (w: number) => (w > thr ? "in" : "idle");
  const idleOut = (w: number) => (w > thr ? "out" : "idle");

  const add = (n: NodeDef, s: SpokeDef) => {
    nodes.push(n);
    spokes.push(s);
  };

  if (cfg.solar?.power_entity) {
    const today = readNumber(hass, cfg.solar.daily_entity);
    add(
      {
        id: "solar",
        label: cfg.solar.name ?? "solar",
        icon: cfg.solar.icon ?? "mdi:solar-panel",
        color: COLORS.solar,
        powerW: solarW,
        subLabel: today !== null ? `${today.toFixed(1)} kWh today` : undefined,
        active: solarW > thr,
      },
      { node: "solar", powerW: solarW, direction: idleIn(solarW), chevronColor: COLORS.solar }
    );
  }

  if (cfg.home?.power_entity) {
    add(
      {
        id: "home",
        label: cfg.home.name ?? "home",
        icon: cfg.home.icon ?? "mdi:home",
        color: COLORS.home,
        powerW: homeW,
        houseMood: soc !== null && soc < 40
          ? "frown"
          : generationW > 0 && generationW >= homeW
            ? "smile"
            : "neutral",
        active: homeW > thr,
      },
      { node: "home", powerW: homeW, direction: idleOut(homeW), chevronColor: mixColour }
    );
  }

  if (cfg.eddi?.power_entity) {
    const eddiStatus = readText(hass, cfg.eddi.status_entity);
    const eddiAtMaxTemp = hasStatus(
      eddiStatus,
      /\bmax(?:imum)?\s+temp(?:erature)?\s+reached\b/i
    );
    const eddiDiverting = !eddiStatus || /\bdivert(?:ing)?\b/i.test(eddiStatus);
    const eddiActive = eddiW > thr && eddiDiverting && !eddiAtMaxTemp;
    add(
      {
        id: "eddi",
        label: cfg.eddi.name ?? "eddi",
        icon: cfg.eddi.icon ?? "mdi:water-boiler",
        color: COLORS.eddi,
        powerW: eddiW,
        subLabel: eddiStatus,
        active: eddiActive,
        complete: eddiAtMaxTemp,
      },
      {
        node: "eddi",
        powerW: eddiW,
        direction: eddiActive ? idleOut(eddiW) : "idle",
        chevronColor: mixColour,
      }
    );
  }

  if (cfg.zappi?.power_entity) {
    const zappiStatus = readText(hass, cfg.zappi.status_entity);
    add(
      {
        id: "zappi",
        label: cfg.zappi.name ?? "zappi",
        icon: cfg.zappi.icon ?? "mdi:ev-station",
        color: COLORS.zappi,
        powerW: zappiW,
        subLabel: readText(hass, cfg.zappi.mode_entity),
        active: zappiW > thr,
        complete: hasStatus(
          zappiStatus,
          /^(?:fully\s+charged|charge\s+complete(?:d)?|completed|charged)$/i
        ),
      },
      { node: "zappi", powerW: zappiW, direction: idleOut(zappiW), chevronColor: mixColour }
    );
  }

  if (cfg.battery?.power_entity) {
    const action =
      battChargeW > thr ? "charging" : battDischargeW > thr ? "discharging" : "resting";
    const sub = soc !== null ? `${Math.round(soc)}% · ${action}` : action;
    const charging = battChargeW > thr;
    add(
      {
        id: "battery",
        label: cfg.battery.name ?? "battery",
        icon: cfg.battery.icon ?? "mdi:home-battery",
        color: COLORS.battery,
        powerW: charging ? battChargeW : battDischargeW,
        subLabel: sub,
        socPct: soc === null ? null : Math.max(0, Math.min(100, soc)),
        active: battChargeW > thr || battDischargeW > thr,
      },
      {
        node: "battery",
        powerW: Math.abs(battW),
        direction: charging ? "out" : idleIn(battDischargeW),
        chevronColor: charging ? mixColour : COLORS.battery,
      }
    );
  }

  if (cfg.grid?.power_entity) {
    const active = gridImportW > thr || gridExportW > thr;
    const exporting = gridExportW > thr;
    add(
      {
        id: "grid",
        label: cfg.grid.name ?? "grid",
        icon: cfg.grid.icon ?? "mdi:transmission-tower",
        color: COLORS.grid,
        powerW: exporting ? gridExportW : gridImportW,
        subLabel: exporting ? "exporting" : active ? "importing" : undefined,
        active,
        hidden: !!cfg.grid.hide_when_idle && !active,
      },
      {
        node: "grid",
        powerW: Math.abs(gridW),
        direction: exporting ? "out" : idleIn(gridImportW),
        chevronColor: exporting ? mixColour : COLORS.grid,
      }
    );
  }

  // hidden nodes keep their slot but lose their spoke
  const hiddenIds = new Set<NodeId>(nodes.filter((n) => n.hidden).map((n) => n.id));
  return {
    nodes,
    spokes: spokes.filter((s) => !hiddenIds.has(s.node)),
    selfConsumptionPct: selfPct,
  };
}
