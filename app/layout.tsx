import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/site";
import { AutoDealerJsonLd } from "@/components/json-ld";
import { SiteFooter, SiteHeader } from "@/components/chrome/SiteChrome";
import { ScrollRestoration } from "@/components/chrome/ScrollRestoration";
import "@/styles/styles.css";
import "@/styles/editorial.css";
import "@/styles/showroom.css";
import "@/styles/narrative.css";
import "@/styles/refinement.css";
import "@/styles/materials.css";
import "@/styles/oto.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "OTO Motors — Luxury & Exotic Car Leasing, New York & Fort Lauderdale",
    template: "%s | OTO Motors",
  },
  description:
    "Independent luxury and exotic car brokerage. We source the car, structure the lease, finance or cash purchase, and deliver it — across New York and Florida.",
  applicationName: "OTO Motors",
  openGraph: {
    type: "website",
    siteName: "OTO Motors",
    url: SITE.url,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0f1512",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/assets/jost-light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <AutoDealerJsonLd />
        {/* Must run before the browser's own restoration decision for this
            load (B-2/B-3) - a useEffect runs too late to stop a reload from
            jumping to a prior scroll position. scrollRestoration is sticky
            per history entry, so setting it here on every load keeps it
            'manual' for the next one too. <ScrollRestoration> (in body)
            handles the back/forward half this disables. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if('scrollRestoration' in history){history.scrollRestoration='manual'}",
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollRestoration />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
