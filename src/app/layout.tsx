import type { Metadata } from 'next';
import { Alumni_Sans, Inter } from 'next/font/google';
import Analytics from '../components/Metrics/Analytics';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const alumni = Alumni_Sans({
  subsets: ['latin'],
  variable: '--font-alumni',
  display: 'swap',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'One Apps',
  description: 'Розробка та оренда мобільних додатків для арбітражу трафіка',
  url: 'https://oneapps.tech',
  logo: 'https://oneapps.tech/Logo/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['Ukrainian', 'Russian', 'English'],
  },
  serviceType: ['App Development', 'App Rental', 'Affiliate Marketing'],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://oneapps.tech'),
  title: 'One Apps - Розробка та оренда додатків для арбітражу трафіку',
  description:
    '📱Мобільні додатки готові до заливу вже сьогодні! З трекером, клоакою та пушами. Стабільна робота на наших аккаунтах що живуть довго. Оренда або викуп назавжди⚡',
  alternates: { canonical: 'https://oneapps.tech' },
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${inter.variable} ${alumni.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-black">
        <Analytics gaId="G-SJ0W1B6RE6
" clarityId="v8y9anztsk" />
        {children}
      </body>
    </html>
  );
}
