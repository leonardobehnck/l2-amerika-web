import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: 'Amerika - High Five PvP Server | Lineage 2',
  description: 'Amerika, o servidor PvP High Five mais respeitado. 17 anos online, sem wipes, eventos automaticos, sieges e Territory Wars. Jogue o melhor servidor L2 PvP H5!',
  keywords: ['lineage 2', 'l2', 'pvp server', 'high five', 'mmorpg', 'amerika'],
  openGraph: {
    title: 'Amerika - High Five PvP Server',
    description: 'A verdadeira essencia do L2 PvP: 17 anos online, sem wipes, eventos automaticos.',
    url: 'https://www.l2amerika.com',
    siteName: 'Amerika',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${spaceGrotesk.variable} ${cinzel.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
