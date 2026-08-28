'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const BRANDS = [
  'Porsche',
  'Range Rover',
  'Mercedes-AMG',
  'BMW M',
  'Bentley',
  'Lamborghini',
  'Ferrari',
  'Rolls-Royce',
  'McLaren',
  'Aston Martin',
  'Maserati',
  'Audi',
  'Not sure yet — help me choose',
]

const ACQUISITION = ['Lease', 'Finance', 'Cash'] as const
const TERMS = ['24 mo', '27 mo', '36 mo', '39 mo', '48 mo']
const MILES = ['5,000', '7,500', '10,000', '12,000', '15,000+']
const DOWN = ['$0', '$5,000', '$10,000', '$20,000+', 'Tell me what works']
const BUDGET = ['Under $150k', '$150k – $300k', '$300k – $600k', '$600k+', 'Depends on the car']
const TIMING = ['Immediately', 'Within 30 days', '1 – 3 months', 'My lease is ending']
const REGIONS = ['New York area', 'South Florida', 'Somewhere else']

const TOTAL_STEPS = 7

type Answers = {
  brand: string
  specNotes: string
  acquisition: string
  term: string
  miles: string
  down: string
  budget: string
  timing: string
  leaseEndDate: string
  hasTrade: string
  tradeYear: string
  tradeMake: string
  tradeModel: string
  region: string
  name: string
  phone: string
  email: string
}

const EMPTY: Answers = {
  brand: '',
  specNotes: '',
  acquisition: '',
  term: '',
  miles: '',
  down: '',
  budget: '',
  timing: '',
  leaseEndDate: '',
  hasTrade: '',
  tradeYear: '',
  tradeMake: '',
  tradeModel: '',
  region: '',
  name: '',
  phone: '',
  email: '',
}

const STEP_TITLES = [
  'What car?',
  'How would you like to acquire it?',
  'Shape the structure',
  'When do you need it?',
  'Anything to trade?',
  'Where does it get delivered?',
  'Where do we send the numbers?',
]

function Choice({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`border px-4 py-3.5 text-left text-[13px] transition-colors duration-200 ${
        selected
          ? 'border-champagne bg-champagne/10 text-foreground'
          : 'border-hairline text-muted-foreground hover:border-foreground/30 hover:text-foreground'
      }`}
    >
      {label}
    </button>
  )
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-3">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <input
        {...props}
        className="border border-hairline bg-transparent px-4 py-3.5 text-[14px] text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/60 focus:border-champagne"
      />
    </label>
  )
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="eyebrow text-muted-foreground">{label}</legend>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">{children}</div>
    </fieldset>
  )
}

