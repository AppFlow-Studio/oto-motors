"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FOOTER_LINKS, NAV, SERVICES } from "@/content/site";
import { DirectionMark } from "@/components/ui/OtoAction";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setServiceOpen(false);
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
        {NAV.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <div className="service-menu">
          <button
            type="button"
            aria-expanded={serviceOpen}
            aria-controls="service-menu"
            onClick={() => setServiceOpen((v) => !v)}
          >
            Services
          </button>
          <div id="service-menu" hidden={!serviceOpen}>
            {SERVICES.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setServiceOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
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
