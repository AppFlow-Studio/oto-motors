import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Italiana, Archivo, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italiana',
  display: 'swap',
})

const archivo = Archivo({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OTO Motors — Private Vehicle Acquisition | New York & South Florida',
  description:
    'OTO Motors is a private vehicle acquisition house. We find, negotiate, and deliver luxury and exotic cars — leased, financed, or bought outright. Offices in Tribeca, New York and Fort Lauderdale, Florida.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${italiana.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
