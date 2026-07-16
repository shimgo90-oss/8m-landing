"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const ROUTINE_ITEMS = [
  { icon: "○", label: "Gentle\nCleanser" },
  { icon: "◒", label: "Barrier\nMoisturizer" },
  { icon: "☼", label: "Daily\nSPF" },
  { icon: "☾", label: "Recovery\nGuide" },
] as const;

export default function TretSupportResultPage() {
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Record<string, string[]> | null>(null);
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("tret-support-answers");
      setAnswers(stored ? (JSON.parse(stored) as Record<string, string[]>) : null);
    } catch {
      setAnswers(null);
    }
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !consent) return;
    if (!answers) {
      setStatus("error");
      setMessage("Please complete the routine check before joining.");
      return;
    }

    setStatus("saving");
    setMessage("");
    try {
      const response = await fetch("/api/tret-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answers, consent, company }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to join the waitlist.");
      setStatus("saved");
      setMessage("You're on the waitlist. We'll email you when the first batch opens.");
      sessionStorage.removeItem("tret-support-answers");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to join the waitlist.");
    }
  };

  if (status === "saved") {
    return (
      <main className="mx-auto flex min-h-[100dvh] max-w-[480px] flex-col bg-white">
        <header className="flex items-center justify-between px-6" style={{ height: 68 }}>
          <a href="/lp/tretinoin-routine" className="font-display text-charcoal" style={{ fontSize: 23, fontWeight: 500 }}>
            8mirrors
          </a>
          <span className="font-body text-mid-gray" style={{ fontSize: 11, fontWeight: 600 }}>
            Waitlist
          </span>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center px-6 text-center" style={{ paddingTop: 40, paddingBottom: 48 }}>
          <span
            className="flex items-center justify-center rounded-full bg-lumen-lime font-body text-midnight"
            style={{ width: 48, height: 48, fontSize: 22, fontWeight: 700 }}
          >
            ✓
          </span>
          <p className="mt-5 font-body text-mid-gray" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>
            YOU&apos;RE ON THE WAITLIST
          </p>
          <h1
            className="mt-4 font-display text-charcoal"
            style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.04, letterSpacing: "-0.025em" }}
          >
            Thank you for joining.
          </h1>
          <p className="mt-5 font-body text-mid-gray" style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.6 }}>
            We&apos;ve saved your spot. We&apos;ll email you at <span className="font-semibold text-charcoal">{email}</span> when the first Tret-Support Routine Box is ready.
          </p>

          <div
            className="relative mt-8 w-full overflow-hidden rounded-3xl bg-canvas"
            style={{ height: 250, boxShadow: "var(--shadow-card)" }}
          >
            <Image
              src="/lp/tretinoin/how-deliver-v1.png"
              alt="A closed white 8mirrors routine box"
              fill
              sizes="(max-width: 480px) calc(100vw - 48px), 432px"
              className="object-cover"
            />
          </div>

          <a
            href="/lp/tretinoin-routine"
            className="mt-8 flex min-h-14 w-full items-center justify-center rounded-lg bg-mirror-cyan font-body text-midnight"
            style={{ fontSize: 16, fontWeight: 700 }}
          >
            Back to home
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-[100dvh] max-w-[480px] bg-white">
      <header className="flex items-center justify-between px-6" style={{ height: 68 }}>
        <a href="/lp/tretinoin-routine" className="font-display text-charcoal" style={{ fontSize: 23, fontWeight: 500 }}>
          8mirrors
        </a>
        <span className="font-body text-mid-gray" style={{ fontSize: 11, fontWeight: 600 }}>
          Routine Check
        </span>
      </header>

      <section className="px-6 text-center" style={{ paddingTop: 22 }}>
        <span
          className="inline-flex items-center rounded-full bg-canvas font-body text-charcoal"
          style={{ padding: "8px 12px", fontSize: 11, fontWeight: 600, boxShadow: "var(--shadow-card)" }}
        >
          ✓&nbsp;&nbsp;Routine check complete
        </span>

        <h1
          className="mx-auto mt-5 font-display text-charcoal"
          style={{ fontSize: 38, fontWeight: 400, lineHeight: 1.02, letterSpacing: "-0.025em", maxWidth: 410 }}
        >
          Your Tret-Support Routine Box is ready.
        </h1>
        <p className="mx-auto mt-4 font-body text-mid-gray" style={{ fontSize: 14, lineHeight: 1.5, maxWidth: 350 }}>
          Your tret routine may need support around moisturizer, barrier care, and daily SPF.
        </p>
      </section>

      <section className="mt-6 px-4">
        <div
          className="relative overflow-hidden rounded-3xl bg-canvas"
          style={{ height: 390, boxShadow: "var(--shadow-card)" }}
        >
          <Image
            src="/lp/tretinoin/how-deliver-v1.png"
            alt="A closed white 8mirrors routine box"
            fill
            priority
            sizes="(max-width: 480px) 100vw, 480px"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      </section>

      <section className="grid grid-cols-4 px-4" style={{ paddingTop: 22, paddingBottom: 24 }}>
        {ROUTINE_ITEMS.map((item, index) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center"
            style={{
              padding: "0 5px",
              boxShadow: index ? "-1px 0 0 rgba(34,42,53,0.08)" : undefined,
            }}
          >
            <span
              className="flex items-center justify-center rounded-full bg-canvas font-body text-charcoal"
              style={{ width: 34, height: 34, fontSize: 18, boxShadow: "var(--shadow-card)" }}
            >
              {item.icon}
            </span>
            <span className="mt-2 whitespace-pre-line font-body text-charcoal" style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.2 }}>
              {item.label}
            </span>
          </div>
        ))}
      </section>

      <section className="bg-canvas px-6 text-center" style={{ paddingTop: 32, paddingBottom: 38 }}>
        <p className="font-display text-charcoal" style={{ fontSize: 26, fontWeight: 400 }}>
          First batch: $39
        </p>
        <p className="mt-2 font-body text-mid-gray" style={{ fontSize: 13, lineHeight: 1.5 }}>
          Join the waitlist for early access when the first batch opens.
        </p>

        <form onSubmit={submit} className="mt-6">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <div
            className="flex min-h-14 items-center rounded-lg bg-white px-4"
            style={{ gap: 10, boxShadow: "var(--shadow-input-ring)" }}
          >
            <span aria-hidden className="font-body text-mid-gray" style={{ fontSize: 18 }}>
              ✉
            </span>
            <input
              id="waitlist-email"
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setStatus("idle");
              }}
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent font-body text-charcoal outline-none"
              style={{ fontSize: 14 }}
            />
          </div>
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" tabIndex={-1} autoComplete="off" value={company} onChange={(event) => setCompany(event.target.value)} />
          </div>
          <label className="mt-4 flex items-start text-left" style={{ gap: 10 }}>
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className="mt-0.5 h-4 w-4 accent-black"
            />
            <span className="font-body text-mid-gray" style={{ fontSize: 11.5, lineHeight: 1.45 }}>
              I agree to add my email address to the 8mirrors waitlist and receive email updates when the Tret-Support Routine Box is available.
            </span>
          </label>
          <button
            type="submit"
            disabled={!consent || !email.trim() || status === "saving"}
            className="mt-3 flex min-h-14 w-full items-center justify-center rounded-lg bg-mirror-cyan font-body text-midnight"
            style={{
              fontSize: 16,
              fontWeight: 700,
              cursor: !consent || !email.trim() || status === "saving" ? "not-allowed" : "pointer",
              opacity: !consent || !email.trim() || status === "saving" ? 0.45 : 1,
            }}
          >
            {status === "saving" ? "Saving…" : "Join the waitlist"}
          </button>
        </form>

        {message && (
          <p
            className="mt-3 font-body"
            role="status"
            style={{ color: status === "error" ? "var(--color-error)" : "var(--color-charcoal)", fontSize: 12, lineHeight: 1.5 }}
          >
            {message}
          </p>
        )}
        <p className="mt-4 font-body text-mid-gray" style={{ fontSize: 11 }}>
          No payment today
        </p>
        <p className="mt-5 font-body text-mid-gray" style={{ fontSize: 10.5, lineHeight: 1.45 }}>
          This skincare support does not replace medical advice. Keep following your prescriber&apos;s directions.
        </p>
      </section>
    </main>
  );
}
