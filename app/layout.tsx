import type { Metadata } from 'next'
import { spaceGrotesk, inter, ibmPlexMono } from '@/lib/fonts'
import ScrollProgress from '@/components/ui/ScrollProgress'
import SpaceBackground from '@/components/visuals/SpaceBackground'
import './globals.css'

export const metadata: Metadata = {
  title: 'Teja Oggu | AI-Augmented Full-Stack Developer',
  description: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM systems, AI integration, automation, APIs, and intelligent digital products.',
  openGraph: {
    title: 'Teja Oggu | AI-Augmented Full-Stack Developer',
    description: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM systems, AI integration, automation, APIs, and intelligent digital products.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Teja Oggu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teja Oggu | AI-Augmented Full-Stack Developer',
    description: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM systems, AI integration, automation, APIs, and intelligent digital products.',
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'Teja Oggu' }],
  keywords: ['Full-Stack Developer', 'AI Developer', 'SaaS', 'CRM', 'Next.js', 'React', 'TypeScript'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Teja Oggu',
    jobTitle: 'AI-Augmented Full-Stack Developer',
    description: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM systems, AI integration, automation, APIs, and intelligent digital products.',
    address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad' },
    knowsAbout: ['Full-Stack Development', 'AI Integration', 'SaaS', 'CRM', 'Next.js', 'React', 'TypeScript'],
  }

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#030014] text-foreground font-body min-h-screen">
        <SpaceBackground />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
