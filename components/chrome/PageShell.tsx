import type { ReactNode } from "react";
import { BodyClass } from "@/components/chrome/BodyClass";
import { SiteFooter, SiteHeader } from "@/components/chrome/SiteChrome";
import { PageEffects } from "@/components/PageEffects";

type Props = {
  bodyClass: string;
  effects: string[];
  pageKey: string;
  children: ReactNode;
};

export function PageShell({ bodyClass, effects, pageKey, children }: Props) {
  return (
    <>
      <BodyClass className={bodyClass} />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
      <PageEffects effects={effects} pageKey={pageKey} />
    </>
  );
}
