'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'What happens after the $7 trial?',
    a: 'Nothing automatic. After 7 days your trial ends and you\'ll choose whether to enroll. No surprise charges, no auto-renewals.',
  },
  {
    q: 'What if my child misses a class?',
    a: 'Every session is recorded. They can watch it the same day or before the next class. Nothing is lost.',
  },
  {
    q: 'Does the curriculum align with US state standards?',
    a: "Eddie follows a structured math curriculum designed for US middle and high school students. While specific standards vary by state, the core content aligns with what students need to succeed in school and on standardized tests. We're always happy to discuss your child's specific needs.",
  },
  {
    q: 'What timezone are the classes in?',
    a: 'Classes run in multiple timezones to accommodate US families. When you sign up, you\'ll choose the schedule that works for you.',
  },
  {
    q: 'How many students are in each class?',
    a: "MyEdSpace runs live group classes, not 1:1 sessions. Every question gets answered via live chat moderation during class, so no question goes unanswered.",
  },
  {
    q: 'Can my child use the AI math coach outside of class?',
    a: 'Yes. The AI math coach is available 24/7 and supports photo uploads of homework questions. It\'s included in every plan.',
  },
  {
    q: 'What devices does MyEdSpace work on?',
    a: 'Any device with a browser: laptop, tablet, or phone. No downloads required.',
  },
  {
    q: 'When does the course run?',
    a: 'The course runs October through May - but you can join at any point during the year and jump straight in.',
  },
  {
    q: 'Is there a contract or long-term commitment?',
    a: 'No contract. Choose the payment plan that works for you: monthly, annual (with a discount), or installments.',
  },
]

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set())

  function toggle(i: number) {
    setOpenIndices(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section className="bg-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight mb-12 text-brand-dark text-center">
          Questions? We've got answers
        </h2>

        <div className="divide-y divide-brand-dark/10">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left text-brand-dark font-bold text-lg hover:text-brand-blue motion-safe:transition-colors"
                aria-expanded={openIndices.has(i)}
              >
                <span>{faq.q}</span>
                <span className="text-brand-blue text-xl leading-none shrink-0">
                  {openIndices.has(i) ? '−' : '+'}
                </span>
              </button>
              {openIndices.has(i) && (
                <p className="pb-5 text-brand-dark/65 text-lg leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
