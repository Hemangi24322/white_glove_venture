// import { type LucideIcon } from 'lucide-react';

// export type Entity = {
//   id: string;
//   name: string;
//   type: string;
//   icon: LucideIcon;
//   x?: number;
//   y?: number;
//   fx?: number | null;
//   fy?: number | null;
// };

// export type Link = {
//   source: string | Entity;
//   target: string | Entity;
// };

import { SimulationNodeDatum, SimulationLinkDatum } from 'd3-force';
import { TypeIcon as type,type LucideIcon } from 'lucide-react';

export interface Entity extends SimulationNodeDatum {
  id: string;
  name: string;
  type: string;
  icon: LucideIcon;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface Link extends SimulationLinkDatum<Entity> {
  source: string | Entity;
  target: string | Entity;
}