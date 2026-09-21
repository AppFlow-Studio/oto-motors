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
          <label className="full">
            Your name
            <input autoComplete="name" maxLength={120} name="name" placeholder="First and last name" required />
          </label>
          <label className="full">
            The car you have in mind
            <input id="car-input" maxLength={300} name="vehicle" placeholder="Make, model, and preferred specification" required />
          </label>
          <label>
            Email
            <input autoComplete="email" maxLength={180} name="email" placeholder="Email address" required type="email" />
          </label>
          <label>
            Phone
            <input autoComplete="tel" maxLength={40} name="phone" placeholder="Phone number" type="tel" />
          </label>
          <label className="full">
            Delivery city &amp; state
            <AddressAutocomplete name="location" placeholder="City, state" wrapperClassName="ac full-ac" />
          </label>
          <label className="full">
            Nearest office
            <select name="office" required defaultValue="">
              <option value="" disabled>Select an office</option>
              <option>New York</option>
              <option>Florida</option>
            </select>
          </label>
        </div>
        {honeypot}
        {error ? <p className="form-error" role="alert">{error}</p> : null}
        <button className="button oto-action" type="submit" disabled={submitting}>
          <DirectionMark />
          <span className="oto-action-label">{submitting ? "Sending…" : "Send to OTO"}</span>
        </button>
        <p className="small">
          No credit application. No commitment. A name, a valid email, and the car are all we need to start.
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
        <label>
          The car you have in mind
          <input id="car-input" maxLength={300} name="vehicle" placeholder="Make, model, and preferred specification" required />
        </label>
        <label>
          How would you like to pay?
          <select name="structure" defaultValue="Not sure yet">
            {PAYMENTS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <div className="field-pair">
          <label>
            Delivery city &amp; state
            <AddressAutocomplete name="location" placeholder="City, state" wrapperClassName="ac" />
          </label>
          <label>
            Preferred timeframe
            <select name="timeframe" defaultValue="Flexible">
              {TIMEFRAMES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>
          <span>02</span> A few details
        </legend>
        <label>
          Your name
          <input autoComplete="name" maxLength={120} name="name" placeholder="First and last name" required />
        </label>
        <div className="field-pair">
          <label>
            Email
            <input autoComplete="email" maxLength={180} name="email" placeholder="Email address" required type="email" />
          </label>
          <label>
            Phone
            <input autoComplete="tel" maxLength={40} name="phone" placeholder="Phone number" type="tel" />
          </label>
        </div>
        <label>
          Nearest office
          <select name="office" required defaultValue="">
            <option value="" disabled>Select an office</option>
            <option>New York</option>
            <option>Florida</option>
          </select>
        </label>
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
