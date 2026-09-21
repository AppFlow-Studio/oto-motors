import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { HomeView } from "@/components/views/HomeView";

export const metadata: Metadata = {
  title: "Oto | At your leisure.",
};

export default function HomePage() {
  return (
    <PageShell
      pageKey="home"
      bodyClass="editorial homepage"
      effects={[
        "app",
        "journey",
        "editorial",
        "home-motion",
        "visual-motion",
        "materials",
      ]}
    >
      <HomeView />
    </PageShell>
  );
}
