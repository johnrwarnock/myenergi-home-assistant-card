import { svg } from "lit";
import type { NodePosition } from "./radial-layout.js";
import type { SpokeDef } from "../types/flow.js";
import { CENTRE_X, CENTRE_Y, CENTRE_R, NODE_R, COLORS } from "./theme.js";

/** Duration in seconds for chevron animation at a given |powerW| */
function chevDuration(powerW: number, speed: string): number {
  if (speed === "off") return 0;
  if (speed === "fast") return 0.8;
  if (speed === "slow") return 3;
  const abs = Math.abs(powerW);
  if (abs <= 0) return 0;
  return Math.max(0.8, Math.min(3, 3000 / abs));
}

export function renderSpokes(
  spokes: SpokeDef[],
  positions: NodePosition[],
  animSpeed = "auto"
) {
  const posMap = new Map(positions.map((p) => [p.id, p]));

  return spokes.map((spoke) => {
    const from =
      spoke.from === "home"
        ? { cx: CENTRE_X, cy: CENTRE_Y }
        : posMap.get(spoke.from);
    const to =
      spoke.to === "home"
        ? { cx: CENTRE_X, cy: CENTRE_Y }
        : posMap.get(spoke.to);

    if (!from || !to) return svg``;

    const dx = to.cx - from.cx;
    const dy = to.cy - from.cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist;
    const uy = dy / dist;

    const fromR = spoke.from === "home" ? CENTRE_R : NODE_R;
    const toR = spoke.to === "home" ? CENTRE_R : NODE_R;

    const x1 = from.cx + ux * fromR;
    const y1 = from.cy + uy * fromR;
    const x2 = to.cx - ux * toR;
    const y2 = to.cy - uy * toR;

    const dur = chevDuration(spoke.powerW, animSpeed);
    const isReverse = spoke.direction === "reverse";
    const isIdle = spoke.direction === "idle" || dur === 0;

    return svg`
      <!-- spoke track -->
      <line
        x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
        stroke="${COLORS.spokeTrack}" stroke-width="3"
      />
      ${
        !isIdle
          ? svg`
        <!-- animated chevron -->
        <line
          x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
          stroke="${spoke.chevronColor}"
          stroke-width="3"
          stroke-dasharray="6 30"
          style="animation: chev ${dur}s linear infinite ${isReverse ? "reverse" : "normal"};"
        />`
          : ""
      }
    `;
  });
}
