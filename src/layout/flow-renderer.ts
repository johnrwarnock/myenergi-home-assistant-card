import { svg } from "lit";
import type { NodePosition } from "./radial-layout.js";
import type { SpokeDef } from "../types/flow.js";
import { CENTRE_X, CENTRE_Y, HUB_R, NODE_R, COLORS } from "./theme.js";

/** Seconds per chevron cycle — faster for bigger flows. */
function chevDuration(powerW: number, speed: string): number {
  if (speed === "off") return 0;
  if (speed === "fast") return 0.8;
  if (speed === "slow") return 3;
  const abs = Math.abs(powerW);
  if (abs <= 0) return 0;
  return Math.max(0.6, Math.min(3, 3000 / abs));
}

export function renderSpokes(
  spokes: SpokeDef[],
  positions: NodePosition[],
  animSpeed = "auto"
) {
  const posMap = new Map(positions.map((p) => [p.id, p]));

  return spokes.map((spoke) => {
    const node = posMap.get(spoke.node);
    if (!node) return svg``;

    const dx = node.cx - CENTRE_X;
    const dy = node.cy - CENTRE_Y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist;
    const uy = dy / dist;

    // hub edge → node edge
    const hx = CENTRE_X + ux * HUB_R;
    const hy = CENTRE_Y + uy * HUB_R;
    const nx = node.cx - ux * NODE_R;
    const ny = node.cy - uy * NODE_R;

    // Draw the animated line in the direction of flow
    const [x1, y1, x2, y2] =
      spoke.direction === "in" ? [nx, ny, hx, hy] : [hx, hy, nx, ny];

    const dur = chevDuration(spoke.powerW, animSpeed);
    const isActive = spoke.direction !== "idle" && dur > 0;

    return svg`
      <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
        stroke="${COLORS.spokeTrack}" stroke-width="3" stroke-linecap="round"/>
      ${
        isActive
          ? svg`
              <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
                stroke="${spoke.chevronColor}" stroke-width="4" stroke-linecap="round" opacity="0.45"/>
              ${[0, 1, 2].map(
                (index) => svg`
                  <g>
                    <animateMotion
                      dur="${dur}s"
                      begin="${(-dur * index) / 3}s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="M ${x1} ${y1} L ${x2} ${y2}"/>
                    <path d="M -5 -5 L 0 0 L -5 5"
                      fill="none"
                      stroke="${spoke.chevronColor}"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
                  </g>
                `
              )}
            `
          : ""
      }
    `;
  });
}
