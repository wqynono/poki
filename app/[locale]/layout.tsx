import '../../css/tailwind.css'
import 'pliny/search/algolia.css'
import '../globals.css'
import { Space_Grotesk } from 'next/font/google'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from '../theme-providers'
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  keywords: siteMetadata.keyWords,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.ico', sizes: '194x194' },
      { url: '/favicon.ico', sizes: '192x192' },
    ],
    apple: [
      { url: '/favicon.ico', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico'
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  return (
    <html
      lang={locale}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <meta name="google-site-verification" content="1-YVeURx5S-USmoHm-s1VM3uIiAYCf_-S8dsn3sFYsQ" />
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1279787934523230"
        crossOrigin="anonymous"></script> */}
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <NextIntlClientProvider>
          <ThemeProviders>
            {/* <GoogleAnalytics gaId={siteMetadata.analytics.googleAnalytics.googleAnalyticsId} /> */}

            {/* <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}> */}

            <main className="mb-auto">{children}</main>

            {/* </SearchProvider>
          </SectionContainer> */}
          </ThemeProviders>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}