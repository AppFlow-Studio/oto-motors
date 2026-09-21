/**
 * The OTO Motors glyph — rendered as the exact `public/logo.png` mark used
 * across the brand, recolored to the emerald identity by using the PNG's alpha
 * as a CSS mask and filling it with `currentColor`. See `.oto-mark` in oto.css.
 */
export function BrandMark({ className = '' }: { className?: string }) {
  return <span className={`oto-mark ${className}`} role="img" aria-hidden="true" />
}
