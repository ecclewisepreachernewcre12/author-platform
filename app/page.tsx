import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0908] text-[#E5DFD7] flex flex-col justify-between selection:bg-[#8C5A32] selection:text-white">
      
      {/* Background Image with Dark Gradient Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url('/background.jpg')` }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0A0908]/80 via-[#0A0908]/95 to-[#0A0908] pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        
        {/* Top Header */}
        <header className="w-full max-w-5xl mx-auto px-6 py-8 flex items-center justify-between border-b border-[#221C18]/80">
          <Link href="/" className="font-serif tracking-widest text-xs uppercase text-[#C59B73] hover:text-[#FAF6F2] transition">
            Ecclewise Preacher
          </Link>
          <nav className="flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-[#A3988E]">
            <Link href="#writings" className="hover:text-[#E5DFD7] transition">Writings</Link>
            <Link href="#books" className="hover:text-[#E5DFD7] transition">Books</Link>
          </nav>
        </header>

        {/* Hero Section (Prophetic History Statement) */}
        <main className="w-full max-w-3xl mx-auto px-6 py-20 md:py-28 text-center space-y-10">
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-serif font-normal tracking-wide text-[#FAF6F2] leading-tight">
              THE BEGINNING OF A PROPHETIC HISTORY
            </h1>
            <div className="flex justify-center items-center gap-6 text-xs tracking-widest text-[#C59B73] font-medium pt-2">
              <span>JOHN 1:1</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B73]/50"></span>
              <span>1 SAMUEL 10:1</span>
            </div>
          </div>

          <div className="space-y-6 pt-2">
            <p className="font-serif italic text-lg text-[#D1C7BD]">
              Welcome to Ecclewise Preacher.
            </p>
            <p className="text-sm md:text-base text-[#A3988E] leading-relaxed max-w-xl mx-auto">
              This platform exists to share prophetic letters, articles, essays, and books freely, because the Gospel is not for sale. Explore the writings, be encouraged, and receive insight for the challenges of the 21st century.
            </p>
          </div>

          <div className="pt-6">
            <a 
              href="#writings" 
              className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#FAF6F2] bg-[#221B16] border border-[#42342A] px-8 py-3.5 rounded-full hover:border-[#C59B73] hover:text-[#C59B73] transition group shadow-lg"
            >
              <span>Explore Platform</span>
              <span className="transform group-hover:translate-y-0.5 transition">&darr;</span>
            </a>
          </div>

        </main>

        {/* Platform Content Sections */}
        <section className="w-full max-w-4xl mx-auto px-6 py-16 space-y-20 border-t border-[#221C18]/60">
          
          {/* Section 1: Prophetic Letters & Writings */}
          <div id="writings" className="bg-[#12100E]/90 border border-[#261F1A] rounded-2xl p-8 md:p-12 space-y-6 backdrop-blur">
            <span className="text-[11px] uppercase tracking-widest text-[#C59B73] font-semibold">
              Published Works & Essays
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#FAF6F2]">
              Letters & Articles
            </h2>
            <p className="text-sm text-[#A3988E] leading-relaxed max-w-2xl">
              Access thought-provoking prophetic letters, timely essays, and biblical commentary tailored to equip the church and believers across the globe.
            </p>
            <div className="pt-2">
              <Link 
                href="/articles" 
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C59B73] hover:text-[#FAF6F2] transition group"
              >
                <span>Read Articles</span>
                <span className="transform group-hover:translate-x-1 transition">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Section 2: Free Books & Literature */}
          <div id="books" className="bg-[#12100E]/90 border border-[#261F1A] rounded-2xl p-8 md:p-12 space-y-6 backdrop-blur">
            <span className="text-[11px] uppercase tracking-widest text-[#C59B73] font-semibold">
              Free Downloads & Publications
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#FAF6F2]">
              Books & Library
            </h2>
            <p className="text-sm text-[#A3988E] leading-relaxed max-w-2xl">
              Download complete digital books, study manuals, and guides created for personal devotion and spiritual growth at zero cost.
            </p>
            <div className="pt-2">
              <Link 
                href="/books" 
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C59B73] hover:text-[#FAF6F2] transition group"
              >
                <span>Browse Books</span>
                <span className="transform group-hover:translate-x-1 transition">&rarr;</span>
              </Link>
            </div>
          </div>

        </section>

        {/* Footer */}
        <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-[#221C18]/80 text-center text-[11px] text-[#6E6259]">
          <p>&copy; 2026 Ecclewise Preacher. All rights reserved.</p>
        </footer>

      </div>
    </div>
  )
}