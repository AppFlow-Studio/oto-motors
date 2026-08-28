'use client'

import { Reveal } from '@/components/reveal'
import { useDeal } from '@/components/deal-provider'

export function ClosingCta() {
  const { openDeal } = useDeal()

  return (
    <section id="cta" className="relative overflow-hidden border-b border-hairline bg-panel">
      <div className="grain" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-44">
        <Reveal className="max-w-5xl">
          <p className="eyebrow text-champagne">Start here</p>
          <h2 className="font-display mt-8 text-[clamp(2.5rem,7.5vw,7rem)] leading-[0.98] tracking-[-0.015em] text-balance">
            Tell us the car.
            <br />
            <span className="champagne-text">We&apos;ll tell you the number.</span>
          </h2>
          <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground text-pretty md:text-base">
            Seven questions. No commitment, no credit pull, no payment made up by a form.
          </p>
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={openDeal}
              className="champagne-gradient eyebrow w-full px-8 py-4 text-[#0a0a0c] transition-opacity duration-300 hover:opacity-85 sm:w-auto"
            >
              Build Your Deal →
            </button>
            <a
              href="tel:+12125550142"
              className="eyebrow border-b border-hairline pb-1 text-muted-foreground transition-colors duration-300 hover:border-champagne hover:text-foreground"
            >
              Or call +1 (212) 555-0142
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
