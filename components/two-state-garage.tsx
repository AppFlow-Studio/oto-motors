import { Reveal } from '@/components/reveal'

const CHECKLIST = [
  'Enclosed transport, both directions',
  'Florida 90-day registration rule handled',
  'Lease-end dates tracked',
  'LLC titling coordinated with your CPA',
  'One number to call',
]

export function TwoStateGarage() {
  return (
    <section className="border-b border-hairline bg-panel">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow text-champagne">The two-state garage</p>
          <h2 className="font-display mt-6 text-[clamp(2rem,5vw,4.25rem)] leading-[1.02] text-balance">
            One garage. Two zip codes.
          </h2>
          <div className="mt-8 flex flex-col gap-5 text-[15px] leading-relaxed text-muted-foreground text-pretty md:text-base">
            <p>
              Most of our clients live between New York and South Florida. The cars move with them —
              the Range Rover south in November, the GT3 north in April — and each move carries its
              own paperwork, insurance, and timing.
            </p>
            <p>
              A leased car cannot simply be re-registered in Florida on your own; the leasing company
              holds the title and has to cooperate, on its schedule, with its forms. Getting that
              wrong turns a seasonal move into a registration problem and, occasionally, a ticket.
            </p>
            <p className="text-foreground">We handle it.</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:pt-4">
          <div className="border border-hairline bg-background p-8 md:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow text-muted-foreground">New York</p>
                <p className="font-display mt-3 text-2xl leading-none">Tribeca</p>
              </div>
              <div className="text-right">
                <p className="eyebrow text-muted-foreground">Fort Lauderdale</p>
                <p className="font-display mt-3 text-2xl leading-none">Las Olas</p>
              </div>
            </div>

            <div className="relative my-10 h-px w-full bg-hairline">
              <span className="absolute -top-[3px] h-[7px] w-[7px] -translate-x-1/2 bg-champagne shuttle-dot" />
              <span className="absolute -left-px -top-[3px] h-[7px] w-px bg-champagne/50" />
              <span className="absolute -right-px -top-[3px] h-[7px] w-px bg-champagne/50" />
            </div>

            <ul>
              {CHECKLIST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-t border-hairline py-4 text-[14px] text-foreground/85 last:border-b"
                >
                  <span className="h-1 w-1 shrink-0 bg-champagne" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-8 text-muted-foreground leading-[1.7]">
              1,240 miles · 2 registrations · 1 point of contact
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
