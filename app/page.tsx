'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HomePage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  // Solid Navy App-Style Splash Screen State
  const [showSplash, setShowSplash] = useState(true)
  const [fadeSplash, setFadeSplash] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeSplash(true)
    }, 2000)

    const removeTimer = setTimeout(() => {
      setShowSplash(false)
    }, 2700)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <div 
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-[#E8F1F5] text-[#111827] flex flex-col justify-between select-none selection:bg-[#0284C7] selection:text-white relative overflow-x-hidden"
    >
      
      {/* SOLID OPAQUE DEEP NAVY SPLASH SCREEN */}
      {showSplash && (
        <div 
          className={`fixed inset-0 z-50 bg-[#0B2545] flex flex-col items-center justify-center text-center px-6 transition-opacity duration-700 overflow-hidden ${
            fadeSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Subtle Ambient Radial Glow (100% Opaque Navy Base Underneath) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0284C7]/20 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-5 max-w-4xl mx-auto">
            

            {/* Oversized Editorial Serif Welcome */}
            <h1 className="font-serif italic font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none drop-shadow-2xl">
              Welcome To Ecclewise Preacher
            </h1>

            {/* Refined Gold/Azure Divider */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent my-2" />

            {/* Subtitle */}
            <p className="font-serif text-sm sm:text-lg tracking-[0.2em] uppercase text-sky-200/90 font-medium">
              Prophetic History And Insights
            </p>
          </div>

          <div className="absolute bottom-10 text-[10px] uppercase tracking-[0.3em] text-sky-300/60 font-semibold animate-pulse">
            Entering Sanctuary
          </div>
        </div>
      )}

      {/* 1. IMMERSIVE HERO & HEADER SECTION */}
      <div className="relative w-full bg-[#0B2545] text-white overflow-hidden border-b border-[#0284C7]/30 shadow-xl">
        
        {/* Sky Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-35 pointer-events-none transition-all duration-700"
          style={{ backgroundImage: `url('/background.jpg')` }}
        />
        {/* Deep Atmospheric Sky Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071930]/85 via-[#0B2545]/75 to-[#0B2545] pointer-events-none" />
        {/* Soft Luminous Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#38BDF8]/20 blur-[140px] rounded-full pointer-events-none z-0" />

        {/* Hero Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col min-h-screen justify-between px-6 sm:px-10 py-6">
          
          {/* Navigation Header */}
          <header className="w-full flex items-center justify-between pb-6 border-b border-white/15 relative">
            
            {/* Logo */}
            <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-white hover:text-[#38BDF8] transition font-bold -ml-2 sm:-ml-4">
              Ecclewise Preacher
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-sky-100 mr-[-1rem]">
              <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>
                Home
              </Link>
              
              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 transition-all focus:outline-none py-1 ${pathname.startsWith('/about') ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}
                >
                  <span>About</span>
                  <span className="text-[10px]">&▾</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-[#0F2E54] border border-white/15 rounded-xl shadow-2xl py-2 z-50 flex flex-col">
                    <Link href="/about/website" className="px-4 py-2 text-[11px] uppercase tracking-wider text-sky-100 hover:text-[#38BDF8] hover:bg-white/5 transition">
                      About the Website
                    </Link>
                    <Link href="/about/author" className="px-4 py-2 text-[11px] uppercase tracking-wider text-sky-100 hover:text-[#38BDF8] hover:bg-white/5 transition">
                      About the Author
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/books" className={`transition-all ${pathname === '/books' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>
                Books
              </Link>
              <Link href="/contact" className={`transition-all ${pathname === '/contact' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>
                Contact
              </Link>
              <Link href="/give" className={`transition-all ${pathname === '/give' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>
                Support
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 focus:outline-none hover:text-[#38BDF8] transition"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </header>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-4 right-4 bg-[#0F2E54]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl z-50 flex flex-col space-y-4 text-xs uppercase tracking-wider font-semibold text-sky-100">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-white/15 ${pathname === '/' ? 'text-[#38BDF8]' : 'hover:text-white'}`}>Home</Link>
              
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

              <Link href="/books" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-white/15 ${pathname === '/books' ? 'text-[#38BDF8]' : 'hover:text-white'}`}>Books</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-white/15 ${pathname === '/contact' ? 'text-[#38BDF8]' : 'hover:text-white'}`}>Contact</Link>
              <Link href="/give" onClick={() => setMobileMenuOpen(false)} className={`py-1 ${pathname === '/give' ? 'text-[#38BDF8]' : 'hover:text-white'}`}>Support</Link>
            </div>
          )}

          {/* Hero Main Body */}
          <main className="w-full max-w-3xl mx-auto text-center space-y-6 my-auto py-12">
            <div className="space-y-4">
              <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#38BDF8] font-bold bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full shadow-sm">
                Prophetic History &amp; Insights
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wide text-white leading-tight drop-shadow-md">
                THE BEGINNING OF A PROPHETIC HISTORY
              </h1>
              <div className="flex justify-center items-center gap-4 text-xs tracking-widest text-[#38BDF8] font-extrabold pt-1">
                <span>JOHN 1:1</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping"></span>
                <span>1 SAMUEL 10:1</span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <p className="font-serif italic text-xl sm:text-2xl text-sky-200 font-medium">
                Welcome to Ecclewise Preacher
              </p>
              <p className="text-sm sm:text-lg text-sky-100/90 leading-relaxed max-w-xl mx-auto font-normal">
                This platform exists to share prophetic letters, articles, essays, and books freely, because the Gospel is not for sale. Explore the writings, be encouraged, and receive insight for the challenges of the 21st century.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="#writings" 
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B2545] bg-[#38BDF8] hover:bg-white px-8 py-4 rounded-full hover:scale-105 transition-all group shadow-2xl"
              >
                <span>Explore Platform</span>
                <span className="transform group-hover:translate-y-1 transition font-bold">&darr;</span>
              </a>
            </div>
          </main>

          <div className="pb-4 text-center">
            <span className="text-[10px] uppercase tracking-widest text-sky-200/80 font-semibold animate-bounce inline-block">
              Scroll down for content &darr;
            </span>
          </div>

        </div>
      </div>

      <section id="writings" className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 py-20">
        
        <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-lg group bg-[#0B2545]">
            <img 
              src="/hero-articles.jpeg" 
              alt="Books Cover" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071930]/85 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-serif tracking-widest text-[#38BDF8] uppercase font-bold bg-[#0B2545]/80 px-3 py-1 rounded-md backdrop-blur-sm">
              Featured Work
            </span>
          </div>

          <div className="space-y-5">
            <span className="inline-block text-[11px] uppercase tracking-widest text-white font-extrabold bg-[#0284C7] px-3.5 py-1 rounded-full shadow-sm">
              Published Works
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0B2545] font-bold leading-snug">
              BOOKS, ARTICLES AND ESSAYS
            </h2>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
              Explore prophetic articles, essays, reflections, and writings on culture, politics, and spirituality. Access full chapters and summaries digitally.
            </p>
            <div className="pt-2">
              <Link 
                href="/books" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#0B2545] hover:bg-[#0284C7] px-7 py-3.5 rounded-full transition-all shadow-md group"
              >
                <span>Read latest books</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}