'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BookDetailPage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [selectedBadge, setSelectedBadge] = useState<number>(1)

  const badges = [
    {
      id: 1,
      title: "Badge 1: Foundation of Prophetic History",
      letters: [
        { name: "Letter 1", pages: 35 },
        { name: "Letter 2", pages: 35 },
        { name: "Letter 3", pages: 35 },
        { name: "Letter 4", pages: 25 },
        { name: "Letter 5", pages: 7 },
        { name: "Letter 6", pages: 16 },
      ],
      bonuses: [{ name: "Bonus Writing", pages: 18 }]
    },
    {
      id: 2,
      title: "Badge 2: Awakening & Insights",
      letters: [
        { name: "Letter 7", pages: 10 },
        { name: "Letter 8", pages: 10 },
        { name: "Letter 9", pages: 10 },
        { name: "Letter 10", pages: 10 },
      ],
      bonuses: [
        { name: "Bonus Writing 1", pages: 6 },
        { name: "Bonus Writing 2", pages: 9 }
      ]
    },
    {
      id: 3,
      title: "Badge 3: The Transitional Epoch",
      letters: [
        { name: "Letter 11", pages: 5 },
        { name: "Letter 12", pages: 6 },
        { name: "Letter 13", pages: 13 },
        { name: "Letter 14", pages: 10 },
      ],
      bonuses: [{ name: "Bonus Writings", pages: 7 }]
    },
    {
      id: 4,
      title: "Badge 4: Depths of Vision",
      letters: [
        { name: "Letter 15", pages: 8 },
        { name: "Letter 16", pages: 10 },
      ],
      bonuses: [{ name: "Bonus Writing", pages: 11 }]
    },
    {
      id: 5,
      title: "Badge 5: The Remnant Chronicles",
      letters: [
        { name: "Letter 17", pages: 7 },
        { name: "Letter 18", pages: 13 },
      ],
      bonuses: [
        { name: "Bonus Writing 1", pages: 7 },
        { name: "Bonus Writing 2", pages: 9 }
      ]
    },
    {
      id: 6,
      title: "Badge 6: Unfolding Horizons",
      letters: [
        { name: "Letter 19", pages: 11 },
        { name: "Letter 20", pages: 6 },
        { name: "Letter 21", pages: 13 },
      ],
      bonuses: [{ name: "Bonus Writing", pages: 14 }]
    },
    {
      id: 7,
      title: "Badge 7: Advanced Revelations",
      letters: [
        { name: "Letter 22", pages: 10 },
        { name: "Letter 23", pages: 10 },
        { name: "Letter 24", pages: 33 },
      ],
      bonuses: [{ name: "Bonus Writing", pages: 12 }]
    },
    {
      id: 8,
      title: "Badge 8: The Culmination",
      letters: [
        { name: "Letter 25", pages: 6 },
        { name: "Letter 26", pages: 14 },
        { name: "Letter 27", pages: 27 },
      ],
      bonuses: []
    },
  ]

  const activeBadgeData = badges.find(b => b.id === selectedBadge)

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
          <Link href="/books" className={`transition-all ${pathname.startsWith('/books') ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>Books</Link>
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
          <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Articles</Link>
          <Link href="/books" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60 text-[#0284C7]">Books</Link>
          <Link href="/bonus" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Bonus writings</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Contact</Link>
          <Link href="/give" onClick={() => setMobileMenuOpen(false)} className="py-1">Support</Link>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full max-w-5xl mx-auto px-6 py-16 space-y-12">
        
        {/* Back Link & Header */}
        <div className="space-y-6">
          <Link href="/books" className="inline-flex items-center text-xs uppercase tracking-widest text-[#0284C7] hover:underline font-bold">
            &larr; Back to Books Library
          </Link>
          <div className="text-center space-y-4 border-b border-[#CBD5E1] pb-10">
            <span className="text-[11px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-4 py-1.5 rounded-full border border-[#B8D4E3]">
              Book 1: Comprehensive Archive
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#0B2545] leading-tight font-bold">
              Prophetic Letters from a Prophetic History
            </h1>
            <p className="text-sm sm:text-base text-[#111827] max-w-2xl mx-auto font-normal">
              By Joseph Esenowo &bull; The seminal first volume spanning Letters 1 through 27, organized across 8 distinct badges and companion bonus writings.
            </p>
          </div>
        </div>

        {/* Badge Selector Grid */}
        <div className="space-y-6">
          <h3 className="text-xs uppercase tracking-widest text-[#0B2545] font-bold text-center">
            Select a Badge to Explore Contents
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {badges.map((badge) => (
              <button
                key={badge.id}
                onClick={() => setSelectedBadge(badge.id)}
                className={`py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold transition border ${
                  selectedBadge === badge.id
                    ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-sm font-bold'
                    : 'bg-[#F4F9FB] text-[#334155] border-[#CBD5E1] hover:bg-[#E8F1F5] hover:text-[#0B2545]'
                }`}
              >
                Badge {badge.id}
              </button>
            ))}
          </div>
        </div>

        {/* Active Badge Contents Display */}
        {activeBadgeData && (
          <div className="bg-[#F4F9FB] border border-[#CBD5E1] rounded-2xl p-8 sm:p-12 space-y-8 shadow-md">
            <div className="border-b border-[#CBD5E1] pb-6">
              <span className="text-[10px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-3 py-1 rounded-md border border-[#B8D4E3]">
                Book 1 Structure
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0B2545] pt-2 font-bold">
                {activeBadgeData.title}
              </h2>
            </div>

            {/* Letters list */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#0B2545] font-bold">
                Letters in this Badge (Click any letter to read)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeBadgeData.letters.map((letter, idx) => {
                  const letterSlug = letter.name.toLowerCase().replace(/\s+/g, '-')
                  return (
                    <Link 
                      key={idx} 
                      href={`/books/prophetic-letters/${letterSlug}`}
                      className="bg-[#E8F1F5] border border-[#CBD5E1] p-4 rounded-xl flex items-center justify-between hover:border-[#0284C7] transition group"
                    >
                      <span className="text-xs font-serif font-bold text-[#0B2545] uppercase tracking-wider group-hover:text-[#0284C7] transition">
                        {letter.name}
                      </span>
                      <span className="text-[11px] text-[#0284C7] font-bold bg-[#D5E6EE] px-2.5 py-1 rounded-full border border-[#B8D4E3]">
                        {letter.pages} pages &rarr;
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Bonus Writings list */}
            {activeBadgeData.bonuses.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-[#CBD5E1]">
                <h4 className="text-xs uppercase tracking-widest text-[#0B2545] font-bold">
                  Bonus Writings in this Badge
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeBadgeData.bonuses.map((bonus, idx) => (
                    <div key={idx} className="bg-[#E8F1F5] border border-[#CBD5E1] p-4 rounded-xl flex items-center justify-between transition">
                      <span className="text-xs font-serif font-bold text-[#0B2545] uppercase tracking-wider">{bonus.name}</span>
                      <span className="text-[11px] text-[#0284C7] font-bold bg-[#D5E6EE] px-2.5 py-1 rounded-full border border-[#B8D4E3]">{bonus.pages} pages</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>
    </div>
  )
}