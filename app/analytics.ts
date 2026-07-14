// PostHog event helper (client-side).
//
// PostHog is loaded via the official snippet in app/layout.tsx — no npm dependency,
// so `window.posthog` is what we talk to. It may be absent (env key not set, script
// blocked, or during SSR); every call here is a no-op in that case. Analytics must
// never break the page.
//
// Autocapture already records pageviews and raw clicks. These named events exist so
// the conversion funnel is readable without reverse-engineering DOM selectors:
//   cta_click  → someone tapped a CTA (which one: `location`; where to: `href`)
//   purchase   → Stripe checkout completed (fired on /thank-you)

type PostHog = {
  capture: (event: string, properties?: Record<string, unknown>) => void;
  register: (properties: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    posthog?: PostHog;
  }
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.posthog?.capture(event, properties);
}

/** `location` = which CTA surface was tapped (hero / bottom / sticky-bar / offer …). */
export function trackCta(location: string, href?: string) {
  track("cta_click", { location, href });
}
