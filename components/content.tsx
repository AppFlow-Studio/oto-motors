import Link from 'next/link'
import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 md:px-8 ${className}`}>{children}</div>
}

export function ProseSection({
  id,
  heading,
  children,
}: {
  id?: string
  heading?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="border-t border-foreground/30 py-10 first:border-t-0">
      {heading ? (
        <h2 className="font-display text-2xl leading-tight md:text-3xl">{heading}</h2>
      ) : null}
      <div className="mt-4 max-w-2xl space-y-4 text-[0.9375rem] leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  )
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">{children}</p>
  )
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 border border-foreground p-5 font-data text-sm leading-relaxed text-muted-foreground">
      {children}
    </div>
  )
}

export function Principal() {
  return (
    <div className="border border-foreground p-6 md:p-8">
      <p className="font-display text-2xl leading-tight md:text-3xl">
        Yassin A. Wahman <span className="font-data text-sm align-middle text-muted-foreground">— Founder</span>
      </p>
      <div className="mt-4 max-w-2xl space-y-4 text-[0.9375rem] leading-relaxed text-foreground/90">
        <p>
          Ten years in retail luxury automotive before starting OTO Motors. Spent most of that time
          on the dealer side, which is where the relationships came from and where the impatience
          with how the process usually works came from too.
        </p>
        <p>Reachable directly. There is no sales team to get past.</p>
      </div>
    </div>
  )
}

const PATHS = [
  {
    name: 'Lease',
    body: 'Lower monthly outlay, no exposure to what the car is worth in three years, and the option to walk away or buy it at the end. Most of our clients lease.',
    href: '/leasing/',
  },
  {
    name: 'Finance',
    body: 'You own it. Makes sense if you plan to keep the car past the point where a lease ends, or if the car is likely to hold value.',
    href: '/financing/',
  },
  {
    name: 'Cash',
    body: 'Fastest close, no lender, no approval. Still worth running the numbers — cash is not automatically the cheapest route once you account for what that money would otherwise do.',
    href: '/cash-purchase/',
  },
]

export function AcquisitionPaths({ heading = 'Three ways to get the car' }: { heading?: string }) {
  return (
    <section aria-labelledby="paths-heading" className="border-t border-foreground py-16">
      <Container>
        <h2 id="paths-heading" className="font-display text-3xl md:text-4xl">
          {heading}
        </h2>
        <div className="mt-8 grid border-t border-foreground md:grid-cols-3">
          {PATHS.map((p, i) => (
            <Link
              key={p.name}
              href={p.href}
              className={`group border-b border-foreground p-6 transition-colors hover:bg-foreground hover:text-background md:border-b-0 ${
                i !== 0 ? 'md:border-l md:border-foreground' : ''
              }`}
            >
              <p className="font-data text-xs uppercase tracking-wider text-muted-foreground group-hover:text-background/70">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="mt-2 font-display text-2xl">{p.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90 group-hover:text-background">
                {p.body}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

export type MathRow = {
  label: string
  value: string
  rule?: boolean // hairline rule above this row (the total)
  strong?: boolean
}

export function MathTable({ rows }: { rows: MathRow[] }) {
  return (
    <div className="my-8 max-w-2xl border border-foreground p-5 font-data text-sm">
      <dl>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`flex items-baseline justify-between gap-4 py-1.5 ${
              r.rule ? 'mt-2 border-t border-foreground pt-3' : ''
            } ${r.label === '' ? 'h-3 py-0' : ''}`}
          >
            <dt className={r.strong ? 'font-semibold uppercase tracking-wide' : 'text-muted-foreground'}>
              {r.label}
            </dt>
            <dd className={`tnum text-right ${r.strong ? 'font-semibold' : ''}`}>{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
