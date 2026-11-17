'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BookDetailPage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [selectedBadge, setSelectedBadge] = useState<number>(1)

  // Safe client-side date state to satisfy Next.js prerendering rules
  const [currentDate, setCurrentDate] = useState<Date | null>(null)

  useEffect(() => {
    setCurrentDate(new Date())
  }, [])

  // Badges with exact release dates
  const badges = [
    {
      id: 1,
      title: "Badge 1: Reedeeming The World From A Great Chaos",
      releaseDateStr: "December 5, 2026",
      releaseDate: new Date("2026-12-05T00:00:00"),
      items: [
        { name: "Letter 1", pages: 35, type: "letter" },
        { name: "Letter 2", pages: 35, type: "letter" },
        { name: "Letter 3", pages: 35, type: "letter" },
        { name: "Letter 4", pages: 25, type: "letter" },
        { name: "Letter 5", pages: 7, type: "letter" },
        { name: "Letter 6", pages: 16, type: "letter" },
        { name: "Bonus Writing", pages: 18, type: "bonus" },
      ]
    },
    {
      id: 2,
      title: "Badge 2: Awakening",
      releaseDateStr: "December 12, 2026",
      releaseDate: new Date("2026-12-12T00:00:00"),
      items: [
        { name: "Letter 7", pages: 10, type: "letter" },
        { name: "Letter 8", pages: 10, type: "letter" },
        { name: "Letter 9", pages: 10, type: "letter" },
        { name: "Letter 10", pages: 10, type: "letter" },
        { name: "Bonus Writing 1", pages: 6, type: "bonus" },
        { name: "Bonus Writing 2", pages: 9, type: "bonus" }
      ]
    },
    {
      id: 3,
      title: "Badge 3: Transitional Epoch",
      releaseDateStr: "December 19, 2026",
      releaseDate: new Date("2026-12-19T00:00:00"),
      items: [
        { name: "Letter 11", pages: 5, type: "letter" },
        { name: "Letter 12", pages: 6, type: "letter" },
        { name: "Letter 13", pages: 13, type: "letter" },
        { name: "Letter 14", pages: 10, type: "letter" },
        { name: "Bonus Writings", pages: 7, type: "bonus" },
      ]
    },
    {
      id: 4,
      title: "Badge 4: Depths of Vision",
      releaseDateStr: "December 26, 2026",
      releaseDate: new Date("2026-12-26T00:00:00"),
      items: [
        { name: "Letter 15", pages: 8, type: "letter" },
        { name: "Letter 16", pages: 10, type: "letter" },
        { name: "Bonus Writing", pages: 11, type: "bonus" },
      ]
    },
    {
      id: 5,
      title: "Badge 5: Remnant Chronicles",
      releaseDateStr: "January 2, 2027",
      releaseDate: new Date("2027-01-02T00:00:00"),
      items: [
        { name: "Letter 17", pages: 7, type: "letter" },
        { name: "Letter 18", pages: 13, type: "letter" },
        { name: "Bonus Writing 1", pages: 7, type: "bonus" },
        { name: "Bonus Writing 2", pages: 9, type: "bonus" }
      ]
    },
    {
      id: 6,
      title: "Badge 6: Unfolding Horizons",
      releaseDateStr: "January 9, 2027",
      releaseDate: new Date("2027-01-09T00:00:00"),
      items: [
        { name: "Letter 19", pages: 11, type: "letter" },
        { name: "Letter 20", pages: 10, type: "letter" },
        { name: "Letter 21", pages: 33, type: "letter" },
        { name: "Bonus Writing", pages: 10, type: "bonus" },
      ]
    },
    {
      id: 7,
      title: "Badge 7: Advanced Revelations",
      releaseDateStr: "January 16, 2027",
      releaseDate: new Date("2027-01-16T00:00:00"),
      items: [
        { name: "Letter 22", pages: 14, type: "letter" },
        { name: "Letter 23", pages: 6, type: "letter" },
        { name: "Letter 24", pages: 20, type: "letter" },
        { name: "Bonus Writing", pages: 12, type: "bonus" },
      ]
    },
    {
      id: 8,
      title: "Badge 8: The Culmination",
      releaseDateStr: "January 23, 2027",
      releaseDate: new Date("2027-01-23T00:00:00"),
      items: [
        { name: "Letter 25", pages: 6, type: "letter" },
        { name: "Letter 26", pages: 14, type: "letter" },
        { name: "Letter 27", pages: 27, type: "letter" },
      ]
    },
  ]

  const activeBadgeData = badges.find(b => b.id === selectedBadge)

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
            
            {/* Desktop Navigation */}
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

              <Link href="/books" className={`transition-all ${pathname.startsWith('/books') ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>Books</Link>
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
            <Link href="/books" className="inline-flex items-center text-xs uppercase tracking-widest text-[#38BDF8] hover:underline font-bold mb-2">
              &larr; Back to Books Library
            </Link>
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#38BDF8] font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                Book 1: Comprehensive Archive
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white leading-tight font-bold drop-shadow-md">
              Prophetic Letters from a Prophetic History
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-sky-200">
              By Joseph Esenowo
            </p>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl mx-auto px-6 py-16 space-y-10">
        
        {/* Badge Selector Grid */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-[#0B2545] font-bold text-center">
            Select a Badge &amp; View Release Schedule
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {badges.map((badge) => {
              const isUnlocked = badge.id === 1 || (currentDate !== null && currentDate >= badge.releaseDate)
              
              return (
                <button
                  key={badge.id}
                  onClick={() => isUnlocked && setSelectedBadge(badge.id)}
                  disabled={!isUnlocked}
                  className={`py-4 px-5 rounded-2xl transition-all shadow-sm border flex items-center justify-between text-left ${
                    selectedBadge === badge.id
                      ? 'bg-[#0B2545] text-white border-[#0B2545] scale-[1.01] shadow-md'
                      : isUnlocked
                      ? 'bg-white text-[#334155] border-[#CBD5E1] hover:bg-[#F0F8FF] hover:border-[#0284C7]'
                      : 'bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed opacity-80'
                  }`}
                >
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-bold opacity-80">
                      Badge {badge.id}
                    </span>
                    <span className="block text-sm font-serif font-bold mt-0.5">
                      {badge.title.split(': ')[1]}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-xl border shrink-0 ${
                      selectedBadge === badge.id 
                        ? 'bg-[#0284C7] text-white border-[#38BDF8]/40' 
                        : isUnlocked
                        ? 'bg-[#F1F5F9] text-[#0B2545] border-[#CBD5E1]'
                        : 'bg-slate-300 text-slate-600 border-slate-300'
                    }`}>
                      {badge.releaseDateStr}
                    </span>
                    {!isUnlocked && (
                      <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
                        🔒 Locked
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Badge Contents Display Card */}
        {activeBadgeData && (
          <div className="bg-white border border-[#CBD5E1] rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B2545] via-[#0284C7] to-[#38BDF8]" />

            <div className="border-b border-[#E2E8F0] pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white font-extrabold bg-[#0284C7] px-3.5 py-1 rounded-full shadow-sm">
                  Release Date: {activeBadgeData.releaseDateStr}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#0B2545] pt-3 font-bold">
                  {activeBadgeData.title}
                </h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#64748B] bg-[#F1F5F9] px-3 py-1.5 rounded-xl border border-[#CBD5E1]">
                {activeBadgeData.items.length} Total Contents
              </span>
            </div>

            {/* Contents List */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#0B2545] font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto modi nesciunt voluptatibus. Consectetur beatae doloribus animi blanditiis molestiae dicta sequi repellendus, velit quasi perferendis culpa laudantium soluta accusamus quis.
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeBadgeData.items.map((item, idx) => {
                  const isLetter = item.type === 'letter'
                  const letterSlug = item.name.toLowerCase().replace(/\s+/g, '-')
                  
                  return isLetter ? (
                    <Link 
                      key={idx} 
                      href={`/books/prophetic-letters/${letterSlug}`}
                      className="bg-[#F8FAFC] border border-[#CBD5E1] p-4 sm:p-5 rounded-2xl flex items-center justify-between hover:border-[#0284C7] hover:bg-[#F0F8FF] transition-all group shadow-sm"
                    >
                      <span className="text-xs sm:text-sm font-serif font-bold text-[#0B2545] uppercase tracking-wider group-hover:text-[#0284C7] transition">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-[#0284C7] font-bold bg-[#E0F2FE] px-3 py-1 rounded-full border border-[#BAE6FD] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                        {item.pages} pages &rarr;
                      </span>
                    </Link>
                  ) : (
                    <div 
                      key={idx} 
                      className="bg-[#F1F5F9] border border-[#CBD5E1] p-4 sm:p-5 rounded-2xl flex items-center justify-between shadow-sm opacity-95"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span className="text-xs sm:text-sm font-serif font-bold text-[#334155] uppercase tracking-wider">
                          {item.name} <span className="text-[10px] text-amber-700 font-sans tracking-normal font-semibold lowercase">(bonus)</span>
                        </span>
                      </div>
                      <span className="text-[11px] text-[#64748B] font-bold bg-white px-3 py-1 rounded-full border border-[#CBD5E1]">
                        {item.pages} pages
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        )}

      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>
    </div>
  )
}