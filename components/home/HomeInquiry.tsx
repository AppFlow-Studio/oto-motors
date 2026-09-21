import { InquiryForm } from "@/components/InquiryForm";

export function HomeInquiry() {
  return (
    <section className="inquiry wrap section" id="inquiry">
      <div>
        <span className="section-tag">TAILOR-MADE REQUESTS</span>
        <h2>Something in mind?</h2>
        <p>
          A model. A specification.
          <br />
          Or just a direction you have in mind.
        </p>
        <p className="form-note">
          Tell us the car and where you are. We come back with real numbers —
          lease, finance and cash side by side — straight from the principal.
        </p>
      </div>
      <InquiryForm compact />
    </section>
  );
}
