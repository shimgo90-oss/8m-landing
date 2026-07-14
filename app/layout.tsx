import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

// GA4 measurement ID. One property tracks all pages (/, /landing, /lp/*) so
// landing variants can be compared by page path. Override via env if it changes.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-JK6D1ZR0YQ";

// PostHog — the single home for behavioural data (session replay, heatmaps, funnels).
// It replaces Microsoft Clarity, which was retired when we consolidated on PostHog.
//
// SAME project as the product app (the free plan allows only one). The landing is kept
// separable by a `site: "landing"` super property on every event — filter on it to see
// landing-only numbers, and EXCLUDE it when you want product-app-only numbers.
// Override via env if the project ever changes.
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_sH5sriLgFM2ghdYP5BymAJtxFxuk4zmESem4qfiSKRUM";
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

// Public domain for canonical + OG image URLs. Override via NEXT_PUBLIC_SITE_URL
// (e.g. when a custom domain is attached).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://8mirrors-global.vercel.app";
const TITLE = "8mirrors | K-Skincare Matchmaker";
const DESC = "A complete 5-step skincare routine, built for your exact skin by Seoul experts. Any skin type. Shipped worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    siteName: "8mirrors",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
      <GoogleAnalytics gaId={GA_ID} />
      {POSTHOG_KEY && (
        <Script id="posthog" strategy="afterInteractive">
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister identify alias reset group setPersonProperties getFeatureFlag isFeatureEnabled onFeatureFlags reloadFeatureFlags startSessionRecording stopSessionRecording get_distinct_id get_session_id get_session_replay_url opt_in_capturing opt_out_capturing has_opted_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init("${POSTHOG_KEY}", {
            api_host: "${POSTHOG_HOST}",
            defaults: "2026-05-30",
            person_profiles: "identified_only"
          });
          posthog.register({ site: "landing" });`}
        </Script>
      )}
    </html>
  );
}
