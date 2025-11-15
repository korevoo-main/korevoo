import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Korevoo - Your Partner for Studying in Korea',
  description: 'Korevoo helps students from Uzbekistan and Kazakhstan prepare for studying in Korea. Get personalized guidance for your Korean university journey.',
  generator: 'v0.app',
  keywords: ['Korea study', 'Korean university', 'study abroad', 'Uzbekistan students', 'Kazakhstan students', 'Korean education'],
  openGraph: {
    title: 'Korevoo - Your Partner for Studying in Korea',
    description: 'Get personalized guidance for studying in Korea',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Korevoo_logo_320x320-lWDAN0NxYaEYSXYeZpafjEUdj04rR1.png'],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
