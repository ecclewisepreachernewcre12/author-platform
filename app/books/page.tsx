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
          <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Articles</Link>
          <Link href="/books" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60 text-[#0284C7]">Books</Link>
          <Link href="/bonus" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Bonus writings</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#CBD5E1]/60">Contact</Link>
          <Link href="/give" onClick={() => setMobileMenuOpen(false)} className="py-1">Support</Link>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-4 border-b border-[#CBD5E1] pb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-4 py-1.5 rounded-full border border-[#B8D4E3]">
            Digital Literature Archive
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#0B2545] leading-tight font-bold">
            Books & Volumes
          </h1>
          <p className="text-base sm:text-lg text-[#111827] max-w-xl mx-auto font-normal">
            By Joseph Esenowo &bull; Explore published books and their complete badge structures.
          </p>
        </div>

        {/* Books List Grid */}
        <div className="space-y-6">
          {books.map((book) => (
            <Link 
              key={book.id} 
              href={`/books/${book.id}`}
              className="block bg-[#F4F9FB] border border-[#CBD5E1] rounded-2xl p-8 hover:border-[#0284C7] transition-all shadow-md group"
            >
              <div className="flex items-center justify-between text-[11px] text-[#0284C7] uppercase tracking-widest font-bold pb-3">
                <span>{book.subtitle}</span>
                <span className="text-[#475569] group-hover:text-[#0284C7] transition">View Archive &rarr;</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif text-[#0B2545] font-bold group-hover:text-[#0284C7] transition py-1">
                {book.title}
              </h2>
              <p className="text-base sm:text-lg text-[#111827] pt-2">
                {book.snippet}
              </p>
              <div className="flex gap-4 mt-6 pt-4 border-t border-[#CBD5E1] text-[11px] text-[#475569] uppercase tracking-wider font-bold">
                <span className="bg-[#E8F1F5] px-3 py-1 rounded-md border border-[#CBD5E1] text-[#0B2545]">{book.badgeCount}</span>
                <span className="bg-[#E8F1F5] px-3 py-1 rounded-md border border-[#CBD5E1] text-[#0B2545]">{book.letterCount}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>
    </div>
  )
}