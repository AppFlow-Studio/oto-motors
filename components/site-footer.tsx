import Link from 'next/link'
import { CREDIBILITY, MARQUES, NAV } from '@/lib/site'
import { BrandMark } from '@/components/brand-mark'

export function CredibilityStrip() {
  return (
    <section aria-label="Track record" className="border-t border-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {CREDIBILITY.map((item, i) => (
            <div
              key={item.label}
              className={`border-b border-foreground py-6 md:border-b-0 ${
                i !== 0 ? 'md:border-l md:pl-6' : ''
              } ${i % 2 !== 0 ? 'border-l pl-6 md:pl-6' : ''}`}
            >
              <dt className="font-data text-[0.625rem] uppercase tracking-wider text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-2 font-data text-lg tracking-tight tnum">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 font-display text-2xl leading-none">
              <BrandMark className="h-7 w-7 shrink-0" />
              OTO Motors
            </p>
            <address className="mt-4 font-data text-sm not-italic leading-relaxed text-muted-foreground">
              200 Vesey Street, Battery Park City, New York, NY
              <br />
              221 SW 1st Ave, Fort Lauderdale, FL 33301
            </address>
            <p className="mt-4 max-w-md font-data text-xs leading-relaxed text-muted-foreground">
              An independent brokerage. Not a franchise dealer, and not affiliated with any
              manufacturer.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-data text-[0.625rem] uppercase tracking-wider text-muted-foreground">
              Site
            </p>
            <ul className="mt-3 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-data text-sm transition-colors hover:text-muted-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/build-your-deal/"
                  className="font-data text-sm transition-colors hover:text-muted-foreground"
                >
                  Build Your Deal
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Marques">
            <p className="font-data text-[0.625rem] uppercase tracking-wider text-muted-foreground">
              Marques
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2">
              {MARQUES.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/brands/${m.slug}/`}
                    className="font-data text-sm transition-colors hover:text-muted-foreground"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 font-data text-[0.625rem] uppercase tracking-wider text-muted-foreground">
          &copy; {new Date().getFullYear()} OTO Motors
        </p>
      </div>
    </footer>
  )
}
