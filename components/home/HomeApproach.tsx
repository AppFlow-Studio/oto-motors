import { DirectionMark } from "@/components/ui/OtoAction";

export function HomeApproach() {
  return (
    <section className="approach wrap section" id="approach">
      <div className="section-tag">THE OTO APPROACH</div>
      <div className="approach-copy">
        <h2>Consider it arranged.</h2>
        <div className="approach-bottom">
          <p>
            Tell us the car you have in mind. We work with our dealer network,
            negotiate the terms, structure your lease, and arrange delivery. One
            conversation with Oto takes the place of the showroom visits.
          </p>
          <div>
            <p>
              Proof, not promises. Every completed delivery will enter our public
              manifest: the car, the deal structure, the destination, and the days
              from inquiry to keys.
            </p>
            <a className="text-link oto-action" href="/deliveries">
              <DirectionMark />
              <span className="oto-action-label">See how we document a deal</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
