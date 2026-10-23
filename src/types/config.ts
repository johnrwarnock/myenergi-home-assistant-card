/**
 * Card configuration. All power entities are read in W (kW is converted
 * automatically from unit_of_measurement).
 *
 * Sign conventions:
 *  - battery.power_entity: positive = discharging, negative = charging
 *    (set `invert: true` if your sensor is the other way round)
 *  - grid.power_entity: positive = importing (or generator running)
 */
export interface NodeConfig {
  power_entity?: string;
  name?: string;
  icon?: string;
}

export interface CardConfig {
  type: string;
  /** Optional header text. Omit for no header. */
  title?: string;

  hub?: {
    /** Entity giving self-consumption / solar share %, otherwise calculated. */
    self_consumption_entity?: string;
  };

  home?: NodeConfig;

  solar?: NodeConfig & {
    daily_entity?: string;
  };

  battery?: NodeConfig & {
    soc_entity?: string;
    invert?: boolean;
  };

  /** Grid connection, or generator for off-grid sites. */
  grid?: NodeConfig & {
    /** Hide the node (keeping its slot) while it's idle. Handy for generators. */
    hide_when_idle?: boolean;
  };

  zappi?: NodeConfig & {
    /** e.g. select.zappi_charge_mode — shown under the label */
    mode_entity?: string;
  };

  eddi?: NodeConfig & {
    /** e.g. sensor.eddi_status — shown under the label */
    status_entity?: string;
  };

  display?: {
    flow_animation_speed?: "auto" | "fast" | "slow" | "off";
    /** Below this many watts a flow is treated as idle. Default 30. */
    idle_threshold_w?: number;
  };
}
