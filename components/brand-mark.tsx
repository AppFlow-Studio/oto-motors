/**
 * The OTO Motors glyph — the open-end wrench head + AI sparkle, traced
 * pixel-for-pixel from the source logo and recolored to solid black.
 * `public/otopair-mark.png` is black on transparent, so it reads on the
 * light canvas; the white-on-dark variant lives in the transactional email.
 */
export function BrandMark({ className = '' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/otopair-mark.png"
      alt=""
      aria-hidden="true"
      className={`inline-block object-contain ${className}`}
    />
  )
}
