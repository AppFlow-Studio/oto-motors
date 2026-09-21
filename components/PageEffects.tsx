"use client";

import { useLayoutEffect } from "react";
import {
  initApp,
  initEditorial,
  initHomeMotion,
  initJourney,
  initMarques,
  initMaterials,
  initNarrative,
  initVisualMotion,
} from "@/lib/effects";

type Disposer = (() => void) | void;

const RUNNERS: Record<string, () => Disposer> = {
  app: initApp,
  editorial: initEditorial,
  "home-motion": initHomeMotion,
  journey: initJourney,
  narrative: initNarrative,
  materials: initMaterials,
  marques: initMarques,
  "visual-motion": initVisualMotion,
};

type Props = {
  effects: string[];
  pageKey: string;
};

export function PageEffects({ effects, pageKey }: Props) {
  const list = effects.join(",");

  useLayoutEffect(() => {
    const disposers: Array<() => void> = [];

    for (const name of list.split(",").filter(Boolean)) {
      const run = RUNNERS[name];
      if (!run) continue;
      try {
        const dispose = run();
        if (typeof dispose === "function") disposers.push(dispose);
      } catch (err) {
        console.error(`[oto] effect failed: ${name}`, err);
      }
    }

    return () => {
      for (const dispose of disposers.reverse()) {
        try {
          dispose();
        } catch (err) {
          console.error("[oto] effect dispose failed", err);
        }
      }
    };
  }, [pageKey, list]);

  return null;
}
