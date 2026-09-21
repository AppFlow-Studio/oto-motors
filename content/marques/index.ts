import type { MarquePage } from "./types";
import { aston_martin } from "./aston-martin";
import { bentley } from "./bentley";
import { bugatti } from "./bugatti";
import { ferrari } from "./ferrari";
import { lamborghini } from "./lamborghini";
import { maserati } from "./maserati";
import { mclaren } from "./mclaren";
import { porsche } from "./porsche";
import { range_rover } from "./range-rover";
import { rolls_royce } from "./rolls-royce";

export type { MarquePage } from "./types";

export const MARQUES: Record<string, MarquePage> = {
  "aston-martin": aston_martin,
  "bentley": bentley,
  "bugatti": bugatti,
  "ferrari": ferrari,
  "lamborghini": lamborghini,
  "maserati": maserati,
  "mclaren": mclaren,
  "porsche": porsche,
  "range-rover": range_rover,
  "rolls-royce": rolls_royce,
};

export const MARQUE_SLUGS = Object.keys(MARQUES) as (keyof typeof MARQUES)[];

export function getMarque(slug: string): MarquePage | null {
  return MARQUES[slug] ?? null;
}
