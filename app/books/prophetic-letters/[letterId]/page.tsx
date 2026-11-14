'use client'

import { useState, use, Suspense } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

const letter1Page1Paragraphs = [
  "In the quiet expanse of prophetic history, we are summoned to observe not merely the passage of time, but the intentional unfolding of divine architecture. Every generation faces a decisive turning point—a moment where standard human systems reach their outer boundary, forcing the heart to seek foundational truth.",
  "When we look back at the origins documented across sacred timelines, we see that shift always begins in secret. It starts within a remnant whose eyes have been opened to see beyond contemporary distractions. They recognize that the noise of the world is often a cover for spiritual vacuum.",
  "To read these letters is to step into an ongoing record of awakening. They are not written to satisfy casual curiosity, but to serve as a beacon for those who feel called to hold the line of integrity when external structures tremble.",
  "Consider the weight of 1 Samuel 10:1—the pouring of oil upon the head, marking a transition from ordinary existence into designated purpose. That act was not merely ceremonial; it was a physical sign of an invisible spiritual reality that alters history.",
  "Similarly, John 1:1 reminds us of the eternal anchor: in the beginning was the Word. Before any earthly authority, economic framework, or cultural shift took form, the Word was already established. Everything we experience today must be measured against that original light.",
  "As you move through this archive, approach each entry as an intentional study. The world encourages swift consumption and rapid forgetting, but prophetic history demands slow, deliberate reflection.",
  "We live in a time where values are frequently traded for convenience, and moral clarity is diluted by consensus. Yet, the principles preserved in these pages remain unshakeable, standing as a test to every age.",
  "Let it be understood that true strength does not rely on volume or visibility, but on alignment with divine order. When a person aligns with truth, their life becomes a steady testimony against prevailing darkness.",
  "This first letter serves as the doorway into a broader room. Here, the groundwork is laid, preparing the mind and spirit to navigate the deeper revelations that follow across all eight badges.",
  "Take time with these words. Turn each thought over with care, for in understanding the roots of prophetic history, you prepare yourself to navigate the future with confidence and unwavering purpose."
]

function LetterContent({ params }: { params: Promise<{ letterId: string }> }) {
  const resolvedParams = use(params)
  const letterKey = resolvedParams?.letterId ? resolvedParams.letterId.toLowerCase() : 'letter-1'
  const currentLetter = letterPageCounts[letterKey] || { title: "Prophetic Letter", totalPages: 10 }

  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

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
    <div 
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-[#E8F1F5] text-[#111827] flex flex-col justify-between select-none selection:bg-[#0284C7] selection:text-white"
    >
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#CBD5E1] relative">
        <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-[#0B2545] hover:text-[#0284C7] transition font-bold -ml-2 sm:-ml-4">
          Ecclewise Preacher
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#334155] mr-[-1rem]">
          <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>Home</Link>
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 transition-all focus:outline-none py-1 hover:text-[#0B2545]">
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

      <main className="w-full max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-4">
          <Link href="/books/prophetic-letters" className="inline-flex items-center text-xs uppercase tracking-widest text-[#0284C7] hover:underline font-bold">
            &larr; Back to Book 1 Badges
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#CBD5E1] pb-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-3.5 py-1 rounded-full border border-[#B8D4E3]">
                {currentLetter.title} &bull; Prophetic History
              </span>
              <h1 className="text-2xl sm:text-4xl font-serif text-[#0B2545] pt-3 font-bold">
                Manuscript Reader View
              </h1>
            </div>

            <div className="flex items-center gap-3 bg-[#F4F9FB] border border-[#CBD5E1] px-4 py-2.5 rounded-xl shadow-sm">
              <span className="text-[11px] uppercase tracking-widest text-[#475569] font-bold">Jump to:</span>
              <select 
                value={currentPage}
                onChange={(e) => {
                  setCurrentPage(Number(e.target.value))
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="bg-[#E8F1F5] text-[#0B2545] border border-[#CBD5E1] text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#0284C7] cursor-pointer"
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

        <div className="bg-[#F4F9FB] border border-[#CBD5E1] rounded-2xl p-8 sm:p-14 space-y-8 shadow-md relative min-h-[400px] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex justify-between items-center text-xs uppercase tracking-widest text-[#475569] border-b border-[#CBD5E1] pb-4 font-semibold">
              <span>Joseph Esenowo Collection</span>
              <span className="text-[#0284C7] font-bold">Page {currentPage} of {currentLetter.totalPages}</span>
            </div>

            <div className="space-y-6 pt-2">
              <h2 className="text-xl sm:text-2xl font-serif text-[#0B2545] font-bold">
                {currentLetter.title} — Page {currentPage}
              </h2>
              <div className="w-12 h-0.5 bg-[#0284C7]" />

              {letterKey === 'letter-1' && currentPage === 1 ? (
                <div className="space-y-6 text-base sm:text-lg text-[#111827] leading-loose font-normal pt-2">
                  {letter1Page1Paragraphs.map((para, idx) => (
                    <p key={idx} className="first-letter:text-2xl first-letter:font-serif first-letter:font-bold first-letter:text-[#0B2545]">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 text-base sm:text-lg text-[#334155] leading-loose font-normal pt-2 italic">
                  <p>
                    &ldquo;You are currently viewing Page {currentPage} of {currentLetter.title}. Place your text here for page {currentPage}...&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-[#CBD5E1] mt-8">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition border ${
                currentPage === 1 
                  ? 'bg-[#E8F1F5] text-[#94A3B8] border-[#CBD5E1] cursor-not-allowed' 
                  : 'bg-[#E8F1F5] text-[#0B2545] border-[#CBD5E1] hover:border-[#0284C7] hover:bg-[#D5E6EE]'
              }`}
            >
              &larr; Previous Page
            </button>

            <span className="text-xs text-[#475569] uppercase tracking-wider font-bold hidden sm:inline">
              Page {currentPage} / {currentLetter.totalPages}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage === currentLetter.totalPages}
              className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition border ${
                currentPage === currentLetter.totalPages 
                  ? 'bg-[#E8F1F5] text-[#94A3B8] border-[#CBD5E1] cursor-not-allowed' 
                  : 'bg-[#0284C7] text-white border-[#0284C7] hover:bg-[#0369A1] shadow-sm'
              }`}
            >
              Next Page &rarr;
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default function LetterReaderPage({ params }: { params: Promise<{ letterId: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#E8F1F5] flex items-center justify-center text-[#0B2545] font-serif text-lg">Loading Manuscript...</div>}>
      <LetterContent params={params} />
    </Suspense>
  )
}