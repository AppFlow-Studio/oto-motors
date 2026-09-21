import { SILK } from "@/content/site";

/** Quote block; set silk for fabric video backdrop. */
export function SilkQuote({
  text,
  cite,
  eyebrow,
  line1,
  line2,
  silk = false,
}: {
  text?: string;
  cite?: string;
  eyebrow?: string;
  line1?: string;
  line2?: string;
  silk?: boolean;
}) {
  return (
    <section className={silk ? "n-quote silk-quote" : "n-quote"}>
      {silk ? (
        <video
          aria-hidden="true"
          className="silk-layer"
          loop
          muted
          playsInline
          poster={SILK.poster}
          preload="metadata"
        >
          <source src={SILK.video} type="video/mp4" />
        </video>
      ) : null}
      {eyebrow ? (
        <span className="n-eyebrow" data-rise="">
          {eyebrow}
        </span>
      ) : null}
      {line1 || line2 ? (
        <p data-rise="">
          {line1}
          {line2 ? (
            <>
              <br />
              <em>{line2}</em>
            </>
          ) : null}
        </p>
      ) : text ? (
        <p data-rise="">{text}</p>
      ) : null}
      {cite ? <cite data-rise="">{cite}</cite> : null}
    </section>
  );
}
