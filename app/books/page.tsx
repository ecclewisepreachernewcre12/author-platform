'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BooksIndexPage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  // Library of published books
  const books = [
    {
      id: "prophetic-letters",
      title: "Prophetic Letters from a Prophetic History",
      subtitle: "Book 1: Comprehensive Archive",
      snippet: "Spanning Letters 1 through 27 across 8 distinct badges and companion bonus writings. Distributed freely.",
      badgeCount: "8 Badges",
      letterCount: "27 Letters"
    }
    // Future books can be added here easily as they are written!
  ]

  return (
    <div className="min-h-screen bg-[#120D0A] text-[#FDFBF7] flex flex-col justify-between selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#3B2B1F]/60 relative">
        <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-[#F3E5AB] hover:text-[#D4AF37] transition font-bold -ml-2 sm:-ml-4">
          Ecclewise Preacher
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#D1C2B0] mr-[-1rem]">
          <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>Home</Link>
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className={`flex items-center gap-1 transition-all focus:outline-none py-1 ${pathname.startsWith('/about') ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>
              <span>About</span><span className="text-[10px]">&▾</span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#170E09] border border-[#594230] rounded-xl shadow-2xl py-2 z-50 flex flex-col">
                <Link href="/about/website" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#D1C2B0] hover:text-[#F3E5AB] hover:bg-[#2A1E16] transition">About the Website</Link>
                <Link href="/about/author" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#D1C2B0] hover:text-[#F3E5AB] hover:bg-[#2A1E16] transition">About the Author</Link>
              </div>
            )}
          </div>
          <Link href="/articles" className={`transition-all ${pathname === '/articles' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>Articles</Link>
          <Link href="/books" className={`transition-all ${pathname === '/books' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>Books</Link>
          <Link href="/bonus" className={`transition-all ${pathname === '/bonus' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>Bonus writings</Link>
          <Link href="/contact" className={`transition-all ${pathname === '/contact' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>Contact</Link>
          <Link href="/give" className={`transition-all ${pathname === '/give' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>Support</Link>
        </nav>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#F3E5AB] p-2 focus:outline-none hover:text-[#D4AF37] transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-[#170E09]/95 backdrop-blur-xl border border-[#594230] rounded-2xl p-6 shadow-2xl z-50 flex flex-col space-y-4 text-xs uppercase tracking-wider font-semibold text-[#D1C2B0]">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#3B2B1F]/40">Home</Link>
          <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#3B2B1F]/40">Articles</Link>
          <Link href="/books" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#3B2B1F]/40 text-[#D4AF37]">Books</Link>
          <Link href="/bonus" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#3B2B1F]/40">Bonus writings</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#3B2B1F]/40">Contact</Link>
          <Link href="/give" onClick={() => setMobileMenuOpen(false)} className="py-1">Support</Link>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-4 border-b border-[#3B2B1F]/60 pb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-[#2A1E16] px-4 py-1.5 rounded-full border border-[#594230]">
            Digital Literature Archive
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#FFF5D6] leading-tight">
            Books & Volumes
          </h1>
          <p className="text-xs sm:text-sm text-[#D1C2B0] max-w-xl mx-auto font-normal">
            By Joseph Esenowo &bull; Explore published books and their complete badge structures.
          </p>
        </div>

        {/* Books List Grid */}
        <div className="space-y-6">
          {books.map((book) => (
            <Link 
              key={book.id} 
              href={`/books/${book.id}`}
              className="block bg-gradient-to-b from-[#1F150E] to-[#140D09] border border-[#594230] rounded-2xl p-8 hover:border-[#D4AF37] transition-all shadow-xl group"
            >
              <div className="flex items-center justify-between text-[11px] text-[#D4AF37] uppercase tracking-widest font-semibold pb-3">
                <span>{book.subtitle}</span>
                <span className="text-[#A69382] group-hover:text-[#F3E5AB] transition">View Archive &rarr;</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif text-[#FFF5D6] group-hover:text-[#D4AF37] transition py-1">
                {book.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#D1C2B0] pt-2">
                {book.snippet}
              </p>
              <div className="flex gap-4 mt-6 pt-4 border-t border-[#3B2B1F]/60 text-[11px] text-[#A69382] uppercase tracking-wider font-medium">
                <span className="bg-[#120D0A] px-3 py-1 rounded-md border border-[#3B2B1F]">{book.badgeCount}</span>
                <span className="bg-[#120D0A] px-3 py-1 rounded-md border border-[#3B2B1F]">{book.letterCount}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#3B2B1F]/60 text-center text-[11px] text-[#A69382]">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>
    </div>
  )
}