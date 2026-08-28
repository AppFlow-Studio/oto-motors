// OTO Motors brand mark — an open-end wrench with a 4-point AI sparkle,
// in the champagne-gold-on-black house style.
// Single source of truth for the header glyph, favicon, and app icon.
//
// The wrench is drawn in a vertical local frame (handle + round head, with a
// U-slot masked out of the head to form the open jaw) and then rotated so the
// jaw opens toward the upper-right, echoing the source mark.

export const WRENCH_ROTATE = 37
export const WRENCH_PIVOT = { x: 90, y: 93 }
export const HANDLE = { x: 78, y: 82, width: 24, height: 74, rx: 12 }
export const HEAD = { cx: 90, cy: 76, r: 29 }
// Open-jaw slot with a squared throat so it "grips" like a spanner.
export const NOTCH_D = 'M77 20 H103 V70 A6 6 0 0 1 97 76 H83 A6 6 0 0 1 77 70 Z'
// 4-point sparkle, top-right (root frame — not rotated with the wrench).
export const SPARKLE_D =
  'M144 34l6.2 11.6L162 52l-11.8 6.4L144 70l-6.2-11.6L126 52l11.8-6.4z'

export const CHAMPAGNE = '#c8a96a'
export const CHAMPAGNE_LIGHT = '#e8d5a4'

// Full app-icon lockup (black rounded tile + gold glyph). Used for the
// favicon and to rasterize the Apple touch icon at build time.
export const APP_ICON_SVG = `<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="oto-bg" x1="0" y1="0" x2="0" y2="180" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#16131b"/>
      <stop offset="1" stop-color="#0a0a0c"/>
    </linearGradient>
    <linearGradient id="oto-gold" x1="42" y1="42" x2="140" y2="150" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#c8a96a"/>
      <stop offset="0.5" stop-color="#e8d5a4"/>
      <stop offset="1" stop-color="#c8a96a"/>
    </linearGradient>
    <mask id="oto-notch" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <rect width="180" height="180" fill="#fff"/>
      <path d="M77 20 H103 V70 A6 6 0 0 1 97 76 H83 A6 6 0 0 1 77 70 Z" fill="#000"/>
    </mask>
  </defs>
  <rect width="180" height="180" rx="37" fill="url(#oto-bg)"/>
  <rect x="0.75" y="0.75" width="178.5" height="178.5" rx="36.25" fill="none" stroke="#c8a96a" stroke-opacity="0.22" stroke-width="1.5"/>
  <g transform="rotate(37 90 93)" mask="url(#oto-notch)">
    <rect x="78" y="82" width="24" height="74" rx="12" fill="url(#oto-gold)"/>
    <circle cx="90" cy="76" r="29" fill="url(#oto-gold)"/>
  </g>
  <path d="M144 34l6.2 11.6L162 52l-11.8 6.4L144 70l-6.2-11.6L126 52l11.8-6.4z" fill="#eaddb4"/>
</svg>`
