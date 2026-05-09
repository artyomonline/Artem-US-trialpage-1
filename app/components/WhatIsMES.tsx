import Image from 'next/image'

export default function WhatIsMES() {
  return (
    <section className="bg-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">

        {/* Headline */}
        <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight mb-8 text-brand-dark text-center">
          Not a tutor. Not an app.{' '}
          <span className="text-brand-green">Something better</span>
        </h2>

        {/* Eddie image */}
        <div className="mb-14">
          <Image
            src="/assets/img/eddie_3.webp"
            alt="Eddie Kang teaching a live class"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            style={{ border: '2px solid #101626' }}
          />
        </div>

        {/* Intro */}
        <div className="max-w-2xl mb-14">
          <p className="text-lg text-brand-dark/65 leading-relaxed mb-4">
            This is Eddie's classroom. Your child gets a front-row seat.
          </p>
          <p className="text-lg text-brand-dark/65 leading-relaxed mb-4">
            Live math class, twice a week. Same teacher, same curriculum,
            same group — building on itself week after week until it
            actually sticks.
          </p>
          <p className="text-lg text-brand-dark/65 leading-relaxed">
            Your child joins from home, asks questions live, rewatches
            anything they missed. No random tutors. No starting over
            every session.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-14">
          <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight text-brand-dark text-center mb-8">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              'Get matched to your course',
              'Attend live twice a week – from any device',
              'Watch the results build week after week',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-[48px] font-black text-brand-green leading-none shrink-0">
                  {i + 1}
                </span>
                <p className="text-[20px] text-brand-dark font-bold leading-snug pt-3">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div className="mb-14">
          <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight text-brand-dark text-center mb-8">
            What's included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">

            <div className="flex items-start gap-3">
              <span className="text-xl leading-none mt-0.5 shrink-0">🎥</span>
              <p className="text-lg text-brand-dark/70 leading-snug">
                Live classes with real-time{' '}
                <span className="text-brand-green font-bold">chat</span> – every question gets answered
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl leading-none mt-0.5 shrink-0">⏺️</span>
              <p className="text-lg text-brand-dark/70 leading-snug">
                <span className="text-brand-green font-bold">Recordings</span> of every session, rewatch any moment, anytime
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl leading-none mt-0.5 shrink-0">📓</span>
              <p className="text-lg text-brand-dark/70 leading-snug">
                Professionally designed{' '}
                <span className="text-brand-green font-bold">printable workbooks</span> for each lesson
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl leading-none mt-0.5 shrink-0">✏️</span>
              <p className="text-lg text-brand-dark/70 leading-snug">
                Homework with scoring +{' '}
                <span className="text-brand-green font-bold">video explanation</span> for every task
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl leading-none mt-0.5 shrink-0">🤖</span>
              <p className="text-lg text-brand-dark/70 leading-snug">
                <span className="text-brand-green font-bold">AI math coach</span> for when they're stuck between classes
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl leading-none mt-0.5 shrink-0">📱</span>
              <p className="text-lg text-brand-dark/70 leading-snug">
                Works on <span className="text-brand-green font-bold">any device</span>, from anywhere
              </p>
            </div>

          </div>
        </div>

        {/* Closing line */}
        <p className="text-center text-[20px] font-bold text-brand-dark/65 leading-relaxed">
          Everything designed for one thing: your child feeling{' '}
          <span className="text-brand-green font-black">confident</span> in math.
        </p>

      </div>
    </section>
  )
}
