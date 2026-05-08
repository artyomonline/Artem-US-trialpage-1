'use client'

import { useState, useEffect } from 'react'

const GRADES = ['Pre-Algebra', 'Algebra I', 'Geometry', 'Algebra II', 'Not sure - help me choose']

interface Props {
  selectedGrade: string
}

export default function FinalCTA({ selectedGrade }: Props) {
  const [grade, setGrade] = useState(selectedGrade)

  useEffect(() => {
    if (selectedGrade) setGrade(selectedGrade)
  }, [selectedGrade])

  return (
    <section id="signup-form" className="bg-brand-blue px-4 sm:px-6 py-16 sm:py-24 text-white">
      <div className="max-w-lg mx-auto">

        {/* Headline — Peak-End Rule: emotionally resonant final moment (GROWTH_PRINCIPLES #9) */}
        <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight mb-4 text-center">
          Your child deserves a teacher who shows up{' '}
          <span className="text-brand-green">every time.</span>
        </h2>

        <p className="text-lg text-white/70 text-center mb-10 leading-relaxed">
          Start for <span className="text-brand-green font-bold">$7.</span>{' '}
          See the difference in the first week.
        </p>

        {/* Form card */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white p-6 sm:p-8 flex flex-col gap-4"
        >
          {/* First + Last name */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-brand-dark/60 uppercase tracking-wide">
                First name
              </label>
              <input
                type="text"
                placeholder="Jane"
                required
                className="border border-brand-dark/20 px-3 py-3 text-brand-dark text-sm focus:outline-none focus:border-brand-blue"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-brand-dark/60 uppercase tracking-wide">
                Last name
              </label>
              <input
                type="text"
                placeholder="Smith"
                required
                className="border border-brand-dark/20 px-3 py-3 text-brand-dark text-sm focus:outline-none focus:border-brand-blue"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-brand-dark/60 uppercase tracking-wide">
              Email address
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              required
              className="border border-brand-dark/20 px-3 py-3 text-brand-dark text-sm focus:outline-none focus:border-brand-blue"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-brand-dark/60 uppercase tracking-wide">
              Phone number
            </label>
            <div className="flex">
              <span className="border border-brand-dark/20 border-r-0 px-3 flex items-center text-brand-dark/50 text-sm bg-brand-dark/[0.03] shrink-0">
                +1
              </span>
              <input
                type="tel"
                placeholder="(XXX) XXX-XXXX"
                required
                className="flex-1 border border-brand-dark/20 px-3 py-3 text-brand-dark text-sm focus:outline-none focus:border-brand-blue"
              />
            </div>
          </div>

          {/* Grade */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-brand-dark/60 uppercase tracking-wide">
              Grade
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              className="border border-brand-dark/20 px-3 py-3 text-brand-dark text-sm focus:outline-none focus:border-brand-blue bg-white appearance-none"
            >
              <option value="">Select grade</option>
              {GRADES.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-brand-green text-brand-dark font-black text-base py-4 mt-2 hover:bg-[#c9f500] motion-safe:transition-colors"
          >
            Try 7 days for $7
          </button>

          {/* Microcopy */}
          <p className="text-xs text-brand-dark/40 text-center leading-relaxed">
            By clicking, you agree to receive communications from MyEdSpace.
            You can unsubscribe anytime.
          </p>

          {/* Payment logos */}
          <div className="flex items-center justify-center gap-3">
            {['visa', 'mastercard', 'amex', 'paypal'].map((brand) => (
              <img
                key={brand}
                src={`https://cdn.jsdelivr.net/npm/payment-icons@1.1.0/min/flat/${brand}.svg`}
                alt={brand}
                style={{ height: '32px', filter: 'grayscale(1)', opacity: 0.5 }}
              />
            ))}
          </div>
        </form>

        {/* Trust signals */}
        <p className="mt-6 text-center text-sm text-white/50">
          <span className="text-brand-green">★★★★★</span>{' '}
          Trusted by 21,000+ families · Cancel anytime
        </p>

      </div>
    </section>
  )
}
