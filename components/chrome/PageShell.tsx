import type { ReactNode } from "react";
import { BodyClass } from "@/components/chrome/BodyClass";
import { PageEffects } from "@/components/PageEffects";

type Props = {
  bodyClass: string;
  effects: string[];
  pageKey: string;
  children: ReactNode;
};

/**
 * Header and footer live in the root layout (persistent across
 * navigations) - not here. Duplicating them per-page meant every
 * navigation unmounted and remounted the whole tree unnecessarily (see
 * B-2/B-3 root-cause note in styles/oto.css for the actual scroll bug fix).
 */
export function PageShell({ bodyClass, effects, pageKey, children }: Props) {
  return (
    <>
      <BodyClass className={bodyClass} />
      <a className="skip" href="#main">
        Skip to content
      </a>
      {children}
      <PageEffects effects={effects} pageKey={pageKey} />
    </>
  );
}
