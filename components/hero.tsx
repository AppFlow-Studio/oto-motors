'use client'

import { useEffect, useRef, useState } from 'react'
import { useDeal } from '@/components/deal-provider'

const STATS = [
  { value: 10, suffix: '', label: 'Years in the business' },
  { value: 2, suffix: '', label: 'Offices — Tribeca & Fort Lauderdale' },
  { value: 12, suffix: '+', label: 'Marques sourced' },
  { value: 3, suffix: '', label: 'Ways to acquire' },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplay(value)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const duration = 1400
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(Math.round(eased * value))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span ref={ref} className="font-display text-5xl leading-none text-champagne md:text-6xl">
      {display}
      {suffix}
    </span>
  )
}

export function Hero() {
  const { openDeal } = useDeal()

  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline">
      <div className="grain" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="streak" style={{ top: '18%', animationDelay: '0.6s' }} />
        <div className="streak" style={{ top: '46%', animationDelay: '1.05s' }} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-32 pb-0 md:px-10 md:pt-48">
        <p
          className="eyebrow fade-up text-champagne"
          style={{ animationDelay: '0.1s' }}
        >
          New York · South Florida
        </p>

        <h1 className="font-display mt-8 text-[clamp(2.75rem,9.2vw,8.5rem)] leading-[0.94] tracking-[-0.015em] text-balance">
          {['The car you want', 'is already ours'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span className="line-rise block" style={{ animationDelay: `${0.25 + i * 0.14}s` }}>
                {line}
              </span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <span className="line-rise block champagne-text" style={{ animationDelay: '0.53s' }}>
              to get.
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12">
          <p
            className="fade-up text-muted-foreground md:col-span-6 md:col-start-7 text-[15px] leading-relaxed text-pretty md:text-base"
            style={{ animationDelay: '0.85s' }}
          >
            OTO Motors is a private vehicle acquisition house. We find, negotiate, and deliver
            luxury and exotic cars — leased, financed, or bought outright — through ten years of
            dealer relationships most buyers never see.
          </p>
        </div>

        <div
          className="fade-up mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          style={{ animationDelay: '1s' }}
        >
          <button
            type="button"
            onClick={openDeal}
            className="champagne-gradient eyebrow w-full px-8 py-4 text-[#0a0a0c] transition-opacity duration-300 hover:opacity-85 sm:w-auto"
          >
            Build Your Deal →
          </button>
          <a
            href="#deliveries"
            className="eyebrow border-b border-hairline pb-1 text-muted-foreground transition-colors duration-300 hover:border-champagne hover:text-foreground"
          >
            See recent deliveries ↓
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 border-t border-hairline md:mt-28 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-hairline px-0 py-8 md:py-10 ${
                i > 0 ? 'md:border-l md:pl-8' : ''
              } ${i % 2 === 1 ? 'border-l pl-6 md:pl-8' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''}`}
            >
              <dd>
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="eyebrow mt-4 text-muted-foreground leading-[1.6]">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
