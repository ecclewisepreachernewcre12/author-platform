'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ContactPage() {
  const pathname = usePathname()
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = '2349024218081' 
    const text = `Hello Joseph,%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Message:* ${encodeURIComponent(formData.message)}`
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
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

              <Link href="/books" className={`transition-all ${pathname === '/books' ? 'text-[#38BDF8] font-bold' : 'hover:text-white'}`}>Books</Link>
            
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
             
              <Link href="/books" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/15">Books</Link>
            
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/15 text-[#38BDF8]">Contact</Link>
              <Link href="/give" onClick={() => setMobileMenuOpen(false)} className="py-1">Support</Link>
            </div>
          )}

          {/* Hero Banner Content */}
          <div className="py-16 sm:py-24 text-center max-w-3xl mx-auto space-y-5">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#38BDF8] font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                Get in Touch
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white leading-tight font-bold drop-shadow-md">
              Contact Joseph Esenowo
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-sky-200">
              Sanctuary Communications
            </p>
            <p className="text-sm sm:text-base text-sky-100/90 max-w-xl mx-auto leading-relaxed">
              If you have been blessed by these writings, wish to collaborate, or desire to request prophetic or secular articles for publication, reach out below.
            </p>
          </div>

        </div>
      </div>

      {/* Main Content Container */}
      <main className="w-full max-w-3xl mx-auto px-6 py-16 space-y-12">
        
        {/* WhatsApp Contact Form Card */}
        <div className="bg-white border border-[#CBD5E1] rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B2545] via-[#0284C7] to-[#38BDF8]" />

          <div className="border-b border-[#E2E8F0] pb-6">
            <span className="text-[10px] uppercase tracking-widest text-white font-extrabold bg-[#0284C7] px-3.5 py-1 rounded-full shadow-sm">
              Direct Channel
            </span>
            <h2 className="text-2xl font-serif text-[#0B2545] font-bold pt-3">
              Send a Direct WhatsApp Message
            </h2>
          </div>
          
          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#0B2545] mb-2 font-bold">Your Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g. John Doe"
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl px-5 py-3.5 text-sm text-[#111827] focus:outline-none focus:border-[#0284C7] transition shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#0B2545] mb-2 font-bold">Phone Number</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="e.g. +234 800 000 0000"
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl px-5 py-3.5 text-sm text-[#111827] focus:outline-none focus:border-[#0284C7] transition shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#0B2545] mb-2 font-bold">Your Message / Inquiry</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Write your message here..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl px-5 py-3.5 text-sm text-[#111827] focus:outline-none focus:border-[#0284C7] transition shadow-sm resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#0B2545] hover:bg-[#0284C7] py-4 rounded-full transition-all shadow-xl"
            >
              Send Message to WhatsApp &rarr;
            </button>
          </form>

          {/* Email Contacts Footer */}
          <div className="pt-6 border-t border-[#E2E8F0] text-xs text-[#475569] space-y-2.5 font-medium">
            <p className="font-bold text-[#0B2545]">For direct email channels:</p>
            <p className="text-[#334155]">
              For articles for publication: <a href="mailto:josephesenowo@gmail.com" className="underline text-[#0284C7] hover:text-[#0B2545] font-bold">josephesenowo@gmail.com</a>
            </p>
            <p className="text-[#334155]">
              To support the ministry: <a href="mailto:ecclewisepreacher@zohomail.com" className="underline text-[#0284C7] hover:text-[#0B2545] font-bold">ecclewisepreacher@zohomail.com</a>
            </p>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}