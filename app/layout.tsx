import { Metadata, Viewport } from 'next';
import Script from 'next/script';

import './globals.css';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon.png' },
    ],
  },
  title: 'HTTP Cats',
  description:
    'An API for the awesome HTTP Cats! Use it in your website to show funny error messages.',
  keywords:
    'http, cats, http cats, http status cats, status cats, api, lolcats, error',
  authors: [{ name: 'Rogério Vicente', url: 'https://github.com/rogeriopvl' }],
  openGraph: {
    type: 'website',
    title: 'HTTP Cats',
    url: 'https://http.cat.dn42',
    images: [
      {
        url: 'https://http.cat.dn42/100.jpg',
        alt: 'HTTP Cats',
      },
    ],
    siteName: 'HTTP Status Cats API',
    description: 'API for HTTP Cats',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://http.cat.dn42',
    creator: '@rogeriopvl',
    title: 'HTTP Cats',
    description: 'API for HTTP Cats',
    images: ['https://http.cat.dn42/100'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#d0383e',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="httpcat"
          href="https://http.cat.dn42/opensearch.xml"
        />
      </head>
      <body>
        <div className="p-4 sm:px-16 sm:py-4 lg:px-32 lg:py-4">{children}</div>
      </body>
    </html>
  );
}
