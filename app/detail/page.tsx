"use client";

import { useState } from "react";
import Image from "next/image";

type CaseStudy = {
  initials: string;
  age: number;
  country: string;
  quote: string;
  concerns: string[];
  goals: string[];
  amSteps: number;
  pmSteps: number;
};

const cases: CaseStudy[] = [
  {
    initials: "m****",
    age: 24,
    country: "USA",
    quote:
      "Switched my toner and the redness on my cheeks was gone in 3 weeks. Wish I'd done this sooner.",
    concerns: ["Oily", "Acne", "Pores", "Redness"],
    goals: ["Calming inflammation", "Return to baseline function"],
    amSteps: 5,
    pmSteps: 4,
  },
  {
    initials: "s****",
    age: 31,
    country: "Canada",
    quote:
      "I was drowning in products. Sumin gave me clarity — and my skin feels lighter, too.",
    concerns: ["Dry", "Dehydrated", "Sensitive"],
    goals: ["Restore moisture barrier", "Reduce flakiness"],
    amSteps: 4,
    pmSteps: 5,
  },
  {
    initials: "a****",
    age: 28,
    country: "UK",
    quote:
      "I've tried everything for my pigmentation. Finally someone told me exactly WHY my old routine wasn't working.",
    concerns: ["Pigmentation", "Uneven tone", "Dullness"],
    goals: ["Brighten dark spots", "Even out skin tone"],
    amSteps: 5,
    pmSteps: 5,
  },
  {
    initials: "j****",
    age: 36,
    country: "Australia",
    quote:
      "At my age I assumed nothing would help. Three weeks in and my fine lines look softer. I trust her.",
    concerns: ["Aging", "Fine lines", "Loss of elasticity"],
    goals: ["Firm and lift", "Deep hydration boost"],
    amSteps: 4,
    pmSteps: 5,
  },
];

const faqs = [
  {
    q: "When will I get my report?",
    a: "I write every report by hand. Expect it in your inbox within 4–5 days of sending your photos.",
  },
  {
    q: "How is this different from a dermatologist?",
    a: "A dermatologist diagnoses medical skin conditions. I focus on building a product routine that actually works for your unique skin — not a prescription.",
  },
  {
    q: "Is my photo safe?",
    a: "Yes. Your photos are only used to write your personal report. They're never shared, posted, or used for AI training.",
  },
];

