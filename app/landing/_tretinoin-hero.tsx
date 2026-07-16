"use client";

import Image from "next/image";
import { LandingExperience } from "./page";

const QUIZ_URL = "/tret-support-quiz";

const HOW_STEPS = [
  {
    number: "01",
    title: "Diagnosis.",
    body: "Tell us how long you’ve used tretinoin and how your skin feels right now. A one-minute check helps us understand the support your barrier needs.",
    image: "/lp/tretinoin/how-diagnosis-v1.png",
    alt: "A visual skin check for dryness, irritation, and peeling",
  },
  {
    number: "02",
    title: "Build your own.",
    body: "We build a personalized cleanser, moisturizer, and sunscreen routine focused on supporting your barrier around tretinoin.",
    image: "/lp/tretinoin/how-build-v1.png",
    alt: "A cleanser, moisturizer, and sunscreen selected for one routine",
  },
  {
    number: "03",
    title: "Deliver.",
    body: "Your three K-beauty essentials arrive together in an 8mirrors routine box, ready to fit around the tretinoin you already use.",
    image: "/lp/tretinoin/how-deliver-v1.png",
    alt: "A white 8mirrors routine box ready for delivery",
  },
] as const;

const CUSTOMER_STORIES = [
  {
    who: "ma**** · 22 · USA",
    quote: "Switched my toner and the redness was gone in 3 weeks.",
    before: "/reviews/r1-before.jpg",
    after: "/reviews/r1-after.jpg",
  },
  {
    who: "je** · 31 · UK",
    quote: "My breakouts slowed down and my skin feels calm.",
    before: "/reviews/r2-before.jpeg",
    after: "/reviews/r2-after.jpeg",
  },
  {
    who: "so**** · 28 · USA",
    quote: "My texture smoothed out and my skin looks even now.",
    before: "/reviews/r3-before.jpg",
    after: "/reviews/r3-after.jpeg",
  },
] as const;

