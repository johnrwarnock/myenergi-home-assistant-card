import type { CardState } from "../types/flow.js";
import { COLORS } from "../layout/theme.js";

/** Static dummy data used during M2 scaffold — replaced by real HA entities in M3.
 *  Node order: home(0°) → libbi(72°) → solar(144°) → zappi(216°) → eddi(288°)
 *  Centre node = leaf/self-consumption only. Home is a peripheral node at 12 o'clock.
 */
export const DUMMY_STATE: CardState = {
  title: "The Poplars",
  selfConsumptionPct: 100,
  nodes: [
    { id: "home",  label: "home",  color: COLORS.home,  powerW: 2500, active: true },
    { id: "libbi", label: "libbi", color: COLORS.libbi,  powerW: 1100, active: true },
    { id: "solar", label: "solar", color: COLORS.solar,  powerW: 4100, active: true },
    { id: "zappi", label: "zappi", color: COLORS.zappi,  powerW: 500,  active: true },
    { id: "eddi",  label: "eddi",  color: COLORS.eddi,   powerW: 0,    active: false },
  ],
  spokes: [
    { from: "solar", to: "home",  powerW: 4100, direction: "forward", chevronColor: COLORS.chevGreen  },
    { from: "home",  to: "libbi", powerW: 1100, direction: "forward", chevronColor: COLORS.chevYellow },
    { from: "home",  to: "zappi", powerW: 500,  direction: "forward", chevronColor: COLORS.chevYellow },
    { from: "home",  to: "eddi",  powerW: 0,    direction: "idle",    chevronColor: COLORS.chevYellow },
  ],
};
