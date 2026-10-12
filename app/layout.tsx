import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LenisProvider } from '@/components/LenisProvider'
import { Nav } from '@/components/site/nav'
import { SideRails } from '@/components/site/side-rails'
import { InterfaceSoundProvider } from '@/components/site/sound'
import { PERSONAL } from './data'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sridurga.me/'),
  alternates: { canonical: '/' },
  title: {
    default: `${PERSONAL.name} | ${PERSONAL.role}`,
    template: `%s | ${PERSONAL.name}`,
  },
  description: PERSONAL.bio,
  icons: '/favicon.ico',
}

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <InterfaceSoundProvider>
            <LenisProvider>
              <SideRails />
              <div className="mx-auto w-full max-w-[720px]">
                <Nav />
                <main>{children}</main>
                <Footer />
              </div>
              <SpeedInsights />
              <Analytics />
            </LenisProvider>
          </InterfaceSoundProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
