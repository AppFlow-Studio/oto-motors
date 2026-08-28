'use client'

import { useId } from 'react'
import {
  HANDLE,
  HEAD,
  NOTCH_D,
  SPARKLE_D,
  WRENCH_ROTATE,
  WRENCH_PIVOT,
  CHAMPAGNE,
  CHAMPAGNE_LIGHT,
} from '@/lib/brand-logo'

/**
 * The OTO Motors glyph — an open-end wrench + AI sparkle, in champagne gold.
 * Scales to its font-size when sized with an em-based width/height.
 */
export function BrandMark({ className = '' }: { className?: string }) {
  const notchId = `oto-notch-${useId().replace(/:/g, '')}`
  return (
    <svg viewBox="36 28 132 132" className={className} role="presentation" aria-hidden="true">
      <mask id={notchId} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <rect width="180" height="180" fill="#fff" />
        <path d={NOTCH_D} fill="#000" />
      </mask>
      <g
        transform={`rotate(${WRENCH_ROTATE} ${WRENCH_PIVOT.x} ${WRENCH_PIVOT.y})`}
        mask={`url(#${notchId})`}
      >
        <rect
          x={HANDLE.x}
          y={HANDLE.y}
          width={HANDLE.width}
          height={HANDLE.height}
          rx={HANDLE.rx}
          fill={CHAMPAGNE}
        />
        <circle cx={HEAD.cx} cy={HEAD.cy} r={HEAD.r} fill={CHAMPAGNE} />
      </g>
      <path d={SPARKLE_D} fill={CHAMPAGNE_LIGHT} />
    </svg>
  )
}
