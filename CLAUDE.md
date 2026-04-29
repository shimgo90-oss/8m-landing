@AGENTS.md

# Design System

All UI work in this sandbox MUST follow the 8mirrors design system at `/Users/yusim/Desktop/8m/DESIGN.md`.

Read that file before generating or modifying any UI, and verify output against its Do's and Don'ts section.

**Non-negotiable rules:**
- **Display font**: Fraunces (loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx), exposed as `--font-display`). Headings 20px+ only, weights 400–500.
- **Body font**: Inter (exposed as `--font-body`).
- **Primary accent**: Mirror Cyan `#62d8f4` — **always with black text (`#111111`)**, never white.
- **Secondary accent**: Lumen Lime `#ecff8c` — **always with black text**, used as a highlighter (not a background fill). Max one highlighted phrase per section.
- Mirror Cyan and Lumen Lime must **never** appear adjacent — keep 48px+ neutral space between them.
- Use the multi-layer shadow stack (`var(--shadow-card)`, defined in [app/globals.css](app/globals.css)) for elevation, never CSS `border`.
- No gradients, no glows, no extra brand colors.

Design tokens live in [app/globals.css](app/globals.css) as Tailwind v4 `@theme` variables: `bg-mirror-cyan`, `text-charcoal`, `bg-lumen-lime`, `text-mid-gray`, `bg-canvas`, etc.

A working reference implementation is at [app/design-test/page.tsx](app/design-test/page.tsx) — mirror its patterns for hero, cards, forms, and focus rings.
