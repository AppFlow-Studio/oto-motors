/** Brand intro with line-art draw. */
export function MarqueEntrance({
  ariaLabel,
  lineArt,
  eyebrow,
  heading,
  body,
}: {
  ariaLabel: string;
  lineArt: string;
  eyebrow: string;
  heading: string;
  body: string;
}) {
  return (
    <section aria-label={ariaLabel} className="marque-entrance">
      <div className="marque-entrance-rail">
        <div className="marque-entrance-mover">
          <div className="marque-entrance-copy">
            <span className="n-eyebrow">{eyebrow}</span>
            <h2>{heading}</h2>
            <p>{body}</p>
          </div>
          <div
            aria-hidden="true"
            className="line-study marque-draw"
            data-line-art={lineArt}
            data-pen-ms="12000"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" loading="lazy" src={lineArt} />
          </div>
        </div>
      </div>
    </section>
  );
}
