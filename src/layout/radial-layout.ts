import { ORBIT_R, CENTRE_X, CENTRE_Y } from "./theme.js";
import type { NodeId } from "../types/flow.js";

export interface NodePosition {
  id: NodeId;
  cx: number;
  cy: number;
  angleDeg: number;
}

/**
 * Places the supplied nodes evenly on a circle, first at 12 o'clock,
 * clockwise. Callers should omit hidden nodes that should not reserve a slot.
 */
export function radialPositions(
  ids: readonly NodeId[],
  orbitR = ORBIT_R,
  cx = CENTRE_X,
  cy = CENTRE_Y
): NodePosition[] {
  const n = ids.length;
  return ids.map((id, i) => {
    const angleDeg = (360 / n) * i;
    const angleRad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      id,
      cx: cx + orbitR * Math.cos(angleRad),
      cy: cy + orbitR * Math.sin(angleRad),
      angleDeg,
    };
  });
}
