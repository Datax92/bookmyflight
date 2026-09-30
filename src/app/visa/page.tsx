import type { Metadata } from 'next';
import { LandingPage, type LandingData, type CardItem } from '@/components/sections/LandingPage';

export const metadata: Metadata = {
  title: 'Visa Assistance in Islamabad: Visit Visas & Schengen File Processing | BookMyFlight',
  description:
    'Visit visas and visa file processing by O.S Travel & Tours, Islamabad: Saudi Arabia, Malaysia, Thailand, Singapore, Türkiye, Azerbaijan, Schengen, UK, USA, Canada and more.',
  alternates: { canonical: '/visa' },
};

const visit: [string, string][] = [
  ['Saudi Arabia', 'saudi-arabia-visa'], ['Malaysia', 'malaysia-visa'], ['Thailand', 'thailand-visa'], ['Singapore', 'singapore-visa'],
  ['Türkiye', 'turkey-visa'], ['Azerbaijan', 'azerbaijan-visa'], ['Indonesia', 'indonesia-visa'], ['Vietnam', 'vietnam-visa'],
  ['China', 'china-visa'], ['Hong Kong', 'hongkong-visa'], ['Sri Lanka', 'sri-lanka-visa'], ['Philippines', 'philippine-visa'],
  ['Cambodia', 'cambodia-visa'], ['Egypt', 'egypt-visa'], ['Nepal', 'nepal'], ['Kazakhstan', 'kazakhstan'],
  ['Uzbekistan', 'uzbekistan-visa'], ['Kyrgyzstan', 'kyrgyzstan-visa'], ['Tajikistan', 'tajikistan-visa'],
];

const files: [string, string][] = [
  ['United Kingdom', 'united-kingdom-uk-visa'], ['United States', 'united-states-usa-visa'], ['Canada', 'canada-visa'],
  ['Australia', 'australia-visa'], ['France', 'france-visa'], ['Germany', 'germany-visa'], ['Italy', 'italy-visa'],
  ['Spain', 'spain-visa'], ['Netherlands', 'netherlands-visa'], ['Switzerland', 'switzerland-visa'], ['Greece', 'greece-visa'],
  ['Portugal', 'portugal-visa'], ['Belgium', 'belgium-visa'], ['Denmark', 'denmark-visa'], ['Sweden', 'sweden-visa'],
  ['Norway', 'norway-visa'], ['Poland', 'poland-visa'], ['Hungary', 'hungary-visa'], ['Czech Republic', 'czech-republic-visa'],
];

const visitCards: CardItem[] = visit.map(([name, slug]) => ({
  title: name,
  meta: 'Visit / tourist visa',
  href: `https://ostravels.com/visa/${slug}/`,
  external: true,
  cta: 'Requirements',
}));

const fileCards: CardItem[] = files.map(([name, slug]) => ({
  title: name,
  meta: ['United Kingdom', 'United States', 'Canada', 'Australia'].includes(name) ? 'Visa file processing' : 'Schengen visa file',
  href: `https://ostravels.com/schengen-visa-file-processing/${slug}/`,
  external: true,
  cta: 'Requirements',
}));

const data: LandingData = {
  hero: {
    title: 'Visa assistance',
    subtitle: 'Visit visas and visa file processing by the O.S Travel & Tours visa team in Blue Area, Islamabad.',
    breadcrumb: 'Visa',
  },
  blocks: [
    {
      type: 'steps',
      title: 'How visa assistance works',
      items: [
        { title: 'Tell us your destination', body: 'Share your travel purpose, dates and passport details on WhatsApp or at our office.' },
        { title: 'Get a document checklist', body: 'We send the exact documents for your visa type: bank statements, letters, bookings and forms.' },
        { title: 'File preparation & submission', body: 'We prepare and check your file, book appointments where needed and submit or guide submission.' },
      ],
    },
    { type: 'cards', title: 'Visit & tourist visas', intro: 'Asia, the Middle East and Central Asia. O.S Travel & Tours lists itself as an authorised drop-box agent for Malaysia, Indonesia, Thailand and Vietnam.', cols: 4, items: visitCards },
    { type: 'cards', title: 'Schengen, UK, USA & Canada file processing', intro: 'Complete visa file preparation, itinerary, hotel and flight reservations and travel insurance for embassy and VFS submissions.', cols: 4, items: fileCards },
    {
      type: 'bullets',
      title: 'Documents usually needed',
      panel: true,
      items: [
        'Passport valid for at least 6 months with blank pages, plus old passports',
        'Recent photographs to embassy specification',
        'Bank statement (usually last 6 months) and account maintenance letter',
        'Employment letter, business registration or student letter',
        'Tax returns (NTN) for many embassies',
        'Flight reservation and hotel booking or invitation letter',
        'Travel insurance (mandatory for Schengen visas)',
        'Family registration certificate (FRC) for family applications',
      ],
    },
    {
      type: 'cta',
      title: 'Talk to a visa expert',
      body: 'Visa rules change often. Message our team with your destination and travel dates for the current requirements and processing time.',
      whatsapp: 'Hello BookMyFlight, I need visa assistance. My destination is:',
      button: 'Ask about my visa',
    },
  ],
  faqTitle: 'Visa assistance FAQs',
  faqs: [
    { question: 'Which visas can you help with?', answer: 'Visit and tourist visas for Saudi Arabia, Malaysia, Thailand, Singapore, Türkiye, Azerbaijan, Indonesia, Vietnam, China, Hong Kong, Sri Lanka and more, plus file processing for Schengen countries, the UK, USA, Canada and Australia.' },
    { question: 'Do you guarantee visa approval?', answer: 'No. Decisions are made only by embassies and immigration authorities. We make sure your file is complete and well prepared, which reduces avoidable refusals.' },
    { question: 'How long does visa processing take?', answer: 'It depends on the country and season, from a few working days for some e-visas to several weeks for Schengen, UK or US visas. Apply well before your travel date.' },
    { question: 'Do I need a flight ticket before applying?', answer: 'Most embassies need a flight reservation, not a paid ticket. We provide reservations and issue the actual ticket once the visa is approved.' },
    { question: 'Is travel insurance required?', answer: 'Yes for Schengen visas (minimum €30,000 medical cover), and recommended for all trips. We arrange compliant insurance.' },
    { question: 'Can you help with Umrah visas?', answer: 'Yes. See our Umrah page for Umrah visas together with flights, hotels and transport.' },
    { question: 'What bank balance do I need?', answer: 'Embassies look for a steady history and enough funds for the trip rather than a fixed figure. We advise on your file before submission.' },
    { question: 'Can I apply if I was refused before?', answer: 'Yes, but you must declare the refusal and address the reasons in your new application. Share the refusal letter with us.' },
    { question: 'Do I need to visit your office?', answer: 'Not always. Many steps can be done on WhatsApp, but original documents may need to be submitted in person.' },
    { question: 'What is a drop-box agent?', answer: 'An agent authorised to accept visa applications on behalf of an embassy. O.S Travel & Tours lists drop-box authorisation for Malaysia, Indonesia, Thailand and Vietnam.' },
  ],
};

export default function VisaPage() {
  return <LandingPage data={data} />;
}
