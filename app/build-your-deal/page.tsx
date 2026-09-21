import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { BuildDealView } from "@/components/views/BuildDealView";

export const metadata: Metadata = {
  title: "Build your deal",
};

export default function BuildYourDealPage() {
  return (
    <PageShell
      pageKey="build-your-deal"
      bodyClass="editorial"
      effects={["editorial", "visual-motion", "materials"]}
    >
      <BuildDealView />
    </PageShell>
  );
}
