# Marketer Guide — Building Landing Variants

How to run 8mirrors landing A/B tests with **almost no code**. Just follow the steps in order.

---

## 0. One-time — accounts & programs

### Two accounts to create
1. **GitHub account** (required, free) — sign up at https://github.com → **send your username to 고고 (the owner)** so they can grant access to this repo.
2. **Codex (OpenAI) account** — your AI assistant. (If you already use Codex, you're set.)

> Git (the tool on your computer) and GitHub (the web account) are different things, but VSCode handles the install/login for you. Don't worry about it.

### Install
1. **VSCode** — https://code.visualstudio.com
2. **Node.js** (LTS) — https://nodejs.org (needed to preview the landing on your own machine)
3. Inside VSCode, install the **Codex extension** and log in.

### Get the repo (once)
VSCode → `Cmd+Shift+P` → **Git: Clone** → paste the URL below → log in when GitHub prompts:
```
https://github.com/shimgo90-oss/8mirrors-design-sandbox.git
```
Then, in the VSCode terminal (`Ctrl+\``), run once:
```bash
npm install
```
(Optional, for nicer commit attribution: `git config user.email "you@your-github-email.com"`.)

---

## 1. Every time you start

```bash
git checkout main && git pull         # get the latest
git checkout -b variant/<name>         # your working branch (e.g. variant/glowup)
npm run dev                            # preview at http://localhost:3000/lp/<slug>
```

---

## 2. Make a variant (the core — no code)

Open one file: **`app/landing/_variants.tsx`**

Copy one block and change just 4 things to get a new variant + its URL:

```ts
{
  slug: "glowup",                    // → the URL becomes /lp/glowup (lowercase-with-dashes)
  label: "Glow-up (copy test)",      // internal name, not shown to users
  note: "Hypothesis: leading with the 8-week visible change lifts conversion",
  sections: ["hero", "what-you-get", "offer", "footer"],  // which blocks, in what order
  copy: {                            // change wording only (no code)
    "hero.titleA": "In 8 weeks, the mirror",
    "hero.titleB": "feels good",      // this part gets the lime highlight
    "hero.sub": "Two minutes is all it takes. Start a routine matched to your skin.",
    "bar.cta": "Start my routine",
  },
}
```

- Blocks you can use: `hero · what-you-get · report-archive · team · stories · offer · footer`
- Copy keys you can change: see `app/landing/_i18n.tsx` (`hero.titleA`, `hero.titleB`, `hero.sub`, `hero.cta`, `bar.cta`, …)
- Stuck? Tell Codex: *"In `_variants.tsx`, copy the `lean` variant, set slug to `glowup`, and change the headline to ~."*

> ⚠️ **Copy rules**: user-facing copy is **US English** (you're writing for a US audience — use US spelling/idiom: *color*, not *colour*). Follow the tone in `context/` (brand-voice / value-prop / variant-playbook). **Don't sell "a report"** → frame it as a matched routine / visible results.

### Need a new design or block?
Go ahead — ask Codex to build it (you can edit components too). Just preview it and open a PR; **고고 reviews before it goes live**, so nothing breaks production. For bigger redesigns you can also ping 고고/Claude to build the block for you.

---

## 3. Preview → push → get reviewed

```bash
git add -A && git commit -m "variant: add glowup" && git push -u origin variant/glowup
```

- Pushing makes **Vercel auto-generate a preview URL** → check it on your phone (mobile test recommended).
- Open a **Pull Request** on GitHub → **고고 reviews it from a design perspective, then merges**.
- Once merged, it's automatically live at `8mirrors-design-sandbox.vercel.app/lp/<slug>` → connect your ad to it.

> 🔒 You can't merge/push directly to `main` (it's protected). Always branch → PR → 고고 approves.

---

## 4. When stuck

- What/why to test: `context/variant-playbook.md`
- Tone & wording: `context/brand-voice.md`
- Design rules: `DESIGN.md`
- Still stuck? Ask Codex, or 고고.
