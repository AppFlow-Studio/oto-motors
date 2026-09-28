"use client";

import { useState } from "react";
import { AddressAutocomplete } from "@/components/address-autocomplete";
import { DirectionMark } from "@/components/ui/OtoAction";

const PAYMENTS = ["Lease", "Finance", "Cash", "Not sure yet"];
const TIMEFRAMES = ["Flexible", "Within a month", "1–3 months", "Later this year"];

/**
 * The real lead form for the new green design. Renders in the editorial CSS
 * vocabulary but POSTs to /api/build-deal (Resend), with the same honeypot and
 * Google Places autocomplete the site has always used. Field names match the
 * API contract (vehicle, structure, location, timeframe, name, email, phone).
 */
export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/build-deal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "We could not send that. Please try again or call us.",
        );
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "We could not send that. Please try again or call us.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span className="section-tag">RECEIVED</span>
        <h2>We have your request.</h2>
        <p>
          We&rsquo;ll come back with real numbers for your car — lease, finance
          and cash side by side. There&rsquo;s no sales team to get past; you are
          talking to the principal.
        </p>
      </div>
    );
  }

  const honeypot = (
    <input
      type="text"
      name="hp_field"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      data-lpignore="true"
      data-1p-ignore="true"
      data-form-type="other"
      className="hp-field"
    />
  );

  if (compact) {
    return (
      <form id="inquiry-form" onSubmit={onSubmit}>
        <div className="form-grid">
          <input aria-label="Your name" autoComplete="name" className="full" maxLength={120} name="name" placeholder="Your name" required />
          <input aria-label="The car you have in mind" className="full" id="car-input" maxLength={300} name="vehicle" placeholder="The car you have in mind" required />
          <input aria-label="Phone" autoComplete="tel" className="full" maxLength={40} name="phone" placeholder="Phone" type="tel" />
          <AddressAutocomplete ariaLabel="Delivery city & state" name="location" placeholder="Delivery city & state" wrapperClassName="ac full" />
          <select aria-label="Nearest office" className="full" name="office" required defaultValue="">
            <option value="" disabled>Select an office</option>
            <option>New York</option>
            <option>Florida</option>
          </select>
        </div>
        {honeypot}
        {error ? <p className="form-error" role="alert">{error}</p> : null}
        <button className="button oto-action" type="submit" disabled={submitting}>
          <DirectionMark />
          <span className="oto-action-label">{submitting ? "Sending…" : "Send to OTO"}</span>
        </button>
        <p className="small">
          No credit application. No commitment. A name and the car are all we need to start.
        </p>
      </form>
    );
  }

  return (
    <form id="inquiry-form" onSubmit={onSubmit}>
      <fieldset>
        <legend>
          <span>01</span> The car
        </legend>
        <input aria-label="The car you have in mind" id="car-input" maxLength={300} name="vehicle" placeholder="The car you have in mind" required />
        <select aria-label="How would you like to pay?" name="structure" defaultValue="Not sure yet">
          {PAYMENTS.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        <div className="field-pair">
          <AddressAutocomplete ariaLabel="Delivery city & state" name="location" placeholder="Delivery city & state" wrapperClassName="ac" />
          <select aria-label="Preferred timeframe" name="timeframe" defaultValue="Flexible">
            {TIMEFRAMES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <legend>
          <span>02</span> A few details
        </legend>
        <input aria-label="Your name" autoComplete="name" maxLength={120} name="name" placeholder="Your name" required />
        <input aria-label="Phone" autoComplete="tel" maxLength={40} name="phone" placeholder="Phone" type="tel" />
        <select aria-label="Nearest office" name="office" required defaultValue="">
          <option value="" disabled>Select an office</option>
          <option>New York</option>
          <option>Florida</option>
        </select>
      </fieldset>
      {honeypot}
      {error ? <p className="form-error" role="alert">{error}</p> : null}
      <button className="button oto-action" type="submit" disabled={submitting}>
        <DirectionMark />
        <span className="oto-action-label">{submitting ? "Sending…" : "Send to OTO"}</span>
      </button>
      <p className="small">
        No credit application. No commitment. We reply from the principal, not a sales desk.
      </p>
    </form>
  );
}
