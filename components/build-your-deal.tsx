'use client'

import { useState } from 'react'
import { AddressAutocomplete } from '@/components/address-autocomplete'

const labelCls = 'font-data text-[0.6875rem] uppercase tracking-wider text-muted-foreground'
const inputCls =
  'mt-2 w-full border border-foreground bg-background px-3 py-2.5 font-data text-sm outline-none focus:bg-foreground focus:text-background placeholder:text-muted-foreground focus:placeholder:text-background/70'
// Same styling as inputCls, but with the top margin lifted onto the wrapper so
// the autocomplete dropdown anchors flush to the bottom of the input.
const fieldCls = inputCls.replace('mt-2 ', '')

const STRUCTURES = ['Lease', 'Finance', 'Cash', 'Not sure yet']

export function BuildYourDeal({
  id = 'build-your-deal',
  heading = 'Build your deal',
  vehiclePrefill = '',
}: {
  id?: string
  heading?: string
  vehiclePrefill?: string
}) {
  const [submitted, setSubmitted] = useState(false)
  const [structure, setStructure] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    // A lead form, not a checkout. No pricing anywhere — we email the principal.
    setSubmitting(true)
    setError(null)
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/build-deal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'We could not send that. Please try again or call us.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'We could not send that. Please try again or call us.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <h2 id={`${id}-heading`} className="font-display text-3xl md:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
          Tell us the car. We come back with real numbers from real dealers — lease, finance and
          cash side by side — so you can see what each one actually costs before you commit to
          anything.
        </p>

        {submitted ? (
          <div className="mt-8 border border-foreground p-6 font-data text-sm">
            <p className="uppercase tracking-wider">Request received</p>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We will come back with the real number for your car. There is no sales team to get
              past — you are talking to the principal.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 grid gap-6 md:max-w-3xl md:grid-cols-2">
            <div className="md:col-span-2">
              <label htmlFor={`${id}-vehicle`} className={labelCls}>
                Vehicle or spec
              </label>
              <input
                id={`${id}-vehicle`}
                name="vehicle"
                defaultValue={vehiclePrefill}
                required
                placeholder="e.g. Mercedes-AMG G63, Manufaktur Olive Magno"
                className={inputCls}
              />
            </div>

            <fieldset className="md:col-span-2">
              <legend className={labelCls}>Structure</legend>
              <div className="mt-2 flex flex-wrap gap-0">
                {STRUCTURES.map((s) => (
                  <label
                    key={s}
                    className={`cursor-pointer border border-foreground px-4 py-2.5 font-data text-sm ${
                      structure === s ? 'bg-foreground text-background' : 'bg-background'
                    } -ml-px first:ml-0`}
                  >
                    <input
                      type="radio"
                      name="structure"
                      value={s}
                      className="sr-only"
                      onChange={() => setStructure(s)}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor={`${id}-location`} className={labelCls}>
                Delivery location
              </label>
              <AddressAutocomplete
                id={`${id}-location`}
                name="location"
                required
                placeholder="City, State"
                className={fieldCls}
                wrapperClassName="relative mt-2"
              />
            </div>

            <div>
              <label htmlFor={`${id}-timeframe`} className={labelCls}>
                Timeframe
              </label>
              <input
                id={`${id}-timeframe`}
                name="timeframe"
                placeholder="e.g. Before Dec 31"
                className={inputCls}
              />
            </div>

            <div>
              <label htmlFor={`${id}-name`} className={labelCls}>
                Name
              </label>
              <input id={`${id}-name`} name="name" required className={inputCls} />
            </div>

            <div>
              <label htmlFor={`${id}-email`} className={labelCls}>
                Email
              </label>
              <input
                id={`${id}-email`}
                name="email"
                type="email"
                required
                className={inputCls}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor={`${id}-phone`} className={labelCls}>
                Phone
              </label>
              <input id={`${id}-phone`} name="phone" type="tel" className={inputCls} />
            </div>

            {/*
              Honeypot — catches naive bots that fill every field. Named
              `hp_field` (not `company`) so Chrome/Safari never autofill it from
              a saved profile, which would silently flag real leads as bots.
              The data-*-ignore attrs tell 1Password/LastPass/Dashlane to skip it.
            */}
            <input
              type="text"
              name="hp_field"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              data-lpignore="true"
              data-1p-ignore="true"
              data-form-type="other"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            {error ? (
              <p
                role="alert"
                className="md:col-span-2 border border-foreground bg-foreground px-4 py-3 font-data text-xs leading-relaxed text-background"
              >
                {error}
              </p>
            ) : null}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full border border-foreground bg-foreground px-6 py-3 font-data text-sm uppercase tracking-wider text-background transition-colors hover:bg-background hover:text-foreground disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
              >
                {submitting ? 'Sending…' : 'Build Your Deal'}
              </button>
            </div>
          </form>
        )}

        {/* <p className="mt-8 max-w-2xl border-t border-foreground/30 pt-4 font-data text-xs leading-relaxed text-muted-foreground">
          No pricing on this site because there is no honest way to publish it. Rates move weekly,
          allocation moves daily, and every deal is structured differently. We will give you the
          number for your car.
        </p> */}
      </div>
    </section>
  )
}
