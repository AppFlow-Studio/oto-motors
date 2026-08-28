const MARQUES = [
  'Porsche',
  'Range Rover',
  'Mercedes-AMG',
  'BMW M',
  'Bentley',
  'Lamborghini',
  'Ferrari',
  'Rolls-Royce',
  'McLaren',
  'Aston Martin',
  'Maserati',
  'Audi',
]

export function MarqueRail() {
  return (
    <section
      id="marques"
      className="marquee-wrap relative overflow-hidden border-b border-hairline py-10 md:py-14"
      aria-label="Marques sourced"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {MARQUES.map((marque) => (
              <span key={marque} className="flex items-center">
                <span className="font-display px-8 text-3xl whitespace-nowrap text-muted-foreground transition-colors duration-500 hover:text-foreground md:px-12 md:text-5xl">
                  {marque}
                </span>
                <span className="h-1 w-1 bg-champagne" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent md:w-48" />
    </section>
  )
}
