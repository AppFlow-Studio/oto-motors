'use client'

import { useInView } from '@/components/reveal'
import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    num: '01',
    title: 'Tell us the car',
    body: 'Seven questions, two minutes. Exact spec or a direction — both work.',
  },
  {
    num: '02',
    title: 'We source it',
    body: 'We work our dealer network, allocation lists, and off-market channels simultaneously.',
  },
  {
    num: '03',
    title: 'You approve the deal',
    body: 'Real numbers by text. Every line itemized — no packed fees, no surprises at signing.',
  },
  {
    num: '04',
    title: 'We deliver',
    body: 'Enclosed transport to your door in either state. Paperwork travels with the car.',
  },
]

function Tick({ visible, delay }: { visible: boolean; delay: number }) {
  return (
    <svg
      viewBox="0 0 24 18"
      className="h-4 w-5 text-champagne"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="M1 9.5 L8 16.5 L23 1.5"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={visible ? 0 : 1}
        style={{
          transition: `stroke-dashoffset 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        }}
      />
    </svg>
  )
}

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="process" className="border-b border-hairline">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow text-champagne">How it works</p>
          <h2 className="font-display mt-6 max-w-3xl text-[clamp(2rem,5.2vw,4.5rem)] leading-[1.02] text-balance">
            Four steps. You do one of them.
          </h2>
        </Reveal>

        <div ref={ref} className="mt-16 grid gap-y-10 md:mt-24 md:grid-cols-4 md:gap-x-10">
          {STEPS.map((step, i) => (
            <div key={step.num} className="border-t border-hairline pt-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-champagne">
                  {step.num}
                </span>
                <Tick visible={inView} delay={200 + i * 220} />
              </div>
              <h3 className="font-display mt-8 text-3xl leading-none">{step.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
