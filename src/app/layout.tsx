import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { MobileWhatsAppBar } from '@/components/MobileWhatsAppBar';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bookmyflight.pk';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: 'BookMyFlight — Premium Travel Services | Flights, Umrah, Visa & Hotels',
  description:
    'BookMyFlight offers premium travel services powered by O.S Travel & Tours — flights, Umrah packages, visa assistance, hotel reservations, and personalized travel solutions from Islamabad, Pakistan.',
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
  ],
  authors: [{ name: 'BookMyFlight — Powered by O.S Travel & Tours' }],
  openGraph: {
    title: 'BookMyFlight — Premium Travel Services',
    description:
      'Your journey, our expertise. Premium flights, Umrah packages, visa assistance & personalized travel solutions.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'BookMyFlight',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookMyFlight — Premium Travel Services',
    description:
      'Your journey, our expertise. Premium flights, Umrah packages, visa assistance & personalized travel solutions.',
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
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />

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
                'Premium flight booking, Umrah packages, visa assistance, and luxury travel consultancy.',
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/flights?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
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
                'Premium travel services powered by O.S Travel & Tours — flights, Umrah, visa, hotels.',
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
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileWhatsAppBar />
      </body>
    </html>
  );
}
