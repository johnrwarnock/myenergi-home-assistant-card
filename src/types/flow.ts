export type NodeId = "home" | "grid" | "solar" | "libbi" | "zappi" | "eddi";

export interface NodeDef {
  id: NodeId;
  label: string;
  color: string;
  powerW: number;
  subLabel?: string;
  active: boolean;
}

export interface SpokeDef {
  from: NodeId;
  to: NodeId;
  powerW: number;
  /** chevron flow direction: 'forward' = from→to, 'reverse' = to→from */
  direction: "forward" | "reverse" | "idle";
  /** colour semantics: green=solar, red=grid-import, yellow=distribution */
  chevronColor: string;
}

export interface CardState {
  nodes: NodeDef[];
  spokes: SpokeDef[];
  selfConsumptionPct: number;
  title: string;
}
