'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function GivePage() {
  const pathname = usePathname()
  const [copied, setCopied] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  const accountNumber = '1234567890' // Replace with Joseph's actual Bank Account Number

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handleFlutterwavePayment = () => {
    // Replace with your client's Flutterwave Payment Link
    const flutterwavePaymentUrl = 'https://flutterwave.com/pay/ecclewisepreacher'
    window.open(flutterwavePaymentUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#120D0A] text-[#FDFBF7] flex flex-col justify-between selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#3B2B1F]/60 relative">
        
        {/* Logo pushed left */}
        <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-[#F3E5AB] hover:text-[#D4AF37] transition font-bold -ml-2 sm:-ml-4">
          Ecclewise Preacher
        </Link>
        
        {/* Desktop Navigation moved right with Dynamic Highlighting */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#D1C2B0] mr-[-1rem]">
          <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#D4AF37] font-bold' : 'hover:text-[#F3E5AB]'}`}>
            Home
          </Link>
          
          {/* About Dropdown */}
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

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu Drawer */}
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

      {/* Main Support Section */}
      <main className="w-full max-w-3xl mx-auto px-6 py-16 space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-[#2A1E16] px-4 py-1.5 rounded-full border border-[#594230]">
            Ministry Partnership
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#FFF5D6]">
            Support the Work & Ministry
          </h1>
          <p className="text-xs sm:text-sm text-[#D1C2B0] leading-relaxed max-w-xl mx-auto">
            If you have been blessed by these writings and you are moved to support the ministry, so that we can continue to make inspiring messages available freely, kindly reach out or use the options below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* OPTION 1: FLUTTERWAVE CARD PAYMENT */}
          <div className="bg-gradient-to-b from-[#1F150E] to-[#140D09] border border-[#594230] hover:border-[#D4AF37] rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-xl transition">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-[#2A1E16] px-3 py-1 rounded-md border border-[#594230]">
                Card / Online Payment
              </span>
              <h2 className="text-2xl font-serif text-[#FFF5D6]">Donate via Flutterwave</h2>
              <p className="text-xs text-[#D1C2B0] leading-relaxed">
                Pay securely using Debit/Credit Card, Bank Transfer, or Mobile Money via Flutterwave.
              </p>
            </div>

            <button 
              onClick={handleFlutterwavePayment}
              className="w-full text-xs font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA7C11] py-4 rounded-full hover:brightness-125 transition shadow-lg flex items-center justify-center gap-2"
            >
              <span>Pay with Card (Flutterwave)</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* OPTION 2: DIRECT BANK TRANSFER */}
          <div className="bg-gradient-to-b from-[#1F150E] to-[#140D09] border border-[#594230] hover:border-[#D4AF37] rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-xl transition">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-[#2A1E16] px-3 py-1 rounded-md border border-[#594230]">
                Direct Bank Transfer
              </span>
              <h2 className="text-2xl font-serif text-[#FFF5D6]">Bank Details</h2>
              
              <div className="bg-[#120D0A] border border-[#3B2B1F] rounded-xl p-4 space-y-2 text-xs">
                <div className="flex justify-between text-[#A69382]">
                  <span>Bank:</span>
                  <span className="text-[#FFF5D6] font-semibold">Guaranty Trust Bank (GTB)</span>
                </div>
                <div className="flex justify-between text-[#A69382]">
                  <span>Account Name:</span>
                  <span className="text-[#FFF5D6] font-semibold">Joseph Esenowo</span>
                </div>
                <div className="flex justify-between items-center text-[#A69382] pt-2 border-t border-[#3B2B1F]">
                  <span>Account No:</span>
                  <span className="text-[#D4AF37] font-bold text-sm tracking-wider">{accountNumber}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={copyToClipboard}
              className="w-full text-xs font-bold tracking-widest uppercase text-[#F3E5AB] border border-[#D4AF37]/60 py-3.5 rounded-full hover:bg-[#2A1E16] transition shadow-md"
            >
              {copied ? '✓ Account Number Copied!' : 'Copy Account Number'}
            </button>
          </div>

        </div>

        {/* Email Footer Box */}
        <div className="bg-gradient-to-b from-[#1F150E] to-[#140D09] border border-[#594230] rounded-2xl p-6 text-center text-xs text-[#A69382] space-y-1">
          <p>For support inquiries or proof of partnership transfer:</p>
          <p className="text-[#F3E5AB] font-semibold">
            <a href="mailto:ecclewisepreacher@zohomail.com" className="underline hover:text-[#D4AF37]">ecclewisepreacher@zohomail.com</a>
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-[#3B2B1F]/60 text-center text-[11px] text-[#A69382]">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}