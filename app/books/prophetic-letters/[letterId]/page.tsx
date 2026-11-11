'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Define the page counts for each letter based on your archive structure
const letterPageCounts: { [key: string]: { title: string; totalPages: number } } = {
  "letter-1": { title: "Letter 1", totalPages: 35 },
  "letter-2": { title: "Letter 2", totalPages: 35 },
  "letter-3": { title: "Letter 3", totalPages: 35 },
  "letter-4": { title: "Letter 4", totalPages: 25 },
  "letter-5": { title: "Letter 5", totalPages: 7 },
  "letter-6": { title: "Letter 6", totalPages: 16 },
  "letter-7": { title: "Letter 7", totalPages: 10 },
  "letter-8": { title: "Letter 8", totalPages: 10 },
  "letter-9": { title: "Letter 9", totalPages: 10 },
  "letter-10": { title: "Letter 10", totalPages: 10 },
  "letter-11": { title: "Letter 11", totalPages: 5 },
  "letter-12": { title: "Letter 12", totalPages: 6 },
  "letter-13": { title: "Letter 13", totalPages: 13 },
  "letter-14": { title: "Letter 14", totalPages: 10 },
  "letter-15": { title: "Letter 15", totalPages: 8 },
  "letter-16": { title: "Letter 16", totalPages: 10 },
  "letter-17": { title: "Letter 17", totalPages: 7 },
  "letter-18": { title: "Letter 18", totalPages: 13 },
  "letter-19": { title: "Letter 19", totalPages: 11 },
  "letter-20": { title: "Letter 20", totalPages: 6 },
  "letter-21": { title: "Letter 21", totalPages: 13 },
  "letter-22": { title: "Letter 22", totalPages: 10 },
  "letter-23": { title: "Letter 23", totalPages: 10 },
  "letter-24": { title: "Letter 24", totalPages: 33 },
  "letter-25": { title: "Letter 25", totalPages: 6 },
  "letter-26": { title: "Letter 26", totalPages: 14 },
  "letter-27": { title: "Letter 27", totalPages: 27 },
}

export default function LetterReaderPage({ params }: { params: Promise<{ letterId: string }> }) {
  // Unwrap params using React.use() for Next.js app router
  const resolvedParams = use(params)
  const letterKey = resolvedParams.letterId.toLowerCase()
  
  const currentLetter = letterPageCounts[letterKey] || { title: "Prophetic Letter", totalPages: 10 }

  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // State for active page number (starts at Page 1)
  const [currentPage, setCurrentPage] = useState<number>(1)

  // Handlers for Previous and Next page buttons
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goToNextPage = () => {
    if (currentPage < currentLetter.totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

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
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 transition-all focus:outline-none py-1 hover:text-[#F3E5AB]">
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
          <Link href="/books" className={`transition-all ${pathname.startsWith('/books') ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>Books</Link>
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

      {/* Main Content / Manuscript Reader View */}
      <main className="w-full max-w-4xl mx-auto px-6 py-16 space-y-10">
        
        {/* Back Link & Header */}
        <div className="space-y-4">
          <Link href="/books/prophetic-letters" className="inline-flex items-center text-xs uppercase tracking-widest text-[#D4AF37] hover:underline font-semibold">
            &larr; Back to Book 1 Badges
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3B2B1F]/60 pb-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-[#2A1E16] px-3.5 py-1 rounded-full border border-[#594230]">
                {currentLetter.title} &bull; Prophetic History
              </span>
              <h1 className="text-2xl sm:text-4xl font-serif text-[#FFF5D6] pt-3">
                Manuscript Reader View
              </h1>
            </div>

            {/* Page Jump Dropdown Selector */}
            <div className="flex items-center gap-3 bg-[#1F150E] border border-[#594230] px-4 py-2.5 rounded-xl shadow-md">
              <span className="text-[11px] uppercase tracking-widest text-[#D1C2B0] font-bold">Jump to:</span>
              <select 
                value={currentPage}
                onChange={(e) => {
                  setCurrentPage(Number(e.target.value))
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="bg-[#120D0A] text-[#F3E5AB] border border-[#3B2B1F] text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
              >
                {Array.from({ length: currentLetter.totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Page {i + 1} of {currentLetter.totalPages}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Manuscript Page Paper Box */}
        <div className="bg-gradient-to-b from-[#1F150E] to-[#140D09] border border-[#594230] rounded-2xl p-8 sm:p-14 space-y-8 shadow-2xl relative min-h-[400px] flex flex-col justify-between">
          
          <div className="space-y-6">
            <div className="flex justify-between items-center text-xs uppercase tracking-widest text-[#A69382] border-b border-[#3B2B1F]/50 pb-4">
              <span>Joseph Esenowo Collection</span>
              <span className="text-[#D4AF37] font-bold">Page {currentPage} of {currentLetter.totalPages}</span>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-xl font-serif text-[#FFF5D6]">
                {currentLetter.title} — Page {currentPage} Insights
              </h2>
              <div className="w-10 h-0.5 bg-[#D4AF37]" />
              <p className="text-sm sm:text-base text-[#D1C2B0] leading-relaxed pt-2 font-normal">
                &ldquo;In the unfolding of prophetic history, every single word carries the weight of a generation. As you navigate page {currentPage} of {currentLetter.totalPages}, recognize that these entries are preserved to anchor the remnant in truth, spiritual clarity, and unwavering foundational integrity...&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#D1C2B0] leading-relaxed">
                The visions documented here transcend ordinary understanding, pointing directly to the spiritual architecture governing our times. He that has an ear, let him heed what the Spirit speaks through these letters.
              </p>
            </div>
          </div>

          {/* Bottom Page Navigation Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-[#3B2B1F] mt-8">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition border ${
                currentPage === 1 
                  ? 'bg-[#120D0A]/40 text-[#594230] border-[#3B2B1F] cursor-not-allowed' 
                  : 'bg-[#120D0A] text-[#F3E5AB] border-[#594230] hover:border-[#D4AF37] hover:bg-[#2A1E16]'
              }`}
            >
              &larr; Previous Page
            </button>

            <span className="text-xs text-[#A69382] uppercase tracking-wider font-medium hidden sm:inline">
              Page {currentPage} / {currentLetter.totalPages}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage === currentLetter.totalPages}
              className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition border ${
                currentPage === currentLetter.totalPages 
                  ? 'bg-[#120D0A]/40 text-[#594230] border-[#3B2B1F] cursor-not-allowed' 
                  : 'bg-[#D4AF37] text-black border-[#D4AF37] hover:bg-[#f3df89] font-bold shadow-md'
              }`}
            >
              Next Page &rarr;
            </button>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#3B2B1F]/60 text-center text-[11px] text-[#A69382]">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}