import { svg } from "lit";
import type { NodeId } from "../types/flow.js";
import { NODE_ICON_SIZE } from "../layout/theme.js";

const icon = (paths: unknown) =>
  svg`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75"
    stroke-linecap="round" stroke-linejoin="round" width="${NODE_ICON_SIZE}" height="${NODE_ICON_SIZE}">${paths}</svg>`;

export const homeIcon = (mood: "smile" | "neutral" | "frown" = "neutral") =>
  icon(svg`
    <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
    ${
      mood === "smile"
        ? svg`<circle cx="9" cy="11" r=".55" fill="currentColor"/><circle cx="15" cy="11" r=".55" fill="currentColor"/><path d="M9 15q3 3 6 0"/>`
        : mood === "frown"
          ? svg`<circle cx="9" cy="11" r=".55" fill="currentColor"/><circle cx="15" cy="11" r=".55" fill="currentColor"/><path d="M9 16q3-3 6 0"/>`
          : svg`<path d="M9 11v.1m6-.1v.1M9 15h6"/>`
    }
  `);

export const gridIcon = () =>
  icon(svg`
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3"/>
  `);

export const solarIcon = () =>
  icon(svg`
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>
  `);

export const libbiIcon = (socPct: number | null = null) => {
  const filledBars = socPct === null ? 0 : Math.floor(Math.max(0, Math.min(100, socPct)) / 10);
  return icon(svg`
    <g transform="rotate(90 12 12)">
      <rect x="6" y="4" width="12" height="18" rx="2"/>
      <path d="M10 2h4"/>
      ${Array.from({ length: 10 }, (_, i) =>
        svg`<path d="M8 ${6.5 + (9 - i) * 1.45}h8"
          stroke-width="0.4"
          opacity="${i < filledBars ? 1 : 0.25}"/>`
      )}
    </g>
  `);
};

export const zappiIcon = () =>
  icon(svg`
    <path d="M2 12V8a4 4 0 0 1 4-4h5"/>
    <path d="M11 2h3a2 2 0 0 1 2 2v3h-5zM16 3h3m-3 3h3"/>
    <path d="M3 17v-4l2-5a2 2 0 0 1 2-1h7l4 5 3 1v4H3z"/>
    <circle cx="7" cy="17" r="1.5"/>
    <circle cx="17" cy="17" r="1.5"/>
  `);

export const eddiIcon = () =>
  icon(svg`
    <path d="M21 22V6a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v3"/>
    <path d="M3 11q1-3 4-3h5q3 0 4 3l1 2H2z"/>
    <path d="M4 16v2m4-2v2m4-2v2m4-2v2"/>
  `);

export const leafIcon = () =>
  svg`<svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#84ff00" d="M2 1c8 0 15 3 18 9 3 6-1 12-7 13C7 24 2 18 2 11 2 7 2 3 2 1z"/>
    <path d="M4 3 20 21M8 8l-4 1m8 3-5 1m9-1 2-4m-5 9 3-1"
      fill="none" stroke="#1a1a1a" stroke-width="0.65" stroke-linecap="round"/>
  </svg>`;

export const M2_DEFAULT_ICONS: Record<NodeId, string> = {
  home: "mdi:home",
  grid: "mdi:transmission-tower",
  solar: "mdi:solar-panel",
  battery: "mdi:home-battery",
  zappi: "mdi:ev-station",
  eddi: "mdi:water-boiler",
};

export const m2NodeIcon = (
  id: NodeId,
  socPct: number | null = null,
  houseMood: "smile" | "neutral" | "frown" = "neutral"
) => {
  switch (id) {
    case "home":
      return homeIcon(houseMood);
    case "grid":
      return gridIcon();
    case "solar":
      return solarIcon();
    case "battery":
      return libbiIcon(socPct);
    case "zappi":
      return zappiIcon();
    case "eddi":
      return eddiIcon();
  }
};
