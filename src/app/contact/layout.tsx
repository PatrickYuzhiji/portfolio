import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Patrick Zhiji Yu. Send me a message about your project, questions, or collaboration opportunities. I\'ll get back to you as soon as possible.',
  keywords: [
    'Contact Patrick Zhiji Yu',
    'Software Engineer Contact',
    'Developer Contact',
    'Project Collaboration',
    'Hire Developer',
    'Portfolio Contact'
  ],
  openGraph: {
    title: 'Contact Patrick Zhiji Yu - Software Engineer',
    description: 'Get in touch with Patrick Zhiji Yu. Send me a message about your project, questions, or collaboration opportunities.',
    url: 'https://www.patrickyu.work/contact',
    type: 'website',
    images: [
      {
        url: 'https://www.patrickyu.work/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Patrick Zhiji Yu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Patrick Zhiji Yu - Software Engineer',
    description: 'Get in touch with Patrick Zhiji Yu. Send me a message about your project, questions, or collaboration opportunities.',
    images: ['https://www.patrickyu.work/images/og-image.jpg'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}