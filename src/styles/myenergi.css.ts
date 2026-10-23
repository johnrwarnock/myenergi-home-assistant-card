import { css } from "lit";

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    background: var(--myenergi-flow-bg, #1a1a1a);
    padding: 12px 8px 8px;
    color: #ffffff;
    font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, Roboto, sans-serif));
    user-select: none;
  }

  .card-header {
    font-size: 16px;
    font-weight: 600;
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
    --mdc-icon-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
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
