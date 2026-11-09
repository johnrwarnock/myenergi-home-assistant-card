import { LitElement, html, svg, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { cardStyles } from "./styles/myenergi.css.js";
import { radialPositions } from "./layout/radial-layout.js";
import type { NodePosition } from "./layout/radial-layout.js";
import { renderSpokes } from "./layout/flow-renderer.js";
import {
  COLORS, HUB_R, NODE_R, NODE_ICON_SIZE, SVG_W, SVG_H, CENTRE_X, CENTRE_Y, SLOT_ORDER,
} from "./layout/theme.js";
import { leafIcon, M2_DEFAULT_ICONS, m2NodeIcon } from "./icons/icons.js";
import { buildState } from "./state/build-state.js";
import type { HassLike } from "./state/build-state.js";
import { DUMMY_CONFIG, DUMMY_HASS } from "./state/dummy-state.js";
import type { CardConfig } from "./types/config.js";
import type { CardState, NodeDef } from "./types/flow.js";

declare global {
  interface Window {
    customCards?: Array<{ type: string; name: string; description: string; preview?: boolean }>;
  }
}

function formatPower(w: number): string {
  const abs = Math.abs(w);
  return `${(abs / 1000).toFixed(1)} kW`;
}

class MyenergiFlowCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass: HassLike | null = null;
  @state() private _config: CardConfig | null = null;

  setConfig(config: CardConfig) {
    if (!config) throw new Error("Invalid configuration");
    this._config = config;
  }

  static getStubConfig() {
    return { ...DUMMY_CONFIG };
  }

  getCardSize() {
    return 6;
  }

  getGridOptions() {
    return { columns: 12, rows: "auto", min_columns: 6 };
  }

  /** Only re-render when an entity we care about changes. */
  protected shouldUpdate(changed: Map<string, unknown>): boolean {
    if (changed.has("_config") || !this._config) return true;
    const oldHass = changed.get("hass") as HassLike | undefined;
    if (!oldHass || !this.hass) return true;
    return this._entityIds().some((id) => oldHass.states[id] !== this.hass!.states[id]);
  }

  private _entityIds(): string[] {
    const c = this._config ?? ({} as CardConfig);
    return [
      c.hub?.self_consumption_entity,
      c.solar?.power_entity, c.solar?.daily_entity,
      c.home?.power_entity,
      c.battery?.power_entity, c.battery?.soc_entity,
      c.grid?.power_entity,
      c.zappi?.power_entity, c.zappi?.mode_entity, c.zappi?.status_entity, c.zappi?.plug_entity,
      c.eddi?.power_entity, c.eddi?.status_entity,
    ].filter((x): x is string => !!x);
  }

  /** Open HA's more-info dialog (current value + history graph) for an entity. */
  private _openMoreInfo(entityId: string) {
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true,
      })
    );
  }

  /** Hand the hub's tap_action to HA's own action handler. */
  private _hubTap() {
    const tapAction = this._config?.hub?.tap_action ?? {
      action: "navigate",
      navigation_path: "/energy",
    };
    this.dispatchEvent(
      new CustomEvent("hass-action", {
        detail: { config: { tap_action: tapAction }, action: "tap" },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _renderNode(node: NodeDef, pos: NodePosition) {
    if (node.hidden) return nothing;
    const tapEntity = this.hass ? node.tapEntity : undefined;
    const body = this._renderNodeBody(node, pos);
    if (!tapEntity) return body;
    const open = () => this._openMoreInfo(tapEntity);
    return svg`
      <g class="tappable" role="button" tabindex="0" aria-label="${node.label} power history"
        @click=${open}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
        }}>
        <circle cx="${pos.cx}" cy="${pos.cy}" r="${NODE_R + 14}" fill="transparent"/>
        ${body}
      </g>
    `;
  }

  private _renderNodeBody(node: NodeDef, pos: NodePosition) {
    const stroke = node.active ? node.color : COLORS.dim;
    const valueColour = node.active ? node.color : COLORS.muted;
    const useM2Icon = node.icon === M2_DEFAULT_ICONS[node.id];
    const powerY = node.id === "home"
      ? pos.cy - NODE_R - 12
      : pos.cy + NODE_R + 18;
    const iconYOffset = node.id === "home" ? -3 : 0;

    return svg`
      <circle cx="${pos.cx}" cy="${pos.cy}" r="${NODE_R}"
        fill="url(#node-grad-${node.id})" stroke="${stroke}" stroke-width="2.5"/>
      <defs>
        <radialGradient id="node-grad-${node.id}" cx="50%" cy="65%" r="70%">
          <stop offset="0%" stop-color="${stroke}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="${COLORS.card}" stop-opacity="0.96"/>
        </radialGradient>
      </defs>
      ${
        useM2Icon
          ? svg`
              <foreignObject x="${pos.cx - NODE_ICON_SIZE / 2}" y="${pos.cy - NODE_ICON_SIZE / 2 + iconYOffset}"
                width="${NODE_ICON_SIZE}" height="${NODE_ICON_SIZE}">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-icon">
                  ${m2NodeIcon(node.id, node.socPct ?? null, node.houseMood ?? "neutral")}
                </div>
              </foreignObject>
            `
          : svg`
              <foreignObject x="${pos.cx - NODE_ICON_SIZE / 2}" y="${pos.cy - NODE_ICON_SIZE / 2 + iconYOffset}"
                width="${NODE_ICON_SIZE}" height="${NODE_ICON_SIZE}">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-icon ${node.active ? "" : "idle"}">
                  <ha-icon icon="${node.icon}"></ha-icon>
                </div>
              </foreignObject>
            `
      }
      ${
        node.id === "home" || node.active
          ? svg`<text x="${pos.cx}" y="${powerY}" text-anchor="middle"
              font-size="14.95" font-weight="400" fill="${valueColour}">${formatPower(node.powerW)}</text>`
          : nothing
      }
      ${
        node.complete
          ? svg`
              <circle cx="${pos.cx + NODE_R * 0.72}" cy="${pos.cy - NODE_R * 0.72}" r="10"
                fill="${COLORS.card}" stroke="${node.color}" stroke-width="2"/>
              <path d="M ${pos.cx + NODE_R * 0.72 - 4} ${pos.cy - NODE_R * 0.72}
                l 3 3 5 -6"
                fill="none" stroke="#ffffff" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
            `
          : nothing
      }
      ${
        node.unplugged
          ? (() => {
              const bx = pos.cx + NODE_R * 0.72;
              const by = pos.cy - NODE_R * 0.72;
              return svg`
                <circle cx="${bx}" cy="${by}" r="10"
                  fill="${COLORS.card}" stroke="${COLORS.muted}" stroke-width="2"/>
                <g transform="translate(${bx - 6} ${by - 6}) scale(0.5)"
                  fill="none" stroke="#ffffff" stroke-width="2.4"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5"/>
                  <path d="M3 3l18 18"/>
                </g>
              `;
            })()
          : nothing
      }
    `;
  }

  private _renderHub(selfPct: number | null) {
    const tappable = !!this.hass && this._config?.hub?.tap_action?.action !== "none";
    const body = this._renderHubBody(selfPct);
    if (!tappable) return body;
    return svg`
      <g class="tappable" role="button" tabindex="0" aria-label="Solar and battery today"
        @click=${() => this._hubTap()}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); this._hubTap(); }
        }}>
        ${body}
      </g>
    `;
  }

  private _renderHubBody(selfPct: number | null) {
    return svg`
      <defs>
        <radialGradient id="hub-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3a3a3a"/>
          <stop offset="100%" stop-color="#1f1f1f"/>
        </radialGradient>
      </defs>
      <circle cx="${CENTRE_X}" cy="${CENTRE_Y}" r="${HUB_R}"
        fill="url(#hub-grad)" stroke="${COLORS.stroke}" stroke-width="2"/>
      <foreignObject x="${CENTRE_X - 10}" y="${CENTRE_Y - 22}" width="20" height="20">
        <div xmlns="http://www.w3.org/1999/xhtml"
          style="display:flex;align-items:center;justify-content:center;width:20px;height:20px;">
          ${leafIcon()}
        </div>
      </foreignObject>
      <text x="${CENTRE_X}" y="${CENTRE_Y + 15}" text-anchor="middle"
        font-size="17.25" font-weight="100" fill="${COLORS.leafGreen}">${selfPct === null ? "–" : `${selfPct}%`}</text>
    `;
  }

  render() {
    if (!this._config) return nothing;
    const hass = this.hass ?? DUMMY_HASS;
    const cs: CardState = buildState(hass, this.hass ? this._config : DUMMY_CONFIG);

    const visibleNodeIds = SLOT_ORDER.filter((id) =>
      cs.nodes.some((node) => node.id === id && !node.hidden)
    );
    const positions = radialPositions(visibleNodeIds);
    const anim = this._config.display?.flow_animation_speed ?? "auto";

    return html`
      <ha-card>
        ${this._config.title ? html`<div class="card-header">${this._config.title}</div>` : nothing}
        <svg class="card-svg" viewBox="0 0 ${SVG_W} ${SVG_H}" xmlns="http://www.w3.org/2000/svg"
          font-family="Overpass, sans-serif" font-weight="100" role="img" aria-label="Energy flow">
          ${renderSpokes(cs.spokes, positions, anim)}
          ${cs.nodes.map((n) => this._renderNode(n, positions.find((p) => p.id === n.id)!))}
          ${this._renderHub(cs.selfConsumptionPct)}
        </svg>
      </ha-card>
    `;
  }
}

if (!customElements.get("myenergi-flow-card")) {
  customElements.define("myenergi-flow-card", MyenergiFlowCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "myenergi-flow-card",
    name: "myenergi Flow Card",
    description: "Radial energy flow card styled after the myenergi app.",
    preview: true,
  });
}
