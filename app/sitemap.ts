import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { MARQUE_SLUGS } from '@/content/marques'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, '')
  const u = (path: string) => `${base}${path}`
  const now = new Date()

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/showroom/', priority: 0.8, freq: 'weekly' },
    { path: '/brands/', priority: 0.8, freq: 'monthly' },
    { path: '/deliveries/', priority: 0.7, freq: 'weekly' },
    { path: '/leasing/', priority: 0.8, freq: 'monthly' },
    { path: '/financing/', priority: 0.8, freq: 'monthly' },
    { path: '/cash-purchase/', priority: 0.8, freq: 'monthly' },
    { path: '/build-your-deal/', priority: 0.9, freq: 'monthly' },
    { path: '/new-york/', priority: 0.7, freq: 'monthly' },
    { path: '/fort-lauderdale/', priority: 0.7, freq: 'monthly' },
    { path: '/guides/', priority: 0.6, freq: 'monthly' },
    { path: '/guides/g-wagon-section-179/', priority: 0.9, freq: 'monthly' },
  ]

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: u(p.path),
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }))

  for (const slug of MARQUE_SLUGS) {
    entries.push({
      url: u(`/${slug}/`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  return entries
}
