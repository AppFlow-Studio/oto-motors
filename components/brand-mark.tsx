'use client'

import { useId } from 'react'
import { SPARKLE_D, CHAMPAGNE, CHAMPAGNE_LIGHT } from '@/lib/brand-logo'

/**
 * The OTO Motors glyph — crescent orb + AI sparkle, in champagne gold.
 * Scales to its font-size when sized with an em-based width/height.
 */
export function BrandMark({ className = '' }: { className?: string }) {
  const maskId = `oto-cres-${useId().replace(/:/g, '')}`
  return (
    <svg viewBox="27 22 132 132" className={className} role="presentation" aria-hidden="true">
      <mask id={maskId} maskUnits="userSpaceOnUse" x="27" y="22" width="132" height="132">
        <circle cx="84" cy="94" r="48" fill="#fff" />
        <circle cx="114" cy="86" r="42" fill="#000" />
      </mask>
      <circle cx="84" cy="94" r="48" fill={CHAMPAGNE} mask={`url(#${maskId})`} />
      <path d={SPARKLE_D} fill={CHAMPAGNE_LIGHT} />
    </svg>
  )
}
