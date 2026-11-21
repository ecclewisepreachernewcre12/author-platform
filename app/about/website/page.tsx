'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AboutWebsitePage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)

  const sanctuaryPrinciples = [
    {
      number: "01",
      title: "Edge-to-Edge Reading Flow",
      description:
        "Manuscripts open naturally across the daylight-azure canvas without cramped borders, allowing your mind to settle into the writing."
    },
    {
      number: "02",
      title: "Unbroken Sequence & Jump Controls",
      description:
        "Move forward or backward across connected letters and bonus writings, or jump straight to a letter or page when studying."
    },
    {
      number: "03",
      title: "Open Access, Zero Paywalls",
      description:
        "Every prophetic letter and insight is shared freely without subscription walls, with voluntary support open to anyone moved to give."
    }
  ]

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-[#E8F1F5] text-[#111827] flex flex-col justify-between select-none selection:bg-[#0284C7] selection:text-white"
    >
      {/* IMMERSIVE HERO & HEADER SECTION */}
      <div className="relative w-full bg-[#0B2545] text-white overflow-hidden border-b border-[#0284C7]/30 shadow-xl">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-35 pointer-events-none transition-all duration-700"
          style={{ backgroundImage: `url('/background.jpg')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071930]/85 via-[#0B2545]/75 to-[#0B2545] pointer-events-none" />
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#38BDF8]/20 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          {/* Navigation Header */}
          <header className="w-full py-6 flex items-center justify-between border-b border-white/15">
            <Link
              href="/"
              className="font-serif tracking-widest text-xs sm:text-sm uppercase text-white hover:text-[#38BDF8] transition font-bold -ml-2 sm:-ml-4"
            >
              Ecclewise Preacher
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-sky-100 mr-[-1rem]">
              <Link
                href="/"
                className={`transition-all ${pathname === '/' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 transition-all focus:outline-none py-1 ${
                    pathname.startsWith('/about') ? 'text-[#38BDF8] font-bold' : 'hover:text-white'
                  }`}
                >
                  <span>About</span>
                  <span className="text-[10px]">&▾</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-[#0F2E54] border border-white/15 rounded-xl shadow-2xl py-2 z-50 flex flex-col">
                    <Link
                      href="/about/website"
                      className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#38BDF8] font-bold bg-white/5 transition"
                    >
                      About the Website
                    </Link>
                    <Link
                      href="/about/author"
                      className="px-4 py-2 text-[11px] uppercase tracking-wider text-sky-100 hover:text-[#38BDF8] hover:bg-white/5 transition"
                    >
                      About the Author
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/books"
                className={`transition-all ${pathname.startsWith('/books') ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}
              >
                Books
              </Link>
              <Link
                href="/contact"
                className={`transition-all ${pathname === '/contact' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}
              >
                Contact
              </Link>
              <Link
                href="/give"
                className={`transition-all ${pathname === '/give' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}
              >
                Support
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 focus:outline-none hover:text-[#38BDF8] transition z-50"
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
            <div className="md:hidden absolute top-20 left-4 right-4 bg-[#0F2E54] border border-white/20 rounded-2xl p-6 shadow-2xl z-50 flex flex-col space-y-4 text-xs uppercase tracking-wider font-semibold text-sky-100">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-[#38BDF8]">
                Home
              </Link>

              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex justify-between items-center text-[#38BDF8] py-2 border-b border-white/10"
                >
                  <span>About</span>
                  <span>{mobileAboutOpen ? '▴' : '▾'}</span>
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 py-2 space-y-2 flex flex-col bg-white/5 rounded-lg mt-2">
                    <Link
                      href="/about/website"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[11px] text-[#38BDF8] font-bold"
                    >
                      About the Website
                    </Link>
                    <Link
                      href="/about/author"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[11px] text-sky-100 hover:text-[#38BDF8]"
                    >
                      About the Author
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/books" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-[#38BDF8]">
                Books
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-[#38BDF8]">
                Contact
              </Link>
              <Link href="/give" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#38BDF8]">
                Support
              </Link>
            </div>
          )}

          {/* Hero Banner Content */}
          <div className="py-20 sm:py-28 text-center max-w-3xl mx-auto space-y-6">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#38BDF8] font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                The Sanctuary Architecture
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white leading-tight font-bold drop-shadow-md">
              About Ecclewise Preacher
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-sky-200">
              A Quiet Reading Room Built for Deliberate Study
            </p>
            <p className="text-sm sm:text-base text-sky-100/90 max-w-xl mx-auto leading-relaxed">
              No advertisements, no paywalls, and no algorithmic distractions—just an unfolding archive of prophetic letters and revelations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content — Spacious, Open Sanctuary Flow */}
      <main className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28 space-y-24 sm:space-y-32">

        {/* SECTION 1: BIGGER TEXT ON LEFT + IMAGE UNDER IT, SPACIOUS NARRATIVE ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-5">
              <span className="inline-block text-[11px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-4 py-1.5 rounded-full border border-[#B8D4E3]">
                Why This Sanctuary Exists
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif text-[#0B2545] font-bold leading-[1.2]">
                Built Against the Culture of Swift Forgetting
              </h2>
              <div className="w-16 h-1 bg-[#0284C7] rounded-full" />
            </div>

            {/* Save photo from Pexels (18757399) as public/sanctuary-books.jpg */}
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-[#CBD5E1] bg-[#0B2545] shadow-xl">
              {!imageFailed ? (
                <img
                  src="/sanctuary-books.jpg"
                  alt="Old books in sunlight and shadow"
                  onError={() => setImageFailed(true)}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center flex items-end p-6 text-white"
                  style={{ backgroundImage: `url('/background.jpg')` }}
                >
                  <p className="text-xs text-sky-100 bg-[#0B2545]/80 px-3.5 py-2 rounded-xl border border-white/15">
                    Save the Pexels book photo as <span className="font-mono text-[#38BDF8]">public/sanctuary-books.jpg</span> to display it here.
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/45 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#334155] leading-[1.9] lg:pt-2">
            <p className="text-[#111827] first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#0B2545]">
              Modern digital platforms are engineered for speed—endless scrolling, notifications, and rapid forgetting. Prophetic history requires the exact opposite: stillness, reverence, and unhurried reflection.
            </p>
            <p>
              Ecclewise Preacher was designed from the ground up as a dedicated digital sanctuary. Every manuscript opens cleanly across the page without pop-ups, banners, or noisy sidebars, giving your eyes room to rest and your spirit room to listen.
            </p>
            <p>
              Guided by the conviction that truth is a gift rather than a commodity, every letter, revelation, and bonus writing is shared openly so anyone seeking clarity can read without barrier.
            </p>

            <div className="pt-4">
              <Link
                href="/books"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white bg-[#0B2545] hover:bg-[#0284C7] px-8 py-4 rounded-full transition-all shadow-lg"
              >
                <span>Step Into the Reading Room</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 2: HOW THIS SPACE IS KEPT — OPEN & SPACIOUS */}
        <div className="border-t border-[#CBD5E1] pt-20 sm:pt-24 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="inline-block text-[11px] uppercase tracking-widest text-[#0284C7] font-extrabold">
                Sanctuary Principles
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#0B2545] font-bold leading-snug">
                How This Reading Space Serves You
              </h2>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed max-w-md">
              Every part of the layout is kept open and uncluttered so the focus stays on reflection, study, and continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {sanctuaryPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="bg-white/90 border border-[#CBD5E1] rounded-3xl p-8 sm:p-9 space-y-4 shadow-md hover:border-[#0284C7] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="inline-block text-[11px] font-extrabold tracking-widest text-[#0284C7] bg-[#E0F2FE] px-3.5 py-1 rounded-full border border-[#BAE6FD]">
                    {principle.number}
                  </span>
                  <h3 className="text-xl font-serif text-[#0B2545] font-bold leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: OPEN NAVIGATION PATHWAYS */}
        <div className="border-t border-[#CBD5E1] pt-20 sm:pt-24 space-y-10">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-[#0284C7] font-extrabold">
              Continue Exploring
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0B2545] font-bold">
              Where Would You Like to Go Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/about/author"
              className="bg-white border border-[#CBD5E1] hover:border-[#0284C7] rounded-3xl p-8 space-y-3 shadow-md transition-all group"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#0284C7] font-extrabold">
                The Writer
              </span>
              <h3 className="text-xl font-serif text-[#0B2545] font-bold group-hover:text-[#0284C7] transition">
                About Joseph Esenowo &rarr;
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Read about the calling, scriptural anchors, and voice behind these manuscripts.
              </p>
            </Link>

            <Link
              href="/books"
              className="bg-white border border-[#CBD5E1] hover:border-[#0284C7] rounded-3xl p-8 space-y-3 shadow-md transition-all group"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#0284C7] font-extrabold">
                The Library
              </span>
              <h3 className="text-xl font-serif text-[#0B2545] font-bold group-hover:text-[#0284C7] transition">
                Explore the Books &rarr;
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Step into the Prophetic Letters archive and accompanying bonus writings.
              </p>
            </Link>

            <Link
              href="/contact"
              className="bg-white border border-[#CBD5E1] hover:border-[#0284C7] rounded-3xl p-8 space-y-3 shadow-md transition-all group"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#0284C7] font-extrabold">
                Connect
              </span>
              <h3 className="text-xl font-serif text-[#0B2545] font-bold group-hover:text-[#0284C7] transition">
                Reach Out Directly &rarr;
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Send a message via WhatsApp or email for publication inquiries and feedback.
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* SUPPORT / DONATION FULL-WIDTH BANNER SECTION */}
      <section className="w-full relative bg-[#0B2545] border-t border-[#0284C7]/30 border-b border-[#0284C7]/30 shadow-2xl text-white overflow-hidden py-20 mt-12">
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
            Help Keep This Sanctuary Open to All
          </h2>
          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
            Every manuscript is shared freely without paywalls. If this platform has blessed your journey and you wish to support its continued reach, you can give below.
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

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>
    </div>
  )
}