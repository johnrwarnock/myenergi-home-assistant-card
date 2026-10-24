export type NodeId = "home" | "grid" | "solar" | "battery" | "zappi" | "eddi";

export interface NodeDef {
  id: NodeId;
  label: string;
  icon: string;
  color: string;
  powerW: number;
  subLabel?: string;
  socPct?: number | null;
  houseMood?: "smile" | "neutral" | "frown";
  active: boolean;
  complete?: boolean;
  hidden?: boolean;
}

export interface SpokeDef {
  node: NodeId;
  powerW: number;
  /** 'in' = node → hub, 'out' = hub → node */
  direction: "in" | "out" | "idle";
  chevronColor: string;
}

export interface CardState {
  nodes: NodeDef[];
  spokes: SpokeDef[];
  selfConsumptionPct: number | null;
}
