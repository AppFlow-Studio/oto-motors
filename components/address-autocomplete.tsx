'use client'

import { useEffect, useRef, useState } from 'react'

// Public browser key. Restrict it by HTTP referrer in Google Cloud and enable
// the "Places API (New)". When it is absent the field degrades to a plain
// text input, so the form keeps working without any Google dependency.
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

// Load the Google Maps JS API once and hand back the `google.maps.places`
// namespace. Memoized at module scope so multiple fields share one script.
// We use the documented `callback` param (fires only once the library is
// fully ready) rather than the script's onload — a plain <script> tag does
// not install `google.maps.importLibrary`, so we read the classes directly.
const READY_CB = '__otoGmapsReady'
let placesLoader: Promise<any> | null = null
function loadPlaces(): Promise<any> {
  if (placesLoader) return placesLoader
  placesLoader = new Promise((resolve, reject) => {
    if (!API_KEY) return reject(new Error('Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'))
    const w = window as any
    if (w.google?.maps?.places?.AutocompleteSuggestion) {
      return resolve(w.google.maps.places)
    }
    w[READY_CB] = () => resolve(w.google.maps.places)
    if (document.getElementById('gmaps-js')) return // script already appended; callback will fire
    const s = document.createElement('script')
    s.id = 'gmaps-js'
    s.async = true
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      API_KEY,
    )}&v=weekly&loading=async&libraries=places&callback=${READY_CB}`
    s.onerror = () => reject(new Error('Google Maps failed to load'))
    document.head.appendChild(s)
  })
  return placesLoader
}

type Suggestion = { text: string; id: string }

/**
 * A text input backed by Google Places Autocomplete (Places API New).
 * Renders a real <input name={name}> so it submits with the surrounding
 * form via FormData, plus a custom, on-brand suggestion dropdown.
 */
export function AddressAutocomplete({
  id,
  name = 'location',
  required,
  placeholder,
  className,
  wrapperClassName,
}: {
  id?: string
  name?: string
  required?: boolean
  placeholder?: string
  className?: string
  wrapperClassName?: string
}) {
  const enabled = Boolean(API_KEY)
  const [value, setValue] = useState('')
  const [items, setItems] = useState<Suggestion[]>([])
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const [error, setError] = useState<string | null>(null)
  const placesRef = useRef<any>(null)
  const tokenRef = useRef<any>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!enabled) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => {
      document.removeEventListener('mousedown', onDown)
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [enabled])

  function ensureLoaded() {
    if (!enabled || placesRef.current) return
    loadPlaces()
      .then((lib) => {
        placesRef.current = lib
      })
      .catch(() => {})
  }

  async function fetchSuggestions(q: string) {
    if (q.trim().length < 2) {
      setItems([])
      setOpen(false)
      setError(null)
      return
    }
    // Ensure the library is ready even if this is the very first keystroke.
    let lib = placesRef.current
    if (!lib) {
      try {
        lib = await loadPlaces()
        placesRef.current = lib
      } catch (err) {
        console.warn('[address-autocomplete] Google Maps failed to load:', err)
        setError('Address lookup is unavailable right now.')
        setOpen(true)
        return
      }
    }
    const { AutocompleteSuggestion, AutocompleteSessionToken } = lib
    if (!tokenRef.current) tokenRef.current = new AutocompleteSessionToken()
    try {
      const res: any = await AutocompleteSuggestion.fetchAutocompleteSuggestions({
        input: q,
        sessionToken: tokenRef.current,
        includedRegionCodes: ['us'],
      })
      const next: Suggestion[] = (res?.suggestions ?? [])
        .map((s: any) => s.placePrediction)
        .filter(Boolean)
        .map((p: any) => ({ text: p.text?.text ?? '', id: p.placeId ?? p.text?.text ?? '' }))
        .filter((s: Suggestion) => s.text)
      setError(null)
      setItems(next)
      setOpen(next.length > 0)
      setActive(-1)
    } catch (err) {
      // Surface the real reason (e.g. Places API New not enabled, referrer block).
      console.warn('[address-autocomplete] Places request failed:', err)
      setError('Address lookup failed. Check that "Places API (New)" is enabled and the key allows this domain.')
      setItems([])
      setOpen(true)
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value
    setValue(q)
    if (!enabled) return
    ensureLoaded()
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchSuggestions(q), 180)
  }

  function pick(s: Suggestion) {
    setValue(s.text)
    setItems([])
    setOpen(false)
    setActive(-1)
    // A selection closes the billing session; the next keystroke starts a new one.
    tokenRef.current = null
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || items.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => (i + 1) % items.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => (i <= 0 ? items.length - 1 : i - 1))
    } else if (e.key === 'Enter' && active >= 0) {
      e.preventDefault()
      pick(items[active])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const listId = `${id ?? name}-listbox`

  return (
    <div ref={rootRef} className={wrapperClassName ?? 'relative'}>
      <input
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        onFocus={ensureLoaded}
        onKeyDown={onKeyDown}
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
      />
      {open && items.length > 0 ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 max-h-72 overflow-auto border border-t-0 border-foreground bg-background"
        >
          {items.map((s, i) => (
            <li key={`${s.id}-${i}`} role="option" aria-selected={i === active}>
              <button
                type="button"
                onClick={() => pick(s)}
                onMouseEnter={() => setActive(i)}
                className={`block w-full px-3 py-2.5 text-left font-data text-sm ${
                  i === active ? 'bg-foreground text-background' : 'bg-background text-foreground'
                }`}
              >
                {s.text}
              </button>
            </li>
          ))}
          <li className="border-t border-foreground/20 px-3 py-1.5 text-right">
            <span className="font-data text-[0.5625rem] uppercase tracking-wider text-muted-foreground">
              Powered by Google
            </span>
          </li>
        </ul>
      ) : null}
      {open && error ? (
        <p className="absolute left-0 right-0 top-full z-20 border border-t-0 border-foreground bg-background px-3 py-2 font-data text-[0.6875rem] leading-relaxed text-muted-foreground">
          {error}
        </p>
      ) : null}
    </div>
  )
}
