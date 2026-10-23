import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { MobileWhatsAppBar } from '@/components/MobileWhatsAppBar';
import { SplashScreen, splashBootScript } from '@/components/SplashScreen';
import { JsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/lib/config';
import { SITE_URL, siteGraph } from '@/lib/seo';
import { flightRoutes, routeLabel } from '@/lib/routes';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '700', '900'],
});

export const viewport: Viewport = {
  themeColor: '#05203c',
};

const defaultTitle = 'Cheap Flights from Pakistan: Compare & Book | BookMyFlight';
const defaultDescription =
  'Compare cheap flights from Islamabad, Lahore & Karachi on PIA, Emirates, Qatar Airways, Saudia & more. Real airline e-tickets by an IATA agent. Call +92 332 5500377.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: '%s | BookMyFlight',
  },
  description: defaultDescription,
  applicationName: 'BookMyFlight',
  category: 'travel',
  keywords: [
    'BookMyFlight',
    'cheap flights Pakistan',
    'flight booking Islamabad',
    'air ticket price Pakistan',
    'international flights Pakistan',
    'Umrah packages',
    'travel agency Islamabad',
    'air ticketing Islamabad',
    'airline refund policy Pakistan',
    'IATA travel agent Islamabad',
  ],
  authors: [{ name: 'BookMyFlight', url: SITE_URL }],
  creator: 'BookMyFlight',
  publisher: 'O.S Travel & Tours',
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: 'website',
    locale: 'en_PK',
    siteName: 'BookMyFlight',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
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
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION } : {}),
    },
  },
  other: {
    'geo.region': 'PK-IS',
    'geo.placename': 'Islamabad',
    'geo.position': `${siteConfig.address.coordinates.lat};${siteConfig.address.coordinates.lng}`,
    ICBM: `${siteConfig.address.coordinates.lat}, ${siteConfig.address.coordinates.lng}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-PK" className={inter.variable} suppressHydrationWarning>
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

        {/* Organisation, website and travel agency entities (schema.org) */}
        <JsonLd schema={siteGraph()} />
      </head>
      <body>
        <SplashScreen />
        <Header />
        <main id="main-content">{children}</main>
        <Footer
          routeLinks={[
            ...flightRoutes.slice(0, 14).map((r) => ({ label: `${routeLabel(r)} flights`, href: `/flights/${r.slug}` })),
            { label: 'All flight routes', href: '/flights' },
          ]}
        />
        <WhatsAppFloat />
        <MobileWhatsAppBar />
      </body>
    </html>
  );
}
