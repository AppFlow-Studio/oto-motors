import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Container, Lead } from '@/components/content'
import { AutoDealerJsonLd } from '@/components/json-ld'
import { MARQUES } from '@/lib/site'
import { byMarque } from '@/lib/deliveries'

export const metadata: Metadata = {
  title: 'Marques We Place — Luxury & Exotic Brokerage',
  description:
    'The twelve marques we source and structure deals for, and the honest constraint on allocation for each one. Independent brokerage, no held inventory.',
  alternates: { canonical: '/brands/' },
}

export default function BrandsIndex() {
  return (
    <>
      <AutoDealerJsonLd />
      <Container className="py-10 md:py-14">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Brands' }]} />
        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.05] md:text-6xl">
          Marques we place
        </h1>
        <div className="mt-8">
          <Lead>
            Twelve marques. For each one there is a real constraint on getting the car you want — we
            say what it is instead of pretending we have secret access.
          </Lead>
        </div>

        <ul className="mt-12 grid gap-px border border-foreground bg-foreground sm:grid-cols-2 lg:grid-cols-3">
          {MARQUES.map((m) => {
            const count = byMarque(m.slug).length
            return (
              <li key={m.slug} className="bg-background">
                <Link
                  href={`/brands/${m.slug}/`}
                  className="flex h-full flex-col justify-between p-6 transition-colors hover:bg-foreground hover:text-background"
                >
                  <span className="font-display text-2xl">{m.name}</span>
                  <span className="mt-6 font-data text-xs uppercase tracking-wider text-muted-foreground group-hover:text-background/70">
                    {count > 0 ? `${count} on the record` : 'On request'}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}
