/** Brand intro — centered copy only (no line art). */
export function MarqueEntrance({
  ariaLabel,
  eyebrow,
  heading,
  body,
}: {
  ariaLabel: string;
  lineArt?: string;
  faceText?: boolean;
  layout?: "default" | "solo";
  eyebrow: string;
  heading: string;
  body: string;
}) {
  return (
    <section aria-label={ariaLabel} className="marque-entrance marque-entrance--copy">
      <div className="marque-entrance-rail">
        <div className="marque-entrance-copy">
          <span className="n-eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p>{body}</p>
        </div>
      </div>
    </section>
  );
}
