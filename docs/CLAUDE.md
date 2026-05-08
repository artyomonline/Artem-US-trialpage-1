# CLAUDE.md — Instructions for Claude Code

## Your Role

You are building the MyEdSpace US landing page in `app/page.tsx`. Your job is to produce a high-converting, polished page that a CMO would be proud to run paid traffic to.

---

## Required Reading (Before You Touch Any Code)

Read these files in this order before starting:

1. `README.md`
2. `BRIEF.md`
3. `BRAND_GUIDELINES.md`
4. `docs/GROWTH_PRINCIPLES.md`
5. `docs/WIREFRAME.md`
6. `docs/REVIEWS.json`

Also apply:
- `landing-pages-conversion` skill — universal conversion principles
- `mes-us-landing-page` skill — MES-specific brand rules, assets, copy, and brief errors to fix

---

## How to Work

### Screen-by-Screen Development

Build the page one screen (section) at a time. Do not build the entire page at once.

For each screen:
1. Build it
2. Stop and tell the user: "Screen [N] — [Section Name] is ready. Please check it on mobile and desktop at localhost:3000."
3. Wait for explicit approval before moving to the next screen
4. Only proceed when the user says it looks good

### Checkpoints — Always Stop and Ask

Stop and present options (do not decide alone) when:
- You are uncertain about a visual decision (background color, font size, spacing, layout choice)
- A section could be structured in more than one reasonable way
- You are about to deviate from the wireframe or brief for any reason
- You have finished a screen and are ready to move to the next

Present options clearly:
> "I can do this two ways:
> Option A: [description]
> Option B: [description]
> Which do you prefer?"

### Never Do This Without Asking
- Change the section order from WIREFRAME.md
- Invent copy that isn't in BRIEF.md or WIREFRAME.md
- Add sections not in the wireframe
- Skip a section

---

## Technical Rules

- Build in `app/page.tsx` only (unless you need to extract a component — ask first)
- Use Tailwind CSS utility classes only — no inline styles, no custom CSS unless strictly necessary
- Use Next.js `<Image>` component for all images
- All CTA buttons are anchor links that scroll to the signup form (`#signup-form`)
- The signup form gets `id="signup-form"`
- Use `prefers-reduced-motion` for any animations

---

## Brand Rules (Hard Constraints)

These are already enforced in `tailwind.config.ts` — do not fight them:
- `border-radius: 0` on everything — no `rounded-*` classes
- No `shadow-*` classes
- No `drop-shadow` or glow effects
- Font: Inter only (`font-sans`)
- Colors: use only `brand-blue`, `brand-green`, `brand-light-blue`, `brand-dark`
- CTA buttons: always `brand-green` background with `brand-dark` text

---

## Assets Available

```
/assets/img/eddie_1.webp — /assets/img/eddie_4.webp   (use real photos, no placeholders)
/assets/video/MES_intro.mp4
/assets/curriculum/pre-algebra.pdf
/assets/curriculum/algebra-i.pdf
/assets/curriculum/algebra-ii.pdf
/assets/curriculum/geometry.pdf
```

---

## Known Brief Errors — Fix Silently

1. **H1 is a placeholder** — use the H1 from WIREFRAME.md
2. **Phone placeholder is wrong** — use `(XXX) XXX-XXXX`, not `7XXX XXXXXX`
3. **Brief footer is GitHub's footer** — build a real MES footer
4. **Missing files** — CLAUDE.md, GROWTH_PRINCIPLES.md, WIREFRAME.md have been created

---

## Definition of Done

A screen is done when:
- It looks correct on mobile (375px viewport — simulate in-app browser with reduced viewport)
- It looks correct on desktop (1280px)
- All brand rules are respected
- The user has approved it

The page is done when all screens are approved and the user says "ship it."
