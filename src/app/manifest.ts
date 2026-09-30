import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BookMyFlight: Cheap Flights from Pakistan',
    short_name: 'BookMyFlight',
    description: 'Compare cheap flights from Pakistan, airline refund & reissue rules, and book with O.S Travel & Tours.',
    start_url: '/',
    display: 'standalone',
    background_color: '#05203c',
    theme_color: '#05203c',
    icons: [
      { src: '/icon', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
