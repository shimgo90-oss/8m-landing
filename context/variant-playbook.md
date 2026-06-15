# Variant Playbook — How to Build Landing A/Bs

> Core guide for the marketer (Codex) lane. For "how to make one" see the top comment in [app/landing/_variants.tsx](../app/landing/_variants.tsx). This doc covers "what & why" to test.

## Principles of a good A/B test
1. **One hypothesis at a time.** Change the headline *and* order *and* CTA together and you won't know what won. Keep variants narrowly different.
2. **Write the hypothesis in `note`.** "Why do I expect this to do better?" — that's how you read the result.
3. **Same ad → different slugs.** Control the traffic source so the comparison is valid.
4. **Keep the baseline (original).** Always compare against a reference.

## What's worth testing (axes)
- **Message/positioning**: routine-led vs results/change-led vs expert-review-led → via `copy` overrides.
- **Length/structure**: full vs lean (fast to CTA) → via `sections` order/subset.
- **Concern entry point**: redness-led vs general → custom layout (Claude work).
- **CTA wording**: "Build my routine" vs "Try it free" vs "See what fits my skin".

## Copy rules (mandatory)
- US English (women, 30s). Follow [[brand-voice]] & [[audience]]. Use US spelling/idiom.
- **Don't sell "a report."** Frame as matched routine & results. [[value-prop]]
- Lime highlight: one spot per section, black text. Cyan CTA: black text. (DS: ../DESIGN.md)
- No ad clichés or exclamation-mark spam.

## Lane boundaries (avoid collisions)
- **Marketer (Codex) does**: add/duplicate variants in `_variants.tsx`, change wording via `copy`, reorder `sections`. = config & content only.
- **Hand to Claude (dev)**: new sections/blocks, custom layouts (`Custom`), component edits, render bugs. = React code.
- Rule: **the marketer never authors new React components.** Need one? File a GitHub issue.

## Deploy & review flow
1. Work on a `variant/<slug>` branch → push → Vercel auto-creates a preview URL.
2. Check the preview directly (mobile test recommended).
3. Open a PR → **고고 reviews from a design perspective → merges** (the marketer doesn't merge to main).
4. Merge = production deploy → connect the live URL to your ad.
