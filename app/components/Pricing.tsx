const INCLUDED = [
  'Live classes twice a week with Eddie',
  'Recordings of every session',
  'Printable workbooks for each lesson',
  'Homework with scoring + video explanations',
  'AI math coach',
  'Access on any device',
]

export default function Pricing() {
  return (
    <section className="bg-brand-dark text-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto text-center">

        {/* Headline */}
        <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight mb-8">
          Start for <span className="text-brand-green">$7.</span> Then decide.
        </h2>

        {/* Price anchor — $640 shown first, per GROWTH_PRINCIPLES #2 */}
        <div className="space-y-2 text-lg text-white/65 mb-10 leading-relaxed">
          <p>Private tutors charge <strong className="text-white">$640+/month.</strong></p>
          <p>MyEdSpace costs <strong className="text-white">$149/month.</strong></p>
          <p>Your first 7 days: <span className="text-brand-green font-bold">$7.</span></p>
        </div>

        {/* Pricing card */}
        <div className="border-2 border-brand-green p-8 mb-8 text-left">
          <div className="mb-6 pb-6 border-b border-white/15">
            <p className="text-xl sm:text-2xl font-black text-white">$7 Trial – 7 days of full access</p>
            <p className="text-white/50 text-sm mt-1">Then $149/month - no auto-enrollment</p>
          </div>

          <ul className="space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-white/80">
                <span className="text-brand-green font-bold shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#signup-form"
            data-cta
            className="mt-8 block w-full bg-brand-green text-brand-dark font-black text-base text-center py-4 hover:bg-[#c9f500] motion-safe:transition-colors"
          >
            Try 7 days for $7
          </a>

          <p className="mt-3 text-xs text-white/40 text-center leading-relaxed">
            After 7 days, no automatic charge. You decide whether to continue at $149/month.
          </p>
        </div>

        {/* Guarantee */}
        <p className="text-sm text-white/50 leading-relaxed">
          Not happy after your first month? We offer a{' '}
          <span className="text-white font-semibold">30-day money-back guarantee</span>{' '}
          on your first full month payment.
        </p>

      </div>
    </section>
  )
}
