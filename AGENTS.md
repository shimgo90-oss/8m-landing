<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# 8mirrors Landing — Shared Brain (Codex · Claude)

This file is the **single source every AI agent reads**. (Claude's `CLAUDE.md` `@import`s this file; Codex reads `AGENTS.md` directly.) When strategy changes, edit **only this file and `context/`**. Working language for shared docs is English (the team includes non-Korean members).

## What this repo is
The 8mirrors marketing **landing site** (Next.js 16 App Router). An **A/B testing environment**: send the same ad to different landing variants and compare conversion.
- Variant URLs: `/lp/<slug>` (e.g. `/lp/original`, `/lp/lean`, `/lp/redness`, `/lp/routine`)
- The product app (diagnosis, login, report) is **separate** (`eightmirrors.com`, glassy-web). This site is marketing landing only. CTAs hand off to the product app's diagnosis entry.

## Service context (read before writing copy or design)
- **Brand voice**: [context/brand-voice.md](context/brand-voice.md) — a colleague's message, not an ad; don't sell "a report"
- **Audience**: [context/audience.md](context/audience.md) — US women, 30s; user-facing copy is **US English**
- **Value structure**: [context/value-prop.md](context/value-prop.md) — free quiz = entry / matched routine & results = core value / the $9.99 perception problem
- **How to build variants & test principles**: [context/variant-playbook.md](context/variant-playbook.md)

## Two-agent lanes (division of labor)
- **Marketer lane (Codex)** — assemble/duplicate variants, copy (`copy` overrides), section order, run experiments. **Touches: `app/landing/_variants.tsx` and copy.** Must **not** author new React components → file an issue for Claude.
- **Dev lane (Claude)** — React components, new sections / custom variants (`Custom`), shell/scaffolding, render issues. **Touches: `app/landing/_variant-*.tsx`, `app/landing/page.tsx`, new components.**
- One line: **Claude builds the lego blocks; the marketer assembles landings from them. No block? Order it from Claude.**

## Variant system
- [app/landing/_variants.tsx](app/landing/_variants.tsx) — the variant registry. The top comment explains "how to make one." A variant = `{ slug, note, sections?, copy?, Custom? }`.
- `sections` = order/subset of shared blocks (`hero · what-you-get · report-archive · team · stories · offer · footer`).
- `copy` = i18n key → text **no-code override** (change wording without touching React). Keys live in [app/landing/_i18n.tsx](app/landing/_i18n.tsx).
- `Custom` = fully custom layout component (dev lane only, e.g. [app/landing/_variant-redness.tsx](app/landing/_variant-redness.tsx)).
- The shell (header, scroll, buy bar) is shared via `LandingExperience` — every variant behaves identically.

## Design system (mandatory for any UI work)
Full spec: **[DESIGN.md](DESIGN.md)** (in-repo). After creating/editing, self-check against its Do/Don't.

**Non-negotiable:**
- **Display font**: Fraunces (`--font-display`, [app/layout.tsx](app/layout.tsx)). Headings 20px+, weight 400–500.
- **Body font**: Inter (`--font-body`).
- **Primary accent**: Mirror Cyan `#62d8f4` — **always with black text (`#111111`)**, never white.
- **Secondary accent**: Lumen Lime `#ecff8c` — **always with black text**, as a highlighter only (not a fill). Max one phrase per section.
- Mirror Cyan and Lumen Lime must **never** be adjacent (48px+ neutral gap).
- Elevation via the **shadow stack** (`var(--shadow-card)`, [app/globals.css](app/globals.css)) — never CSS `border`.
- No gradients, glows, or extra brand colors.
- Tokens: `bg-mirror-cyan`, `text-charcoal`, `bg-lumen-lime`, `text-mid-gray`, `bg-canvas`, … ([app/globals.css](app/globals.css)). Reference implementation: [app/design-test/page.tsx](app/design-test/page.tsx).
- The shell is a maxWidth 480 mobile canvas — right-edge clipping below 480px is expected (not a bug); review at 480.

## Deploy & safety (mandatory)
- **main = production** (Vercel auto-deploys). Variants/experiments go on a `variant/<slug>` branch → push → **Vercel preview URL**.
- **No direct merge/push to main** (marketer lane). Open a PR; **고고 reviews design, then merges.**
- Confirm `npm run build` (= `next build`) passes before pushing — no broken deploys.
- Variants are **isolated** (a new file / one registry line) → they don't touch existing variants (minimal blast radius).
