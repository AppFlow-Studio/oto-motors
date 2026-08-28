'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useDeal } from '@/components/deal-provider'

const NAV = [
  { label: 'Cars', href: '#marques' },
  { label: 'Recent Deliveries', href: '#deliveries' },
  { label: 'Lease or Buy', href: '#paths' },
  { label: 'Services', href: '#process' },
  { label: 'Locations', href: '#locations' },
]

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display tracking-[0.28em] leading-none ${className}`}>
      OTO <span className="champagne-text">MOTORS</span>
    </span>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openDeal } = useDeal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-hairline bg-background/72 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" className="shrink-0" aria-label="OTO Motors — home">
          <Wordmark className="text-[17px] md:text-xl" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="eyebrow text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-7 lg:flex">
          <a
            href="#cta"
            className="eyebrow text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            Apply
          </a>
          <button
            type="button"
            onClick={openDeal}
            className="champagne-gradient eyebrow px-5 py-3 text-[#0a0a0c] transition-opacity duration-300 hover:opacity-85"
          >
            Build Your Deal →
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="p-1 text-foreground lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1} />
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-background transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-16 items-center justify-between border-b border-hairline px-5">
          <Wordmark className="text-[17px]" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="p-1"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1} />
          </button>
        </div>
        <nav className="flex flex-col" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display border-b border-hairline px-5 py-6 text-3xl tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="font-display border-b border-hairline px-5 py-6 text-3xl tracking-wide text-champagne"
          >
            Apply
          </a>
        </nav>
        <div className="px-5 py-8">
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              openDeal()
            }}
            className="champagne-gradient eyebrow w-full py-4 text-[#0a0a0c]"
          >
            Build Your Deal →
          </button>
        </div>
      </div>
    </header>
  )
}
