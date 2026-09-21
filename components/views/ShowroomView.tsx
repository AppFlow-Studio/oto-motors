"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  SHOWROOM_INTRO,
  SHOWROOM_MARQUE_LINKS,
  SHOWROOM_MODELS,
  type ShowroomModel,
} from "@/content/showroom";

const BODY_TYPES = ["Coupe", "Sedan", "SUV"] as const;

export function ShowroomView() {
  const brands = useMemo(
    () => [...new Set(SHOWROOM_MODELS.map((m) => m.brand))].sort(),
    [],
  );
  const [search, setSearch] = useState("");
  const [marque, setMarque] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [sort, setSort] = useState<"featured" | "brand" | "model">("featured");
  const [active, setActive] = useState<ShowroomModel | null>(null);

  const visible = useMemo(() => {
    let list = SHOWROOM_MODELS.filter((m) => {
      const q = search.trim().toLowerCase();
      const matchQ = !q || `${m.brand} ${m.model}`.toLowerCase().includes(q);
      const matchBrand = !marque || m.brand === marque;
      const matchBody = !bodyType || m.body === bodyType;
      return matchQ && matchBrand && matchBody;
    });
    if (sort !== "featured") {
      list = [...list].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return list;
  }, [search, marque, bodyType, sort]);

  function reset() {
    setSearch("");
    setMarque("");
    setBodyType("");
    setSort("featured");
  }

  function inquiryHref(m: ShowroomModel) {
    const car =
      m.brand === "Range Rover" ? m.model : `${m.brand} ${m.model}`;
    return `/build-your-deal?car=${encodeURIComponent(car)}`;
  }

  function brandHref(m: ShowroomModel) {
    return `/${m.brand.toLowerCase().replaceAll(" ", "-")}`;
  }

  return (
    <>
      <main className="catalog-layout" id="catalog">
        <aside className="filter-sidebar">
          <div className="sidebar-photo" />
          <details className="filter-panel" open>
            <summary>
              Refine your search <span aria-hidden="true">+</span>
            </summary>
            <div className="filter-body">
              <label htmlFor="search">
                Find a model
                <input
                  autoComplete="off"
                  id="search"
                  placeholder="Make or model"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
              <label htmlFor="marque">
                Marque
                <select
                  id="marque"
                  value={marque}
                  onChange={(e) => setMarque(e.target.value)}
                >
                  <option value="">All marques</option>
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="body-type">
                Body style
                <select
                  id="body-type"
                  value={bodyType}
                  onChange={(e) => setBodyType(e.target.value)}
                >
                  <option value="">All body styles</option>
                  {BODY_TYPES.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
              <button className="reset-filters" type="button" onClick={reset}>
                Reset filters <span aria-hidden="true">↺</span>
              </button>
              <p>
                Models to explore.
                <br />
                Availability and terms are confirmed for each inquiry.
              </p>
            </div>
          </details>
          <div className="sidebar-bottom">
            <span>NEW YORK / FLORIDA</span>
            <p>
              Your preference.
              <br />
              Our attention.
            </p>
          </div>
        </aside>

        <section className="catalog-content">
          <div className="catalog-intro">
            <span className="section-tag">{SHOWROOM_INTRO.tag}</span>
            <h1>{SHOWROOM_INTRO.heading}</h1>
            <p>
              Explore the cars. Tell us what you have in mind.
              <br />
              We’ll establish availability and structure the next steps.
            </p>
          </div>
          <div className="catalog-toolbar">
            <p aria-live="polite" id="result-count" role="status">
              {visible.length} {visible.length === 1 ? "model" : "models"} to
              explore
            </p>
            <label htmlFor="sort">
              Sort by
              <select
                id="sort"
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value as "featured" | "brand" | "model")
                }
              >
                <option value="featured">Featured</option>
                <option value="brand">Marque, A–Z</option>
                <option value="model">Model, A–Z</option>
              </select>
            </label>
          </div>

          <div className="catalog-grid" id="catalog-grid">
            {visible.map((m) => (
              <article className="model-card" key={`${m.brand}-${m.model}`}>
                <button
                  className="model-visual"
                  type="button"
                  aria-label={`Quick view ${m.brand} ${m.model}`}
                  onClick={() => setActive(m)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`${m.brand} ${m.model} — illustrative ${m.detail ? "detail" : "photograph"}`}
                    loading="lazy"
                    src={`/assets/${m.image}`}
                  />
                  <span className="model-tag">
                    {m.detail ? "Detail study" : m.body}
                  </span>
                </button>
                <div className="model-info">
                  <div>
                    <span>{m.brand}</span>
                    <h2>{m.model}</h2>
                  </div>
                  <button
                    className="quick-view"
                    type="button"
                    aria-label={`Quick view ${m.brand} ${m.model}`}
                    onClick={() => setActive(m)}
                  >
                    Quick view
                  </button>
                </div>
                <p>
                  {m.brand === "Bugatti"
                    ? "Individual sourcing inquiry"
                    : "Availability on inquiry"}
                </p>
              </article>
            ))}
          </div>

          <div className="catalog-empty" hidden={visible.length > 0}>
            <h2>No matching models.</h2>
            <p>
              Try another marque or clear your filters. You can also ask us about
              a model outside this selection.
            </p>
            <Link className="text-link" href="/build-your-deal">
              Tell us the car
            </Link>
          </div>

          <p className="catalog-note">
            Illustrative photography and films. This is a model guide, not a live
            inventory feed. No vehicle availability, payment, or approval is
            guaranteed.
          </p>
        </section>
      </main>

      <section className="wrap section marque-links">
        <h2>Ten individual perspectives.</h2>
        <div className="marque-link-grid">
          {SHOWROOM_MARQUE_LINKS.map((link) => (
            <Link className="marque-link-card" href={link.href} key={link.href}>
              <div
                aria-hidden="true"
                className="line-study marque-link-draw"
                data-line-art={link.lineArt}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" loading="lazy" src={link.lineArt} />
              </div>
              <span className="marque-link-label">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <dialog
        id="model-dialog"
        open={!!active}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
      >
        {active ? (
          <>
            <button
              className="model-close"
              type="button"
              aria-label="Close model details"
              onClick={() => setActive(null)}
            >
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="model-photo"
              alt={`${active.brand} ${active.model} illustrative ${active.detail ? "detail" : "photograph"}`}
              src={`/assets/${active.image}`}
            />
            <div className="model-dialog-copy">
              <span className="section-tag">{active.brand}</span>
              <h2>{active.model}</h2>
              <p>{active.description}</p>
              <dl>
                <div>
                  <dt>Body style</dt>
                  <dd>{active.body}</dd>
                </div>
                <div>
                  <dt>Availability</dt>
                  <dd>Confirmed on inquiry</dd>
                </div>
                <div>
                  <dt>Terms</dt>
                  <dd>Individually arranged</dd>
                </div>
              </dl>
              <Link className="text-link" href={brandHref(active)}>
                Explore the marque
              </Link>
              <Link className="button" href={inquiryHref(active)}>
                <span className="direction-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h15m-6-6 6 6-6 6" />
                  </svg>
                </span>
                Inquire about this model
              </Link>
              <p className="small">
                Illustrative imagery. Your inquiry is reviewed and downloaded
                locally; sending to Oto is not connected in this preview.
              </p>
            </div>
          </>
        ) : null}
      </dialog>
    </>
  );
}
