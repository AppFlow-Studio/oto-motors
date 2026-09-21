/** Multi drawing / pen studies. */
export function DrawingAtelier({
  drawings,
}: {
  drawings: { src: string; penMs: number }[];
}) {
  return (
    <section aria-label="Design studies" className="drawing-atelier">
      {drawings.map((d) => (
        <div
          key={d.src}
          aria-hidden="true"
          className="line-study"
          data-line-art={d.src}
          data-pen-ms={String(d.penMs)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" loading="lazy" src={d.src} />
        </div>
      ))}
    </section>
  );
}
