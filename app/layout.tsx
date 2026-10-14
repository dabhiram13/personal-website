import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LenisProvider } from '@/components/LenisProvider'
import { Nav } from '@/components/site/nav'
import { SideRails } from '@/components/site/side-rails'
import { InterfaceSoundProvider } from '@/components/site/sound'
import { DesignProvider } from '@/components/site/design-provider'
import { PERSONAL } from './data'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://personal-website-six-vert-88.vercel.app/'),
  title: {
    default: `${PERSONAL.name} | ${PERSONAL.tagline}`,
    template: `%s | ${PERSONAL.name}`,
  },
  description: PERSONAL.summary,
  icons: '/favicon.ico',
}

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
          enableSystem={false}
        >
          <DesignProvider>
            <InterfaceSoundProvider>
              <LenisProvider>
                <a href="#main-content" className="skip-link">
                  Skip to content
                </a>
                <SideRails />
                <Nav />
                <div className="relative z-10 mx-auto min-h-screen w-full max-w-3xl border-x border-[var(--border)] bg-[var(--background)] px-6 pt-24 pb-6 sm:pt-28 sm:pb-6">
                  <div
                    aria-hidden="true"
                    className="reference-edge-hatch pointer-events-none absolute inset-y-0 right-full hidden w-14 border-x border-[var(--border)]/70 xl:block"
                  />
                  <div
                    aria-hidden="true"
                    className="reference-edge-hatch pointer-events-none absolute inset-y-0 left-full hidden w-14 border-x border-[var(--border)]/70 xl:block"
                  />
                  <main
                    id="main-content"
                    tabIndex={-1}
                    className="relative flex min-h-dvh flex-col gap-8"
                  >
                    {children}
                  </main>
                  <Footer />
                </div>
                <SpeedInsights />
                <Analytics />
              </LenisProvider>
            </InterfaceSoundProvider>
          </DesignProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
