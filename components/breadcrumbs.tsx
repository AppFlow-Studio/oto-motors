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
    <nav aria-label="Breadcrumb" className="breadcrumbs wrap">
      <JsonLd data={jsonLd} />
      <ol>
        {trail.map((c, i) => (
          <li key={c.href}>
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {i === trail.length - 1 ? (
              <span aria-current="page">{c.label}</span>
            ) : (
              <Link href={c.href}>{c.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
