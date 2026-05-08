'use client'

import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const visibleTargets = new Set<Element>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleTargets.add(entry.target)
          } else {
            visibleTargets.delete(entry.target)
          }
        })
        setVisible(visibleTargets.size === 0)
      },
      { threshold: 0 }
    )

    // Observe all content CTA buttons and the signup form
    // Header CTA is excluded — it's sticky and always in view
    const targets = [
      ...document.querySelectorAll('[data-cta]'),
      document.getElementById('signup-form'),
    ].filter(Boolean) as Element[]

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:left-auto sm:right-6 sm:bottom-6 z-40">
      <a
        href="#signup-form"
        className="block sm:inline-block w-full sm:w-auto bg-brand-green text-brand-dark font-black text-lg text-center px-8 py-4 hover:bg-[#c9f500] motion-safe:transition-colors"
      >
        Try 7 days for $7
      </a>
    </div>
  )
}
