import { DirectionMark } from "@/components/ui/OtoAction";
import { HOME } from "@/content/home";

/** Sticky expand record scene — classes wired to home-motion. */
export function HomeRecord() {
  const { record } = HOME;
  return (
    <div className="record-scene-track" id="manifest">
      <section className="record-scene">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={record.image.alt}
          loading="lazy"
          src={record.image.src}
        />
        <div className="record-scene-copy">
          <span className="section-tag">INSIDE A DELIVERY RECORD</span>
          <h2>Beyond the photograph.</h2>
          <p>
            A delivery entry will show how the deal came together,
            <br />
            alongside the details that matter.
          </p>
          <dl>
            <div>
              <dt>Vehicle &amp; specification</dt>
              <dd>Model, finish, essentials</dd>
            </div>
            <div>
              <dt>Deal type &amp; term</dt>
              <dd>Lease, finance, or cash</dd>
            </div>
            <div>
              <dt>Delivered to</dt>
              <dd>City &amp; state</dd>
            </div>
            <div>
              <dt>Inquiry to keys</dt>
              <dd>Actual elapsed days</dd>
            </div>
            <div>
              <dt>Delivery &amp; registration</dt>
              <dd>Method &amp; state</dd>
            </div>
          </dl>
          <div className="record-numbers">
            <div>
              <strong>02</strong>
              <span>OFFICES, NY &amp; FL</span>
            </div>
            <div>
              <strong>10</strong>
              <span>MARQUES</span>
            </div>
            <div>
              <strong>01</strong>
              <span>PUBLIC MANIFEST</span>
            </div>
          </div>
          <a className="text-link oto-action" href="/deliveries">
            <DirectionMark />
            <span className="oto-action-label">The record starts here</span>
          </a>
        </div>
      </section>
    </div>
  );
}
