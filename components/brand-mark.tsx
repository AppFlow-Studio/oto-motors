'use client'

import { useId } from 'react'

/**
 * The OTO Motors glyph — an open-end wrench with a 4-point AI sparkle.
 * Rebranded to a solid, monochrome fill: it inherits the current text
 * color (`currentColor`), so it renders black on the light canvas and
 * flips to the background color on inverted sections. The open jaw is
 * masked out so the surface shows through.
 */
export function BrandMark({ className = '' }: { className?: string }) {
  const maskId = `oto-jaw-${useId()}`
  return (
    <svg
      viewBox="0 0 180 180"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <rect width="180" height="180" fill="#fff" />
        <path d="M77 20 H103 V70 A6 6 0 0 1 97 76 H83 A6 6 0 0 1 77 70 Z" fill="#000" />
      </mask>
      <g transform="rotate(37 90 93)" mask={`url(#${maskId})`}>
        <rect x="78" y="82" width="24" height="74" rx="12" fill="currentColor" />
        <circle cx="90" cy="76" r="29" fill="currentColor" />
      </g>
      <path
        d="M144 34l6.2 11.6L162 52l-11.8 6.4L144 70l-6.2-11.6L126 52l11.8-6.4z"
        fill="currentColor"
      />
    </svg>
  )
}
