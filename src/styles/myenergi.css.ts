import { css } from "lit";
import { NODE_ICON_SIZE } from "../layout/theme.js";

export const cardStyles = css`
  @font-face {
    font-family: "Overpass";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/overpass/v19/qFda35WCmI96Ajtm83upeyoaX6QPnlo6_PLrOQ.ttf") format("truetype");
  }

  @font-face {
    font-family: "Overpass";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/overpass/v19/qFda35WCmI96Ajtm83upeyoaX6QPnlo6_PPrOQ.ttf") format("truetype");
  }

  :host {
    display: block;
  }

  ha-card {
    background: var(--myenergi-flow-bg, #1a1a1a);
    padding: 12px 8px 8px;
    color: #ffffff;
    font-family: "Overpass", sans-serif;
    font-weight: 100;
    user-select: none;
  }

  .card-header {
    font-size: 18.4px;
    font-weight: 100;
    padding: 0 8px 4px;
    color: var(--primary-text-color, #fff);
  }

  .card-svg {
    display: block;
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
    height: auto;
    overflow: visible;
  }

  .node-icon {
    --mdc-icon-size: ${NODE_ICON_SIZE}px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${NODE_ICON_SIZE}px;
    height: ${NODE_ICON_SIZE}px;
    color: #ffffff;
  }

  .node-icon.idle {
    color: #8a8a8a;
  }

  @keyframes chev {
    from { stroke-dashoffset: 0; }
    to   { stroke-dashoffset: -36; }
  }

  @media (prefers-reduced-motion: reduce) {
    line { animation: none !important; }
  }
`;
