'use client'

import { useState } from 'react'

const REVIEWS = [
  { title: 'She finally feels confident in math', body: 'My daughter went from dreading homework to asking for extra problems. Eddie explains things in a way she actually gets. Worth every dollar.', name: 'Jennifer M.', city: 'San Diego, CA', date: 'Mar 2026' },
  { title: 'Better than the tutor we paid $80/hr for', body: 'We tried two private tutors before this. The structure here – same teacher, twice a week, recordings if we miss – is what was missing.', name: 'Marcus T.', city: 'Austin, TX', date: 'Feb 2026' },
  { title: 'The AI coach is a game changer', body: "He uses the AI tutor for homework when I can't help him. Not because I don't want to – because I genuinely don't remember Algebra II.", name: 'Priya R.', city: 'Edison, NJ', date: 'Apr 2026' },
  { title: 'Lessons are actually engaging', body: "Each lesson builds on the last. My son is in 8th grade and it's the first time math has clicked for him. Lessons fly by.", name: 'Sarah K.', city: 'Naperville, IL', date: 'Jan 2026' },
  { title: 'Recordings saved us during travel', body: "We were on vacation and he didn't miss a beat – watched the recording the next day. Try getting that from a tutor.", name: 'David L.', city: 'Bellevue, WA', date: 'Mar 2026' },
  { title: 'Made geometry click', body: 'She failed her last geometry test. Three weeks in with Eddie and she got a B+. Honestly, I\'m a little emotional about it.', name: 'Aisha B.', city: 'Atlanta, GA', date: 'Apr 2026' },
  { title: 'Finally a math class she looks forward to', body: 'She used to drag her feet about Wednesday tutoring. Now she\'s setting up her laptop fifteen minutes early. Tells me about Eddie at dinner.', name: 'Rachel D.', city: 'Denver, CO', date: 'Feb 2026' },
  { title: 'Worth every cent', body: 'Tried free YouTube channels, Khan Academy, two apps. Nothing stuck. Live class twice a week with the same teacher is what we needed.', name: 'Carlos V.', city: 'Phoenix, AZ', date: 'Apr 2026' },
  { title: 'The 30-day refund made me try it', body: "I almost didn't sign up – we'd been burned before. The money-back guarantee was the only reason I tried. Three months in, no regrets.", name: 'Lauren H.', city: 'Charlotte, NC', date: 'Jan 2026' },
]

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? REVIEWS : REVIEWS.slice(0, 6)

  return (
    <section className="bg-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight mb-12 text-brand-dark text-center">
          What parents are saying
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {visible.map((review, i) => (
            <div key={i} className="border border-brand-dark/10 p-5 flex flex-col gap-3">
              <span className="text-brand-green text-sm tracking-tight">★★★★★</span>
              <p className="font-bold text-brand-dark text-lg leading-snug">{review.title}</p>
              <p className="text-brand-dark/60 text-lg leading-relaxed flex-1">{review.body}</p>
              <div className="pt-3 border-t border-brand-dark/8">
                <p className="text-brand-dark font-semibold text-sm">{review.name}</p>
                <p className="text-brand-dark/40 text-sm mt-0.5">{review.city} · {review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mb-10">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-bold text-brand-blue border border-brand-blue px-6 py-2.5 hover:bg-brand-blue hover:text-white motion-safe:transition-colors"
            >
              Show more reviews
            </button>
          </div>
        )}

        {/* CTA after testimonials */}
        <div className="text-center mt-10 pt-10 border-t border-brand-dark/10">
          <a
            href="#signup-form"
            data-cta
          className="inline-block bg-brand-green text-brand-dark font-black text-lg px-10 py-4 hover:bg-[#c9f500] motion-safe:transition-colors"
          >
            Try 7 days for $7
          </a>
          <p className="mt-3 text-sm text-brand-dark/40">$7 for 7 days · Cancel anytime</p>
        </div>

      </div>
    </section>
  )
}
