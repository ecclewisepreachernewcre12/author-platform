'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ScariestRevelationsPage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  
  const [activeRevelation, setActiveRevelation] = useState<number>(1)

  const revelations = [
    {
      id: 1,
      title: "Revelation 1: The Shift in Global Power Structures",
      content: "In this vision of the future, the traditional alliances that dictate global economies begin to fracture under the weight of digital sovereignty and moral exhaustion. Nations once deemed unbreakable experience sudden shifts from within, driven by technological over-reliance and spiritual disconnect. Joseph Esenowo outlines how unseen spiritual forces precede every geopolitical rearrangement."
    },
    {
      id: 2,
      title: "Revelation 2: The Silent Crisis of Human Conscience",
      content: "A profound numbness overtakes modern society as artificial intelligence and algorithmic comfort replace genuine human empathy. The vision reveals an era where information is abundant, yet wisdom is scarcer than oil. People become spectators to their own spiritual decay, traded for the illusion of total connectivity."
    },
    {
      id: 3,
      title: "Revelation 3: The Awakening of the Remnant",
      content: "Amidst the darkness, a distinct company rises—not through political leverage or institutional strength, but through a return to foundational spiritual truths. These are the ones anchored in prophetic history (1 Samuel 10:1 and John 1:1), holding the line when conventional systems fail. Their voices pierce through the noise of the 21st century."
    },
    {
      id: 4,
      title: "Revelation 4: The Economics of Integrity",
      content: "The final phase of the revelation exposes a total restructuring of how value and exchange are perceived. Systems built on exploitation collapse under their own weight, paving the way for a pure economic model governed by divine integrity. Freely received, freely given—this principle becomes the ultimate survival currency for the future."
    }
  ]

  return (
    <div 
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-[#E8F1F5] text-[#111827] flex flex-col justify-between select-none selection:bg-[#0284C7] selection:text-white"
    >
      
      {/* IMMERSIVE HERO & HEADER SECTION */}
      <div className="relative w-full bg-[#0B2545] text-white overflow-hidden border-b border-[#0284C7]/30 shadow-xl">
        
        {/* Sky Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-35 pointer-events-none transition-all duration-700"
          style={{ backgroundImage: `url('/background.jpg')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071930]/85 via-[#0B2545]/75 to-[#0B2545] pointer-events-none" />
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#38BDF8]/20 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          
          {/* Navigation Header */}
          <header className="w-full py-6 flex items-center justify-between border-b border-white/15 relative">
            <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-white hover:text-[#38BDF8] transition font-bold -ml-2 sm:-ml-4">
              Ecclewise Preacher
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-sky-100 mr-[-1rem]">
              <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>Home</Link>
              
              {/* About Dropdown */}
              <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className={`flex items-center gap-1 transition-all focus:outline-none py-1 ${pathname.startsWith('/about') ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>
                  <span>About</span><span className="text-[10px]">&▾</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-[#0F2E54] border border-white/15 rounded-xl shadow-2xl py-2 z-50 flex flex-col">
                    <Link href="/about/website" className="px-4 py-2 text-[11px] uppercase tracking-wider text-sky-100 hover:text-[#38BDF8] hover:bg-white/5 transition">About the Website</Link>
                    <Link href="/about/author" className="px-4 py-2 text-[11px] uppercase tracking-wider text-sky-100 hover:text-[#38BDF8] hover:bg-white/5 transition">About the Author</Link>
                  </div>
                )}
              </div>

              <Link href="/books" className={`transition-all ${pathname === '/books' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>Books</Link>
              <Link href="/contact" className={`transition-all ${pathname === '/contact' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>Contact</Link>
              <Link href="/give" className={`transition-all ${pathname === '/give' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>Support</Link>
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 focus:outline-none hover:text-[#38BDF8] transition" aria-label="Toggle Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </header>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-4 right-4 bg-[#0F2E54]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl z-50 flex flex-col space-y-4 text-xs uppercase tracking-wider font-semibold text-sky-100">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/15">Home</Link>
              <div>
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex justify-between items-center hover:text-white py-1 border-b border-white/15"
                >
                  <span>About</span>
                  <span>{mobileAboutOpen ? '▴' : '▾'}</span>
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 py-2 space-y-2 flex flex-col bg-white/5 rounded-lg mt-2">
                    <Link href="/about/website" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-sky-100 hover:text-[#38BDF8]">About the Website</Link>
                    <Link href="/about/author" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-sky-100 hover:text-[#38BDF8]">About the Author</Link>
                  </div>
                )}
              </div>
              <Link href="/books" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/15 text-[#38BDF8]">Books</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/15">Contact</Link>
              <Link href="/give" onClick={() => setMobileMenuOpen(false)} className="py-1">Support</Link>
            </div>
          )}

          {/* Hero Banner Content */}
          <div className="py-16 sm:py-24 text-center max-w-3xl mx-auto space-y-5">
            <Link href="/" className="inline-flex items-center text-xs uppercase tracking-widest text-[#38BDF8] hover:underline font-bold mb-2">
              &larr; Back to Home
            </Link>
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#38BDF8] font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                Prophetic Insight 01
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white leading-tight font-bold drop-shadow-md">
              Scariest Revelations From a Man Who Has Seen the Future
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-sky-200">
              By Joseph Esenowo
            </p>
            <p className="text-sm sm:text-base text-sky-100/90 max-w-xl mx-auto leading-relaxed">
              An unfiltered look into visions of coming shifts, cultural awakenings, and the roadmap of tomorrow.
            </p>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="w-full max-w-5xl mx-auto px-6 py-16 space-y-12">
        
        {/* Article Body & Revelations Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Revelation Navigation Menu */}
          <div className="md:col-span-1 bg-white border border-[#CBD5E1] rounded-3xl p-6 space-y-3 sticky top-6 shadow-xl">
            <h3 className="text-xs uppercase tracking-widest text-[#0B2545] font-bold pb-3 border-b border-[#E2E8F0] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
              Table of Revelations
            </h3>
            <div className="space-y-2">
              {revelations.map((rev) => (
                <button
                  key={rev.id}
                  onClick={() => setActiveRevelation(rev.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl text-xs uppercase tracking-wider font-bold transition-all shadow-sm ${
                    activeRevelation === rev.id 
                      ? 'bg-[#0B2545] text-white shadow-md scale-[1.02]' 
                      : 'bg-[#F8FAFC] text-[#334155] border border-[#CBD5E1] hover:bg-[#F0F8FF] hover:border-[#0284C7] hover:text-[#0B2545]'
                  }`}
                >
                  Revelation 0{rev.id}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Revelation Content */}
          <div className="md:col-span-2 bg-white border border-[#CBD5E1] rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
            
            {/* Subtle top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B2545] via-[#0284C7] to-[#38BDF8]" />

            {revelations.map((rev) => (
              activeRevelation === rev.id && (
                <div key={rev.id} className="space-y-6 animate-fadeIn">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white font-extrabold bg-[#0284C7] px-3.5 py-1 rounded-full shadow-sm">
                      Vision Part 0{rev.id}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#0B2545] leading-snug font-bold pt-4">
                      {rev.title}
                    </h2>
                  </div>
                  
                  <div className="w-12 h-1 bg-[#0284C7] rounded-full" />
                  
                  <p className="text-base sm:text-lg text-[#334155] leading-relaxed pt-2">
                    {rev.content}
                  </p>
                  
                  <div className="pt-6 border-t border-[#E2E8F0]">
                    <p className="text-xs text-[#64748B] italic font-medium bg-[#F8FAFC] p-4 rounded-2xl border border-[#CBD5E1]">
                      &ldquo;He that has an ear, let him hear what the Spirit says unto the times.&rdquo;
                    </p>
                  </div>
                </div>
              )
            ))}
          </div>

        </div>

      </main>

      {/* SUPPORT / DONATION FULL-WIDTH BANNER SECTION */}
      <section className="w-full relative bg-[#0B2545] border-t border-[#0284C7]/30 border-b border-[#0284C7]/30 shadow-2xl text-white overflow-hidden py-16 mt-12">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: `url('/background.jpg')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071930]/85 via-[#0B2545]/75 to-[#0B2545] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#38BDF8]/20 blur-[100px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[11px] uppercase tracking-widest text-[#38BDF8] font-extrabold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
            Freely Received, Freely Given
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-white font-bold leading-snug drop-shadow-md">
            Has This Revelation Stirred Your Spirit?
          </h2>
          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
            Truth is a gift meant to awaken the remnant without hindrance. If these insights have imparted clarity and vision to your journey, you can support the continuous distribution of these works.
          </p>
          <div className="pt-2">
            <Link 
              href="/give" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B2545] bg-[#38BDF8] hover:bg-white px-8 py-4 rounded-full transition-all shadow-2xl group"
            >
              <span>Support the Work</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}