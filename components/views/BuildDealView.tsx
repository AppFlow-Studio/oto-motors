import { InquiryForm } from "@/components/InquiryForm";

export function BuildDealView() {
  return (
    <>
      <main id="main">
        <section className="deal-layout wrap" id="inquiry">
          <div className="deal-intro">
            <figure className="deal-portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Ferrari Scuderia badge on polished red bodywork" src="/assets/cars-images/ferrari/ferrari-closeup-1.jpg" />
              <figcaption>THE DETAILS ARE YOURS.</figcaption>
            </figure>
            <span className="section-tag">BUILD YOUR DEAL</span>
            <h1>
              Something<br />in mind?
            </h1>
            <p>
              A model. A specification.<br />Or just a direction you have in mind.
            </p>
            <div className="deal-aside">
              <span className="section-tag">ONE CONVERSATION</span>
              <p>
                Your preferred car, the right structure, and the delivery. Start with
                what you know. We&rsquo;ll take it from there.
              </p>
            </div>
            <p className="small">
              Tell us the car and we come back with real numbers — lease, finance and
              cash side by side. No pricing on this site because there is no honest way
              to publish it; we give you the number for your car.
            </p>
          </div>
          <InquiryForm />
        </section>
        <section className="wrap section payment-options">
          <span className="section-tag">THE WAY YOU MAKE IT YOURS</span>
          <h2>Three ways. One conversation.</h2>
          <div className="option-grid">
            <article>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Editorial vehicle study" className="option-image" loading="lazy" src="/assets/hero.webp" />
              <span className="section-tag">01</span>
              <h3>Lease</h3>
              <p>A defined term, with mileage and end-of-term choices agreed at the outset.</p>
              <a className="button oto-action" href="/leasing">
                <span aria-hidden="true" className="direction-mark">
                  <svg fill="none" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
                </span>
                <span className="oto-action-label">Explore lease</span>
              </a>
            </article>
            <article>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Editorial vehicle study" className="option-image" loading="lazy" src="/assets/bentley-detail.webp" />
              <span className="section-tag">02</span>
              <h3>Finance</h3>
              <p>Ownership, with the purchase spread across an agreed repayment term.</p>
              <a className="button oto-action" href="/financing">
                <span aria-hidden="true" className="direction-mark">
                  <svg fill="none" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
                </span>
                <span className="oto-action-label">Explore finance</span>
              </a>
            </article>
            <article>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Editorial vehicle study" className="option-image" loading="lazy" src="/assets/maserati-front.webp" />
              <span className="section-tag">03</span>
              <h3>Cash</h3>
              <p>An outright purchase, with sourcing and delivery coordinated by OTO.</p>
              <a className="button oto-action" href="/cash-purchase">
                <span aria-hidden="true" className="direction-mark">
                  <svg fill="none" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
                </span>
                <span className="oto-action-label">Explore cash</span>
              </a>
            </article>
          </div>
        </section>
      </main>
      <section className="closing wrap">
        <div
          aria-hidden="true"
          className="line-study footer-drawing"
          data-line-art="/assets/drawing-lambo-line-drawing.svg"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" height={316.24} loading="lazy" src="/assets/drawing-lambo-line-drawing.svg" width={1355} />
        </div>
      </section>
    </>
  );
}
