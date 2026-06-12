"use client";

import { LandingExperience } from "./page";

/* ───────────────────────── shared bits ───────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-body"
      style={{ color: "var(--color-mid-gray)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
    >
      {children}
    </span>
  );
}

function PhotoBox({ label, height = 320, caption }: { label?: string; height?: number; caption?: string }) {
  return (
    <div className="w-full">
      <div
        className="w-full rounded-2xl flex items-center justify-center"
        style={{ height, backgroundColor: "#ece9e2" }}
      >
        <span className="font-body" style={{ color: "#b6b1a6", fontSize: 18, fontWeight: 500 }}>
          {label ?? "[ photo ]"}
        </span>
      </div>
      {caption && (
        <p className="mt-2 text-center font-body" style={{ color: "var(--color-mid-gray)", fontSize: 13, lineHeight: 1.4 }}>
          {caption}
        </p>
      )}
    </div>
  );
}

const SECTION = "flex flex-col px-6";

/* ───────────────────────── 1. Hero ───────────────────────── */

function RednessHero() {
  return (
    <section className={`${SECTION} items-center text-center`} style={{ paddingTop: 112, paddingBottom: 44 }}>
      <h1
        className="font-display text-charcoal"
        style={{ fontSize: "clamp(28px, 7.5vw, 38px)", lineHeight: 1.16, fontWeight: 500, letterSpacing: "-0.015em", maxWidth: 440 }}
      >
        Calm your redness —{" "}
        <span className="text-midnight" style={{ background: "var(--color-lumen-lime)", padding: "0 6px", borderRadius: 4 }}>
          for good
        </span>{" "}
        this time
      </h1>
      <p className="mt-4 text-mid-gray font-body" style={{ fontSize: 15, lineHeight: 1.55, maxWidth: 340 }}>
        A skincare routine matched to your skin, with a tracker that shows your redness fading week by week
      </p>
      <div className="mt-7 w-full" style={{ maxWidth: 420 }}>
        <PhotoBox height={360} />
      </div>
    </section>
  );
}

/* ───────────────────────── 2. Price / product ───────────────────────── */

function RednessPrice() {
  return (
    <section className={SECTION} style={{ paddingTop: 28, paddingBottom: 28 }}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-body text-charcoal" style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>
            The Redness Routine Box
          </div>
          <div className="font-display text-charcoal" style={{ fontSize: 34, fontWeight: 500, lineHeight: 1.1, marginTop: 2 }}>
            $79
          </div>
        </div>
        <span
          className="font-body text-charcoal"
          style={{ background: "var(--color-mirror-cyan-subtle)", color: "#111111", fontSize: 13, fontWeight: 600, lineHeight: 1.35, padding: "10px 14px", borderRadius: 10, maxWidth: 190 }}
        >
          Includes skin report + tracking sheet
        </span>
      </div>
    </section>
  );
}

/* ───────────────────────── 3. Before / after ───────────────────────── */

function RednessBeforeAfter() {
  return (
    <section className={SECTION} style={{ paddingTop: 36, paddingBottom: 36 }}>
      <Eyebrow>Before / after</Eyebrow>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <PhotoBox height={150} caption="Week 1 — redness flare" />
        <PhotoBox height={150} caption="Week 8 — calmer skin" />
      </div>
      <p className="mt-5 text-center font-display text-charcoal" style={{ fontSize: 21, fontWeight: 500, lineHeight: 1.25 }}>
        Based on real redness-prone customer journeys
      </p>
    </section>
  );
}

/* ───────────────────────── 4. What's inside ───────────────────────── */

function DropletIcon() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3c3 4 6 7 6 10a6 6 0 0 1-12 0c0-3 3-6 6-10Z" stroke="#62d8f4" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function PatchIcon() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="9" width="16" height="6" rx="3" stroke="#242424" strokeWidth="1.6" />
      <path d="M12 9v6" stroke="#242424" strokeWidth="1.6" />
    </svg>
  );
}
function ReportIcon() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="3.5" width="14" height="17" rx="2" stroke="#62d8f4" strokeWidth="1.6" />
      <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4" stroke="#62d8f4" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function TrackerIcon() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="4.5" width="14" height="16" rx="2" stroke="#242424" strokeWidth="1.6" />
      <rect x="9" y="2.5" width="6" height="4" rx="1.4" stroke="#242424" strokeWidth="1.6" />
      <path d="M8.5 11l1.6 1.6 3-3" stroke="#242424" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const INSIDE = [
  { Icon: DropletIcon, title: "Soothing serum", sub: "Matched to your skin" },
  { Icon: PatchIcon, title: "Calming patches", sub: "For active redness" },
  { Icon: ReportIcon, title: "Skin report", sub: "Your redness score, explained" },
  { Icon: TrackerIcon, title: "Routine tracker", sub: "Log your progress daily" },
];

