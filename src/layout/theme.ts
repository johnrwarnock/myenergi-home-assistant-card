export const COLORS = {
  card: "#303030",
  stroke: "#3a3a3a",
  grid: "#FF4400",
  solar: "#55FF00",
  zappi: "#0086FF",
  eddi: "#00E6C0",
  home: "#F91CDF",
  battery: "#FF9234",
  leafGreen: "#84ff00",
  text: "#ffffff",
  muted: "#cecdcd",
  dim: "#6b6b6b",
  spokeTrack: "rgba(255,255,255,0.12)",
} as const;

export const HUB_R = 40;
export const NODE_R = 34;
export const ORBIT_R = 140;

/** Card SVG viewBox dimensions */
export const SVG_W = 380;
export const SVG_H = 440;
export const CENTRE_X = SVG_W / 2;
export const CENTRE_Y = 218;

/** Fixed clockwise slot order from 12 o'clock — sources left/top, loads right. */
export const SLOT_ORDER = ["solar", "home", "eddi", "zappi", "battery", "grid"] as const;
