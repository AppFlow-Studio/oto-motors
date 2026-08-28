import { Reveal } from '@/components/reveal'

const OFFICES = [
  {
    city: 'New York',
    neighborhood: 'Tribeca — Manhattan',
    body: 'Serving Manhattan, Westchester, the Hamptons, Greenwich, and northern New Jersey.',
    phone: '+1 (212) 555-0142',
    phoneHref: 'tel:+12125550142',
    textHref: 'sms:+12125550142',
  },
  {
    city: 'Fort Lauderdale',
    neighborhood: 'Las Olas — Florida',
    body: 'Positioned between Palm Beach and Miami, covering all three counties.',
    phone: '+1 (954) 555-0177',
    phoneHref: 'tel:+19545550177',
    textHref: 'sms:+19545550177',
  },
]

export function Locations() {
  return (
    <section id="locations" className="border-b border-hairline">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-champagne">Locations</p>
            <h2 className="font-display mt-6 text-[clamp(2rem,5.2vw,4.5rem)] leading-[1.02] text-balance">
              Two offices. One team.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground text-pretty">
            By appointment. Most clients never visit — the car comes to you.
          </p>
        </Reveal>

        <div className="mt-16 grid border-t border-hairline md:mt-24 md:grid-cols-2">
          {OFFICES.map((office, i) => (
            <Reveal
              key={office.city}
              delay={i * 120}
              className={`border-b border-hairline ${i === 1 ? 'md:border-l' : ''}`}
            >
              <div className={`py-10 md:py-14 ${i === 1 ? 'md:pl-12' : 'md:pr-12'}`}>
                <p className="eyebrow text-muted-foreground">{office.neighborhood}</p>
                <h3 className="font-display mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)] leading-none">
                  {office.city}
                </h3>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground text-pretty">
                  {office.body}
                </p>
                <p className="font-mono mt-8 text-[13px] tracking-[0.12em] text-foreground/85">
                  {office.phone}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={office.phoneHref}
                    className="eyebrow border border-hairline px-6 py-3.5 text-foreground transition-colors duration-300 hover:border-champagne hover:text-champagne"
                  >
                    Call
                  </a>
                  <a
                    href={office.textHref}
                    className="eyebrow border border-hairline px-6 py-3.5 text-foreground transition-colors duration-300 hover:border-champagne hover:text-champagne"
                  >
                    Text
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
