import { OFFICES, SITE } from '@/lib/site'

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Static, server-rendered structured data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

type Office = typeof OFFICES.ny

function autoDealer(office: Office, name: string) {
  return {
    '@type': 'AutoDealer',
    name,
    url: SITE.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.line1,
      addressLocality: office.locality,
      addressRegion: office.regionCode,
      postalCode: office.postal,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: office.geo.lat,
      longitude: office.geo.lng,
    },
  }
}

export function AutoDealerJsonLd({ region }: { region?: 'ny' | 'fl' }) {
  const data =
    region === undefined
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            autoDealer(OFFICES.ny, `${SITE.name} — New York`),
            autoDealer(OFFICES.fl, `${SITE.name} — Fort Lauderdale`),
          ],
        }
      : {
          '@context': 'https://schema.org',
          ...autoDealer(
            OFFICES[region],
            `${SITE.name} — ${region === 'ny' ? 'New York' : 'Fort Lauderdale'}`,
          ),
        }
  return <JsonLd data={data} />
}

export function FaqJsonLd({ qa }: { qa: { question: string; answer: string }[] }) {
  if (qa.length === 0) return null
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
  return <JsonLd data={data} />
}

export function ArticleJsonLd({
  headline,
  description,
  url,
}: {
  headline: string
  description: string
  url: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
    },
  }
  return <JsonLd data={data} />
}
