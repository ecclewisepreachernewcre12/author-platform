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
  "letter-20": { title: "Letter 20", totalPages: 10 },
  "letter-21": { title: "Letter 21", totalPages: 33 },
  "letter-22": { title: "Letter 22", totalPages: 14 },
  "letter-23": { title: "Letter 23", totalPages: 6 },
  "letter-24": { title: "Letter 24", totalPages: 20 },
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
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
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
          <div className="py-16 sm:py-20 text-center max-w-3xl mx-auto space-y-5">
            <Link href="/books/prophetic-letters" className="inline-flex items-center text-xs uppercase tracking-widest text-[#38BDF8] hover:underline font-bold mb-2">
              &larr; Back to Book 1 Badges
            </Link>
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#38BDF8] font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                {currentLetter.title} &bull; Prophetic History Archive
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-white leading-tight font-bold drop-shadow-md">
              Manuscript Reader View
            </h1>
          </div>

        </div>
      </div>

      {/* Main Content / Edge-to-Edge Manuscript Reader */}
      <main className="w-full max-w-4xl mx-auto px-6 py-12 space-y-8">
        
        {/* Page Jump Navigation Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 px-1 border-b border-[#CBD5E1]">
          <div className="text-xs uppercase tracking-wider font-bold text-[#0B2545]">
            Reading: <span className="text-[#0284C7]">{currentLetter.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-widest text-[#64748B] font-bold">Jump to page:</span>
            <select 
              value={currentPage}
              onChange={(e) => {
                setCurrentPage(Number(e.target.value))
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="bg-white text-[#0B2545] border border-[#CBD5E1] text-xs font-semibold rounded-xl px-3 py-2 focus:outline-none focus:border-[#0284C7] cursor-pointer shadow-sm"
            >
              {Array.from({ length: currentLetter.totalPages }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  Page {i + 1} of {currentLetter.totalPages}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Manuscript Content directly on Webpage Canvas (No Box Background) */}
        <div className="space-y-8 pt-4 pb-8">
          
          <div className="flex justify-between items-center text-xs uppercase tracking-widest text-[#64748B] font-semibold border-b border-[#CBD5E1] pb-3">
            <span>Joseph Esenowo Collection</span>
            <span className="text-[#0284C7] font-bold">Page {currentPage} of {currentLetter.totalPages}</span>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0B2545] font-bold">
              {currentLetter.title}: The Maker Of The World Power Has Spoken: 600 Years Have Been Defined
            </h2>
            <div className="w-12 h-1 bg-[#0284C7] rounded-full" />

            {letterKey === 'letter-1' && currentPage === 1 ? (
              <div className="space-y-6 text-base sm:text-lg text-[#111827] leading-loose font-normal pt-2">
                {letter1Page1Paragraphs.map((para, idx) => (
                  <p key={idx} className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#0B2545]">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <div className="space-y-6 text-base sm:text-lg text-[#475569] leading-loose font-normal pt-2 italic">
                <p>
                  &ldquo;You are currently viewing Page {currentPage} of {currentLetter.title}. Place your text here for page {currentPage}...&rdquo;
                </p>
              </div>
            )}
          </div>

          {/* Bottom Pagination Controls */}
          <div className="flex items-center justify-between pt-10 border-t border-[#CBD5E1] mt-12">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-2xl text-xs uppercase tracking-wider font-bold transition border ${
                currentPage === 1 
                  ? 'bg-transparent text-[#94A3B8] border-[#CBD5E1]/60 cursor-not-allowed shadow-none' 
                  : 'bg-white text-[#0B2545] border-[#CBD5E1] hover:border-[#0284C7] hover:bg-[#F0F8FF] shadow-sm'
              }`}
            >
              &larr; Previous Page
            </button>

            <span className="text-xs text-[#64748B] uppercase tracking-wider font-bold">
              Page {currentPage} / {currentLetter.totalPages}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage === currentLetter.totalPages}
              className={`px-6 py-3 rounded-2xl text-xs uppercase tracking-wider font-bold transition border ${
                currentPage === currentLetter.totalPages 
                  ? 'bg-transparent text-[#94A3B8] border-[#CBD5E1]/60 cursor-not-allowed shadow-none' 
                  : 'bg-[#0284C7] text-white border-[#0284C7] hover:bg-[#0369A1] shadow-md'
              }`}
            >
              Next Page &rarr;
            </button>
          </div>

        </div>
      </main>

      {/* SUPPORT / DONATION FULL-WIDTH BANNER SECTION */}
      <section className="w-full relative bg-[#0B2545] border-t border-[#0284C7]/30 border-b border-[#0284C7]/30 shadow-2xl text-white overflow-hidden py-16 mt-12">
        
        {/* Atmospheric Background Texture Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: `url('/background.jpg')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071930]/85 via-[#0B2545]/75 to-[#0B2545] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#38BDF8]/20 blur-[100px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[11px] uppercase tracking-widest text-[#38BDF8] font-extrabold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
            Freely Received, Freely Given
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-white font-bold leading-snug drop-shadow-md">
            Has This Reading Blessed Your Heart?
          </h2>
          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
            All prophetic letters and writings are shared without cost because truth is a gift. However, if this manuscript has imparted strength to your journey and you wish to support the continuous spreading of these insights, you can give below.
          </p>
          <div className="pt-2">
            <Link 
              href="/give" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B2545] bg-[#38BDF8] hover:bg-white px-8 py-4 rounded-full transition-all shadow-2xl group"
            >
              <span>Support the Work</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
            </Link>
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

export default function LetterReaderPage({ params }: { params: Promise<{ letterId: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#E8F1F5] flex items-center justify-center text-[#0B2545] font-serif text-lg">Loading Manuscript...</div>}>
      <LetterContent params={params} />
    </Suspense>
  )
}