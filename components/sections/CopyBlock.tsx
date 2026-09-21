import { OtoAction } from "@/components/ui/OtoAction";

/** Text chapter (dark or light). */
export function CopyBlock({
  variant = "default",
  eyebrow,
  heading,
  body,
  ctaHref,
  ctaLabel,
}: {
  variant?: "default" | "light";
  eyebrow: string;
  heading: string;
  body: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className={variant === "light" ? "n-copy n-copy-light" : "n-copy"}>
      <span className="n-eyebrow" data-rise="">
        {eyebrow}
      </span>
      <h2 data-rise="">{heading}</h2>
      <p data-rise="">{body}</p>
      {ctaHref && ctaLabel ? <OtoAction href={ctaHref} label={ctaLabel} /> : null}
    </section>
  );
}
