import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { Analytics } from "@/components/analytics/analytics";
import { StructuredData } from '@/components/seo/StructuredData'
import { name, headline, introduction } from '@/config/infoConfig'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${name}`,
    default: `${name} - ${headline}`,
  },
  description: `${introduction}`,
  keywords: [
    'Patrick Zhiji Yu',
    'Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Sydney Developer',
    'Portfolio',
    'Web Development',
    'Mobile Development',
    'Machine Learning',
    'University of Wollongong',
    'Computer Science'
  ],
  authors: [{ name: name }],
  creator: name,
  publisher: name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.patrickyu.work'),
  alternates: {
    canonical: 'https://www.patrickyu.work',
    languages: {
      'en': 'https://www.patrickyu.work',
      'zh': 'https://www.patrickyu.work/zh',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.patrickyu.work',
    siteName: `${name} Portfolio`,
    title: `${name} - ${headline}`,
    description: `${introduction}`,
    images: [
      {
        url: 'https://www.patrickyu.work/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${name} - Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${name} - ${headline}`,
    description: `${introduction}`,
    images: ['https://www.patrickyu.work/images/og-image.jpg'],
    creator: '@PatrickYuzhiji',
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
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
          <Analytics />
          <StructuredData />
        </Providers>
      </body>
    </html>
  )
}
