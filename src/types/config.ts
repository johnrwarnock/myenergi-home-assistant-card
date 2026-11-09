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
  /**
   * battery / eddi / zappi: entity opened (more-info + history) when the node
   * is tapped. Defaults to power_entity.
   */
  tap_entity?: string;
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
    /**
     * Standard HA action run when the centre is tapped (navigate, more-info,
     * url, perform-action, fire-dom-event…). Defaults to the Energy dashboard.
     */
    tap_action?: Record<string, unknown>;
  };

  home?: NodeConfig;

  solar?: NodeConfig & {
    daily_entity?: string;
  };

  battery?: NodeConfig & {
    soc_entity?: string;
    invert?: boolean;
    /** Net flow below this many watts shows the battery as idle. Default 100. */
    idle_threshold_w?: number;
  };

  /** Grid connection, or generator for off-grid sites. */
  grid?: NodeConfig & {
    /** Hide the node (keeping its slot) while it's idle. Handy for generators. */
    hide_when_idle?: boolean;
  };

  zappi?: NodeConfig & {
    /** e.g. select.zappi_charge_mode — shown under the label */
    mode_entity?: string;
    /** e.g. sensor.zappi_status — used to show a check when fully charged */
    status_entity?: string;
    /** e.g. sensor.zappi_plug_status — shows a crossed-out plug when no car is connected */
    plug_entity?: string;
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
