/** Footer line-art close. */
export function ClosingLineArt({ src }: { src: string }) {
  return (
    <section className="closing wrap">
      <div
        aria-hidden="true"
        className="line-study footer-drawing"
        data-line-art={src}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" loading="lazy" src={src} />
      </div>
    </section>
  );
}
