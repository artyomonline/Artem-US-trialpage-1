'use client'

import { useEffect, useState } from 'react'

export default function ExitPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('exitPopupShown')) return

    let timer: ReturnType<typeof setTimeout>

    function show() {
      setVisible(true)
      sessionStorage.setItem('exitPopupShown', '1')
      cleanup()
    }

    function resetTimer() {
      clearTimeout(timer)
      timer = setTimeout(show, 20000)
    }

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) show()
    }

    function cleanup() {
      clearTimeout(timer)
      document.removeEventListener('mousemove', resetTimer)
      document.removeEventListener('keydown', resetTimer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }

    document.addEventListener('mousemove', resetTimer, { passive: true })
    document.addEventListener('keydown', resetTimer, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    resetTimer()

    return cleanup
  }, [])

  function dismiss() {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-dark/70"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Popup */}
      <div className="relative bg-white w-full max-w-md p-8 z-10">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 text-brand-dark/40 hover:text-brand-dark text-xl leading-none motion-safe:transition-colors"
        >
          ✕
        </button>

        <h3 className="text-xl sm:text-2xl font-black text-brand-dark mb-3">
          Still looking for answers?
        </h3>
        <p className="text-brand-dark/60 text-lg leading-relaxed mb-6">
          Leave your details and we'll reach out to help you find the right course for your child.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="First name"
            required
            className="border border-brand-dark/20 px-3 py-3 text-brand-dark text-sm focus:outline-none focus:border-brand-blue"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="border border-brand-dark/20 px-3 py-3 text-brand-dark text-sm focus:outline-none focus:border-brand-blue"
          />
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

          <button
            type="submit"
            className="w-full bg-brand-green text-brand-dark font-black text-base py-3 mt-1 hover:bg-[#c9f500] motion-safe:transition-colors"
          >
            Get in touch
          </button>
        </form>

        <p className="mt-3 text-sm text-brand-dark/40 text-center">
          We'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  )
}
