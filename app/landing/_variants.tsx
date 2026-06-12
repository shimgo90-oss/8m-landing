import type { ComponentType } from "react";
import type { SectionKey } from "./page";
import RednessLanding from "./_variant-redness";

/* ───────────────────────── Landing A/B variants ─────────────────────────
   Each variant is its own URL: /lp/<slug>  (e.g. /lp/original, /lp/lean).
   Point the SAME ad at different slugs and compare conversion.

   A variant = an ordered list of section keys. The shell (header, scroll,
   buy bar) is shared, so the only thing that differs is what sections show
   and in what order — a clean structural A/B test with zero copy rewrites.

   Available sections:
     hero · what-you-get · report-archive · team · stories · offer · footer

   To add a message/positioning test (different hero copy per variant),
   we extend Variant with a `copy` override — ask 고고 for the wording first. */

export type Variant = {
  slug: string;
  label: string; // internal name (not shown to users)
  note: string; // the hypothesis this arm tests
  sections?: SectionKey[]; // structural variant: reuse shared sections
  Custom?: ComponentType; // fully custom layout variant (own sections, shared shell)
};

export const VARIANTS: Variant[] = [
  {
    slug: "original",
    label: "Original — full",
    note: "Baseline. The full narrative landing exactly as shipped at /landing.",
    sections: ["hero", "what-you-get", "report-archive", "team", "stories", "offer", "footer"],
  },
  {
    slug: "lean",
    label: "Lean — fast to CTA",
    note: "Hypothesis: a shorter page that reaches the offer faster converts better on paid traffic.",
    sections: ["hero", "what-you-get", "offer", "footer"],
  },
  {
    slug: "redness",
    label: "Redness Box — product-led",
    note: "Short, product-first layout: concern (redness) → box + price → before/after → what's inside → tracker → how it works → no-bias proof → review. Shared header/buy bar.",
    Custom: RednessLanding,
  },
];

export const VARIANT_MAP: Record<string, Variant> = Object.fromEntries(
  VARIANTS.map((v) => [v.slug, v])
);
