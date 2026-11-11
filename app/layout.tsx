import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter' 
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair' 
})

export const metadata: Metadata = {
  title: 'ECCLEWISE PREACHER | Prophetic History & Insights',
  description: 'The official platform of Joseph Esenowo sharing prophetic letters, articles, essays, and books freely.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ECCLEWISE PREACHER',
    description: 'Prophetic History & Insights by Joseph Esenowo.',
    url: 'https://ecclewisepreacher.com.ng',
    siteName: 'ECCLEWISE PREACHER',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'ECCLEWISE PREACHER',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#120D0A] text-[#FDFBF7] antialiased">
        {children}
      </body>
    </html>
  )
}