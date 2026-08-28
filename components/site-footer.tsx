import { Wordmark } from '@/components/site-header'

const COLUMNS = [
  {
    heading: 'Cars',
    links: ['Porsche', 'Range Rover', 'Mercedes-AMG', 'Lamborghini', 'Rolls-Royce', 'All marques'],
  },
  {
    heading: 'Lease or Buy',
    links: ['Leasing', 'Financing', 'Cash purchase', 'Apply for financing', 'Trade-in appraisal'],
  },
  {
    heading: 'Company',
    links: ['About OTO', 'Recent deliveries', 'How it works', 'The two-state garage', 'Contact'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-5 md:gap-8">
          <div className="md:col-span-1">
            <Wordmark className="text-lg" />
            <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground text-pretty">
              Private vehicle acquisition. Lease, finance, or cash.
            </p>
            <p className="eyebrow mt-6 text-muted-foreground">An OTO Group company</p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="eyebrow text-champagne">{col.heading}</h3>
              <ul className="mt-6 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#cta"
                      className="text-[14px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="eyebrow text-champagne">Locations</h3>
            <ul className="mt-6 flex flex-col gap-6">
              <li>
                <p className="text-[14px] text-foreground">New York</p>
                <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                  Tribeca, Manhattan
                  <br />
                  +1 (212) 555-0142
                </p>
              </li>
              <li>
                <p className="text-[14px] text-foreground">Fort Lauderdale</p>
                <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                  Las Olas, Florida
                  <br />
                  +1 (954) 555-0177
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-hairline pt-8 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow text-muted-foreground">
            © {new Date().getFullYear()} OTO Motors LLC
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {['Privacy', 'Terms', 'Disclosures', 'Accessibility', 'Instagram'].map((item) => (
              <li key={item}>
                <a
                  href="#top"
                  className="eyebrow text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 max-w-4xl text-[12px] leading-relaxed text-muted-foreground/80 text-pretty">
          OTO Motors is an independent vehicle brokerage. We are not a franchise dealer and do not
          perform warranty work. All payments and terms are subject to credit approval, vehicle
          availability, and current manufacturer programs. Figures shown are examples, not offers.
        </p>
      </div>

      <div className="h-20 md:hidden" aria-hidden="true" />
    </footer>
  )
}
