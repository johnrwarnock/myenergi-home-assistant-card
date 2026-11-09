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
  /** zappi only: no car plugged in */
  unplugged?: boolean;
  /** Entity whose more-info dialog opens when the node is tapped */
  tapEntity?: string;
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
