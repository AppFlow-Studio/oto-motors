'use client'

import { useMemo, useState } from 'react'
import { Manifest } from '@/components/manifest'
import type { Delivery } from '@/lib/deliveries'

const PAGE_SIZE = 12

type FilterButtonProps = {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`-ml-px border border-foreground px-3 py-1.5 font-data text-xs uppercase tracking-wider first:ml-0 ${
        active ? 'bg-foreground text-background' : 'bg-background hover:bg-foreground/5'
      }`}
    >
      {children}
    </button>
  )
}

export function DeliveriesExplorer({
  rows,
  marques,
}: {
  rows: Delivery[]
  marques: { slug: string; name: string }[]
}) {
  const [marque, setMarque] = useState<string>('all')
  const [year, setYear] = useState<string>('all')
  const [region, setRegion] = useState<string>('all')
  const [page, setPage] = useState(0)

  const years = useMemo(
    () => Array.from(new Set(rows.map((r) => r.year))).sort((a, b) => b - a),
    [rows],
  )

  const filtered = useMemo(() => {
    return rows.filter(
      (r) =>
        (marque === 'all' || r.marque === marque) &&
        (year === 'all' || String(r.year) === year) &&
        (region === 'all' || r.region === region),
    )
  }, [rows, marque, year, region])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const current = Math.min(page, pageCount - 1)
  const visible = filtered.slice(current * PAGE_SIZE, current * PAGE_SIZE + PAGE_SIZE)

  function reset<T>(setter: (v: T) => void, value: T) {
    setter(value)
    setPage(0)
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5 border-y border-foreground py-5">
        <div className="flex flex-col gap-2">
          <span className="font-data text-[0.625rem] uppercase tracking-wider text-muted-foreground">
            Marque
          </span>
          <div className="flex flex-wrap">
            <FilterButton active={marque === 'all'} onClick={() => reset(setMarque, 'all')}>
              All
            </FilterButton>
            {marques.map((m) => (
              <FilterButton
                key={m.slug}
                active={marque === m.slug}
                onClick={() => reset(setMarque, m.slug)}
              >
                {m.name}
              </FilterButton>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-data text-[0.625rem] uppercase tracking-wider text-muted-foreground">
              Year
            </span>
            <div className="flex flex-wrap">
              <FilterButton active={year === 'all'} onClick={() => reset(setYear, 'all')}>
                All
              </FilterButton>
              {years.map((y) => (
                <FilterButton
                  key={y}
                  active={year === String(y)}
                  onClick={() => reset(setYear, String(y))}
                >
                  {y}
                </FilterButton>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-data text-[0.625rem] uppercase tracking-wider text-muted-foreground">
              Region
            </span>
            <div className="flex flex-wrap">
              <FilterButton active={region === 'all'} onClick={() => reset(setRegion, 'all')}>
                All
              </FilterButton>
              <FilterButton active={region === 'ny'} onClick={() => reset(setRegion, 'ny')}>
                New York
              </FilterButton>
              <FilterButton active={region === 'fl'} onClick={() => reset(setRegion, 'fl')}>
                South Florida
              </FilterButton>
            </div>
          </div>
        </div>

        <p className="font-data text-xs text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? 'record' : 'records'}
        </p>
      </div>

      <Manifest
        rows={visible}
        footer="Days counted from first inquiry to keys in hand. Not from contract signature."
        emptyMessage="No deliveries match this filter yet."
      />

      {pageCount > 1 ? (
        <div className="mt-8 flex items-center justify-between font-data text-xs uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="border border-foreground px-4 py-2 disabled:opacity-30"
          >
            &larr; Prev
          </button>
          <span className="text-muted-foreground">
            Page {current + 1} / {pageCount}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={current === pageCount - 1}
            className="border border-foreground px-4 py-2 disabled:opacity-30"
          >
            Next &rarr;
          </button>
        </div>
      ) : null}
    </div>
  )
}
