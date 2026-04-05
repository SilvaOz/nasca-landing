import type { Metadata } from 'next'
import { Cinzel, Inter } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nasca Antara — El Instrumento Ancestral',
  description:
    'Toca la antara nazca en tu teléfono. El instrumento de viento del antiguo Perú, en tres tamaños auténticos: Chuli, Sanqa y Malta. Graba tus melodías.',
  keywords: ['antara', 'nazca', 'nasca', 'panflute', 'flauta andina', 'instrumento ancestral', 'música peruana', 'app'],
  authors: [{ name: 'Nasca Antara' }],
  metadataBase: new URL('https://nascaantara.com'),
  openGraph: {
    title: 'Nasca Antara — El Instrumento Ancestral',
    description: 'Toca la antara nazca en tu teléfono. Tres tamaños auténticos, grabación y demo incluidos.',
    type: 'website',
    locale: 'es_PE',
    url: 'https://nascaantara.com',
    siteName: 'Nasca Antara',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nasca Antara',
    description: 'Toca la antara nazca en tu teléfono.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="bg-deep font-inter">{children}</body>
    </html>
  )
}
