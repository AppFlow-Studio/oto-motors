import { Reveal } from '@/components/reveal'

const PATHS = [
  {
    num: '01',
    title: 'Lease',
    tagline: 'Drive the newest, own the exit',
    body: 'Structured for people who change cars often. We shop the captive lenders and the independents against each other, control the money factor and residual, and keep the mileage honest to how you actually drive. You get a clean exit date and a car that is never out of warranty.',
    specs: ['24 · 27 · 36 · 39 months', 'Multiple-security-deposit programs', 'Pull-ahead handled'],
  },
  {
    num: '02',
    title: 'Finance',
    tagline: 'Own it on your terms',
    body: 'Bank, credit union, or manufacturer program — placed where your profile prices best. For 2026, business purchase of heavy luxury SUVs continues to receive favorable depreciation treatment, so we structure titling and timing alongside your CPA rather than after the fact.',
    specs: ['Business & LLC titling', '2026 heavy-SUV tax treatment', 'Simple-interest, no prepay penalty'],
  },
  {
    num: '03',
    title: 'Cash',
    tagline: 'Quiet, fast, and done',
    body: 'For collectors and allocation-grade cars where speed and discretion decide the deal. We verify the car, negotiate out of the market, wire, and move it — often before the listing is public. No dealer floor, no name attached to the inquiry.',
    specs: ['Allocation sourcing', 'PPI & provenance verified', 'Enclosed transport included'],
  },
]

export function ThreePaths() {
  return (
    <section id="paths" className="border-b border-hairline">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow text-champagne">Three paths</p>
          <h2 className="font-display mt-6 max-w-4xl text-[clamp(2rem,5.2vw,4.5rem)] leading-[1.02] text-balance">
            Three ways in. One point of contact.
          </h2>
        </Reveal>

        <div className="mt-16 grid border-t border-hairline md:mt-24 md:grid-cols-3">
          {PATHS.map((path, i) => (
            <Reveal
              key={path.num}
              delay={i * 110}
              className={`group border-b border-hairline py-10 md:border-b-0 md:py-0 ${
                i > 0 ? 'md:border-l md:border-hairline' : ''
              }`}
            >
              <div className={`h-full md:py-12 ${i === 0 ? 'md:pr-8' : 'md:px-8'}`}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-champagne">
                    {path.num}
                  </span>
                  <h3 className="font-display text-4xl leading-none md:text-5xl">{path.title}</h3>
                </div>
                <p className="mt-6 text-lg leading-snug text-foreground/90 text-pretty">
                  {path.tagline}
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                  {path.body}
                </p>
                <ul className="mt-8 border-t border-hairline">
                  {path.specs.map((spec) => (
                    <li
                      key={spec}
                      className="eyebrow flex items-center gap-3 border-b border-hairline py-3 text-muted-foreground"
                    >
                      <span className="h-px w-3 bg-champagne" aria-hidden="true" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
