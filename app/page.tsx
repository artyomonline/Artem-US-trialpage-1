'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Problem from './components/Problem'
import WhatIsMES from './components/WhatIsMES'
import Eddie from './components/Eddie'
import Courses from './components/Courses'
import Comparison from './components/Comparison'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import ExitPopup from './components/ExitPopup'

export default function HomePage() {
  const [selectedGrade, setSelectedGrade] = useState('')

  return (
    <>
      <main>
        <Header />
        <Hero />
        <TrustBar />
        <Problem />
        <WhatIsMES />
        <Eddie />
        <Courses />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FinalCTA selectedGrade={selectedGrade} />
        <FAQ />
        <Footer />
      </main>
      <StickyCTA />
      <ExitPopup />
    </>
  )
}
