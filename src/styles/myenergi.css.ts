import { css } from "lit";

export const cardStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,400;0,700;0,800;1,800&display=swap');

  :host {
    display: block;
    font-family: 'Overpass', sans-serif;
  }

  .card-root {
    background: #1a1a1a;
    border-radius: 16px;
    padding: 16px;
    color: #ffffff;
    font-family: 'Overpass', sans-serif;
    user-select: none;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 0 2px;
  }

  .card-title {
    font-size: 13px;
    font-weight: 800;
    font-style: italic;
    letter-spacing: 0.4px;
    text-transform: lowercase;
    color: #ffffff;
  }

  .hamburger {
    font-size: 18px;
    color: #cecdcd;
    cursor: pointer;
    line-height: 1;
  }

  .card-svg {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 4px;
    gap: 6px;
    opacity: 0.7;
  }

  .footer-text {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #40ff7a;
    text-transform: lowercase;
  }

  /* node labels rendered as foreignObject or SVG text */
  .node-power {
    font-family: 'Overpass', sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 13px;
    fill: currentColor;
  }

  .node-label {
    font-family: 'Overpass', sans-serif;
    font-weight: 700;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    fill: #cecdcd;
  }

  .self-pct {
    font-family: 'Overpass', sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 13px;
    fill: #84ff00;
  }

  @keyframes chev {
    from { stroke-dashoffset: 0; }
    to   { stroke-dashoffset: -36; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }
`;