export function BuildYourDealModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Answers>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [company, setCompany] = useState('') // honeypot — real users leave blank

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) =>
    setAnswers((prev) => ({ ...prev, [key]: value }))

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(1)
        setAnswers(EMPTY)
        setSubmitted(false)
        setSubmitting(false)
        setError(null)
        setCompany('')
      }, 300)
      return () => clearTimeout(t)
    }
  }, [open])

  if (!open) return null

  const canAdvance = (() => {
    switch (step) {
      case 1:
        return Boolean(answers.brand)
      case 2:
        return Boolean(answers.acquisition)
      case 3:
        return answers.acquisition === 'Cash'
          ? Boolean(answers.budget)
          : Boolean(answers.term && answers.down)
      case 4:
        return Boolean(answers.timing) && (answers.timing !== 'My lease is ending' || Boolean(answers.leaseEndDate))
      case 5:
        return Boolean(answers.hasTrade)
      case 6:
        return Boolean(answers.region)
      case 7:
        return answers.name.trim().length > 1 && answers.phone.trim().length >= 7
      default:
        return false
    }
  })()

  const submit = async () => {
    if (submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/build-deal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...answers, company }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        error?: string
      }
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || 'We couldn’t send that. Please try again or call us.',
        )
      }
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'We couldn’t send that. Please try again or call us.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Build your deal"
      className="fixed inset-0 z-[100] flex items-stretch justify-center overflow-y-auto bg-background/90 backdrop-blur-md md:items-center md:p-6"
    >
      <div className="relative flex w-full max-w-3xl flex-col border-hairline bg-panel md:border">
        {/* progress */}
        <div className="h-px w-full bg-hairline">
          <div
            className="champagne-gradient h-px transition-[width] duration-500"
            style={{ width: submitted ? '100%' : `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between border-b border-hairline px-6 py-5 md:px-10">
          <p className="eyebrow text-champagne">
            {submitted ? 'Received' : `Step ${step} of ${TOTAL_STEPS}`}
          </p>
          <button type="button" onClick={onClose} aria-label="Close" className="p-1">
            <X size={18} strokeWidth={1} />
          </button>
        </div>

        <div className="flex-1 px-6 py-10 md:px-10 md:py-12">
          {submitted ? (
            <div>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none">
                We have it from here.
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground text-pretty">
                A specialist is pulling live availability and lender programs for your{' '}
                {answers.brand === 'Not sure yet — help me choose'
                  ? 'search'
                  : answers.brand}
                . You&apos;ll get real numbers by text{' '}
                <span className="text-foreground">within one business hour</span> — not an estimate
                generated by a form.
              </p>
              <dl className="mt-10 border-t border-hairline">
                {[
                  ['Vehicle', answers.brand],
                  ['Path', answers.acquisition],
                  ['Timing', answers.timing],
                  ['Delivery', answers.region],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-b border-hairline py-3.5">
                    <dt className="eyebrow text-muted-foreground">{k}</dt>
                    <dd className="text-[13px] text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <button
                type="button"
                onClick={onClose}
                className="champagne-gradient eyebrow mt-10 w-full px-8 py-4 text-[#0a0a0c] sm:w-auto"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-none text-balance">
                {STEP_TITLES[step - 1]}
              </h2>

              <div className="mt-10 flex flex-col gap-8">
                {step === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {BRANDS.map((brand) => (
                        <Choice
                          key={brand}
                          label={brand}
                          selected={answers.brand === brand}
                          onClick={() => set('brand', brand)}
                        />
                      ))}
                    </div>
                    <label className="flex flex-col gap-3">
                      <span className="eyebrow text-muted-foreground">
                        Model, spec, colors — optional
                      </span>
                      <textarea
                        rows={3}
                        value={answers.specNotes}
                        onChange={(e) => set('specNotes', e.target.value)}
                        placeholder="911 GT3 Touring, PTS if possible, 6MT"
                        className="border border-hairline bg-transparent px-4 py-3.5 text-[14px] outline-none transition-colors duration-200 placeholder:text-muted-foreground/60 focus:border-champagne"
                      />
                    </label>
                  </>
                )}

                {step === 2 && (
                  <div className="grid gap-2 sm:grid-cols-3">
                    {ACQUISITION.map((option) => (
                      <Choice
                        key={option}
                        label={option}
                        selected={answers.acquisition === option}
                        onClick={() => set('acquisition', option)}
                      />
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <>
                    {answers.acquisition === 'Cash' ? (
                      <Group label="Budget range">
                        {BUDGET.map((option) => (
                          <Choice
                            key={option}
                            label={option}
                            selected={answers.budget === option}
                            onClick={() => set('budget', option)}
                          />
                        ))}
                      </Group>
                    ) : (
                      <>
                        <Group label="Term">
                          {TERMS.map((option) => (
                            <Choice
                              key={option}
                              label={option}
                              selected={answers.term === option}
                              onClick={() => set('term', option)}
                            />
                          ))}
                        </Group>
                        {answers.acquisition === 'Lease' && (
                          <Group label="Miles per year">
                            {MILES.map((option) => (
                              <Choice
                                key={option}
                                label={option}
                                selected={answers.miles === option}
                                onClick={() => set('miles', option)}
                              />
                            ))}
                          </Group>
                        )}
                        <Group label="Money down">
                          {DOWN.map((option) => (
                            <Choice
                              key={option}
                              label={option}
                              selected={answers.down === option}
                              onClick={() => set('down', option)}
                            />
                          ))}
                        </Group>
                      </>
                    )}
                  </>
                )}

                {step === 4 && (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      {TIMING.map((option) => (
                        <Choice
                          key={option}
                          label={option}
                          selected={answers.timing === option}
                          onClick={() => set('timing', option)}
                        />
                      ))}
                    </div>
                    {answers.timing === 'My lease is ending' && (
                      <div className="max-w-xs">
                        <Field
                          label="Lease end date"
                          type="date"
                          value={answers.leaseEndDate}
                          onChange={(e) => set('leaseEndDate', e.target.value)}
                        />
                      </div>
                    )}
                  </>
                )}

                {step === 5 && (
                  <>
                    <div className="grid grid-cols-2 gap-2 sm:max-w-sm">
                      {['Yes', 'No'].map((option) => (
                        <Choice
                          key={option}
                          label={option}
                          selected={answers.hasTrade === option}
                          onClick={() => set('hasTrade', option)}
                        />
                      ))}
                    </div>
                    {answers.hasTrade === 'Yes' && (
                      <div className="grid gap-4 sm:grid-cols-3">
                        <Field
                          label="Year"
                          inputMode="numeric"
                          placeholder="2023"
                          value={answers.tradeYear}
                          onChange={(e) => set('tradeYear', e.target.value)}
                        />
                        <Field
                          label="Make"
                          placeholder="Porsche"
                          value={answers.tradeMake}
                          onChange={(e) => set('tradeMake', e.target.value)}
                        />
                        <Field
                          label="Model"
                          placeholder="Cayenne S"
                          value={answers.tradeModel}
                          onChange={(e) => set('tradeModel', e.target.value)}
                        />
                      </div>
                    )}
                  </>
                )}

                {step === 6 && (
                  <div className="grid gap-2 sm:grid-cols-3">
                    {REGIONS.map((option) => (
                      <Choice
                        key={option}
                        label={option}
                        selected={answers.region === option}
                        onClick={() => set('region', option)}
                      />
                    ))}
                  </div>
                )}

                {step === 7 && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      autoComplete="name"
                      placeholder="Full name"
                      value={answers.name}
                      onChange={(e) => set('name', e.target.value)}
                    />
                    <Field
                      label="Mobile"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(000) 000-0000"
                      value={answers.phone}
                      onChange={(e) => set('phone', e.target.value)}
                    />
                    <div className="sm:col-span-2">
                      <Field
                        label="Email — optional"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={answers.email}
                        onChange={(e) => set('email', e.target.value)}
                      />
                    </div>
                    {/* honeypot — hidden from humans, catches bots */}
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="absolute left-[-9999px] h-0 w-0 opacity-0"
                    />
                    <p className="eyebrow text-muted-foreground leading-[1.8] sm:col-span-2">
                      No credit pull. No payment estimated by a form.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {!submitted && (
          <div className="border-t border-hairline">
            {error && (
              <div
                role="alert"
                className="flex items-start gap-3 border-b border-oxblood/40 bg-oxblood/15 px-6 py-4 md:px-10"
              >
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 bg-oxblood"
                  aria-hidden="true"
                />
                <p className="text-[13px] leading-relaxed text-foreground/90">
                  {error}{' '}
                  <a
                    href="tel:+12125550142"
                    className="text-champagne underline-offset-2 hover:underline"
                  >
                    Or call +1 (212) 555-0142
                  </a>
                </p>
              </div>
            )}
            <div className="flex items-center justify-between gap-4 px-6 py-5 md:px-10">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1 || submitting}
                className="eyebrow text-muted-foreground transition-colors duration-200 hover:text-foreground disabled:opacity-30"
              >
                ← Back
              </button>
              <button
                type="button"
                disabled={!canAdvance || submitting}
                onClick={() => (step === TOTAL_STEPS ? submit() : setStep((s) => s + 1))}
                className="champagne-gradient eyebrow inline-flex items-center gap-2.5 px-8 py-3.5 text-[#0a0a0c] transition-opacity duration-200 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-25"
              >
                {submitting && (
                  <span
                    className="h-3 w-3 animate-spin rounded-full border border-[#0a0a0c]/30 border-t-[#0a0a0c]"
                    aria-hidden="true"
                  />
                )}
                {step === TOTAL_STEPS
                  ? submitting
                    ? 'Sending…'
                    : 'Send it →'
                  : 'Continue →'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
