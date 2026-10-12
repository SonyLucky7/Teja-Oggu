import type { Metadata } from 'next'
import { spaceGrotesk, inter, ibmPlexMono, instrumentSans, instrumentSerif } from '@/lib/fonts'
import ScrollProgress from '@/components/ui/ScrollProgress'
import GridBackground from '@/components/visuals/GridBackground'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://tejaoggu.vercel.app'),
  title: 'Teja Oggu | AI-Augmented Full-Stack Developer',
  description: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM systems, AI integration, automation, APIs, and intelligent digital products.',
  openGraph: {
    title: 'Teja Oggu | AI-Augmented Full-Stack Developer',
    description: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM systems, AI integration, automation, APIs, and intelligent digital products.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Teja Oggu',
    images: [{ url: '/teja-profile.jpg', width: 800, height: 800, alt: 'Teja Oggu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teja Oggu | AI-Augmented Full-Stack Developer',
    description: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM systems, AI integration, automation, APIs, and intelligent digital products.',
    images: ['/teja-profile.jpg'],
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
    image: 'https://tejaoggu.vercel.app/teja-profile.jpg',
    jobTitle: 'AI-Augmented Full-Stack Developer',
    description: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM systems, AI integration, automation, APIs, and intelligent digital products.',
    knowsAbout: ['Full-Stack Development', 'AI Integration', 'SaaS', 'CRM', 'Next.js', 'React', 'TypeScript'],
  }

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} ${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-background text-foreground font-body min-h-screen noise">
        <GridBackground />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
