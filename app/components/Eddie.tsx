import Image from 'next/image'

export default function Eddie() {
  return (
    <section className="bg-brand-blue px-4 sm:px-6 py-16 sm:py-24 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight mb-12 text-center">
          Meet Eddie – the teacher your child will actually{' '}
          <span className="text-brand-green">look forward to</span>
        </h2>

        {/* Photo + content */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 mb-12">

          {/* Eddie photo */}
          <div className="relative w-fit max-w-full mx-auto overflow-hidden lg:w-full lg:self-stretch" style={{ border: '2px solid #101626' }}>
            <Image
              src="/assets/img/eddie_1.webp"
              alt="Eddie Kang - MyEdSpace math teacher"
              width={0}
              height={0}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="block w-auto h-auto max-h-[400px] max-w-full mx-auto lg:absolute lg:inset-0 lg:w-full lg:h-full lg:max-h-none lg:object-cover lg:object-top"
            />
          </div>

          {/* Credentials + body + quote */}
          <div className="flex flex-col justify-center">

            {/* Credentials */}
            <div className="flex flex-col gap-2 mb-8 pb-8 border-b border-white/15">
              <p className="text-[20px] sm:text-2xl font-bold text-white">UCLA Pure Math</p>
              <p className="text-[20px] sm:text-2xl font-bold text-white">
                Perfect SAT Math Score{' '}
                <span className="text-brand-green">800/800</span>
              </p>
              <p className="text-[20px] sm:text-2xl font-bold text-white">9+ years teaching in California</p>
            </div>

            {/* Body */}
            <div className="space-y-5 text-lg text-white leading-relaxed mb-8">
              <p>
                Eddie Kang has spent 9 years teaching math in California high
                schools and colleges. At MyEdSpace, he teaches{' '}
                <span className="text-brand-green font-bold">every single lesson</span>{' '}
                himself: same teacher, same face, same voice, every week.
              </p>
              <p>
                No bait-and-switch. No "meet your new tutor." Your child builds
                a relationship with one teacher who knows exactly where they
                left off.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-brand-green pl-5">
              <p className="text-white text-lg leading-relaxed italic mb-3">
                "I teach every single lesson myself, start to finish. If that's
                what you've been looking for, you're in the right place."
              </p>
              <cite className="text-white text-sm not-italic">
                – Eddie Kang, @EddieDoesMath
              </cite>
            </blockquote>

          </div>
        </div>

        {/* Intro video */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight text-white text-center mb-8">
            From struggling to confident.<br />See how – in 60 seconds
          </h2>
          <video
            src="/assets/video/MES_intro.mp4"
            poster="/assets/img/eddie_4.webp"
            controls
            preload="metadata"
            className="w-full aspect-video"
            aria-label="MyEdSpace introduction - Eddie Kang"
          />
        </div>

      </div>
    </section>
  )
}
