import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { MobileWhatsAppBar } from '@/components/MobileWhatsAppBar';
import { SplashScreen, splashBootScript } from '@/components/SplashScreen';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bookmyflight.pk';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '700', '900'],
});

export const viewport: Viewport = {
  themeColor: '#05203c',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: 'BookMyFlight | Compare Cheap Flights from Pakistan & Book Air Tickets',
  description:
    'Compare cheap flights from Islamabad, Lahore and Karachi on PIA, Emirates, Qatar Airways, Saudia, Turkish and more. Airline refund & reissue rules, fare seasons and ticketing by O.S Travel & Tours.',
  keywords: [
    'BookMyFlight',
    'cheap flights Pakistan',
    'flight booking Islamabad',
    'international flights Pakistan',
    'Umrah packages Islamabad',
    'visa services Islamabad',
    'hotel booking',
    'travel agency Islamabad',
    'O.S Travel Tours',
    'air ticketing Islamabad',
    'airline refund policy Pakistan',
    'ticket reissue policy',
    'cheapest month to fly from Pakistan',
    'IATA travel agent Islamabad',
  ],
  authors: [{ name: 'BookMyFlight — Powered by O.S Travel & Tours' }],
  openGraph: {
    title: 'BookMyFlight | Cheap Flights from Pakistan',
    description:
      'Compare cheap flights from Pakistan, check airline refund & reissue rules and book with O.S Travel & Tours.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'BookMyFlight',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookMyFlight | Cheap Flights from Pakistan',
    description:
      'Compare cheap flights from Pakistan, check airline refund & reissue rules and book with O.S Travel & Tours.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Skips the opening animation on repeat loads within a session */}
        <script dangerouslySetInnerHTML={{ __html: splashBootScript }} />
        {/* Global Google Analytics 4 (Conditional on env var) */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Schema.org WebSite markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'BookMyFlight',
              url: siteUrl,
              description:
                'Compare cheap flights from Pakistan, airline refund and reissue policies, and book air tickets with O.S Travel & Tours.',
            }),
          }}
        />

        {/* Schema.org TravelAgency markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'BookMyFlight',
              alternateName: 'Book My Flight',
              description:
                'Flight ticketing, airline fare comparison, Umrah, visa and hotel services powered by O.S Travel & Tours, Islamabad.',
              telephone: ['+92-51-2120700', '+92-51-2120701', '+92-333-5542877'],
              email: 'info@ostravels.com',
              url: siteUrl,
              address: {
                '@type': 'PostalAddress',
                streetAddress:
                  'Office # 3, Aaly Plaza, Fazal-e-Haq Rd, Block E, G-6/2, Blue Area',
                addressLocality: 'Islamabad',
                addressRegion: 'Islamabad Capital Territory',
                addressCountry: 'PK',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '33.7178385',
                longitude: '73.0733661',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '09:00',
                closes: '18:00',
              },
              parentOrganization: {
                '@type': 'Organization',
                name: 'O.S Travel & Tours',
                url: 'https://ostravels.com',
                sameAs: ['https://www.facebook.com/ostravels/', 'https://www.youtube.com/@obrehman84'],
              },
            }),
          }}
        />
      </head>
      <body>
        <SplashScreen />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileWhatsAppBar />
      </body>
    </html>
  );
}
