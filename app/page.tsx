import { DealProvider } from '@/components/deal-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MarqueRail } from '@/components/marque-rail'
import { ThreePaths } from '@/components/three-paths'
import { RecentDeliveries } from '@/components/recent-deliveries'
import { HowItWorks } from '@/components/how-it-works'
import { TwoStateGarage } from '@/components/two-state-garage'
import { Locations } from '@/components/locations'
import { ClosingCta } from '@/components/closing-cta'
import { SiteFooter } from '@/components/site-footer'
import { MobileBar } from '@/components/mobile-bar'

export default function Page() {
  return (
    <DealProvider>
      <SiteHeader />
      <main>
        <Hero />
        <MarqueRail />
        <ThreePaths />
        <RecentDeliveries />
        <HowItWorks />
        <TwoStateGarage />
        <Locations />
        <ClosingCta />
      </main>
      <SiteFooter />
      <MobileBar />
    </DealProvider>
  )
}