export default function DetailPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[420px] relative pb-28">
        {/* Top nav */}
        <div className="flex items-center justify-between px-5 py-3">
          <button className="w-8 h-8 flex items-center justify-center text-3xl text-neutral-900 leading-none">
            ‹
          </button>
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-neutral-900 rounded-full">
            <span className="text-xs">🛒</span>
            <span className="text-white text-[13px] font-semibold">Shop</span>
          </button>
        </div>

        {/* Hero */}
        <section className="px-5 pt-4 pb-8 bg-neutral-50 flex flex-col gap-5">
          <div className="relative w-full h-[280px] rounded-2xl overflow-hidden bg-neutral-200">
            <Image
              src="/sumin-hero.png"
              alt="Sumin, K-Beauty Expert"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
          <h1 className="text-[32px] font-bold text-neutral-900 leading-[1.15]">
            I&apos;ll personally
            <br />
            read your skin.
          </h1>
          <p className="text-[15px] text-neutral-500 leading-relaxed">
            A custom skincare report, handwritten by me. Not AI.
          </p>
          <div className="flex gap-3 pt-2">
            <StatCard num="10,000+" label="Clients" />
            <StatCard num="70" label="Countries" />
            <StatCard num="★ 5.0" label="Rating" />
          </div>
        </section>

        {/* SNS connector */}
        <section className="px-6 py-5 bg-neutral-50 text-center border-t border-neutral-100">
          <p className="text-[13px] text-neutral-500 leading-relaxed">
            Saw me on Instagram? You&apos;re in the right place.
          </p>
        </section>

        {/* Expert mini card */}
        <section className="px-5 py-4 flex items-center gap-3 bg-white">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
            <Image
              src="/sumin-hero.png"
              alt="Sumin"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-semibold text-neutral-900">
              Hi, I&apos;m Sumin.
            </div>
            <div className="text-xs text-neutral-500">
              I read and reply to every client myself.
            </div>
          </div>
          <span className="text-neutral-300 text-xl">›</span>
        </section>

        <div className="h-px bg-neutral-100" />

        {/* What You Get */}
        <section className="px-5 pt-8 pb-2">
          <div className="text-[11px] font-semibold text-neutral-500 tracking-[0.15em]">
            WHAT YOU GET
          </div>
          <h2 className="text-[22px] font-bold text-neutral-900 mt-3 leading-tight">
            Three things,
            <br />
            handwritten.
          </h2>
        </section>
        <section className="px-5 pt-3 pb-6 flex flex-col gap-3">
          <WhatYouGetCard
            icon="📋"
            title="15-page skin report"
            body="12 skin dimensions · Your exact concerns, explained"
          />
          <WhatYouGetCard
            icon="✨"
            title="AM / PM routine"
            body="Real products · Why each one fits you"
          />
          <WhatYouGetCard
            icon="💬"
            title="30 days of me"
            body="Email me anything for 30 days. I reply personally."
          />
        </section>

        {/* How It Works */}
        <section className="bg-neutral-950 text-white px-5 py-10 flex flex-col gap-4">
          <div className="text-[11px] font-semibold text-neutral-500 tracking-[0.15em]">
            HOW IT WORKS
          </div>
          <h2 className="text-[22px] font-bold leading-tight text-white">
            4–5 days.
            <br />
            By hand. Yours only.
          </h2>
          <div className="flex flex-col gap-4 pt-3">
            <Step n="1" title="Send your photos" body="3–4 photos, following a guide" />
            <Step n="2" title="I read them" body="I study your skin for 4–5 days" />
            <Step
              n="3"
              title="Your report arrives"
              body="PDF report + routine + 30-day email"
            />
          </div>
        </section>

        {/* Sample Preview */}
        <section className="px-5 py-10">
          <div className="text-[11px] font-semibold text-neutral-500 tracking-[0.15em]">
            SAMPLE REPORT
          </div>
          <h2 className="text-[22px] font-bold text-neutral-900 mt-3 leading-tight">
            This is what
            <br />
            you&apos;ll receive.
          </h2>
          <p className="text-[13px] text-neutral-500 mt-3">
            A real report I sent (personal info blurred)
          </p>
          <div className="flex gap-3 mt-5">
            <SamplePage label="Skin Analysis" />
            <SamplePage label="AM Routine" />
          </div>
        </section>

        {/* Client Stories */}
        <section className="bg-neutral-50 py-10">
          <div className="px-5">
            <div className="text-[11px] font-semibold text-neutral-500 tracking-[0.15em]">
              CLIENT STORIES
            </div>
            <h2 className="text-[22px] font-bold text-neutral-900 mt-3 leading-tight">
              Real stories,
              <br />
              real skin.
            </h2>
          </div>
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pt-6 pb-2 no-scrollbar"
            style={{ scrollPaddingLeft: 20 }}
          >
            {cases.map((c, i) => (
              <CaseCard key={i} {...c} />
            ))}
          </div>
          <div className="px-5 mt-6">
            <button className="w-full py-3 border border-neutral-300 rounded-full text-sm font-semibold text-neutral-900 bg-white">
              See all reviews
            </button>
          </div>
        </section>

        {/* Expert bio */}
        <section className="px-5 py-10">
          <div className="text-[11px] font-semibold text-neutral-500 tracking-[0.15em]">
            YOUR EXPERT
          </div>
          <div className="mt-4 bg-[#F8F3EE] rounded-3xl p-6 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#E8C9A8] flex-shrink-0">
                <Image
                  src="/sumin-hero.png"
                  alt="Sumin"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-neutral-900">Sumin</div>
                <div className="text-[13px] text-[#8B6B4F]">CEO · K-Beauty Expert</div>
              </div>
            </div>
            <p className="text-sm text-[#3B3024] leading-relaxed">
              CEO of 8mirrors, writing from Seoul. Since 2023, I&apos;ve read 10,000+
              skins across 70 countries. My goal: glowing skin, no matter where you
              live.
            </p>
            <div className="flex gap-6 pt-1">
              <BioStat num="2023" label="Since" />
              <BioStat num="10,000+" label="Clients" />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-neutral-50 px-5 py-8">
          <div className="bg-white border-2 border-neutral-900 rounded-3xl p-6 flex flex-col gap-3">
            <div className="text-[13px] font-semibold text-neutral-500">
              Skin Analysis &amp; Custom Routine
            </div>
            <div className="flex items-end gap-2">
              <div className="text-[40px] font-bold text-neutral-900 leading-none">
                $9.99
              </div>
              <div className="text-base font-medium text-neutral-400 line-through leading-none pb-1">
                $24.99
              </div>
            </div>
            <p className="text-[13px] text-neutral-500 leading-relaxed">
              Less than one bottle of the wrong moisturizer.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-10">
          <div className="text-[11px] font-semibold text-neutral-500 tracking-[0.15em]">
            FAQ
          </div>
          <h2 className="text-[22px] font-bold text-neutral-900 mt-3">
            Common questions.
          </h2>
          <div className="mt-4">
            {faqs.map((f, i) => (
              <FaqItem
                key={i}
                q={f.q}
                a={f.a}
                open={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                isLast={i === faqs.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Guarantee + Final CTA */}
        <section className="bg-neutral-950 text-white px-5 py-10 flex flex-col gap-4 text-center">
          <h2 className="text-xl font-bold leading-tight">
            7-day money back.
            <br />
            No questions.
          </h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed">
            If the report isn&apos;t what you expected, tell me. I&apos;ll refund you.
          </p>
          <button className="mt-3 py-4 bg-white text-neutral-900 rounded-full font-bold text-base flex items-center justify-center gap-2">
            Get My Report <span className="text-lg">→</span>
          </button>
          <div className="flex justify-center items-center gap-3 pt-2 text-[11px] text-neutral-500">
            <span>PayPal · Credit Card</span>
            <span>·</span>
            <span>English · 한국어</span>
          </div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-4 left-0 right-0 flex justify-center px-5 pointer-events-none z-50">
          <button className="pointer-events-auto w-full max-w-[380px] py-4 bg-neutral-900 text-white rounded-full font-bold text-[15px] flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
            Get My Report <span className="text-neutral-400 font-bold">· $9.99</span>
          </button>
        </div>
      </div>
    </main>
  );
}

function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-1 bg-white border border-neutral-200 rounded-xl py-3">
      <div className="text-[18px] font-bold text-neutral-900">{num}</div>
      <div className="text-[11px] text-neutral-500">{label}</div>
    </div>
  );
}

function WhatYouGetCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-neutral-50 rounded-2xl p-5 flex flex-col gap-2">
      <div className="text-[15px] font-bold text-neutral-900">
        <span className="mr-2">{icon}</span>
        {title}
      </div>
      <div className="text-[13px] text-neutral-600 leading-relaxed">{body}</div>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0">
        {n}
      </div>
      <div className="flex-1">
        <div className="text-[15px] font-semibold text-white">{title}</div>
        <div className="text-[13px] text-neutral-500 leading-snug mt-0.5">{body}</div>
      </div>
    </div>
  );
}

function SamplePage({ label }: { label: string }) {
  return (
    <div className="flex-1 h-[240px] rounded-xl border border-neutral-200 bg-neutral-50 p-3 flex flex-col gap-1.5">
      <div className="text-[10px] font-bold text-neutral-900">{label}</div>
      <div className="h-1.5 w-full bg-neutral-200 rounded-full" />
      <div className="h-1.5 w-full bg-neutral-200 rounded-full" />
      <div className="h-1.5 w-20 bg-neutral-200 rounded-full" />
      <div className="h-1.5 w-full bg-neutral-200 rounded-full mt-2" />
      <div className="h-1.5 w-4/5 bg-neutral-200 rounded-full" />
      <div className="h-1.5 w-3/4 bg-neutral-200 rounded-full" />
    </div>
  );
}

function CaseCard({
  initials,
  age,
  country,
  quote,
  concerns,
  goals,
  amSteps,
  pmSteps,
}: CaseStudy) {
  return (
    <div className="w-[280px] flex-shrink-0 snap-start bg-white border border-neutral-200 rounded-3xl p-5 flex flex-col gap-3">
      <div className="text-[11px] font-bold text-neutral-500 tracking-wider">
        {initials}&nbsp;&nbsp;·&nbsp;&nbsp;{age}&nbsp;&nbsp;·&nbsp;&nbsp;{country}
      </div>
      <p className="text-[13px] italic text-neutral-900 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex gap-1.5">
        <div className="flex-1 h-[130px] rounded-lg bg-neutral-100" />
        <div className="flex-1 h-[130px] rounded-lg bg-neutral-100" />
      </div>
      <div>
        <div className="text-[10px] font-bold text-neutral-400 tracking-[0.1em]">
          CONCERNS
        </div>
        <div className="text-[12px] font-medium text-neutral-900 mt-1">
          {concerns.join(" · ")}
        </div>
      </div>
      <div>
        <div className="text-[10px] font-bold text-neutral-400 tracking-[0.1em]">
          GOAL
        </div>
        <ol className="text-[12px] font-medium text-neutral-900 mt-1 leading-snug">
          {goals.map((g, i) => (
            <li key={i}>
              {i + 1}. {g}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <div className="text-[10px] font-bold text-neutral-400 tracking-[0.1em]">
          CUSTOM ROUTINE
        </div>
        <div className="mt-2 flex flex-col gap-1.5">
          <RoutineRow icon="☀️" count={amSteps} tint="bg-indigo-50" />
          <RoutineRow icon="🌙" count={pmSteps} tint="bg-violet-50" />
        </div>
      </div>
    </div>
  );
}

function RoutineRow({
  icon,
  count,
  tint,
}: {
  icon: string;
  count: number;
  tint: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-sm w-5 flex-shrink-0">{icon}</span>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`flex-1 h-9 rounded-md ${tint}`} />
      ))}
    </div>
  );
}

function BioStat({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="text-[15px] font-bold text-neutral-900 leading-none">{num}</div>
      <div className="text-[11px] text-[#8B6B4F]">{label}</div>
    </div>
  );
}

function FaqItem({
  q,
  a,
  open,
  onClick,
  isLast,
}: {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
  isLast: boolean;
}) {
  return (
    <div className={!isLast ? "border-b border-neutral-200" : ""}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-[18px] text-left"
      >
        <span className="text-[15px] font-medium text-neutral-900 pr-3">{q}</span>
        <span className="text-xl text-neutral-500 flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="pb-5 text-[13px] text-neutral-600 leading-relaxed">{a}</p>
      )}
    </div>
  );
}
