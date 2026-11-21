'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AboutAuthorPage() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  const pillars = [
    {
      number: "01",
      title: "Prophetic History",
      description:
        "Tracing the unbroken thread of divine architecture across generations—showing that today's global shifts are anchored in ancient spiritual patterns."
    },
    {
      number: "02",
      title: "Discernment of the Times",
      description:
        "Cutting through algorithmic noise and cultural distraction to equip a steady remnant with clarity, watchfulness, and moral backbone."
    },
    {
      number: "03",
      title: "Uncompromising Truth",
      description:
        "Writing without dilution or commercial motive—anchored in the conviction that the Word precedes and outlasts every earthly system."
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
                      className="px-4 py-2 text-[11px] uppercase tracking-wider text-sky-100 hover:text-[#38BDF8] hover:bg-white/5 transition"
                    >
                      About the Website
                    </Link>
                    <Link
                      href="/about/author"
                      className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#38BDF8] font-bold bg-white/5 transition"
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
                      className="text-[11px] text-sky-100 hover:text-[#38BDF8]"
                    >
                      About the Website
                    </Link>
                    <Link
                      href="/about/author"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[11px] text-[#38BDF8] font-bold"
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
          <div className="py-16 sm:py-24 text-center max-w-3xl mx-auto space-y-5">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#38BDF8] font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                The Voice Behind the Archive
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white leading-tight font-bold drop-shadow-md">
              Joseph Esenowo
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-sky-200">
              Watchman, Writer &amp; Chronicler of Prophetic History
            </p>
            <p className="text-sm sm:text-base text-sky-100/90 max-w-xl mx-auto leading-relaxed">
              &ldquo;Before any earthly authority, economic framework, or cultural shift took form, the Word was already established.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1: PORTRAIT & EDITORIAL BIOGRAPHY (Edge-to-Edge Sanctuary Layout) */}
      <main className="w-full max-w-6xl mx-auto px-6 py-16 sm:py-20 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Architectural Portrait Frame & Anchor Scriptures */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            <div className="relative">
              {/* Decorative Navy Offset Backing */}
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full rounded-3xl bg-[#0B2545] border border-[#0284C7]/40 z-0" />
              
              <div className="relative z-10 aspect-[4/5] w-full rounded-3xl overflow-hidden border-2 border-white bg-[#0B2545] shadow-2xl">
                <img
                  src="/author.jpg"
                  alt="Joseph Esenowo"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#38BDF8] font-bold">
                    Ecclewise Preacher
                  </p>
                  <p className="font-serif text-2xl font-bold mt-0.5">Joseph Esenowo</p>
                </div>
              </div>
            </div>

            {/* Foundational Scriptures Card */}
            <div className="bg-white border border-[#CBD5E1] rounded-2xl p-6 space-y-4 shadow-md">
              <span className="text-[10px] uppercase tracking-widest text-[#0284C7] font-extrabold block">
                Scriptural Anchors
              </span>
              <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
                <div className="border-l-2 border-[#0284C7] pl-3.5">
                  <p className="font-serif font-bold text-[#0B2545]">1 Samuel 10:1</p>
                  <p className="text-[#475569] italic mt-0.5">
                    The anointing that marks the transition from ordinary existence into designated purpose.
                  </p>
                </div>
                <div className="border-l-2 border-[#0284C7] pl-3.5">
                  <p className="font-serif font-bold text-[#0B2545]">John 1:1</p>
                  <p className="text-[#475569] italic mt-0.5">
                    The eternal Word against which every earthly system and season must be measured.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Narrative Biography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-[11px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-4 py-1.5 rounded-full border border-[#B8D4E3]">
                The Burden &amp; Calling
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0B2545] font-bold leading-tight">
                A Voice Calling the Remnant Back to Foundational Truth
              </h2>
              <div className="w-16 h-1 bg-[#0284C7] rounded-full" />
            </div>

            <div className="space-y-6 text-base sm:text-lg text-[#111827] leading-loose font-normal">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#0B2545]">
                Joseph Esenowo writes from a singular conviction: that human history is never accidental, and that every decisive turning point in the earth is preceded by a spiritual awakening among those who have eyes to see.
              </p>
              <p className="text-[#334155]">
                In an era defined by rapid consumption, algorithmic noise, and diluted moral clarity, his work stands apart as a call to slow, deliberate reflection. Through his flagship archive, <em>Prophetic Letters from a Prophetic History</em>, alongside revelatory essays and watchman writings, he traces how unseen spiritual realities govern geopolitical shifts, cultural conscience, and individual destiny.
              </p>
              <p className="text-[#334155]">
                Rather than writing to entertain casual curiosity or build an institutional following, Joseph approaches every manuscript as a record for the remnant—those determined to hold the line of integrity when conventional structures tremble.
              </p>
            </div>

            {/* Editorial Pull-Quote */}
            <blockquote className="border-l-4 border-[#0284C7] bg-white/80 rounded-r-2xl p-6 sm:p-8 space-y-2 shadow-sm">
              <p className="font-serif italic text-lg sm:text-xl text-[#0B2545] leading-relaxed">
                &ldquo;True strength does not rely on volume or visibility, but on alignment with divine order. When a person aligns with truth, their life becomes a steady testimony against prevailing darkness.&rdquo;
              </p>
              <footer className="text-xs uppercase tracking-widest text-[#0284C7] font-bold pt-1">
                &mdash; Joseph Esenowo, Letter 1
              </footer>
            </blockquote>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-serif text-[#0B2545] font-bold">
                Publication &amp; Ministry Collaborations
              </h3>
              <p className="text-base text-[#334155] leading-relaxed">
                Beyond this digital sanctuary, Joseph writes prophetic and secular articles for publication across external media platforms and journals. Editors, publishers, and readers who wish to engage with his work or request commissioned pieces are welcome to connect directly.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/books/prophetic-letters"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white bg-[#0B2545] hover:bg-[#0284C7] px-8 py-4 rounded-full transition-all shadow-lg"
              >
                <span>Enter the Prophetic Letters</span>
                <span>&rarr;</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0B2545] bg-white border border-[#CBD5E1] hover:border-[#0284C7] hover:bg-[#F0F8FF] px-8 py-4 rounded-full transition-all shadow-sm"
              >
                <span>Contact Joseph</span>
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 2: THREE PILLARS OF THE WORK */}
        <div className="pt-12 border-t border-[#CBD5E1] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#0284C7] font-bold">
              Core Convictions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0B2545] font-bold">
              Three Pillars of Joseph&apos;s Writings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white border border-[#CBD5E1] rounded-3xl p-8 space-y-4 shadow-lg relative overflow-hidden hover:border-[#0284C7] transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B2545] to-[#0284C7]" />
                <span className="inline-block text-xs font-extrabold tracking-widest text-[#0284C7] bg-[#E0F2FE] px-3 py-1 rounded-full border border-[#BAE6FD]">
                  Pillar {pillar.number}
                </span>
                <h3 className="text-xl font-serif text-[#0B2545] font-bold">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* SUPPORT / DONATION FULL-WIDTH BANNER SECTION */}
      <section className="w-full relative bg-[#0B2545] border-t border-[#0284C7]/30 border-b border-[#0284C7]/30 shadow-2xl text-white overflow-hidden py-16 mt-8">
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
            Partner With This Prophetic Mandate
          </h2>
          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
            Every letter and manuscript on this platform is made available without cost so that truth remains accessible to all. If these writings have strengthened your walk, you can support the work below.
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