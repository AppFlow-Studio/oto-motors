"use client";

import { useEffect } from "react";

const KEY_PREFIX = "oto:scrollY:";

/**
 * B-2/B-3: the browser's native scrollRestoration ("auto") restores the
 * previous scroll offset on a plain reload, not just on back/forward - that
 * was one of the two ways brand pages landed away from the top. Turning it
 * off ("manual") fixes reload, but also silently disables the browser's own
 * back/forward restoration, so this restores that half itself, keyed by
 * pathname in sessionStorage (deliberately not history.state, so it can't
 * collide with whatever Next's own router stores there).
 */
export function ScrollRestoration() {
  useEffect(() => {
    if (!("scrollRestoration" in history)) return;
    history.scrollRestoration = "manual";

    let raf = 0;
    function saveScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        try {
          sessionStorage.setItem(KEY_PREFIX + location.pathname, String(window.scrollY));
        } catch {
          /* sessionStorage unavailable (private mode, etc.) - restoration just no-ops */
        }
      });
    }

    function onPopState() {
      // Let Next finish swapping the new route's content in before we
      // measure/scroll against it, or we'd be scrolling the old page.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          let saved: string | null = null;
          try {
            saved = sessionStorage.getItem(KEY_PREFIX + location.pathname);
          } catch {
            /* ignore */
          }
          window.scrollTo(0, saved ? Number(saved) : 0);
        });
      });
    }

    // Same-page hash links (e.g. "Discover the models" -> #models) used to
    // animate via the global `scroll-behavior:smooth` on <html>. That CSS
    // rule is what let Next's internal route-transition scrollIntoView
    // calls hijack the page (B-2/B-3's real cause - see styles/oto.css), so
    // it's off now; this restores just the in-page hash-link case in JS,
    // scoped to only same-page jumps.
    function onClick(e: MouseEvent) {
      const link = (e.target as Element)?.closest?.("a[href^='#']");
      if (!link) return;
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
      history.replaceState(history.state, "", `#${id}`);
    }

    addEventListener("scroll", saveScroll, { passive: true });
    addEventListener("popstate", onPopState);
    // Capture phase: must run before next/link's own bubble-phase click
    // handler, or it pushes the #hash itself first and the native (instant)
    // hash-jump happens before we ever get a chance to preventDefault it.
    addEventListener("click", onClick, true);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", saveScroll);
      removeEventListener("popstate", onPopState);
      removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
