import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { DisclaimerModal } from '@/components/finora/disclaimer-modal'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800']
});

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  variable: '--font-libre',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moneyventureresearch.com'),
  title: {
    default: 'Money Ventures Research — SEBI Registered Research Analyst (INH000026114)',
    template: '%s | Money Ventures Research',
  },
  description:
    'SEBI Registered Research Analyst offering equity, intraday, options, and commodity research, stock market tips, IPO analysis, and trading signals for disciplined wealth creation in India.',
  generator: 'v0.app',
  applicationName: 'Money Ventures Research',
  authors: [{ name: 'Money Ventures Research' }],
  creator: 'Money Ventures Research',
  publisher: 'Money Ventures Research',
  // Note: Google ignores the meta keywords tag for ranking. We keep a short,
  // honest list for documentation/other crawlers only. Real ranking is driven
  // by the structured content, titles, and schema below.
  keywords: [
    'SEBI registered research analyst',
    'stock market research India',
    'intraday trading tips',
    'options trading research',
    'commodity trading calls',
    'equity research advisory',
    'IPO analysis India',
    'share market tips',
    'Money Ventures Research',
  ],
  category: 'finance',
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://moneyventureresearch.com',
    siteName: 'Money Ventures Research',
    title: 'Money Ventures Research — SEBI Registered Research Analyst',
    description:
      'SEBI Registered Research Analyst (INH000026114) offering equity, intraday, options, and commodity research with transparent, compliant advisory.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money Ventures Research — SEBI Registered Research Analyst',
    description:
      'Equity, intraday, options & commodity research from a SEBI Registered Research Analyst (INH000026114).',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://moneyventureresearch.com/#organization',
    name: 'Money Ventures Research',
    alternateName: 'Money Venture Research',
    description:
      'SEBI Registered Research Analyst (INH000026114) providing equity, intraday, options, and commodity research and advisory services in India.',
    url: 'https://moneyventureresearch.com',
    logo: 'https://moneyventureresearch.com/icon.svg',
    image: 'https://moneyventureresearch.com/icon.svg',
    priceRange: '₹₹',
    areaServed: { '@type': 'Country', name: 'India' },
    knowsAbout: [
      'Stock Market Research',
      'Intraday Trading',
      'Options Trading',
      'Commodity Trading',
      'Equity Research',
      'IPO Analysis',
      'Technical Analysis',
      'Investment Advisory',
    ],
    serviceType: [
      'Equity Research',
      'Intraday Trading Calls',
      'Options Research',
      'Commodity Research',
      'IPO Advisory',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [] as string[],
  }

  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} ${libreBaskerville.variable} font-sans antialiased`}>
        <DisclaimerModal />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
