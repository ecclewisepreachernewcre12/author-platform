'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HomePage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  return (
    <div 
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-[#0284C7] text-white flex flex-col justify-between select-none selection:bg-white selection:text-[#0284C7]"
    >
      
      {/* HERO & HEADER SECTION */}
      <div className="relative w-full overflow-hidden border-b border-white/20">
        
        {/* Full Sky Background Image blending seamlessly into the bright blue body */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none transition-all duration-700"
          style={{ backgroundImage: `url('/background.jpg')` }}
        />

        {/* Luminous Glow Accent */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-white/20 blur-[150px] rounded-full pointer-events-none z-0" />

        {/* Hero Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col min-h-screen justify-between px-6 sm:px-10 py-6">
          
          {/* Navigation Header */}
          <header className="w-full flex items-center justify-between pb-6 border-b border-white/20 backdrop-blur-md relative">
            
            {/* Logo */}
            <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-white hover:text-sky-200 transition font-bold -ml-2 sm:-ml-4">
              Ecclewise Preacher
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-bold text-sky-100 mr-[-1rem]">
              <Link href="/" className={`transition-all ${pathname === '/' ? 'text-white underline underline-offset-4 font-extrabold' : 'hover:text-white'}`}>
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
                  className={`flex items-center gap-1 transition-all focus:outline-none py-1 ${pathname.startsWith('/about') ? 'text-white underline underline-offset-4 font-extrabold' : 'hover:text-white'}`}
                >
                  <span>About</span>
                  <span className="text-[10px]">&▾</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-[#016FB9] border border-white/20 rounded-xl shadow-2xl py-2 z-50 flex flex-col">
                    <Link href="/about/website" className="px-4 py-2 text-[11px] uppercase tracking-wider text-sky-100 hover:text-white hover:bg-white/10 transition">
                      About the Website
                    </Link>
                    <Link href="/about/author" className="px-4 py-2 text-[11px] uppercase tracking-wider text-sky-100 hover:text-white hover:bg-white/10 transition">
                      About the Author
                    </Link>
                  </div>
                )}
              </div>

             
              <Link href="/books" className={`transition-all ${pathname === '/books' ? 'text-white underline underline-offset-4 font-extrabold' : 'hover:text-white'}`}>
                Books
              </Link>
             
              <Link href="/contact" className={`transition-all ${pathname === '/contact' ? 'text-white underline underline-offset-4 font-extrabold' : 'hover:text-white'}`}>
                Contact
              </Link>
              <Link href="/give" className={`transition-all ${pathname === '/give' ? 'text-white underline underline-offset-4 font-extrabold' : 'hover:text-white'}`}>
                Support
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 focus:outline-none hover:text-sky-200 transition"
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
            <div className="md:hidden absolute top-20 left-4 right-4 bg-[#016FB9] backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl z-50 flex flex-col space-y-4 text-xs uppercase tracking-wider font-bold text-sky-100">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-white/20 ${pathname === '/' ? 'text-white' : 'hover:text-white'}`}>Home</Link>
              
              <div>
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex justify-between items-center hover:text-white py-1 border-b border-white/20"
                >
                  <span>About</span>
                  <span>{mobileAboutOpen ? '▴' : '▾'}</span>
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 py-2 space-y-2 flex flex-col bg-white/10 rounded-lg mt-2">
                    <Link href="/about/website" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-sky-100 hover:text-white">About the Website</Link>
                    <Link href="/about/author" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-sky-100 hover:text-white">About the Author</Link>
                  </div>
                )}
              </div>

             
              <Link href="/books" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-white/20 ${pathname === '/books' ? 'text-white' : 'hover:text-white'}`}>Books</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-white/20 ${pathname === '/contact' ? 'text-white' : 'hover:text-white'}`}>Contact</Link>
              <Link href="/give" onClick={() => setMobileMenuOpen(false)} className={`py-1 ${pathname === '/give' ? 'text-white' : 'hover:text-white'}`}>Support</Link>
            </div>
          )}

          {/* Hero Main Body */}
          <main className="w-full max-w-3xl mx-auto text-center space-y-6 my-auto py-12">
            <div className="space-y-3">
              <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white font-extrabold bg-white/20 border border-white/30 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                Prophetic History & Insights
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-wide text-white leading-tight drop-shadow-md">
                THE BEGINNING OF A PROPHETIC HISTORY
              </h1>
              <div className="flex justify-center items-center gap-4 text-xs tracking-widest text-sky-100 font-extrabold pt-1">
                <span>JOHN 1:1</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                <span>1 SAMUEL 10:1</span>
              </div>
            </div>

            <div className="space-y-4 pt-1">
              <p className="font-serif italic text-xl sm:text-2xl text-sky-100 font-bold">
                Welcome to Ecclewise Preacher
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed max-w-xl mx-auto font-medium">
                This platform exists to share prophetic letters, articles, essays, and books freely, because the Gospel is not for sale. Explore the writings, be encouraged, and receive insight for the challenges of the 21st century.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="#writings" 
                className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#0284C7] bg-white hover:bg-sky-50 px-8 py-3.5 rounded-full hover:scale-105 transition-all group shadow-xl"
              >
                <span>Explore Platform</span>
                <span className="transform group-hover:translate-y-1 transition font-bold">&darr;</span>
              </a>
            </div>
          </main>

          <div className="pb-4 text-center">
            <span className="text-[10px] uppercase tracking-widest text-white/85 font-bold animate-bounce inline-block">Scroll down for content &darr;</span>
          </div>

        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <section id="writings" className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 space-y-28">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl group bg-[#015c9a]">
            <img 
              src="/hero-articles.jpeg" 
              alt="Books Cover" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0284C7]/90 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-4 left-4 text-xs font-serif tracking-widest text-white uppercase font-bold">Featured Work</span>
          </div>

          <div className="space-y-5">
            <span className="text-[11px] uppercase tracking-widest text-sky-100 font-extrabold bg-white/10 px-3 py-1 rounded-md border border-white/20">
              Published Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold leading-snug">
              BOOKS, ARTICLES AND ESSAYS
            </h2>
            <p className="text-base sm:text-lg text-sky-100 leading-relaxed font-medium">
              Explore prophetic articles, essays, reflections, and writings on culture, politics, and spirituality.Access full chapters and summaries digitally.
            </p>
             <div className="pt-2">
              <Link 
                href="/books" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-white hover:text-sky-200 transition-colors group underline underline-offset-4"
              >
                <span>Read latest books</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        
        

      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-white/20 text-center text-xs text-sky-100 font-semibold">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}