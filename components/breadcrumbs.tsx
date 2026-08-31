import Link from 'next/link'
import { SITE } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'

export type Crumb = { label: string; href: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ label: 'Home', href: '/' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${SITE.url}${c.href}`,
    })),
  }

  return (
    <nav aria-label="Breadcrumb" className="border-b border-foreground/30">
      <JsonLd data={jsonLd} />
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3 font-data text-[0.6875rem] uppercase tracking-wider text-muted-foreground md:px-8">
        {trail.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {i === trail.length - 1 ? (
              <span className="text-foreground" aria-current="page">
                {c.label}
              </span>
            ) : (
              <Link href={c.href} className="transition-colors hover:text-foreground">
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
