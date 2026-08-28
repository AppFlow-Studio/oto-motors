import { Reveal } from '@/components/reveal'

const DELIVERIES = [
  {
    days: 9,
    car: 'Porsche 911 GT3',
    spec: 'PTS Oak Green · 6MT',
    city: 'Palm Beach, FL',
    tag: 'Cash',
  },
  {
    days: 6,
    car: 'Range Rover Autobiography',
    spec: 'Sunset Gold · 23″',
    city: 'Tribeca, NY',
    tag: 'Lease',
  },
  {
    days: 14,
    car: 'Lamborghini Urus Performante',
    spec: 'Verde Mantis',
    city: 'Fort Lauderdale, FL',
    tag: 'Finance',
  },
  {
    days: 7,
    car: 'Mercedes-AMG G 63',
    spec: 'Obsidian Black · Business titled',
    city: 'Greenwich, CT',
    tag: 'Lease',
  },
  {
    days: 21,
    car: 'Rolls-Royce Cullinan',
    spec: 'Starlight headliner · Allocation sourced',
    city: 'Miami Beach, FL',
    tag: 'Cash',
  },
]

export function RecentDeliveries() {
  return (
    <section id="deliveries" className="border-b border-hairline bg-panel">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-champagne">Manifest — recent deliveries</p>
            <h2 className="font-display mt-6 max-w-3xl text-[clamp(2rem,5.2vw,4.5rem)] leading-[1.02] text-balance">
              From first call to keys in hand.
            </h2>
          </div>
          <p className="eyebrow text-muted-foreground md:pb-3">Days · Vehicle · Delivered · Terms</p>
        </Reveal>

        <div className="mt-14 border-t border-hairline md:mt-20">
          {DELIVERIES.map((row, i) => (
            <Reveal
              key={row.car}
              delay={i * 80}
              className="group relative border-b border-hairline"
            >
              <span
                className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-champagne transition-transform duration-500 group-hover:scale-y-100"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 items-baseline gap-y-4 py-8 transition-[padding] duration-500 group-hover:pl-6 md:grid-cols-12 md:gap-x-8 md:py-10">
                <div className="flex items-baseline gap-3 md:col-span-3">
                  <span className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.85] text-champagne">
                    {row.days}
                  </span>
                  <span className="eyebrow text-muted-foreground">Days</span>
                </div>

                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl leading-tight md:text-3xl">{row.car}</h3>
                  <p className="eyebrow mt-3 text-muted-foreground">{row.spec}</p>
                </div>

                <div className="md:col-span-2">
                  <p className="eyebrow text-muted-foreground">{row.city}</p>
                </div>

                <div className="md:col-span-2 md:text-right">
                  <span className="eyebrow inline-block border border-hairline px-3 py-2 text-foreground/80 transition-colors duration-500 group-hover:border-champagne group-hover:bg-oxblood group-hover:text-foreground">
                    {row.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="eyebrow mt-8 text-muted-foreground">
          Sample placements shown — full gallery at launch.
        </p>
      </div>
    </section>
  )
}
