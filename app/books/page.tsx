'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BooksIndexPage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  const books = [
    {
      id: "prophetic-letters",
      title: "Prophetic Letters from a Prophetic History: The Summary",
      preview: "",
      badgeText: "27 Letters",
      status: "Available Now",
      cover: "/book-cover1.jpeg",
      available: true
    },
    {
      id: "coming-soon-2",
      title: "The Sound of the Remnant",
      preview: "A prophetic call to discernment and spiritual awakening in shifting times",
      badgeText: "Vol. 02",
      status: "Coming Soon",
      cover: null,
      available: false
    },
    {
      id: "coming-soon-3",
      title: "Blueprint of Tomorrow",
      preview: "Visions of cultural alignment, destiny, and the architecture of the future",
      badgeText: "Vol. 03",
      status: "Coming Soon",
      cover: null,
      available: false
    },
    {
      id: "coming-soon-4",
      title: "The Economics of Divine Integrity",
      preview: "Freely received, freely given — principles governing kingdom value",
      badgeText: "Vol. 04",
      status: "Coming Soon",
      cover: null,
      available: false
    }
  ]

  return (
    <div 
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-[#E8F1F5] text-[#111827] flex flex-col justify-between select-none selection:bg-[#0284C7] selection:text-white"
    >
      
      <div className="relative w-full bg-[#0B2545] text-white overflow-hidden border-b border-[#0284C7]/30 shadow-xl">
        
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-35 pointer-events-none transition-all duration-700"
          style={{ backgroundImage: `url('/background.jpg')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071930]/85 via-[#0B2545]/75 to-[#0B2545] pointer-events-none" />
        {/* Soft Luminous Glow */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#38BDF8]/20 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          
          {/* Navigation Header */}
          <header className="w-full py-6 flex items-center justify-between border-b border-white/15 relative">
            <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-white hover:text-[#38BDF8] transition font-bold -ml-2 sm:-ml-4">
              Ecclewise Preacher
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-sky-100 mr-[-1rem]">
              <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>Home</Link>
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

          <div className="py-16 sm:py-24 text-center max-w-3xl mx-auto space-y-5">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#38BDF8] font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
              Digital Literature Archive
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight font-bold drop-shadow-md">
              Books &amp; Volumes
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-sky-200">
              By Joseph Esenowo
            </p>
            <p className="text-sm sm:text-base text-sky-100/90 max-w-xl mx-auto leading-relaxed">
              Select a volume from the sanctuary archive below to read the manuscripts—freely given.
            </p>
          </div>

        </div>
      </div>

      {/* 2. WHATSAPP-STYLE ARCHIVE FEED (DIRECTLY ON PAGE BACKGROUND ON MOBILE) */}
      <main className="w-full max-w-3xl mx-auto px-0 sm:px-6 pt-6 sm:pt-10 pb-16 relative z-20">
        
        {/* Section Header Bar */}
        <div className="px-5 sm:px-2 pb-3 flex items-center justify-between border-b border-[#CBD5E1]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#0B2545]">
              Published &amp; Upcoming Volumes
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[#64748B]">
            {books.length} Volumes
          </span>
        </div>

        {/* Native Edge-to-Edge Chat Rows (No Box Container) */}
        <div className="divide-y divide-[#CBD5E1]/80">
          {books.map((book) => (
            book.available ? (
              <Link 
                key={book.id} 
                href={`/books/${book.id}`}
                className="flex items-start gap-4 sm:gap-5 px-5 sm:px-4 py-5 hover:bg-white/60 active:bg-white/80 transition-all group"
              >
                {/* Left Profile Avatar */}
                <div className="relative shrink-0 mt-0.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#0284C7] shadow-sm group-hover:scale-105 transition-transform bg-[#0B2545] flex items-center justify-center">
                    {book.cover ? (
                      <img 
                        src={book.cover} 
                        alt={book.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white font-serif font-bold text-lg">EP</span>
                    )}
                  </div>
                </div>

                {/* Center Title & Message Preview */}
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-base sm:text-lg font-serif text-[#0B2545] font-bold group-hover:text-[#0284C7] transition leading-snug">
                      {book.title}
                    </h2>
                    <span className="text-[11px] text-[#0284C7] font-bold shrink-0 mt-0.5">
                      {book.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                    {book.preview}
                  </p>
                </div>

                {/* Right Pill & Chevron */}
                <div className="flex flex-col items-end gap-2 shrink-0 pl-1 mt-0.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0284C7] text-white text-[10px] font-bold tracking-wide shadow-sm">
                    {book.badgeText}
                  </span>
                  <span className="text-xs text-[#0284C7] font-bold group-hover:translate-x-1 transition-transform">
                    Open &rarr;
                  </span>
                </div>
              </Link>
            ) : (
              <div 
                key={book.id}
                className="flex items-start gap-4 sm:gap-5 px-5 sm:px-4 py-5 opacity-75 cursor-not-allowed"
              >
                {/* Left Muted Avatar */}
                <div className="relative shrink-0 mt-0.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D5E6EE] border border-[#B8D4E3] text-[#475569] flex items-center justify-center font-serif font-bold text-base sm:text-lg">
                    EP
                  </div>
                </div>

                {/* Center Title & Subtitle */}
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-base sm:text-lg font-serif text-[#334155] font-bold leading-snug">
                      {book.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {book.preview}
                  </p>
                </div>

                {/* Right Status Tag */}
                <div className="flex flex-col items-end gap-2 shrink-0 pl-1 mt-0.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D5E6EE] text-[#334155] text-[10px] font-bold uppercase tracking-wider">
                    {book.badgeText}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-300 shrink-0">
                    Coming Soon
                  </span>
                </div>
              </div>
            )
          ))}
        </div>

      </main>

      {/* 3. FULL-WIDTH SECOND HERO BANNER: FEATURED SPECIAL READING */}
      <section id="books" className="w-full relative bg-[#0B2545] border-t border-[#0284C7]/30 border-b border-[#0284C7]/30 shadow-2xl text-white overflow-hidden mt-8 pb-16 pt-16">
        
        {/* Subtle Atmospheric Background Texture Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: `url('/background.png')` }}
        />
        {/* Deep Atmospheric Sky Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071930]/85 via-[#0B2545]/75 to-[#0B2545] pointer-events-none" />
        {/* Soft Blue Luminous Glow Accent */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#38BDF8]/20 blur-[100px] rounded-full pointer-events-none z-0" />

        {/* Full-width container inside constraints */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
          
          {/* Text Column */}
          <div className="space-y-6 order-2 md:order-1">
            <span className="inline-block text-[11px] uppercase tracking-widest text-[#38BDF8] font-extrabold bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
              Ethereal Readings
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-snug drop-shadow-md">
              Scariest Revelations From A Man Who Has Seen The Future
            </h2>
            <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed font-normal max-w-2xl">
              An unfiltered look into visions of coming shifts, cultural awakenings, and the roadmap of tomorrow. Joseph Esenowo shares profound, unfiltered insights received about geopolitical rearrangement and the restructuring of integrity.
            </p>
            <div className="pt-3">
              <Link 
                href="/scariest-revelations" 
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B2545] bg-[#38BDF8] hover:bg-white px-8 py-4 rounded-full transition-all shadow-2xl group"
              >
                <span>Explore Content</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl group order-1 md:order-2 bg-[#071930]">
            <img 
              src="/hero-books.jpeg" 
              alt="Prophetic Readings Collection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071930]/90 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-4 left-4 text-xs font-serif tracking-widest text-[#38BDF8] uppercase font-bold bg-[#0B2545]/80 px-3 py-1 rounded-md backdrop-blur-sm shadow-sm">
              Literature Collection
            </span>
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