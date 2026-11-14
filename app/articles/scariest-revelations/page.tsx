'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ScariestRevelationsPage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  
  // State to track which revelation is currently expanded/viewed
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
      
      {/* Navigation Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#CBD5E1] relative">
        <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-[#0B2545] hover:text-[#0284C7] transition font-bold -ml-2 sm:-ml-4">
          Ecclewise Preacher
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#334155] mr-[-1rem]">
          <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>Home</Link>
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className={`flex items-center gap-1 transition-all focus:outline-none py-1 ${pathname.startsWith('/about') ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
              <span>About</span><span className="text-[10px]">&▾</span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#F4F9FB] border border-[#CBD5E1] rounded-xl shadow-lg py-2 z-50 flex flex-col">
                <Link href="/about/website" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#334155] hover:text-[#0284C7] hover:bg-[#E8F1F5] transition">About the Website</Link>
                <Link href="/about/author" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#334155] hover:text-[#0284C7] hover:bg-[#E8F1F5] transition">About the Author</Link>
              </div>
            )}
          </div>
          <Link href="/articles" className={`transition-all ${pathname === '/articles' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>Articles</Link>
          <Link href="/books" className={`transition-all ${pathname === '/books' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>Books</Link>
          <Link href="/bonus" className={`transition-all ${pathname === '/bonus' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>Bonus writings</Link>
          <Link href="/contact" className={`transition-all ${pathname === '/contact' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>Contact</Link>
          <Link href="/give" className={`transition-all ${pathname === '/give' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>Support</Link>
        </nav>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#0B2545] p-2 focus:outline-none hover:text-[#0284C7] transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-[#F4F9FB]/95 backdrop-blur-xl border border-[#CBD5E1] rounded-2xl p-6 shadow-xl z-50 flex flex-col space-y-4 text-xs uppercase tracking-wider font-semibold text-[#334155]">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Home</Link>
          <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60 text-[#0284C7]">Articles</Link>
          <Link href="/books" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Books</Link>
          <Link href="/bonus" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Bonus writings</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Contact</Link>
          <Link href="/give" onClick={() => setMobileMenuOpen(false)} className="py-1">Support</Link>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full max-w-4xl mx-auto px-6 py-16 space-y-12">
        
        {/* Back Link & Header */}
        <div className="space-y-6">
          <Link href="/articles" className="inline-flex items-center text-xs uppercase tracking-widest text-[#0284C7] hover:underline font-bold">
            &larr; Back to Articles Library
          </Link>
          <div className="text-center space-y-4 border-b border-[#CBD5E1] pb-10">
            <span className="text-[11px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-4 py-1.5 rounded-full border border-[#B8D4E3]">
              Prophetic Insight 01
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#0B2545] leading-tight font-bold">
              Scariest Revelations From a Man Who Has Seen the Future
            </h1>
            <p className="text-base sm:text-lg text-[#111827] max-w-xl mx-auto font-normal">
              By Joseph Esenowo &bull; An unfiltered look into visions of coming shifts, cultural awakenings, and the roadmap of tomorrow.
            </p>
          </div>
        </div>

        {/* Article Body & Revelations Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Revelation Navigation Menu */}
          <div className="md:col-span-1 bg-[#F4F9FB] border border-[#CBD5E1] rounded-2xl p-6 space-y-3 sticky top-6 shadow-md">
            <h3 className="text-xs uppercase tracking-widest text-[#0B2545] font-bold pb-2 border-b border-[#CBD5E1]">
              Table of Revelations
            </h3>
            <div className="space-y-2">
              {revelations.map((rev) => (
                <button
                  key={rev.id}
                  onClick={() => setActiveRevelation(rev.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-bold transition ${
                    activeRevelation === rev.id 
                      ? 'bg-[#0284C7] text-white shadow-sm font-bold' 
                      : 'text-[#334155] hover:bg-[#E8F1F5] hover:text-[#0B2545]'
                  }`}
                >
                  Revelation {rev.id}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Revelation Content */}
          <div className="md:col-span-2 bg-[#F4F9FB] border border-[#CBD5E1] rounded-2xl p-8 sm:p-10 space-y-6 shadow-md">
            {revelations.map((rev) => (
              activeRevelation === rev.id && (
                <div key={rev.id} className="space-y-4 animate-fadeIn">
                  <span className="text-[10px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-3 py-1 rounded-md border border-[#B8D4E3]">
                    Vision Part 0{rev.id}
                  </span>
                  <h2 className="text-2xl font-serif text-[#0B2545] leading-snug font-bold">
                    {rev.title}
                  </h2>
                  <div className="w-12 h-0.5 bg-[#0284C7]" />
                  <p className="text-base sm:text-lg text-[#111827] leading-relaxed pt-2">
                    {rev.content}
                  </p>
                  <p className="text-xs text-[#475569] italic pt-4 border-t border-[#CBD5E1] font-medium">
                    &ldquo;He that has an ear, let him hear what the Spirit says unto the times.&rdquo;
                  </p>
                </div>
              )
            ))}
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}