function RednessWhatsInside() {
  return (
    <section className={SECTION} style={{ paddingTop: 36, paddingBottom: 36 }}>
      <Eyebrow>What&apos;s inside</Eyebrow>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {INSIDE.map((it) => (
          <div
            key={it.title}
            className="flex flex-col items-center text-center rounded-2xl bg-white"
            style={{ padding: "22px 14px", boxShadow: "var(--shadow-card)" }}
          >
            <it.Icon />
            <div className="mt-3 font-body text-charcoal" style={{ fontSize: 14, fontWeight: 600 }}>
              {it.title}
            </div>
            <div className="mt-1 font-body text-mid-gray" style={{ fontSize: 12.5, lineHeight: 1.4 }}>
              {it.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── 5. Tracker chart ───────────────────────── */

const BARS = [88, 78, 67, 57, 47, 39, 31, 23];

function RednessTracker() {
  return (
    <section className={SECTION} style={{ paddingTop: 36, paddingBottom: 36 }}>
      <Eyebrow>Track your skin, week by week</Eyebrow>
      <div className="mt-4 rounded-2xl bg-white" style={{ padding: 20, boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-baseline justify-between">
          <span className="font-display text-charcoal" style={{ fontSize: 22, fontWeight: 500 }}>
            Redness score
          </span>
          <span className="font-body text-mid-gray" style={{ fontSize: 13, fontWeight: 500 }}>
            Week 1 → Week 8
          </span>
        </div>
        <div className="mt-5 flex items-end justify-between" style={{ height: 96, gap: 8 }}>
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md"
              style={{ height: `${h}%`, background: i === BARS.length - 1 ? "var(--color-mirror-cyan)" : "#d9d6cf" }}
            />
          ))}
        </div>
        <p className="mt-4 font-body text-mid-gray" style={{ fontSize: 13, lineHeight: 1.5 }}>
          Daily check-ins go in your tracking sheet — see your redness drop in real numbers
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── 6. How it works ───────────────────────── */

const STEPS = [
  "Order your box, then snap a quick selfie",
  "We build your soothing routine + report",
  "Log your routine daily and watch redness fade",
];

function RednessHowItWorks() {
  return (
    <section className={SECTION} style={{ paddingTop: 36, paddingBottom: 36 }}>
      <Eyebrow>How it works</Eyebrow>
      <ol className="mt-4 flex flex-col" style={{ gap: 18 }}>
        {STEPS.map((s, i) => (
          <li key={i} className="flex items-center" style={{ gap: 14 }}>
            <span
              className="shrink-0 flex items-center justify-center rounded-full font-body text-mid-gray"
              style={{ width: 28, height: 28, background: "var(--color-canvas)", fontSize: 13, fontWeight: 700, boxShadow: "var(--shadow-input-ring)" }}
            >
              {i + 1}
            </span>
            <span className="font-body text-charcoal" style={{ fontSize: 15, lineHeight: 1.4 }}>
              {s}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ───────────────────────── 7. No brand bias ───────────────────────── */

const STATS = [
  { big: "682+", sub: "customers analyzed" },
  { big: "$0", sub: "paid by brands to be picked" },
];

function RednessNoBias() {
  return (
    <section className={SECTION} style={{ paddingTop: 36, paddingBottom: 36 }}>
      <Eyebrow>No brand bias</Eyebrow>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {STATS.map((s) => (
          <div
            key={s.sub}
            className="flex flex-col items-center text-center rounded-2xl bg-white"
            style={{ padding: "24px 14px", boxShadow: "var(--shadow-card)" }}
          >
            <div className="font-display text-charcoal" style={{ fontSize: 30, fontWeight: 500, lineHeight: 1 }}>
              {s.big}
            </div>
            <div className="mt-2 font-body text-mid-gray" style={{ fontSize: 12.5, lineHeight: 1.4 }}>
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── 8. Reviews ───────────────────────── */

function RednessReviews() {
  return (
    <section className={SECTION} style={{ paddingTop: 36, paddingBottom: 56 }}>
      <Eyebrow>Reviews</Eyebrow>
      <div className="mt-4 rounded-2xl bg-white" style={{ padding: 22, boxShadow: "var(--shadow-card)" }}>
        <p className="font-body text-charcoal" style={{ fontSize: 16, lineHeight: 1.55 }}>
          &ldquo;the tracking sheet kept me honest, by week 5 i could literally see my redness score drop. no more guessing&rdquo;
        </p>
        <p className="mt-4 font-body text-mid-gray" style={{ fontSize: 13 }}>
          — verified buyer, Bellevue WA
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── variant entry ─────────────────────────
   Reuses the shared shell (header + scroll + buy bar) from LandingExperience;
   only the in-between sections are this product-led "Redness Box" layout. */
export default function RednessLanding() {
  return (
    <LandingExperience>
      <RednessHero />
      <RednessPrice />
      <RednessBeforeAfter />
      <RednessWhatsInside />
      <RednessTracker />
      <RednessHowItWorks />
      <RednessNoBias />
      <RednessReviews />
    </LandingExperience>
  );
}
