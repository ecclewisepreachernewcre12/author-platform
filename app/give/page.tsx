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
    <div 
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-[#E8F1F5] text-[#111827] flex flex-col justify-between select-none selection:bg-[#0284C7] selection:text-white"
    >
      
      {/* Navigation Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#CBD5E1] relative">
        
        {/* Logo pushed left */}
        <Link href="/" className="font-serif tracking-widest text-xs sm:text-sm uppercase text-[#0B2545] hover:text-[#0284C7] transition font-bold -ml-2 sm:-ml-4">
          Ecclewise Preacher
        </Link>
        
        {/* Desktop Navigation moved right with Dynamic Highlighting */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#334155] mr-[-1rem]">
          <Link href="/" className={`transition-all ${pathname === '/' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
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
              className={`flex items-center gap-1 transition-all focus:outline-none py-1 ${pathname.startsWith('/about') ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}
            >
              <span>About</span>
              <span className="text-[10px]">&▾</span>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#F4F9FB] border border-[#CBD5E1] rounded-xl shadow-lg py-2 z-50 flex flex-col">
                <Link href="/about/website" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#334155] hover:text-[#0284C7] hover:bg-[#E8F1F5] transition">
                  About the Website
                </Link>
                <Link href="/about/author" className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#334155] hover:text-[#0284C7] hover:bg-[#E8F1F5] transition">
                  About the Author
                </Link>
              </div>
            )}
          </div>

          <Link href="/articles" className={`transition-all ${pathname === '/articles' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
            Articles
          </Link>
          <Link href="/books" className={`transition-all ${pathname === '/books' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
            Books
          </Link>
          <Link href="/bonus" className={`transition-all ${pathname === '/bonus' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
            Bonus writings
          </Link>
          <Link href="/contact" className={`transition-all ${pathname === '/contact' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
            Contact
          </Link>
          <Link href="/give" className={`transition-all ${pathname === '/give' ? 'text-[#0284C7] font-bold' : 'hover:text-[#0B2545]'}`}>
            Support
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#0B2545] p-2 focus:outline-none hover:text-[#0284C7] transition"
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
        <div className="md:hidden absolute top-20 left-4 right-4 bg-[#F4F9FB]/95 backdrop-blur-xl border border-[#CBD5E1] rounded-2xl p-6 shadow-xl z-50 flex flex-col space-y-4 text-xs uppercase tracking-wider font-semibold text-[#334155]">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Home</Link>
          
          <div>
            <button 
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex justify-between items-center hover:text-[#0B2545] py-1 border-b border-[#CBD5E1]/60"
            >
              <span>About</span>
              <span>{mobileAboutOpen ? '▴' : '▾'}</span>
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 py-2 space-y-2 flex flex-col bg-[#E8F1F5] rounded-lg mt-2">
                <Link href="/about/website" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-[#334155] hover:text-[#0284C7]">About the Website</Link>
                <Link href="/about/author" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-[#334155] hover:text-[#0284C7]">About the Author</Link>
              </div>
            )}
          </div>

          <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/articles' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Articles</Link>
          <Link href="/books" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/books' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Books</Link>
          <Link href="/bonus" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/bonus' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Bonus writings</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`py-1 border-b border-[#CBD5E1]/60 ${pathname === '/contact' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Contact</Link>
          <Link href="/give" onClick={() => setMobileMenuOpen(false)} className={`py-1 ${pathname === '/give' ? 'text-[#0284C7]' : 'hover:text-[#0B2545]'}`}>Support</Link>
        </div>
      )}

      {/* Main Support Section */}
      <main className="w-full max-w-3xl mx-auto px-6 py-16 space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-4 py-1.5 rounded-full border border-[#B8D4E3]">
            Ministry Partnership
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#0B2545] font-bold">
            Support the Work & Ministry
          </h1>
          <p className="text-base sm:text-lg text-[#111827] leading-relaxed max-w-xl mx-auto font-normal">
            If you have been blessed by these writings and you are moved to support the ministry, so that we can continue to make inspiring messages available freely, kindly reach out or use the options below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* OPTION 1: FLUTTERWAVE CARD PAYMENT */}
          <div className="bg-[#F4F9FB] border border-[#CBD5E1] hover:border-[#0284C7] rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-md transition">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-3 py-1 rounded-md border border-[#B8D4E3]">
                Card / Online Payment
              </span>
              <h2 className="text-2xl font-serif text-[#0B2545] font-bold">Donate via Flutterwave</h2>
              <p className="text-sm text-[#111827] leading-relaxed">
                Pay securely using Debit/Credit Card, Bank Transfer, or Mobile Money via Flutterwave.
              </p>
            </div>

            <button 
              onClick={handleFlutterwavePayment}
              className="w-full text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#0284C7] hover:bg-[#0369A1] py-4 rounded-full transition shadow-md flex items-center justify-center gap-2"
            >
              <span>Pay with Card (Flutterwave)</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* OPTION 2: DIRECT BANK TRANSFER */}
          <div className="bg-[#F4F9FB] border border-[#CBD5E1] hover:border-[#0284C7] rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-md transition">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#0B2545] font-bold bg-[#D5E6EE] px-3 py-1 rounded-md border border-[#B8D4E3]">
                Direct Bank Transfer
              </span>
              <h2 className="text-2xl font-serif text-[#0B2545] font-bold">Bank Details</h2>
              
              <div className="bg-[#E8F1F5] border border-[#CBD5E1] rounded-xl p-4 space-y-2 text-xs font-semibold">
                <div className="flex justify-between text-[#475569]">
                  <span>Bank:</span>
                  <span className="text-[#0B2545]">Guaranty Trust Bank (GTB)</span>
                </div>
                <div className="flex justify-between text-[#475569]">
                  <span>Account Name:</span>
                  <span className="text-[#0B2545]">Joseph Esenowo</span>
                </div>
                <div className="flex justify-between items-center text-[#475569] pt-2 border-t border-[#CBD5E1]">
                  <span>Account No:</span>
                  <span className="text-[#0284C7] font-bold text-sm tracking-wider">{accountNumber}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={copyToClipboard}
              className="w-full text-xs font-bold tracking-widest uppercase text-[#0B2545] border border-[#0284C7] py-3.5 rounded-full hover:bg-[#D5E6EE] transition shadow-sm"
            >
              {copied ? '✓ Account Number Copied!' : 'Copy Account Number'}
            </button>
          </div>

        </div>

        {/* Email Footer Box */}
        <div className="bg-[#F4F9FB] border border-[#CBD5E1] rounded-2xl p-6 text-center text-xs text-[#475569] space-y-1 font-medium">
          <p>For support inquiries or proof of partnership transfer:</p>
          <p className="text-[#0B2545] font-bold">
            <a href="mailto:ecclewisepreacher@zohomail.com" className="underline text-[#0284C7] hover:text-[#0B2545]">ecclewisepreacher@zohomail.com</a>
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-[#CBD5E1] text-center text-xs text-[#475569] font-medium">
        <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}