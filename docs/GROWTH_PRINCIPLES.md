# Growth Psychology Principles — MES US Landing Page

These are the psychological principles applied to this page. Each principle is mapped to a specific UI element. If you can't point to it on the page, it isn't implemented.

Source: growth.design cognitive biases framework.

---

## 1. Foot-in-the-Door (Micro-Commitment)

**Where**: Hero section — grade selector
**How**: Before showing the signup form, ask the visitor to select their child's grade. This is a small, low-stakes action. Visitors who complete a micro-action convert significantly higher on the main form.
**Label**: "Select their grade to get started"
**Grades**: Pre-Algebra · Algebra I · Geometry · Algebra II
**Mechanic**: Selecting a grade scrolls or transitions to the signup form with the grade pre-filled.

---

## 2. Price Anchoring

**Where**: Pricing section
**How**: Show the most expensive alternative first, then work down to the trial price. The first number the visitor sees becomes their reference point.
**Order** (always in this sequence):
1. "Private tutors charge $640+/month" — shown large, as the anchor
2. "$149/month" — the full MyEdSpace price
3. "$7 for 7 days" — the trial, emphasized as the CTA

---

## 3. Social Proof + Bandwagon Effect

**Where**: Trust bar (immediately below hero) + testimonials section
**How**: People follow what others like them do. Show scale and specificity.
- Trust bar: "21,000+ students · 4.8 stars · 1,700+ Trustpilot reviews"
- Testimonials: use reviews from `docs/REVIEWS.json` — each must show name + city + state

---

## 4. Authority Bias

**Where**: Eddie section
**How**: Specific credentials remove skepticism. Not "experienced math teacher" — exact qualifications.
**Copy**: "UCLA Pure Math degree · Perfect SAT Math Score (800/800) · 9+ years teaching in California high schools and colleges"
**Visual**: Real photo of Eddie (use `/assets/img/eddie_*.webp`). His face builds trust faster than any copy.

---

## 5. Confirmation Bias

**Where**: Hero — opening copy / problem section
**How**: The visitor already suspects private tutoring is too expensive or inconsistent. Mirror this belief before presenting the solution. Validate their frustration first.
**Direction**: Open with the parent's pain before introducing MES as the answer.

---

## 6. Loss Aversion

**Where**: Below the CTA button or hero subtext
**How**: People fear losing more than they want to gain. Frame inaction as a cost.
**Direction**: "Every month without the right teacher is another month falling behind."

---

## 7. Hick's Law (Reduce Choices)

**Where**: Entire page
**How**: One offer, one plan, one CTA destination. All buttons lead to `#signup-form`.
- One pricing option (with trial)
- One CTA type: "Start Your $7 Trial"

---

## 8. Zeigarnik Effect (Incomplete Action)

**Where**: Grade selector in hero
**How**: Starting a process creates psychological tension to complete it.
**Label**: "Step 1 — Select your child's grade"
**Mechanic**: Selected grade pre-fills the form below.

---

## 9. Peak-End Rule

**Where**: Final CTA section (above the signup form)
**How**: The last section before the form must be emotionally resonant — not a feature list.
**Direction**: Use a strong parent testimonial or an emotionally direct headline as the final moment before the ask.

---

## 10. Message Match

**Where**: H1 and hero section
**How**: The page headline must echo the language of the ad that brought the visitor here.
**Rule**: The page must visually and verbally confirm the ad's promise within 3 seconds of arrival.
