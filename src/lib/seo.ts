// ============================================================
// SEO helpers: per-page metadata and the site-wide JSON-LD graph
// ============================================================
import type { Metadata } from 'next';
import { siteConfig } from './config';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url).replace(/\/$/, '');
export const BRAND = siteConfig.name;

/** Current year, used in titles of evergreen pages ("... 2026") so snippets look fresh. */
export const YEAR = new Date().getFullYear();

export const ORG_ID = `${SITE_URL}/#organization`;
export const AGENCY_ID = `${SITE_URL}/#travelagency`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '' : path}`;

interface PageMetaInput {
  /** Page title without the brand; the layout template appends " | BookMyFlight" */
  title: string;
  description: string;
  /** Path starting with "/" used for the canonical URL and og:url */
  path: string;
  /** Use the title as-is, without the brand suffix */
  absoluteTitle?: boolean;
  /** Social image path or URL (the default OG image is used when omitted) */
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  keywords?: string[];
}

/** Build consistent metadata: title, description, canonical, hreflang, Open Graph and Twitter card. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
  modifiedTime,
  noindex,
  keywords,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${BRAND}`;
  // Pages that set openGraph lose the root opengraph-image, so fall back to it explicitly
  const images = image
    ? [{ url: image, alt: imageAlt ?? title }]
    : [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'BookMyFlight: compare cheap flights from Pakistan' }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: path,
      languages: { 'en-PK': path, 'x-default': path },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: BRAND,
      locale: 'en_PK',
      type,
      images,
      ...(type === 'article' ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [images[0].url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Organisation, website and local travel agency entities, linked by @id so every page can reference them. */
export function siteGraph() {
  const { contact, address, social, parent } = siteConfig;
  const logo = absoluteUrl('/images/brand/logo.jpg');
  const contactPoint = [
    {
      '@type': 'ContactPoint',
      telephone: contact.hotline,
      contactType: 'customer service',
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
    },
    {
      '@type': 'ContactPoint',
      telephone: contact.hotline,
      contactType: 'reservations',
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
    },
    {
      '@type': 'ContactPoint',
      telephone: contact.whatsapp,
      contactType: 'sales',
      contactOption: 'WhatsApp',
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
    },
  ];
  const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: `${address.street}, ${address.area}`,
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: '44000',
    addressCountry: 'PK',
  };
  const sameAs = [social.facebook, social.youtube, social.twitter, parent.website];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: BRAND,
        alternateName: ['Book My Flight', 'BookMyFlight.pk'],
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: logo, width: 1024, height: 1024 },
        image: logo,
        description: siteConfig.description,
        email: contact.email,
        telephone: contact.hotline,
        address: postalAddress,
        contactPoint,
        sameAs,
        parentOrganization: { '@type': 'Organization', name: parent.name, url: parent.website },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: BRAND,
        alternateName: 'Book My Flight',
        url: SITE_URL,
        inLanguage: 'en-PK',
        description:
          'Compare cheap flights from Pakistan, airline refund and reissue policies, and book air tickets with O.S Travel & Tours.',
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'TravelAgency',
        '@id': AGENCY_ID,
        name: `${BRAND} by ${parent.name}`,
        alternateName: BRAND,
        url: SITE_URL,
        image: logo,
        logo,
        description:
          'Flight ticketing, airline fare comparison, Umrah packages, visa assistance and hotel bookings in Blue Area, Islamabad, powered by O.S Travel & Tours.',
        telephone: contact.hotline,
        email: contact.email,
        priceRange: 'PKR',
        currenciesAccepted: 'PKR',
        paymentAccepted: 'Cash, Bank Transfer',
        address: postalAddress,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: address.coordinates.lat,
          longitude: address.coordinates.lng,
        },
        hasMap: address.googleMaps,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        areaServed: [
          { '@type': 'City', name: 'Islamabad' },
          { '@type': 'City', name: 'Rawalpindi' },
          { '@type': 'Country', name: 'Pakistan' },
        ],
        contactPoint,
        sameAs,
        parentOrganization: { '@id': ORG_ID },
        knowsAbout: [
          'Air ticketing',
          'Airline refund and reissue policies',
          'Umrah packages',
          'Visit visas',
          'Schengen visa file processing',
          'Hotel reservations',
          'Holiday packages',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Travel services',
          itemListElement: [
            ['Flight tickets', '/ticketing'],
            ['Umrah packages', '/umrah'],
            ['Visa assistance', '/visa'],
            ['Hotel reservations', '/hotels'],
            ['Holiday packages', '/holidays'],
          ].map(([name, path]) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name, url: absoluteUrl(path) },
          })),
        },
      },
    ],
  };
}
