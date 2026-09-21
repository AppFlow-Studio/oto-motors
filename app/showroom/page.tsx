import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { ShowroomView } from "@/components/views/ShowroomView";

export const metadata: Metadata = {
  title: "Showroom",
};

export default function ShowroomPage() {
  return (
    <PageShell
      pageKey="showroom"
      bodyClass="catalog-page editorial"
      effects={["editorial", "visual-motion", "materials"]}
    >
      <ShowroomView />
    </PageShell>
  );
}
