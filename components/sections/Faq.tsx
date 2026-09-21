/** FAQ accordion. */
export function Faq({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="n-faq">
      {eyebrow ? <span className="n-eyebrow">{eyebrow}</span> : null}
      <h2>{heading}</h2>
      <div>
        {items.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
