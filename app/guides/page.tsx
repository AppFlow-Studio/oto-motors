import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Container, Lead } from '@/components/content'

export const metadata: Metadata = {
  title: 'Guides — How Luxury Car Deals Actually Work',
  description:
    'Plain explanations of how leasing, financing, allocation, out-of-state purchase and Section 179 actually work on luxury and exotic cars. No jargon, no pitch.',
  alternates: { canonical: '/guides/' },
}

const GUIDES = [
  {
    href: '/guides/g-wagon-section-179/',
    title: 'The G-Wagon and Section 179',
    blurb:
      'Why a vehicle rated over 6,000 pounds changes the purchase-versus-lease math, the year-one deduction, and how to get delivery inside the tax year.',
  },
  {
    href: '/leasing/',
    title: 'How leasing actually works',
    blurb:
      'A lease payment is three numbers: cap cost, residual, money factor. We show all three so you can judge the deal instead of trusting a monthly figure.',
  },
  {
    href: '/financing/',
    title: 'When financing beats leasing',
    blurb:
      'Keeping the car past a lease term, cars that hold value, and how lenders treat high-value and exotic vehicles differently from an ordinary auto loan.',
  },
  {
    href: '/out-of-state/',
    title: 'Buying a car out of state',
    blurb:
      'Most cars we place start in another state. Sales tax, title transfer, temporary tags and getting the car home legally — the sequence that goes wrong alone.',
  },
  {
    href: '/llc-titling/',
    title: 'LLC titling, honestly',
    blurb:
      'What titling to an LLC does and does not do, how it changes lending, and the documentation banks actually require at these values.',
  },
]

export default function GuidesIndex() {
  return (
    <Container className="py-10 md:py-14">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides' }]} />
      <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.05] md:text-6xl">
        Guides
      </h1>
      <div className="mt-8">
        <Lead>
          How we source, structure, and deliver the car you actually want — explained as plainly as
          we walk every client through it. Independent brokerage, real numbers, no dealer markup and
          no pitch.
        </Lead>
      </div>

      <ul className="mt-12 border-t border-foreground">
        {GUIDES.map((g) => (
          <li key={g.href} className="border-b border-foreground">
            <Link
              href={g.href}
              className="group flex flex-col gap-2 py-6 transition-colors hover:bg-foreground hover:text-background md:flex-row md:items-baseline md:gap-8"
            >
              <span className="font-display text-2xl md:w-1/3 md:shrink-0">{g.title}</span>
              <span className="text-sm leading-relaxed text-foreground/90 group-hover:text-background md:flex-1">
                {g.blurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
