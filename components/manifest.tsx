'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { Delivery } from '@/lib/deliveries'

function useCountUp(target: number) {
  const [value, setValue] = useState(target) // SSR + first paint show the real number
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || started.current) return
    if (typeof IntersectionObserver === 'undefined') return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            observer.disconnect()
            const duration = 900
            const start = performance.now()
            setValue(0)
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              // ease-out
              const eased = 1 - Math.pow(1 - p, 3)
              setValue(Math.round(eased * target))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return { value, ref }
}

function DaysCell({ days, className }: { days: number; className?: string }) {
  const { value, ref } = useCountUp(days)
  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}

type ManifestProps = {
  rows: Delivery[]
  intro?: string
  footer?: string
  viewAllHref?: string
  viewAllLabel?: string
  emptyMessage?: string
}

export function Manifest({
  rows,
  intro,
  footer,
  viewAllHref,
  viewAllLabel = 'View all deliveries',
  emptyMessage,
}: ManifestProps) {
  return (
    <div className="font-data">
      {intro ? (
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}

      {rows.length === 0 ? (
        <div className="border border-foreground p-8 text-center text-sm text-muted-foreground">
          {emptyMessage ??
            'No deliveries recorded for this filter yet. The record only shows cars we have actually placed — when we place one here, it appears here.'}
        </div>
      ) : (
        <>
          {/* Desktop / tablet: 6-column manifest table */}
          <div className="hidden border-t border-foreground md:block">
            <div
              className="grid grid-cols-[3.5rem_minmax(0,2.2fr)_minmax(0,2fr)_minmax(0,1.4fr)_minmax(0,1.4fr)_4rem] gap-4 border-b border-foreground py-2 text-[0.6875rem] uppercase tracking-wider text-muted-foreground"
              aria-hidden="true"
            >
              <div>Year</div>
              <div>Vehicle</div>
              <div>Spec</div>
              <div>Sourced From</div>
              <div>Delivered To</div>
              <div className="text-right">Days</div>
            </div>
            <ul>
              {rows.map((d) => (
                <li key={d.slug} className="border-b border-foreground/30">
                  <Link
                    href={`/deliveries/${d.slug}/`}
                    className="grid grid-cols-[3.5rem_minmax(0,2.2fr)_minmax(0,2fr)_minmax(0,1.4fr)_minmax(0,1.4fr)_4rem] items-baseline gap-4 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    <span className="tnum">{d.year}</span>
                    <span className="font-medium">{d.vehicle}</span>
                    <span className="text-muted-foreground group-hover:text-background">
                      {d.spec}
                    </span>
                    <span className="tnum">{d.sourcedFrom}</span>
                    <span className="tnum">{d.deliveredTo}</span>
                    <span className="text-right tabular-nums">
                      <DaysCell days={d.days} className="tnum" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile: stacked monospace record cards — six columns will not fit */}
          <ul className="border-t border-foreground md:hidden">
            {rows.map((d) => (
              <li key={d.slug} className="border-b border-foreground">
                <Link
                  href={`/deliveries/${d.slug}/`}
                  className="block py-4 transition-colors active:bg-foreground active:text-background"
                >
                  <div className="mb-3 flex items-baseline justify-between gap-3">
                    <span className="text-[0.9375rem] font-medium leading-tight">{d.vehicle}</span>
                    <span className="shrink-0 text-right text-xs">
                      <DaysCell days={d.days} className="text-base tnum" />
                      <span className="ml-1 text-[0.625rem] uppercase tracking-wider text-muted-foreground">
                        days
                      </span>
                    </span>
                  </div>
                  <dl className="grid grid-cols-[6.5rem_1fr] gap-x-3 gap-y-1 text-[0.75rem] leading-relaxed">
                    <dt className="uppercase tracking-wider text-muted-foreground">Year</dt>
                    <dd className="tnum">{d.year}</dd>
                    <dt className="uppercase tracking-wider text-muted-foreground">Spec</dt>
                    <dd>{d.spec}</dd>
                    <dt className="uppercase tracking-wider text-muted-foreground">Sourced</dt>
                    <dd className="tnum">{d.sourcedFrom}</dd>
                    <dt className="uppercase tracking-wider text-muted-foreground">Delivered</dt>
                    <dd className="tnum">{d.deliveredTo}</dd>
                  </dl>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {footer ? (
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">{footer}</p>
      ) : null}

      {viewAllHref ? (
        <div className="mt-6">
          <Link
            href={viewAllHref}
            className="inline-block border-b border-foreground pb-0.5 text-sm uppercase tracking-wider transition-colors hover:text-muted-foreground"
          >
            {viewAllLabel} &rarr;
          </Link>
        </div>
      ) : null}
    </div>
  )
}
