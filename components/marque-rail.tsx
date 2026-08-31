import Link from 'next/link'
import { MARQUES } from '@/lib/site'

const logoSources: Record<string, string> = {
  porsche: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/porsche/mono.svg',
  'mercedes-amg': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/amg/mono.svg',
  'range-rover': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/range-rover/mono.svg',
  ferrari: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/ferrari/mono.svg',
  lamborghini: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/lamborghini/mono.svg',
  bentley: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/bentley/mono.svg',
  'rolls-royce': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/rolls-royce/mono.svg',
  mclaren: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/mclaren/mono.svg',
  'aston-martin': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aston-martin/mono.svg',
  'bmw-m': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/bmw/mono.svg',
  maserati: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/maserati/mono.svg',
  audi: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/audi/mono.svg',
}

export function MarqueRail() {
  const items = MARQUES.map((marque) => ({ ...marque, logo: logoSources[marque.slug] })).filter((item) => item.logo)
  const loop = [...items, ...items]

  return (
    <nav aria-label="Marques we place" className="marquee-mask w-full py-10 opacity-65 grayscale">
      <div className="marquee-track flex w-max items-center gap-16 md:gap-28">
        {loop.map((marque, index) => (
          <Link
            key={`${marque.slug}-${index}`}
            href={`/brands/${marque.slug}/`}
            aria-label={marque.name}
            className="group flex h-16 w-36 shrink-0 items-center justify-center transition-opacity hover:opacity-100 md:h-20 md:w-48"
          >
            <img src={marque.logo} alt={marque.name} className="max-h-14 w-auto max-w-40 object-contain transition-transform duration-500 group-hover:scale-110 md:max-h-16 md:max-w-48" />
          </Link>
        ))}
      </div>
    </nav>
  )
}

// Brand marks sourced from theSVG.org. Review each trademark policy before commercial use.
