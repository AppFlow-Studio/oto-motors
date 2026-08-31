import type { MetadataRoute } from 'next'
import { SITE, MARQUES, MODELS, CROSSINGS, INTENT_PAGES } from '@/lib/site'
import { allDeliveries } from '@/lib/deliveries'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, '')
  const u = (path: string) => `${base}${path}`
  const now = new Date()

  const staticPaths = [
    '/',
    '/deliveries/',
    '/brands/',
    '/guides/',
    '/new-york/',
    '/fort-lauderdale/',
    '/build-your-deal/',
    '/guides/g-wagon-section-179/',
  ]

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: u(p),
    lastModified: now,
    changeFrequency: p === '/' || p === '/deliveries/' ? 'weekly' : 'monthly',
    priority: p === '/' ? 1 : p === '/guides/g-wagon-section-179/' ? 0.9 : 0.7,
  }))

  for (const p of INTENT_PAGES) {
    entries.push({ url: u(`/${p.slug}/`), lastModified: now, changeFrequency: 'monthly', priority: 0.7 })
  }
  for (const m of MARQUES) {
    entries.push({ url: u(`/brands/${m.slug}/`), lastModified: now, changeFrequency: 'monthly', priority: 0.6 })
  }
  for (const m of MODELS) {
    entries.push({ url: u(`/brands/${m.brandSlug}/${m.modelSlug}/`), lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
  }
  for (const c of CROSSINGS) {
    entries.push({ url: u(`/lease/${c.slug}/`), lastModified: now, changeFrequency: 'monthly', priority: 0.6 })
  }
  for (const d of allDeliveries()) {
    entries.push({ url: u(`/deliveries/${d.slug}/`), lastModified: now, changeFrequency: 'yearly', priority: 0.5 })
  }

  return entries
}
