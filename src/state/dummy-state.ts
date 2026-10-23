import type { CardConfig } from "../types/config.js";
import type { HassLike } from "./build-state.js";

/** Fake hass + config used by preview.html and the card picker preview. */
export const DUMMY_CONFIG: CardConfig = {
  type: "custom:myenergi-flow-card",
  hub: { self_consumption_entity: "sensor.demo_self" },
  solar: { power_entity: "sensor.demo_solar", daily_entity: "sensor.demo_solar_today" },
  home: { power_entity: "sensor.demo_home" },
  eddi: { power_entity: "sensor.demo_eddi", status_entity: "sensor.demo_eddi_status" },
  zappi: { power_entity: "sensor.demo_zappi", mode_entity: "sensor.demo_zappi_mode" },
  battery: { power_entity: "sensor.demo_batt", soc_entity: "sensor.demo_soc" },
  grid: { power_entity: "sensor.demo_grid" },
};

const s = (state: string, unit?: string) => ({
  state,
  attributes: unit ? { unit_of_measurement: unit } : {},
});

export const DUMMY_HASS: HassLike = {
  states: {
    "sensor.demo_self": s("87", "%"),
    "sensor.demo_solar": s("4100", "W"),
    "sensor.demo_solar_today": s("14.6", "kWh"),
    "sensor.demo_home": s("650", "W"),
    "sensor.demo_eddi": s("0", "W"),
    "sensor.demo_eddi_status": s("Max temp reached"),
    "sensor.demo_zappi": s("2.3", "kW"),
    "sensor.demo_zappi_mode": s("Eco+"),
    "sensor.demo_batt": s("-1100", "W"),
    "sensor.demo_soc": s("62", "%"),
    "sensor.demo_grid": s("0", "W"),
  },
};