function TrustIcon({ kind }: { kind: "medical" | "tret" | "kbeauty" }) {
  if (kind === "medical") {
    return (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
        <path d="M17 5.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 28c.7-6.1 4-9.1 10-9.1s9.3 3 10 9.1H7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M25.5 5v6M22.5 8h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "tret") {
    return (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
        <path d="M17 28S6 21.3 6 13.1C6 8 12.5 5.7 17 11c4.5-5.3 11-3 11 2.1C28 21.3 17 28 17 28Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
      <path d="m6 24 6.2-6.2 5 3.8L28 10.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.5 10.8H28v5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 28h22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function TretinoinHeroLanding() {
  return (
    <LandingExperience
      copy={{
        "bar.cta": "Get started",
        "bar.href": QUIZ_URL,
      }}
    >
      <section
        className="flex min-h-[100dvh] flex-col bg-white px-4"
        aria-labelledby="tretinoin-hero-title"
        style={{ paddingTop: 86, paddingBottom: 20 }}
      >
        <h1
          id="tretinoin-hero-title"
          className="text-center font-display text-charcoal"
          style={{
            fontWeight: 400,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
          }}
        >
          <span className="block whitespace-nowrap" style={{ fontSize: "clamp(34px, 9vw, 42px)" }}>
            Stay on Tretinoin
          </span>
          <span className="mt-1 block whitespace-nowrap" style={{ fontSize: "clamp(24px, 6.3vw, 30px)" }}>
            Without destroying your skin
          </span>
        </h1>

        <div
          className="relative mt-4 overflow-hidden rounded-3xl bg-canvas"
          style={{ height: 270, boxShadow: "var(--shadow-card)" }}
        >
          <Image
            src="/lp/tretinoin/hero-real-products-white-box-v4.png"
            alt="AESTURA cleanser, Dr.G barrier moisturizer, and numbuzin sunscreen packed in an 8mirrors routine box"
            fill
            priority
            sizes="(max-width: 480px) calc(100vw - 32px), 448px"
            className="object-cover"
            style={{ objectPosition: "center 52%" }}
          />

        </div>

        <a
          href={QUIZ_URL}
          className="mt-4 flex min-h-14 w-full items-center justify-center rounded-lg bg-mirror-cyan font-body text-midnight"
          style={{ fontSize: 16, fontWeight: 700, boxShadow: "var(--shadow-card)" }}
        >
          Get started
        </a>
        <p
          className="mt-2 text-center font-body text-charcoal"
          style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.4 }}
        >
          ⏱ 1-minute routine check
        </p>

        <div
          className="mt-4 grid grid-cols-3 bg-canvas"
          style={{ marginLeft: -16, marginRight: -16, padding: "16px 12px" }}
        >
          {[
            ["medical", "Dermatologist", "approved", "Reviewed for confidence."],
            ["tret", "Tretinoin", "friendly", "Chosen with tret in mind."],
            ["kbeauty", "K-beauty", "barrier care", "Three focused essentials."],
          ].map(([kind, lineA, lineB, body], index) => (
            <div
              key={lineA}
              className="flex items-start"
              style={{
                gap: 8,
                padding: "0 10px",
                boxShadow: index ? "inset 1px 0 0 rgba(34,42,53,0.08)" : undefined,
              }}
            >
              <span className="shrink-0 text-charcoal" style={{ marginTop: 1 }}>
                <TrustIcon kind={kind as "medical" | "tret" | "kbeauty"} />
              </span>
              <div>
                <p className="font-body text-charcoal" style={{ fontSize: 12.5, fontWeight: 700, lineHeight: 1.25 }}>
                  {lineA}<br />{lineB}
                </p>
                <p className="mt-2 font-body text-mid-gray" style={{ fontSize: 10.5, lineHeight: 1.35 }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-canvas" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="flex items-end justify-between px-6">
          <h2
            className="font-display text-charcoal"
            style={{ fontSize: 38, fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            How it works
          </h2>
          <p className="pb-1 font-body text-mid-gray" style={{ fontSize: 12, fontWeight: 600 }}>
            Swipe →
          </p>
        </div>

        <ol
          className="mt-8 flex snap-x snap-mandatory overflow-x-auto px-6"
          style={{ gap: 16, scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          aria-label="How the 8mirrors routine service works"
        >
          {HOW_STEPS.map((step) => (
            <li
              key={step.number}
              className="shrink-0 snap-center overflow-hidden rounded-3xl bg-white"
              style={{ width: "calc(100vw - 64px)", maxWidth: 392, boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative bg-white" style={{ height: 300 }}>
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 480px) calc(100vw - 64px), 392px"
                  className="object-cover"
                />
                <span
                  className="absolute left-5 top-5 flex items-center justify-center rounded-full bg-white font-body text-charcoal"
                  style={{ width: 40, height: 40, fontSize: 12, fontWeight: 700, boxShadow: "var(--shadow-card)" }}
                >
                  {step.number}
                </span>
              </div>
              <div style={{ minHeight: 230, padding: "26px 24px 30px" }}>
                <h3
                  className="font-display text-charcoal"
                  style={{ fontSize: 34, fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="mt-5 font-body text-charcoal" style={{ fontSize: 16, lineHeight: 1.55 }}>
                  {step.body}
                </p>
              </div>
            </li>
          ))}
          <li aria-hidden className="w-2 shrink-0" />
        </ol>
      </section>

      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="px-6">
          <p
            className="font-body text-mid-gray"
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
          >
            CUSTOMER STORIES
          </p>
          <h2
            className="mt-3 font-display text-charcoal"
            style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Less guesswork. Calmer routines.
          </h2>
          <p className="mt-4 font-body text-mid-gray" style={{ fontSize: 15, lineHeight: 1.55 }}>
            Real photos and words shared by 8mirrors customers.
          </p>
        </div>

        <div
          className="mt-8 flex snap-x snap-mandatory overflow-x-auto px-6"
          style={{ gap: 16, scrollbarWidth: "none" }}
        >
          {CUSTOMER_STORIES.map((story) => (
            <article
              key={story.who}
              className="shrink-0 snap-center overflow-hidden rounded-2xl bg-white"
              style={{ width: 328, boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid grid-cols-2" style={{ gap: 3, background: "#ffffff" }}>
                {([
                  ["Before", story.before],
                  ["After", story.after],
                ] as const).map(([label, src]) => (
                  <div key={label} className="relative" style={{ height: 196 }}>
                    <Image src={src} alt={`${label} customer routine photo`} fill sizes="164px" className="object-cover" />
                    <span
                      className="absolute left-3 top-3 rounded-full bg-white font-body text-charcoal"
                      style={{ padding: "6px 10px", fontSize: 11, fontWeight: 700, boxShadow: "var(--shadow-card)" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ padding: 20 }}>
                <blockquote
                  className="font-display text-charcoal"
                  style={{ fontSize: 21, fontWeight: 400, lineHeight: 1.3 }}
                >
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <p className="mt-4 font-body text-mid-gray" style={{ fontSize: 12 }}>
                  {story.who}
                </p>
              </div>
            </article>
          ))}
          <div aria-hidden className="shrink-0" style={{ width: 8 }} />
        </div>

        <p className="mt-5 px-6 font-body text-mid-gray" style={{ fontSize: 11, lineHeight: 1.5 }}>
          Individual results vary. Customer stories are not specific to tretinoin use.
        </p>
      </section>

      <section
        className="flex min-h-[72dvh] flex-col items-center justify-center bg-charcoal px-6 text-center"
        style={{ paddingTop: 80, paddingBottom: 80 }}
      >
        <p className="font-body text-white" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}>
          START WITH WHAT YOU USE NOW
        </p>
        <h2
          className="mt-4 font-display text-white"
          style={{ fontSize: 40, fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          Build the support your barrier has been missing.
        </h2>
        <p className="mt-5 font-body" style={{ color: "#c9c9c9", fontSize: 15, lineHeight: 1.55, maxWidth: 360 }}>
          Tell us how your skin is responding. We&apos;ll help simplify the routine around your prescription.
        </p>
        <a
          href={QUIZ_URL}
          className="mt-8 flex w-full items-center justify-center rounded-lg bg-mirror-cyan font-body text-midnight"
          style={{ minHeight: 56, maxWidth: 380, fontSize: 16, fontWeight: 700 }}
        >
          Get started
        </a>
        <p className="mt-3 font-body" style={{ color: "#a5a5a5", fontSize: 13 }}>
          3-minute quiz
        </p>
      </section>
    </LandingExperience>
  );
}
