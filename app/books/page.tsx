'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BooksPage() {
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
      bonuses: [
        { name: "Bonus Writing", pages: 18 }
      ]
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
      bonuses: [
        { name: "Bonus Writings", pages: 7 }
      ]
    },
    {
      id: 4,
      title: "Badge 4: Depths of Vision",
      letters: [
        { name: "Letter 15", pages: 8 },
        { name: "Letter 16", pages: 10 },
      ],
      bonuses: [
        { name: "Bonus Writing", pages: 11 }
      ]
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
      bonuses: [
        { name: "Bonus Writing", pages: 14 }
      ]
    },
    {
      id: 7,
      title: "Badge 7: Advanced Revelations",
      letters: [
        { name: "Letter 22", pages: 10 },
        { name: "Letter 23", pages: 10 },
        { name: "Letter 24", pages: 33 },
      ],
      bonuses: [
        { name: "Bonus Writing", pages: 12 }
      ]
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
    <div className="min-h-screen bg-[#120D0A] text-[#FDFBF7] flex flex-col justify-between selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#3B2B1F]/60 relative">
        <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-[#F3E5AB] hover:text-[#D4AF37] transition font-bold -ml-2 sm:-ml-4">
          Ecclewise Preacher
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#D1C2B0] mr-[-1rem]">
          <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>
            Home
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 transition-all focus:outline-none py-1 ${pathname.startsWith('/about') ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}
            >
              <span>About</span>
              <span className="text-[10px]">&▾</span>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#170E09] border border-[#594230] rounded-xl shadow-2xl py-2 z-50 flex flex-col">
                <Link href="/about/website" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#D1C2B0] hover:text-[#F3E5AB] hover:bg-[#2A1E16] transition">
                  About the Website
                </Link>
                <Link href="/about/author" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#D1C2B0] hover:text-[#F3E5AB] hover:bg-[#2A1E16] transition">
                  About the Author
                </Link>
              </div>
            )}
          </div>

          <Link href="/articles" className={`transition-all ${pathname === '/articles' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>
            Articles
          </Link>
          <Link href="/books" className={`transition-all ${pathname === '/books' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>
            Books
          </Link>
          <Link href="/bonus" className={`transition-all ${pathname === '/bonus' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>
            Bonus writings
          </Link>
          <Link href="/contact" className={`transition-all ${pathname === '/contact' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>
            Contact
          </Link>
          <Link href="/give" className={`transition-all ${pathname === '/give' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>
            Support
          </Link>
        </nav>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F3E5AB] p-2 focus:outline-none hover:text-[#D4AF37] transition"
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

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-[#170E09]/95 backdrop-blur-xl border border-[#594230] rounded-2xl p-6 shadow-2xl z-50 flex flex-col space-y-4 text-xs uppercase tracking-wider font-semibold text-[#D1C2B0]">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#3B2B1F]/40 ${pathname === '/' ? 'text-[#D4AF37]' : 'hover:text-[#F3E5AB]'}`}>Home</Link>
          
          <div>
            <button 
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex justify-between items-center hover:text-[#F3E5AB] py-1 border-b border-[#3B2B1F]/40"
            >
              <span>About</span>
              <span>{mobileAboutOpen ? '▴' : '▾'}</span>
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 py-2 space-y-2 flex flex-col bg-[#120D0A]/50 rounded-lg mt-2">
                <Link href="/about/website" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-[#D1C2B0] hover:text-[#F3E5AB]">About the Website</Link>
                <Link href="/about/author" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-[#D1C2B0] hover:text-[#F3E5AB]">About the Author</Link>
              </div>
            )}
          </div>

          <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#3B2B1F]/40 ${pathname === '/articles' ? 'text-[#D4AF37]' : 'hover:text-[#F3E5AB]'}`}>Articles</Link>
          <Link href="/books" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#3B2B1F]/40 ${pathname === '/books' ? 'text-[#D4AF37]' : 'hover:text-[#F3E5AB]'}`}>Books</Link>
          <Link href="/bonus" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#3B2B1F]/40 ${pathname === '/bonus' ? 'text-[#D4AF37]' : 'hover:text-[#F3E5AB]'}`}>Bonus writings</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#3B2B1F]/40 ${pathname === '/contact' ? 'text-[#D4AF37]' : 'hover:text-[#F3E5AB]'}`}>Contact</Link>
          <Link href="/give" onClick={() => setMobileMenuOpen(false)} className={`py-1 ${pathname === '/give' ? 'text-[#D4AF37]' : 'hover:text-[#F3E5AB]'}`}>Support</Link>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full max-w-5xl mx-auto px-6 py-16 space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4 border-b border-[#3B2B1F]/60 pb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-[#2A1E16] px-4 py-1.5 rounded-full border border-[#594230]">
            Free Digital Literature Archive
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#FFF5D6] leading-tight">
            Prophetic Letters & Books
          </h1>
          <p className="text-xs sm:text-sm text-[#D1C2B0] max-w-xl mx-auto font-normal">
            By Joseph Esenowo &bull; Explore all 8 Badges spanning Letters 1 through 27 alongside companion bonus writings, distributed freely.
          </p>
        </div>

        {/* Badge Selector Grid */}
        <div className="space-y-6">
          <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold text-center">
            Select a Badge to Explore
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {badges.map((badge) => (
              <button
                key={badge.id}
                onClick={() => setSelectedBadge(badge.id)}
                className={`py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold transition border ${
                  selectedBadge === badge.id
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)] font-bold'
                    : 'bg-[#1F150E] text-[#D1C2B0] border-[#594230] hover:bg-[#2A1E16] hover:text-[#F3E5AB]'
                }`}
              >
                Badge {badge.id}
              </button>
            ))}
          </div>
        </div>

        {/* Active Badge Contents Display */}
        {activeBadgeData && (
          <div className="bg-gradient-to-b from-[#1F150E] to-[#140D09] border border-[#594230] rounded-2xl p-8 sm:p-12 space-y-8 shadow-2xl">
            <div className="border-b border-[#3B2B1F] pb-6">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-[#2A1E16] px-3 py-1 rounded-md border border-[#594230]">
                Collection Archive
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#FFF5D6] pt-2">
                {activeBadgeData.title}
              </h2>
            </div>

            {/* Letters list */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#F3E5AB] font-bold">
                Prophetic Letters
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeBadgeData.letters.map((letter, idx) => (
                  <div key={idx} className="bg-[#120D0A] border border-[#3B2B1F] p-4 rounded-xl flex items-center justify-between hover:border-[#D4AF37] transition">
                    <span className="text-xs font-serif font-bold text-[#FFF5D6] uppercase tracking-wider">{letter.name}</span>
                    <span className="text-[11px] text-[#D4AF37] font-semibold bg-[#2A1E16] px-2.5 py-1 rounded-full border border-[#594230]">{letter.pages} pages</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bonus Writings list */}
            {activeBadgeData.bonuses.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-[#3B2B1F]">
                <h4 className="text-xs uppercase tracking-widest text-[#F3E5AB] font-bold">
                  Bonus Writings
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeBadgeData.bonuses.map((bonus, idx) => (
                    <div key={idx} className="bg-[#120D0A] border border-[#3B2B1F] p-4 rounded-xl flex items-center justify-between hover:border-[#D4AF37] transition">
                      <span className="text-xs font-serif font-bold text-[#FFF5D6] uppercase tracking-wider">{bonus.name}</span>
                      <span className="text-[11px] text-[#D4AF37] font-semibold bg-[#2A1E16] px-2.5 py-1 rounded-full border border-[#594230]">{bonus.pages} pages</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#3B2B1F]/60 text-center text-[11px] text-[#A69382]">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}