import type { Metadata } from 'next'
import { BuildYourDeal } from '@/components/build-your-deal'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Container } from '@/components/content'

export const metadata: Metadata = {
  title: 'Build Your Deal — Real Numbers for Your Car',
  description:
    'Tell us the car. We come back with real numbers from real dealers — lease, finance and cash side by side — so you can see what each one actually costs before you commit.',
  alternates: { canonical: '/build-your-deal/' },
}

export default function BuildYourDealPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Build Your Deal', href: '/build-your-deal/' }]} />
      <Container className="pt-14">
        <p className="font-data text-xs uppercase tracking-wider text-muted-foreground">
          A lead form, not a checkout
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-tight md:text-6xl">
          Build your deal
        </h1>
      </Container>
      <BuildYourDeal heading="Tell us the car" />
    </>
  )
}
