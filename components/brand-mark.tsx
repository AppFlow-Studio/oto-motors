/**
 * The OTO Motors glyph — the gold-on-black logo mark.
 * Scales to its font-size when sized with an em-based width/height.
 */
export function BrandMark({ className = '' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt=""
      width={36}
      height={36}
      className={`inline-block object-contain ${className}`}
      aria-hidden="true"
    />
  )
}
