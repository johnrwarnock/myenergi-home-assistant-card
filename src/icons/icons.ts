import { svg } from "lit";
import type { NodeId } from "../types/flow.js";

const icon = (paths: unknown) =>
  svg`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round" width="22" height="22">${paths}</svg>`;

export const homeIcon = () =>
  icon(svg`
    <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
    <path d="M9 22V12h6v10"/>
  `);

export const gridIcon = () =>
  icon(svg`
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3"/>
  `);

export const solarIcon = () =>
  icon(svg`
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>
  `);

export const libbiIcon = () =>
  icon(svg`
    <rect x="6" y="4" width="12" height="18" rx="2"/>
    <path d="M10 2h4M9 9h6M9 13h6M9 17h4"/>
  `);

export const zappiIcon = () =>
  icon(svg`
    <path d="m4 14 1.5-5a2 2 0 0 1 1.9-1.4h8.2a2 2 0 0 1 1.9 1.4L19 14h1a1 1 0 0 1 1 1v3h-3m-12 0H3v-3a1 1 0 0 1 1-1h15"/>
    <path d="M7 18h10"/>
    <circle cx="7" cy="17" r="1.5"/>
    <circle cx="17" cy="17" r="1.5"/>
  `);

export const eddiIcon = () =>
  icon(svg`
    <path d="M4 3v5h7a5 5 0 0 1 5 5"/>
    <path d="M14 13a5 5 0 0 1 7-4l-3 5a5 5 0 0 1-4-1z"/>
    <path d="m15 16-.5 1m3-.5-.5 1m3-.5-.5 1"/>
  `);

export const leafIcon = () =>
  svg`<svg viewBox="0 0 24 24" width="20" height="20" fill="#84ff00">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 3-11 4l-1-3.5C12 2 17 2 17 8z"/>
  </svg>`;

export const M2_DEFAULT_ICONS: Record<NodeId, string> = {
  home: "mdi:home",
  grid: "mdi:transmission-tower",
  solar: "mdi:solar-panel",
  battery: "mdi:home-battery",
  zappi: "mdi:ev-station",
  eddi: "mdi:water-boiler",
};

export const m2NodeIcon = (id: NodeId) => {
  switch (id) {
    case "home":
      return homeIcon();
    case "grid":
      return gridIcon();
    case "solar":
      return solarIcon();
    case "battery":
      return libbiIcon();
    case "zappi":
      return zappiIcon();
    case "eddi":
      return eddiIcon();
  }
};
