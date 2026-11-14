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
      className="min-h-screen bg-[#E8F1F5] text-[#111827] flex flex-col justify-between select-none selection:bg-[#0284C7] selection:text-white"
    >
      
      {/* HERO & HEADER SECTION */}
      <div className="relative w-full overflow-hidden border-b border-[#CBD5E1]">
        
        {/* Background Image restricted to Hero/Header */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15 pointer-events-none transition-all duration-700"
          style={{ backgroundImage: `url('/background.png')` }}
        />

        {/* Soft Sky Glow Accent */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0284C7]/15 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" />

        {/* Hero Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col min-h-screen justify-between px-6 sm:px-10 py-6">
          
          {/* Navigation Header */}
          <header className="w-full flex items-center justify-between pb-6 border-b border-[#CBD5E1] backdrop-blur-sm relative">
            
            {/* Logo pushed left */}
            <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-[#0B2545] hover:text-[#0284C7] transition font-bold -ml-2 sm:-ml-4">
              Ecclewise Preacher
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#334155] mr-[-1rem]">
              <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
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
                  className={`flex items-center gap-1 transition-all focus:outline-none py-1 ${pathname.startsWith('/about') ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}
                >
                  <span>About</span>
                  <span className="text-[10px]">&▾</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-[#F4F9FB] border border-[#CBD5E1] rounded-xl shadow-lg py-2 z-50 flex flex-col">
                    <Link href="/about/website" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#334155] hover:text-[#0284C7] hover:bg-[#E8F1F5] transition">
                      About the Website
                    </Link>
                    <Link href="/about/author" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#334155] hover:text-[#0284C7] hover:bg-[#E8F1F5] transition">
                      About the Author
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/articles" className={`transition-all ${pathname === '/articles' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
                Articles
              </Link>
              <Link href="/books" className={`transition-all ${pathname === '/books' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
                Books
              </Link>
              <Link href="/bonus" className={`transition-all ${pathname === '/bonus' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
                Bonus writings
              </Link>
              <Link href="/contact" className={`transition-all ${pathname === '/contact' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
                Contact
              </Link>
              <Link href="/give" className={`transition-all ${pathname === '/give' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
                Support
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#0B2545] p-2 focus:outline-none hover:text-[#0284C7] transition"
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
            <div className="md:hidden absolute top-20 left-4 right-4 bg-[#F4F9FB]/95 backdrop-blur-xl border border-[#CBD5E1] rounded-2xl p-6 shadow-xl z-50 flex flex-col space-y-4 text-xs uppercase tracking-wider font-semibold text-[#334155]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Home</Link>
              
              <div>
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex justify-between items-center hover:text-[#0B2545] py-1 border-b border-[#CBD5E1]/60"
                >
                  <span>About</span>
                  <span>{mobileAboutOpen ? '▴' : '▾'}</span>
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 py-2 space-y-2 flex flex-col bg-[#E8F1F5] rounded-lg mt-2">
                    <Link href="/about/website" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-[#334155] hover:text-[#0284C7]">About the Website</Link>
                    <Link href="/about/author" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-[#334155] hover:text-[#0284C7]">About the Author</Link>
                  </div>
                )}
              </div>

              <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/articles' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Articles</Link>
              <Link href="/books" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/books' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Books</Link>
              <Link href="/bonus" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/bonus' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Bonus writings</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/contact' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Contact</Link>
              <Link href="/give" onClick={() => setMobileMenuOpen(false)} className={`py-1 ${pathname === '/give' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Support</Link>
            </div>
          )}

          {/* Hero Main Body */}
          <main className="w-full max-w-3xl mx-auto text-center space-y-6 my-auto py-12">
            <div className="space-y-3">
              <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#0B2545] font-bold bg-[#D5E6EE]/90 border border-[#B8D4E3] px-4 py-1.5 rounded-full shadow-sm backdrop-blur-md">
                Prophetic History & Insights
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-wide text-[#0B2545] leading-tight">
                THE BEGINNING OF A PROPHETIC HISTORY
              </h1>
              <div className="flex justify-center items-center gap-4 text-xs tracking-widest text-[#0284C7] font-bold pt-1">
                <span>JOHN 1:1</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-ping"></span>
                <span>1 SAMUEL 10:1</span>
              </div>
            </div>

            <div className="space-y-4 pt-1">
              <p className="font-serif italic text-xl sm:text-2xl text-[#0B2545] font-medium">
                Welcome to Ecclewise Preacher.
              </p>
              <p className="text-base sm:text-lg text-[#111827] leading-relaxed max-w-xl mx-auto font-normal">
                This platform exists to share prophetic letters, articles, essays, and books freely, because the Gospel is not for sale. Explore the writings, be encouraged, and receive insight for the challenges of the 21st century.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="#writings" 
                className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-white bg-[#0284C7] hover:bg-[#0369A1] px-8 py-3.5 rounded-full hover:scale-105 transition-all group shadow-md"
              >
                <span>Explore Platform</span>
                <span className="transform group-hover:translate-y-1 transition font-bold">&darr;</span>
              </a>
            </div>
          </main>

          <div className="pb-4 text-center">
            <span className="text-[10px] uppercase tracking-widest text-[#475569] font-semibold animate-bounce inline-block">Scroll down for content &darr;</span>
          </div>

        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <section id="writings" className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 space-y-28">
        
        {/* Section 1: Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-md group">
            <img 
              src="/hero-articles.jpeg" 
              alt="Articles Cover" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-serif tracking-widest text-white uppercase font-semibold">Featured Work</span>
          </div>

          <div className="space-y-5">
            <span className="text-[11px] uppercase tracking-widest text-[#0284C7] font-bold">
              Published Works & Essays
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0B2545] font-bold leading-snug">
              Articles & Revelations
            </h2>
            <p className="text-base sm:text-lg text-[#111827] leading-relaxed">
              Explore prophetic articles, essays, reflections, and writings on culture, politics, and spirituality—including &ldquo;Scariest Revelations From a Man Who Has Seen the Future.&rdquo;
            </p>
            <div className="pt-2">
              <Link 
                href="/articles" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0284C7] hover:text-[#0B2545] transition-colors group"
              >
                <span>Read Articles</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: Books */}
        <div id="books" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 order-2 md:order-1">
            <span className="text-[11px] uppercase tracking-widest text-[#0284C7] font-bold">
              Free Literature & Downloads
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0B2545] font-bold leading-snug">
              Books & Prophetic Letters
            </h2>
            <p className="text-base sm:text-lg text-[#111827] leading-relaxed">
              Access full chapter summaries and digital books, including &ldquo;Prophetic Letters from a Prophetic History&rdquo; (Letters 1–12).
            </p>
            <div className="pt-2">
              <Link 
                href="/books" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0284C7] hover:text-[#0B2545] transition-colors group"
              >
                <span>Browse Books</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-md group order-1 md:order-2">
            <img 
              src="/hero-books.jpeg" 
              alt="Books Cover" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-serif tracking-widest text-white uppercase font-semibold">Literature Collection</span>
          </div>
        </div>

        {/* Section 3: Bonus Writings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-md group">
            <img 
              src="/hero-bonus.jpeg" 
              alt="Bonus Cover" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-serif tracking-widest text-white uppercase font-semibold">Special Archive</span>
          </div>

          <div className="space-y-5">
            <span className="text-[11px] uppercase tracking-widest text-[#0284C7] font-bold">
              Special Archive
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0B2545] font-bold leading-snug">
              Bonus Writings
            </h2>
            <p className="text-base sm:text-lg text-[#111827] leading-relaxed">
              Read archived manuscripts and special releases from Joseph Esenowo, featuring insights on culture, neocolonialism, and destiny.
            </p>
            <div className="pt-2">
              <Link 
                href="/bonus" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0284C7] hover:text-[#0B2545] transition-colors group"
              >
                <span>View Bonus Writings</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* VISION & SUPPORT BANNER */}
        <div className="relative bg-[#F4F9FB] border border-[#CBD5E1] rounded-2xl p-8 md:p-14 text-center space-y-6 shadow-md">
          <span className="text-[11px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-4 py-1.5 rounded-full border border-[#B8D4E3]">
            The Vision & Ministry
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0B2545] font-bold max-w-2xl mx-auto leading-tight">
            Freely Received, Freely Given
          </h2>
          <p className="text-base sm:text-lg text-[#111827] max-w-xl mx-auto leading-relaxed">
            All writings, letters, and books on this platform are distributed without cost. If you have been empowered by these messages and feel led to partner with the ministry, your support helps keep these truths accessible to all.
          </p>
          <div className="pt-2">
            <Link 
              href="/give" 
              className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-white bg-[#0284C7] hover:bg-[#0369A1] px-8 py-4 rounded-full hover:scale-105 transition-all shadow-md"
            >
              <span>Partner & Give Support</span>
              <span>&rarr;</span>
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