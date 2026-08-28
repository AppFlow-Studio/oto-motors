// OTO Motors brand mark — a crescent orb with a 4-point AI sparkle,
// recreated in the champagne-gold-on-black house style.
// Single source of truth for the header glyph, favicon, and app icon.
//
// The crescent is an outer disc with an offset disc *subtracted* via a mask
// (not fill-rule, since the cut disc overhangs the outer edge).

export const OUTER = { cx: 84, cy: 94, r: 48 } // gold disc
export const CUT = { cx: 114, cy: 86, r: 42 } // subtracted to carve the crescent

// 4-point sparkle sitting in the crescent's opening.
export const SPARKLE_D =
  'M132 34l6.5 11.5L150 52l-11.5 6.5L132 70l-6.5-11.5L114 52l11.5-6.5z'

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
    <linearGradient id="oto-gold" x1="40" y1="46" x2="140" y2="146" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#c8a96a"/>
      <stop offset="0.5" stop-color="#e8d5a4"/>
      <stop offset="1" stop-color="#c8a96a"/>
    </linearGradient>
    <mask id="oto-cres" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="84" cy="94" r="48" fill="#fff"/>
      <circle cx="114" cy="86" r="42" fill="#000"/>
    </mask>
  </defs>
  <rect width="180" height="180" rx="37" fill="url(#oto-bg)"/>
  <rect x="0.75" y="0.75" width="178.5" height="178.5" rx="36.25" fill="none" stroke="#c8a96a" stroke-opacity="0.22" stroke-width="1.5"/>
  <g transform="translate(-2 2)">
    <circle cx="84" cy="94" r="48" fill="url(#oto-gold)" mask="url(#oto-cres)"/>
    <path d="M132 34l6.5 11.5L150 52l-11.5 6.5L132 70l-6.5-11.5L114 52l11.5-6.5z" fill="#eaddb4"/>
  </g>
</svg>`
