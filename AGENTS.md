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

## How we work
- **The marketer edits the landing directly** (with Codex) — copy, sections, even components. No artificial restriction on what they can touch.
- **Claude (with 고고)** handles heavier builds / new components when asked, and keeps the shared kit clean.
- **The one gate: 고고 reviews every change on a preview before it merges to `main`.** That's the safety — not lane rules.
- Still expected: follow [the brand voice](context/brand-voice.md) and [DESIGN.md](DESIGN.md). For simple changes prefer the no-code `copy` / `sections` path in `_variants.tsx` (cleaner diffs, no broken layout); drop into components when the change needs it.

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
- **main = production** (Vercel auto-deploys). All work goes on a `variant/<slug>` branch → push → **Vercel preview URL**.
- **The agent never merges or pushes to `main` directly.** Changes reach production only via a PR that **고고 reviews and merges.**
- Confirm `npm run build` (= `next build`) passes before pushing — no broken deploys.
- Variants are **isolated** (a new file / one registry line) → they don't touch existing variants (minimal blast radius).

## Who's driving (role detection)
Run `git config user.email`:
- If it equals the repo owner — **고고 (`shimgo90@gmail.com`)** — owner mode: 고고 may merge after review.
- **Any other email → contributor mode (the marketer).** Take the change only up to a **PR**: create the branch, push, and open/prepare the PR — then stop. **Do not merge to `main`.**

No setup needed on the marketer's side: any non-owner email is treated as the marketer automatically. In all cases the agent never merges to `main` itself — production merges are 고고's call.

## When a change is done (Definition of Done)
After the landing change looks right, walk the user through shipping it — don't just stop:
1. Confirm you're on a `variant/<slug>` branch (not `main`). If on `main`, create the branch first.
2. Run a quick **`npm run build`** to confirm it compiles.
3. Commit and **push the branch**.
4. **Tell the marketer (in plain language):**
   > 이 시안대로 반영하려면 → 이 브랜치를 push하고 GitHub에서 **Pull Request**를 올리세요. 그러면 고고가 프리뷰에서 확인하고 머지합니다. (직접 main에 머지하지 마세요.)
   …and give the one-line `git push` command + the PR link/steps. (English the marketer can act on; bilingual is fine.)
5. Mention the Vercel **preview URL** so they (and 고고) can review the rendered page before merge.
