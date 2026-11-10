import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0908] text-[#E5DFD7] flex flex-col justify-between selection:bg-[#8C5A32] selection:text-white">
      
      {/* Minimal Top Header */}
      <header className="w-full max-w-4xl mx-auto px-6 py-8 flex items-center justify-between border-b border-[#221C18]">
        <span className="font-serif tracking-widest text-xs uppercase text-[#C59B73]">
          Ecclewise Preacher
        </span>
        <button className="text-xs uppercase tracking-wider font-medium text-[#A3988E] hover:text-[#E5DFD7] transition">
          Menu ☰
        </button>
      </header>

      {/* Main Single-Section Narrative Content */}
      <main className="w-full max-w-2xl mx-auto px-6 py-16 md:py-24 text-center space-y-10">
        
        {/* Title & Scripture References */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-serif font-normal tracking-wide text-[#FAF6F2] leading-tight">
            THE BEGINNING OF A PROPHETIC HISTORY
          </h1>
          <div className="flex justify-center items-center gap-6 text-xs tracking-widest text-[#C59B73] font-medium pt-2">
            <span>JOHN 1:1</span>
            <span className="w-1 h-1 rounded-full bg-[#C59B73]/50"></span>
            <span>1 SAMUEL 10:1</span>
          </div>
        </div>

        {/* Welcome Statement */}
        <div className="space-y-6 pt-4">
          <p className="font-serif italic text-lg text-[#D1C7BD]">
            Welcome to Ecclewise Preacher.
          </p>
          <p className="text-sm md:text-base text-[#A3988E] leading-relaxed max-w-xl mx-auto">
            This platform exists to share prophetic letters, articles, essays, and books freely, because the Gospel is not for sale. Explore the writings, be encouraged, and receive insight for the challenges of the 21st century.
          </p>
        </div>

        {/* Action / Next Button */}
        <div className="pt-8">
          <Link 
            href="/books" 
            className="inline-flex items-center gap-3 text-sm font-bold tracking-widest text-[#FAF6F2] hover:text-[#C59B73] transition group"
          >
            <span>NEXT</span>
            <span className="transform group-hover:translate-x-1 transition">&rarr;</span>
          </Link>
        </div>

      </main>

      {/* Minimal Footer */}
      <footer className="w-full max-w-4xl mx-auto px-6 py-8 border-t border-[#221C18] text-center text-[11px] text-[#6E6259]">
        <p>&copy; {new Date().getFullYear()} Ecclewise Preacher. All rights reserved.</p>
      </footer>

    </div>
  )
}