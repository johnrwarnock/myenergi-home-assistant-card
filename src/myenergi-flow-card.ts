import { LitElement, html, svg } from "lit";
import { property, state } from "lit/decorators.js";
import { cardStyles } from "./styles/myenergi.css.js";
import { radialPositions } from "./layout/radial-layout.js";
import { renderSpokes } from "./layout/flow-renderer.js";
import { COLORS, CENTRE_R, NODE_R, SVG_W, SVG_H, CENTRE_X, CENTRE_Y } from "./layout/theme.js";
import { homeIcon, gridIcon, solarIcon, libbiIcon, zappiIcon, eddiIcon, leafIcon } from "./icons/icons.js";
import { DUMMY_STATE } from "./state/dummy-state.js";
import type { CardConfig } from "./types/config.js";
import type { CardState, NodeId, NodeDef } from "./types/flow.js";
import type { NodePosition } from "./layout/radial-layout.js";

// HA card type registration
declare global {
  interface Window {
    customCards?: Array<{ type: string; name: string; description: string }>;
  }
}

const ICON_MAP: Record<NodeId, () => unknown> = {
  home:  homeIcon,
  grid:  gridIcon,
  solar: solarIcon,
  libbi: libbiIcon,
  zappi: zappiIcon,
  eddi:  eddiIcon,
};

function formatPower(w: number): string {
  const abs = Math.abs(w);
  if (abs >= 1000) return `${(abs / 1000).toFixed(1)}kW`;
  return `${abs}W`;
}

class MyenergiFlowCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass: unknown = null;
  @state() private _config: CardConfig | null = null;
  @state() private _cardState: CardState = DUMMY_STATE;

  setConfig(config: CardConfig) {
    this._config = config;
  }

  static getConfigElement() {
    return document.createElement("myenergi-flow-card-editor");
  }

  static getStubConfig() {
    return {
      type: "custom:myenergi-flow-card",
      title: "Home Energy",
    };
  }

  private _renderNodeCircle(node: NodeDef, pos: NodePosition) {
    const isEddi = node.id === "eddi";
    const iconFn = ICON_MAP[node.id];

    return svg`
      <g transform="translate(${pos.cx}, ${pos.cy})">
        <!-- fill circle -->
        ${
          isEddi
            ? svg`
          <defs>
            <radialGradient id="eddi-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#4B4B4B"/>
              <stop offset="100%" stop-color="#292525"/>
            </radialGradient>
          </defs>
          <circle r="${NODE_R}" fill="url(#eddi-grad)" stroke="${node.color}" stroke-width="2.5"/>`
            : svg`<circle r="${NODE_R}" fill="${COLORS.card}" stroke="${node.color}" stroke-width="2.5"/>`
        }
        <!-- icon centred -->
        <foreignObject
          x="${-11}" y="${-18}"
          width="22" height="22"
          style="color:${COLORS.text};overflow:visible;"
        >
          <div xmlns="http://www.w3.org/1999/xhtml"
               style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;">
            ${iconFn()}
          </div>
        </foreignObject>
        <!-- power value -->
        <text
          y="10"
          text-anchor="middle"
          class="node-power"
          fill="${node.color}"
          font-family="Overpass, sans-serif"
          font-weight="800"
          font-style="italic"
          font-size="11"
        >${formatPower(node.powerW)}</text>
      </g>
    `;
  }

  private _renderOuterLabel(node: NodeDef, pos: NodePosition) {
    const dx = pos.cx - CENTRE_X;
    const dy = pos.cy - CENTRE_Y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const offset = NODE_R + 14;
    const lx = pos.cx + (dx / dist) * offset;
    const ly = pos.cy + (dy / dist) * offset;

    return svg`
      <text
        x="${lx}" y="${ly}"
        text-anchor="middle"
        dominant-baseline="middle"
        class="node-label"
        font-family="Overpass, sans-serif"
        font-weight="700"
        font-size="9"
        letter-spacing="1"
        fill="${COLORS.muted}"
      >${node.label}</text>
    `;
  }

  private _renderCentreNode(selfPct: number) {
    return svg`
      <g transform="translate(${CENTRE_X}, ${CENTRE_Y})">
        <defs>
          <radialGradient id="centre-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3a3a3a"/>
            <stop offset="100%" stop-color="#1f1f1f"/>
          </radialGradient>
        </defs>
        <circle r="${CENTRE_R}" fill="url(#centre-grad)" stroke="${COLORS.stroke}" stroke-width="2"/>
        <!-- leaf icon -->
        <foreignObject x="-10" y="-20" width="20" height="20" style="overflow:visible;">
          <div xmlns="http://www.w3.org/1999/xhtml"
               style="display:flex;align-items:center;justify-content:center;width:20px;height:20px;">
            ${leafIcon()}
          </div>
        </foreignObject>
        <!-- self-consumption % -->
        <text
          y="14"
          text-anchor="middle"
          class="self-pct"
          font-family="Overpass, sans-serif"
          font-weight="800"
          font-style="italic"
          font-size="13"
          fill="${COLORS.leafGreen}"
        >${selfPct}%</text>
      </g>
    `;
  }

  render() {
    const cs = this._cardState;
    const peripheralNodes = cs.nodes.filter((n) => n.id !== "home");
    const peripheralIds = peripheralNodes.map((n) => n.id);
    const positions = radialPositions(peripheralIds);

    const animSpeed =
      (this._config as CardConfig | null)?.display?.flow_animation_speed ?? "auto";

    return html`
      <div class="card-root">
        <div class="card-header">
          <span class="hamburger">☰</span>
          <span class="card-title">${cs.title}</span>
          <span style="font-size:11px;color:${COLORS.muted};font-weight:300;">
            ${cs.selfConsumptionPct}% self
          </span>
        </div>

        <svg
          class="card-svg"
          viewBox="0 0 ${SVG_W} ${SVG_H}"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- spoke tracks + chevrons -->
          ${renderSpokes(cs.spokes, positions, animSpeed)}

          <!-- peripheral node circles -->
          ${peripheralNodes.map((node) => {
            const pos = positions.find((p) => p.id === node.id)!;
            return svg`
              ${this._renderNodeCircle(node, pos)}
              ${this._renderOuterLabel(node, pos)}
            `;
          })}

          <!-- centre node -->
          ${this._renderCentreNode(cs.selfConsumptionPct)}
        </svg>

        <div class="card-footer">
          <span class="footer-text">myenergi</span>
        </div>
      </div>
    `;
  }
}

customElements.define("myenergi-flow-card", MyenergiFlowCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "myenergi-flow-card",
  name: "myenergi Flow Card",
  description: "Radial energy flow card styled after the myenergi app.",
});
