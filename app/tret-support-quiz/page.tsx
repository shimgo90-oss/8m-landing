"use client";

import { useEffect, useState } from "react";

type Question = {
  id: string;
  eyebrow: string;
  title: string;
  helper: string;
  multiple?: boolean;
  options: string[];
};

const QUESTIONS: Question[] = [
  {
    id: "duration",
    eyebrow: "YOUR TRETINOIN ROUTINE",
    title: "How long have you been using tretinoin?",
    helper: "Choose the answer that is closest to your experience.",
    options: ["I haven't started yet", "Less than 1 month", "1–3 months", "3–6 months", "More than 6 months"],
  },
  {
    id: "frequency",
    eyebrow: "YOUR CURRENT RHYTHM",
    title: "How often are you using it right now?",
    helper: "Keep following the frequency recommended by your prescriber.",
    options: ["1–2 nights a week", "3–4 nights a week", "5–7 nights a week", "I'm paused right now", "I'm not sure"],
  },
  {
    id: "feelings",
    eyebrow: "HOW YOUR BARRIER FEELS",
    title: "What is your skin telling you lately?",
    helper: "Select all that apply.",
    multiple: true,
    options: ["Peeling", "Tightness", "Dryness", "Stinging", "Sudden sensitivity", "It feels comfortable"],
  },
];

export default function TretSupportQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("tret-support-answers");
      if (stored) setAnswers(JSON.parse(stored) as Record<string, string[]>);
    } catch {
      sessionStorage.removeItem("tret-support-answers");
    }
  }, []);

  useEffect(() => {
    if (Object.keys(answers).length) {
      sessionStorage.setItem("tret-support-answers", JSON.stringify(answers));
    }
  }, [answers]);

  const question = QUESTIONS[step];
  const selected = answers[question.id] ?? [];
  const progress = ((step + 1) / QUESTIONS.length) * 100;

  const choose = (option: string) => {
    setAnswers((current) => {
      if (!question.multiple) return { ...current, [question.id]: [option] };
      const currentValues = current[question.id] ?? [];
      const nextValues = currentValues.includes(option)
        ? currentValues.filter((value) => value !== option)
        : [...currentValues, option];
      return { ...current, [question.id]: nextValues };
    });
  };

  const next = () => {
    if (!selected.length) return;
    if (step === QUESTIONS.length - 1) {
      sessionStorage.setItem("tret-support-answers", JSON.stringify(answers));
      window.location.assign("/tret-support-result");
      return;
    }
    setStep((current) => current + 1);
  };

  const back = () => {
    if (step === 0) return;
    setStep((current) => current - 1);
  };

  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-[480px] flex-col bg-white">
      <header className="px-6" style={{ paddingTop: 26 }}>
        <div className="flex items-center justify-between">
          <a href="/lp/tretinoin-routine" className="font-display text-charcoal" style={{ fontSize: 23, fontWeight: 500 }}>
            8mirrors
          </a>
          <span className="font-body text-mid-gray" style={{ fontSize: 12, fontWeight: 600 }}>
            {step + 1} / {QUESTIONS.length}
          </span>
        </div>
        <div className="mt-5 h-1 overflow-hidden rounded-full bg-soft-gray">
          <div
            className="h-full rounded-full bg-charcoal transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <section className="flex flex-1 flex-col px-6" style={{ paddingTop: 52, paddingBottom: 28 }}>
        <p className="font-body text-mid-gray" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}>
          {question.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-charcoal" style={{ fontSize: 38, fontWeight: 400, lineHeight: 1.06, letterSpacing: "-0.02em" }}>
          {question.title}
        </h1>
        <p className="mt-4 font-body text-mid-gray" style={{ fontSize: 14, lineHeight: 1.55 }}>
          {question.helper}
        </p>

        <div className="mt-8 flex flex-col" role={question.multiple ? "group" : "radiogroup"} style={{ gap: 12 }}>
          {question.options.map((option) => {
            const isSelected = selected.includes(option);
            return (
              <button
                key={option}
                type="button"
                role={question.multiple ? undefined : "radio"}
                aria-checked={question.multiple ? undefined : isSelected}
                aria-pressed={question.multiple ? isSelected : undefined}
                onClick={() => choose(option)}
                className="flex min-h-14 w-full items-center justify-between rounded-xl bg-white px-4 text-left font-body text-charcoal transition-shadow"
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  boxShadow: isSelected
                    ? "0 0 0 2px var(--color-mirror-cyan), var(--shadow-card)"
                    : "var(--shadow-card)",
                }}
              >
                <span>{option}</span>
                <span
                  aria-hidden
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{
                    width: 24,
                    height: 24,
                    background: isSelected ? "var(--color-mirror-cyan)" : "var(--color-canvas)",
                    color: "#111111",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  {isSelected ? "✓" : ""}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-auto flex items-center" style={{ gap: 12, paddingTop: 32 }}>
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              className="flex min-h-14 items-center justify-center rounded-lg bg-white px-5 font-body text-charcoal"
              style={{ fontSize: 14, fontWeight: 700, boxShadow: "var(--shadow-card)" }}
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={next}
            disabled={!selected.length}
            className="flex min-h-14 flex-1 items-center justify-center rounded-lg font-body text-midnight disabled:text-mid-gray"
            style={{
              background: selected.length ? "var(--color-mirror-cyan)" : "var(--color-soft-gray)",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            {step === QUESTIONS.length - 1 ? "See my support focus" : "Continue"}
          </button>
        </div>
      </section>
    </main>
  );
}
