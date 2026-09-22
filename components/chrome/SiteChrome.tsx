"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { FOOTER_LINKS, MARQUES_NAV, NAV, SERVICES } from "@/content/site";
import { DirectionMark } from "@/components/ui/OtoAction";
import { BrandMark } from "@/components/brand-mark";

type PanelPos = { top: number; left: number; align: "left" | "right" };

function FrostMenu({
  id,
  label,
  href,
  align = "left",
  wide,
  children,
}: {
  id: string;
  label: string;
  href?: string;
  align?: "left" | "right";
  wide?: boolean;
  children: ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<PanelPos | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setOpen(false);
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, [pathname]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  const place = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      // Overlap trigger slightly — bridge covers the hover gap to the portaled panel
      top: r.bottom - 6,
      left: align === "right" ? r.right : r.left,
      align,
    });
  }, [align]);

  const keepOpen = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
    place();
  }, [place]);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, 520);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    place();
    const onScroll = () => place();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [open, place]);

  const panel =
    mounted &&
    open &&
    pos &&
    createPortal(
      <div
        id={id}
        className={`nav-frost-panel${wide ? " is-wide" : ""}`}
        style={{
          top: pos.top,
          left: pos.align === "right" ? "auto" : pos.left,
          right: pos.align === "right" ? window.innerWidth - pos.left : "auto",
        }}
        onMouseEnter={keepOpen}
        onMouseLeave={scheduleClose}
      >
        {children}
      </div>,
      document.body,
    );

  return (
    <div
      ref={wrapRef}
      className={href ? "marque-menu" : "service-menu"}
      onMouseEnter={keepOpen}
      onMouseLeave={scheduleClose}
    >
      {href ? (
        <Link
          href={href}
          aria-expanded={open}
          aria-controls={id}
          onFocus={keepOpen}
        >
          {label}
        </Link>
      ) : (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => {
            if (open) scheduleClose();
            else keepOpen();
          }}
          onFocus={keepOpen}
        >
          {label}
        </button>
      )}
      {panel}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <Link className="logo oto-brand" href="/" aria-label="OTO Motors home">
        <BrandMark className="brand-mark" />
        <span className="brand-word">
          OTO<em>MOTORS</em>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        {NAV.map((item) =>
          item.href === "/brands" ? (
            <FrostMenu key={item.href} id="marque-menu" label={item.label} href={item.href} wide>
              {MARQUES_NAV.map((marque) => (
                <Link key={marque.href} href={marque.href}>
                  {marque.label}
                </Link>
              ))}
            </FrostMenu>
          ) : (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ),
        )}
        <FrostMenu id="service-menu" label="Services" align="right">
          {SERVICES.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </FrostMenu>
      </nav>
      <Link className="nav-cta oto-action" href="/build-your-deal">
        <DirectionMark />
        <span className="oto-action-label">Build your deal</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <div className="mobile-nav" id="mobile-nav" hidden={!menuOpen}>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        {MARQUES_NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        {SERVICES.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="wrap">
      <Link aria-label="OTO Motors home" className="logo oto-brand" href="/">
        <BrandMark className="brand-mark" />
        <span className="brand-word">
          OTO<em>MOTORS</em>
        </span>
      </Link>
      <div className="footer-links">
        {FOOTER_LINKS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <p>
        Exotic &amp; luxury car leasing
        <br />
        New York · Florida
      </p>
      <span>© 2026 Oto Motors</span>
    </footer>
  );
}
