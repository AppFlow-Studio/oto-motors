import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Italiana, IBM_Plex_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter, CredibilityStrip } from '@/components/site-footer'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-italiana',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://otomotors.example'),
  title: {
    default: 'Luxury & Exotic Car Leasing — New York and Fort Lauderdale | OTO Motors',
    template: '%s | OTO Motors',
  },
  description:
    'Independent luxury and exotic car brokerage. We source the car, structure the lease, finance or cash purchase, and deliver it. See every delivery we have made and how long it took.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fafaf8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${italiana.variable} ${plexMono.variable} bg-background`}
    >
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <CredibilityStrip />
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
