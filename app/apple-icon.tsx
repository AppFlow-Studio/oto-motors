import { ImageResponse } from 'next/og'
import { APP_ICON_SVG } from '@/lib/brand-logo'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// Rasterize the gold-on-black app icon into a PNG for the Apple touch icon.
export default function AppleIcon() {
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(APP_ICON_SVG)}`
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width="180" height="180" src={dataUri} alt="" />
      </div>
    ),
    { ...size },
  )
}
