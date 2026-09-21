import { DirectionMark } from "@/components/ui/OtoAction";

export function HomeClosing() {
  return (
    <section className="closing wrap">
      <div
        aria-hidden="true"
        className="line-study footer-drawing"
        data-line-art="/assets/drawing-lambo-line-drawing.svg"
        data-pen-ms="26000"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          height={316.24}
          loading="lazy"
          src="/assets/drawing-lambo-line-drawing.svg"
          width={1355}
        />
      </div>
    </section>
  );
}

export function HomeReviewDialog() {
  return (
    <dialog id="review-dialog">
      <div className="dialog-top">
        <span>YOUR INQUIRY</span>
        <button aria-label="Close inquiry review" id="close-dialog">
          ×
        </button>
      </div>
      <h2>A clear starting point.</h2>
      <dl id="review-details" />
      <p>
        This inquiry has not been sent. Download a copy to keep your details ready.
      </p>
      <button className="button light oto-action" id="download">
        <DirectionMark />
        <span className="oto-action-label">Download inquiry ↓</span>
      </button>
      <p id="download-status" role="status" />
    </dialog>
  );
}
