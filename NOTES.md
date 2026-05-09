# NOTES.md

---

## 1. Brief pushbacks

**Hero CTA - deliberate deviation**
The brief specifies "Start Your $7 Trial" + grade selector in the hero. For cold paid traffic, this asks for commitment before the visitor understands the product. Changed to "See how it works" and moved the grade selector to the signup form. Conversion decision, not an oversight.

**Pricing messaging - deliberate deviation**
Changed to "Start for $7. Then decide." with explicit no auto-enrollment copy. The brief does not specify what happens after the trial. Made a call: no auto-enrollment removes the biggest fear holding back skeptical parents.

**Comparison table - deliberate deviation**
Added Private Tutor as a third column. The $640+/month anchor is stronger as a visual column than inline text. Also restructured to binary checkmarks (✓/✗) for faster scanning on mobile.

**H1 is a placeholder**
The brief says "Create something that will capture attention." Wrote: "Your child isn't bad at math. They just haven't had the right teacher yet."

**Three required files did not exist**
`CLAUDE.md`, `docs/GROWTH_PRINCIPLES.md`, `docs/WIREFRAME.md` were referenced in `page.tsx` but missing from the repo. Created all three before writing any code.

**Phone placeholder is the wrong format**
Brief specifies `7XXX XXXXXX` which is a UK format. Fixed to `(XXX) XXX-XXXX`.

**Brief footer is GitHub's own footer**
Copy-paste accident. Built a real MES footer instead.

See also: `CLAUDE.md`, `docs/GROWTH_PRINCIPLES.md`, `docs/WIREFRAME.md` - all created before writing any code. They show the thinking behind the build.

---

## 2. Prompts that meaningfully shaped the output

Before writing any prompts, I built four Claude skill files that the agent would draw from throughout the build:

- `landing-pages-conversion` - universal CRO principles, growth psychology, mobile-first rules, sticky CTA logic, UTM tracking
- `direct-response-copywriting` - headline formulas, banned words, accent word rules, Hemingway scoring
- `mes-us-landing-page` - MES brand rules, available assets, brief errors to fix, audience research
- `mes-copywriting` - MES brand voice, approved phrases, Eddie-specific copy rules

Two general, two MES-specific. All four were updated iteratively as Claude Code produced output and I identified gaps - things that needed to be explicit rather than assumed. The goal was to build a system that produces this type of landing page faster on the second attempt than the first.

This is where most of the time went. The prompts below are faster to write when the context is already structured.

**Prompt 1 - Opening context prompt**

> You are building the MyEdSpace US landing page. Before writing a single line of code, read these files in this exact order: CLAUDE.md, BRIEF.md, BRAND_GUIDELINES.md, docs/GROWTH_PRINCIPLES.md, docs/WIREFRAME.md, docs/REVIEWS.json, tailwind.config.ts, app/layout.tsx. Build one screen at a time. After each screen, stop and tell me it is ready to review at localhost:3000. Wait for my approval before moving to the next screen. Build each screen as a separate component in app/components/.

This prompt forced a read-first, build-second approach and established the screen-by-screen approval loop.

**Prompt 2 - Color scheme**

> White background for Hero, Trust Bar, Problem, What is MES, Courses, FAQ. Brand blue (#3533ff) with white text for Eddie, Comparison, Final CTA + Form. Brand dark (#101626) for Pricing and Footer.

One prompt established the visual rhythm of the entire page. Before this, the agent defaulted to a single dark background throughout.

**Prompt 3 - Comparison table rebuild**

> Rebuild the comparison table with only checkmark icons. Rephrase all rows as binary questions: "Same teacher every time", "Live classes", "Recordings included", "Homework help", "Your child's pace", "Under $200/month", "Start for $7". Use ✓ in brand-green and ✗ in red (#F8375A).

The original text-based table was hard to scan on mobile and lost the visual impact of showing MyEdSpace winning on every meaningful row. Reformulating rows as binary questions forced the comparison to be honest and scannable.

---

## 3. The single biggest conversion lever

**Removing the grade selector from the hero and replacing the CTA with "See how it works."**

The brief places the grade selector and "Start Your $7 Trial" in the hero - before the visitor has seen anything. For cold paid traffic arriving from a Meta or Google ad, this is the wrong moment to ask. The visitor does not yet know what MyEdSpace is, who Eddie is, or why $7 is a good deal. Asking them to commit at this point creates friction and increases bounce.

Moving the grade selector to the signup form - after the visitor has seen the Problem section, Eddie's credentials, the comparison table, and real parent reviews - means the selection happens at the highest-intent point in the journey. By then, the visitor is not choosing a grade: they are completing an enrollment.

The hero CTA "See how it works" is a zero-friction action. It does not ask for anything. It creates forward momentum and begins the Zeigarnik effect - the visitor has started something and will keep scrolling to finish it.

---

## 4. What I'd ship next with one more day

**Hero refinement**
Spend more time on the first screen - test additional visual elements, experiment with layout, try adding imagery of Eddie or a student. The hero is the highest-leverage real estate on the page and currently relies entirely on copy. Visual reinforcement of the headline ("right teacher") could significantly improve above-the-fold conversion. Would also explore animated or illustrated elements to make the scroll feel more alive.

**Audience-specific variants**
Build separate versions of the page for distinct audience segments:
- Home-educated families (different pain points, different language)
- Students struggling at school (grade anxiety, parent frustration)
- Confidence-focused parents (child who shuts down around math)
- Exam success / perfect SAT score seekers (performance-driven, different CTA framing)

Each segment sees a different H1, different problem copy, and a different CTA. Same product, different entry point.
