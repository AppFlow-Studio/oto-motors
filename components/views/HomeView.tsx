import { HomeApproach } from "@/components/home/HomeApproach";
import { HomeBrandStrip } from "@/components/home/HomeBrandStrip";
import { HomeCars } from "@/components/home/HomeCars";
import { HomeClosing } from "@/components/home/HomeClosing";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeInquiry } from "@/components/home/HomeInquiry";
import { HomeLocations } from "@/components/home/HomeLocations";
import { HomeRecord } from "@/components/home/HomeRecord";

/** Homepage composer — sections keep original class names for motion hooks. */
export function HomeView() {
  return (
    <>
      <main id="main">
        <HomeHero />
        <HomeBrandStrip />
        <HomeApproach />
        <HomeCars />
        <HomeRecord />
        <HomeInquiry />
        <HomeLocations />
      </main>
      <HomeClosing />
    </>
  );
}
