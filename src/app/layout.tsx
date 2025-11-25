import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { personalInfo } from '@/data/personal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://yourportfolio.com'),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`
  },
  description: personalInfo.tagline,
  keywords: [
    'full-stack developer',
    'web developer',
    'react developer',
    'node.js developer',
    'javascript developer',
    'portfolio',
    personalInfo.name.toLowerCase()
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.profileImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: [personalInfo.profileImage],
    creator: `@${personalInfo.github.split('/').pop()}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}