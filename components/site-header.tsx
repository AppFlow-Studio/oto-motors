'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NAV } from '@/lib/site'
import { BrandMark } from '@/components/brand-mark'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2.5 font-data text-base font-semibold tracking-[0.14em] transition-opacity hover:opacity-60" aria-label="OTO Motors home">
          <BrandMark className="h-6 w-6 shrink-0" />
          <span>OTO<span className="text-muted-foreground">/</span>MOTORS</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-data text-xs uppercase tracking-wider transition-colors hover:text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/build-your-deal/"
            className="hidden border border-foreground bg-foreground px-4 py-2 font-data text-xs uppercase tracking-wider text-background transition-colors hover:bg-background hover:text-foreground sm:inline-block"
          >
            Build Your Deal
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="border border-foreground px-3 py-2 font-data text-xs uppercase tracking-wider lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-foreground bg-background lg:hidden"
        >
          <ul>
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-foreground/30">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 font-data text-sm uppercase tracking-wider"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="p-4">
              <Link
                href="/build-your-deal/"
                onClick={() => setOpen(false)}
                className="block border border-foreground bg-foreground px-4 py-3 text-center font-data text-xs uppercase tracking-wider text-background"
              >
                Build Your Deal
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
