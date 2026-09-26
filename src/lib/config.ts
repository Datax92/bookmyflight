// ============================================================
// BookMyFlight — Site Configuration
// All verified business information from O.S Travel & Tours
// ============================================================

export const siteConfig = {
  name: 'BookMyFlight',
  tagline: 'Your Journey. Our Expertise.',
  description:
    'BookMyFlight — Premium travel services powered by O.S Travel & Tours. Flights, Umrah packages, visa assistance, hotel reservations and personalized travel solutions.',
  url: 'https://bookmyflight.pk',

  // Parent company relationship
  parent: {
    name: 'O.S Travel & Tours',
    relationship: 'Powered by O.S Travel & Tours',
    website: 'https://ostravels.com',
  },

  // Verified contact information
  contact: {
    whatsapp: '+923335542877', // Verified WhatsApp from Facebook
    whatsappDisplay: '+92 333 5542877',
    whatsappSecondary: '+923345500277',
    phone: ['+92-51-2120700', '+92-51-2120701'],
    mobile: '+92-333-5542877',
    email: 'info@ostravels.com',
  },

  // Verified office address
  address: {
    street: 'Office # 3, Aaly Plaza, Fazal-e-Haq Rd',
    area: 'Block E, G-6/2, Blue Area',
    city: 'Islamabad',
    region: 'Islamabad Capital Territory',
    country: 'Pakistan',
    coordinates: { lat: 33.7178385, lng: 73.0733661 },
    googleMaps:
      'https://www.google.com/maps/place/O.S+Travel+%26+Tours/@33.7178385,73.0733661,17z',
  },

  // Verified business hours
  hours: {
    weekdays: '9:00 AM – 6:00 PM',
    saturday: '9:00 AM – 6:00 PM',
    sunday: 'Closed',
    days: 'Monday – Saturday',
  },

  // Verified social media
  social: {
    facebook: 'https://www.facebook.com/osconsultants01/',
    youtube: 'https://www.youtube.com/@obrehman84',
    twitter: 'https://twitter.com/ostravels',
  },

  // Brand colors
  colors: {
    primary: '#F5A623', // Verified from OS Travels theme-color
    charcoal: '#1a1a1a',
    champagne: '#C9A96E',
    gold: '#D4A947',
    ivory: '#FAF8F5',
  },
} as const;

// ============================================================
// Verified Services (from official website & SEO keywords)
// ============================================================
export const services = [
  {
    id: 'flights',
    title: 'Flight Booking',
    subtitle: 'Domestic & International',
    description:
      'Access competitive fares on domestic and international flights with personalized booking assistance from our experienced travel consultants.',
    icon: 'plane',
    whatsappCta: 'Get Flight Fare on WhatsApp',
    whatsappMessage: 'Hello BookMyFlight, I would like to get a flight quote.',
    href: '/flights',
    enabled: true,
  },
  {
    id: 'umrah',
    title: 'Umrah Packages',
    subtitle: 'Complete Umrah Solutions',
    description:
      'Comprehensive Umrah packages including visa processing, flights, hotel accommodations, and ground transportation arrangements.',
    icon: 'kaaba',
    whatsappCta: 'Discuss Your Umrah Package',
    whatsappMessage:
      'Hello BookMyFlight, I am interested in Umrah packages. Please share available options.',
    href: '/umrah',
    enabled: true,
  },
  {
    id: 'visa',
    title: 'Visa Assistance',
    subtitle: 'Global Visa Services',
    description:
      'Expert visa consultancy for US, UK, Canada, Schengen, and Asian countries including Malaysia, Singapore, Thailand, and Saudi Arabia.',
    icon: 'passport',
    whatsappCta: 'Talk to a Visa Expert',
    whatsappMessage:
      'Hello BookMyFlight, I need visa assistance. Please guide me through the process.',
    href: '/visa',
    enabled: true,
  },
  {
    id: 'hotels',
    title: 'Hotel Reservations',
    subtitle: 'Worldwide Accommodations',
    description:
      'Book the right accommodations worldwide with personalized recommendations from our travel team.',
    icon: 'hotel',
    whatsappCta: 'Get Hotel Rates on WhatsApp',
    whatsappMessage:
      'Hello BookMyFlight, I would like to book hotel accommodations.',
    href: '/hotels',
    enabled: true,
  },
  {
    id: 'holidays',
    title: 'Holiday Packages',
    subtitle: 'Curated Travel Experiences',
    description:
      'Discover carefully curated holiday packages to popular destinations with flights, hotels, and activities included.',
    icon: 'palmtree',
    whatsappCta: 'Plan My Holiday',
    whatsappMessage:
      'Hello BookMyFlight, I am interested in holiday packages. Please share available options.',
    href: '/holidays',
    enabled: true,
  },
  {
    id: 'insurance',
    title: 'Travel Insurance',
    subtitle: 'Travel With Confidence',
    description:
      'Comprehensive travel insurance coverage to protect your journey. Travel with peace of mind.',
    icon: 'shield',
    whatsappCta: 'Get Insurance Quote',
    whatsappMessage:
      'Hello BookMyFlight, I would like information about travel insurance options.',
    href: '/insurance',
    enabled: true,
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    subtitle: 'Business Travel Solutions',
    description:
      'Streamlined corporate travel management with dedicated support for businesses.',
    icon: 'briefcase',
    whatsappCta: 'Corporate Travel Inquiry',
    whatsappMessage:
      'Hello BookMyFlight, I would like to discuss corporate travel solutions.',
    href: '/corporate',
    enabled: false, // Not verified on official site
  },
  {
    id: 'group',
    title: 'Group Travel',
    subtitle: 'Travel Together',
    description:
      'Specialized group travel arrangements for families, friends, and organizations.',
    icon: 'users',
    whatsappCta: 'Plan Group Travel',
    whatsappMessage:
      'Hello BookMyFlight, I would like to arrange group travel.',
    href: '/group',
    enabled: false, // Not verified on official site
  },
] as const;

// ============================================================
// Featured Destinations
// ============================================================
export interface DestinationItem {
  id: string;
  name: string;
  country: string;
  description: string;
  travelType: string;
  image: string;
  flightTime: string;
  primaryAirports: string[];
  airlines: string[];
  bestSeason: string;
  visaType: string;
  tagline: string;
  highlights: string[];
  travelTips: string[];
  faqs: { question: string; answer: string }[];
}

export const destinations: DestinationItem[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    description: 'A dazzling fusion of modern luxury, world-class shopping, and Arabian heritage. The number-one international getaway for Pakistani travelers.',
    travelType: 'Leisure, Business & Transit',
    image: '/images/destinations/dubai.jpg',
    flightTime: 'Approx. 3h 15m to 3h 45m direct from Islamabad, Lahore, Karachi',
    primaryAirports: ['Dubai International (DXB)', 'Al Maktoum International (DWC)'],
    airlines: ['Emirates', 'Flydubai', 'Pakistan International Airlines (PIA)', 'Airblue'],
    bestSeason: 'November to March (Pleasant winter weather)',
    visaType: 'UAE Tourist Visa (30-day or 60-day e-Visa processed by our team)',
    tagline: 'Futuristic Architecture & Ultimate Arabian Luxury',
    highlights: [
      'Burj Khalifa, Dubai Mall & Dubai Fountain',
      'Palm Jumeirah luxury beach resorts & waterparks',
      'Desert Safari with dune bashing & bedouin dinners',
      'Traditional Gold & Spice Souks in Deira',
      'Museum of the Future & Dubai Frame',
    ],
    travelTips: [
      'Book flights 3 to 5 weeks in advance, especially during December-January peak and Dubai Shopping Festival.',
      'Metro and Careem/Uber make getting around Dubai convenient and budget-friendly.',
      'Ensure your passport has at least 6 months validity from departure date.',
    ],
    faqs: [
      {
        question: 'Which Pakistani cities have direct flights to Dubai?',
        answer: 'Direct flights operate daily to Dubai from Islamabad (ISB), Lahore (LHE), Karachi (KHI), Peshawar (PEW), Multan (MUX), Faisalabad (LYP), and Sialkot (SKT) via Emirates, Flydubai, PIA, and Airblue.',
      },
      {
        question: 'Can BookMyFlight arrange UAE tourist visas?',
        answer: 'Yes, our visa consultancy team at O.S Travel & Tours processes 30-day and 60-day UAE tourist e-visas with minimal document requirements directly on WhatsApp.',
      },
      {
        question: 'What is the cheapest time to fly from Pakistan to Dubai?',
        answer: 'Fares are typically most affordable between May and September (summer season) and during mid-week departures in February and October.',
      },
    ],
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    description: 'Where Europe and Asia meet across the Bosphorus Strait — a mesmerizing blend of imperial Ottoman history, vibrant bazaars, and scenic cruises.',
    travelType: 'Culture, History & Scenic City Breaks',
    image: '/images/destinations/istanbul.jpg',
    flightTime: 'Approx. 5h 30m to 6h direct from Islamabad, Lahore, Karachi',
    primaryAirports: ['Istanbul Airport (IST)', 'Sabiha Gökçen Airport (SAW)'],
    airlines: ['Turkish Airlines', 'PIA', 'Pegasus Airlines'],
    bestSeason: 'April to May (Spring) and September to November (Autumn)',
    visaType: 'Turkish Sticker Visa or e-Visa (for valid US/UK/Schengen visa holders)',
    tagline: 'Bridging Continents, Empires & Timeless Charm',
    highlights: [
      'Hagia Sophia & the Blue Mosque (Sultanahmet)',
      'Topkapi Palace and Basilica Cistern',
      'Sunset Bosphorus cruise between Europe and Asia',
      'Grand Bazaar & Spice Bazaar shopping',
      'Galata Tower, Taksim Square & Istiklal Avenue',
    ],
    travelTips: [
      'Pakistani passport holders with valid US, UK, or Schengen visas can apply for an instant Turkish e-Visa online.',
      'Get an Istanbulkart card for public trams, ferries, and metro.',
      'Combine Istanbul with Cappadocia or Antalya for a complete holiday experience.',
    ],
    faqs: [
      {
        question: 'Are there direct flights from Pakistan to Istanbul?',
        answer: 'Yes, Turkish Airlines and PIA operate direct flights to Istanbul from Islamabad, Lahore, and Karachi, with convenient baggage allowances.',
      },
      {
        question: 'What documents are required for a Turkey visit visa from Pakistan?',
        answer: 'Standard requirements include passport, bank statement (last 6 months), employment/business letter, tax returns, travel insurance, and hotel/flight reservations. Our team assists with complete file preparation.',
      },
    ],
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    description: 'A global capital of culture, royalty, history, and education. A premier destination for Pakistani travelers visiting family, business, or leisure.',
    travelType: 'Family Visits, Business & Global Culture',
    image: '/images/destinations/london.jpg',
    flightTime: 'Approx. 8h to 8h 30m direct from Islamabad, or one-stop via GCC carriers',
    primaryAirports: ['London Heathrow (LHR)', 'London Gatwick (LGW)', 'London Stansted (STN)'],
    airlines: ['British Airways', 'PIA (subject to schedule)', 'Emirates', 'Qatar Airways', 'Gulf Air'],
    bestSeason: 'May to September (Warm summer days and long daylight hours)',
    visaType: 'UK Standard Visitor Visa (6-month, 2-year, or 5-year multiple entry)',
    tagline: 'World-Renowned Landmarks & Cosmopolitan Heritage',
    highlights: [
      'Big Ben, Westminster Abbey & Houses of Parliament',
      'Tower Bridge & the Tower of London',
      'Buckingham Palace & Hyde Park',
      'World-class shopping on Oxford Street, Harrods & Westfield',
      'Free entry to British Museum & Natural History Museum',
    ],
    travelTips: [
      'Book flights 6 to 10 weeks in advance for summer travel (June-August) to secure reasonable fares.',
      'UK tourist visa processing can take 3 to 6 weeks, so start your visa process well ahead of travel dates.',
      'Use contactless debit/credit cards or Oyster cards for the London Underground Tube.',
    ],
    faqs: [
      {
        question: 'Which airlines offer the best connections to London from Islamabad and Lahore?',
        answer: 'Emirates, Qatar Airways, Etihad, Turkish Airlines, and Gulf Air offer excellent daily one-stop connections to London Heathrow and Gatwick with smooth baggage transfer.',
      },
      {
        question: 'How much baggage is allowed on UK flights from Pakistan?',
        answer: 'Most international carriers offer 2 checked bags (23kg each) in Economy, while Business Class typically allows 2 bags (32kg each). Our consultants confirm exact luggage rules before booking.',
      },
    ],
  },
  {
    id: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    description: 'Vibrant street life, ornate Buddhist shrines, world-famous tropical night markets, and warm Thai hospitality make Bangkok a family favorite.',
    travelType: 'Leisure, Family Holidays & Shopping',
    image: '/images/destinations/bangkok.jpg',
    flightTime: 'Approx. 4h 45m to 5h 30m direct from Islamabad, Lahore, Karachi',
    primaryAirports: ['Suvarnabhumi Airport (BKK)', 'Don Mueang International (DMK)'],
    airlines: ['Thai Airways', 'PIA', 'Malindo Air / Batik Air'],
    bestSeason: 'November to February (Cooler, dry winter season)',
    visaType: 'Thailand Sticker Visa (processed via Royal Thai Embassy / authorized centers)',
    tagline: 'Golden Temples, Exotic Markets & Tropical Warmth',
    highlights: [
      'Grand Palace & Wat Phra Kaew (Temple of Emerald Buddha)',
      'Wat Arun (Temple of Dawn) along the Chao Phraya River',
      'Chatuchak Weekend Market & Pratunam wholesale shopping',
      'Day trip to Pattaya coral islands or floating markets',
      'Famous street food and riverboat dinner cruises',
    ],
    travelTips: [
      'Thailand visa processing takes 5-7 working days; submit clean 6-month bank statements.',
      'Pack light, breathable cotton clothing and modest attire when visiting holy temples.',
      'BTS Skytrain and MRT subway are the fastest ways to beat Bangkok traffic.',
    ],
    faqs: [
      {
        question: 'Are there direct flights from Pakistan to Bangkok?',
        answer: 'Thai Airways operates direct flights connecting Islamabad, Lahore, and Karachi to Bangkok Suvarnabhumi Airport.',
      },
      {
        question: 'Can I combine Bangkok with Phuket or Krabi?',
        answer: 'Yes! Domestic flights in Thailand (Bangkok to Phuket/Krabi) take only 1 hour and our team can bundle domestic hops into your itinerary.',
      },
    ],
  },
  {
    id: 'kuala-lumpur',
    name: 'Kuala Lumpur',
    country: 'Malaysia',
    description: 'A multicultural Southeast Asian metropolis of soaring steel towers, lush rainforest parks, family theme parks, and halal-friendly dining everywhere.',
    travelType: 'Family Holidays, Halal Travel & Shopping',
    image: '/images/destinations/kuala-lumpur.jpg',
    flightTime: 'Approx. 5h 30m to 6h direct from Islamabad, Lahore, Karachi',
    primaryAirports: ['Kuala Lumpur International Airport (KLIA / KLIA2)'],
    airlines: ['Malaysia Airlines', 'Batik Air', 'PIA'],
    bestSeason: 'Year-round tropical climate (May to July & December to February are especially popular)',
    visaType: 'Malaysia e-Visa / eVisa for Pakistani citizens',
    tagline: 'Halal-Friendly Southeast Asian Marvel',
    highlights: [
      'Petronas Twin Towers & KLCC Skybridge',
      'Batu Caves limestone caverns and giant golden statue',
      'Genting Highlands mountain cable car & outdoor theme park',
      'Bukit Bintang shopping and food district',
      'Sunway Lagoon mega theme park for families',
    ],
    travelTips: [
      'Malaysia is 100% halal-friendly, with prayer rooms in all major malls and attractions.',
      'Malaysia eVisa can be approved within 2 to 4 working days with verified hotel and flight reservations.',
      'Grab app is widely used for reliable, low-cost car rides across Kuala Lumpur.',
    ],
    faqs: [
      {
        question: 'How easy is it to get a Malaysia visa from Pakistan?',
        answer: 'Pakistani passport holders can obtain an official Malaysia eVisa online with proof of funds, return flight confirmation, and hotel booking. BookMyFlight handles complete filing.',
      },
      {
        question: 'Which airlines fly directly from Pakistan to KL?',
        answer: 'Malaysia Airlines and Batik Air offer direct flights from Islamabad, Lahore, and Karachi to KLIA.',
      },
    ],
  },
  {
    id: 'riyadh',
    name: 'Riyadh',
    country: 'Saudi Arabia',
    description: 'The dynamic capital of Saudi Arabia, blending towering modern skyscrapers, luxury dining, global entertainment events (Riyadh Season), and historic Najdi roots.',
    travelType: 'Business, Tourism & Transit',
    image: '/images/destinations/riyadh.jpg',
    flightTime: 'Approx. 4h 15m to 4h 45m direct from Islamabad, Lahore, Karachi',
    primaryAirports: ['King Khalid International Airport (RUH)'],
    airlines: ['Saudia', 'Flynas', 'PIA', 'Airblue', 'Serene Air'],
    bestSeason: 'October to March (Pleasant cool desert winter)',
    visaType: 'Saudi Tourist e-Visa / Visa on Arrival (for US/UK/Schengen holders) or Umrah/Business visa',
    tagline: 'The Modern Epicenter of Arabian Transformation',
    highlights: [
      'Kingdom Centre Sky Bridge with panoramic city views',
      'Historical Diriyah (At-Turaif UNESCO World Heritage site)',
      'Boulevard City and Riyadh Season mega entertainment zones',
      'Al Masmak Fortress in the historic downtown district',
      'Edge of the World (Jebel Fihrayn) dramatic cliff desert tour',
    ],
    travelTips: [
      'Riyadh Season (winter months) features world-class sports, music, and food festivals.',
      'Riyadh Metro and Uber/Careem provide smooth citywide transit.',
      'Dress code is respectful and modest; casual Western clothing is widely accepted.',
    ],
    faqs: [
      {
        question: 'Which airlines operate direct flights to Riyadh from Pakistan?',
        answer: 'Saudia, Flynas, PIA, and Airblue operate multiple direct flights weekly from Islamabad, Lahore, Karachi, and Peshawar to Riyadh.',
      },
      {
        question: 'Can Pakistani travelers visit Riyadh on a tourist visa?',
        answer: 'Yes! Pakistanis holding a valid, used US, UK, or Schengen visa can obtain a Saudi Tourist eVisa or visa on arrival. Other travelers can apply through our travel consultancy.',
      },
    ],
  },
  {
    id: 'jeddah',
    name: 'Jeddah',
    country: 'Saudi Arabia',
    description: 'The Bride of the Red Sea — gateway to Makkah, historic Al-Balad coral architecture, coastal corniche promenades, and deep scuba diving waters.',
    travelType: 'Umrah Gateway, Coastal Leisure & Heritage',
    image: '/images/destinations/jeddah.jpg',
    flightTime: 'Approx. 4h 30m to 5h 15m direct from Islamabad, Lahore, Karachi, Multan',
    primaryAirports: ['King Abdulaziz International Airport (JED)'],
    airlines: ['Saudia', 'Flynas', 'PIA', 'Airblue', 'AirSial', 'Serene Air'],
    bestSeason: 'November to April (Moderate coastal climate)',
    visaType: 'Saudi Umrah Visa, Tourist Visa, or Transit Visa',
    tagline: 'Coastal Charm & Gateway to the Holy Cities',
    highlights: [
      'Historic Al-Balad UNESCO World Heritage district with ancient wooden balconies',
      'Jeddah Corniche & King Fahd Fountain (tallest in the world)',
      'Haramain High-Speed Railway to Makkah and Madinah',
      'Red Sea Mall & Mall of Arabia luxury shopping',
      'Red Sea boat cruises and coral reef diving',
    ],
    travelTips: [
      'The new King Abdulaziz International Airport terminal has a high-speed train station taking pilgrims directly to Makkah in 54 minutes.',
      'Haramain High-Speed Train tickets can be booked through our travel consultants.',
      'Jeddah is known for exceptional fresh seafood restaurants along the corniche.',
    ],
    faqs: [
      {
        question: 'How do I travel from Jeddah Airport to Makkah?',
        answer: 'You can take the ultra-fast Haramain High-Speed Railway directly from the airport terminal to Makkah (under 1 hour), or utilize our pre-arranged private GMC/bus transfers.',
      },
      {
        question: 'How many flights fly to Jeddah daily from Pakistan?',
        answer: 'Jeddah is one of the highest-frequency international routes from Pakistan, with multiple daily direct flights from Islamabad, Lahore, Karachi, Peshawar, Multan, and Sialkot.',
      },
    ],
  },
  {
    id: 'doha',
    name: 'Doha',
    country: 'Qatar',
    description: 'A glittering waterfront capital showcasing cutting-edge Islamic art, luxury Corniche promenades, desert dunes meeting the sea, and five-star Arabian hospitality.',
    travelType: 'Luxury Leisure, Business & Global Transit',
    image: '/images/destinations/doha.jpg',
    flightTime: 'Approx. 3h 45m to 4h 15m direct from Islamabad, Lahore, Karachi',
    primaryAirports: ['Hamad International Airport (DOH)'],
    airlines: ['Qatar Airways', 'PIA'],
    bestSeason: 'November to April (Pleasant sunny days and cool evenings)',
    visaType: 'Qatar Visa on Arrival / Hayya Portal Visa (free 30-day entry for Pakistani travelers meeting requirements)',
    tagline: 'Architectural Splendor on the Arabian Gulf',
    highlights: [
      'Museum of Islamic Art designed by I.M. Pei',
      'Souq Waqif traditional market with spices, falcon souk & cafes',
      'Doha Corniche with dhow boat cruises against the West Bay skyline',
      'The Pearl-Qatar luxury Mediterranean-style island development',
      'Katara Cultural Village with amphitheater and beach promenade',
    ],
    travelTips: [
      'Hamad International Airport is rated among the best in the world, with seamless transit connections worldwide.',
      'Pakistani passport holders often qualify for Visa on Arrival with confirmed return ticket and hotel via Discover Qatar.',
      'The modern Doha Metro connects airport, souqs, museums, and malls effortlessly.',
    ],
    faqs: [
      {
        question: 'Can Pakistani passport holders get Visa on Arrival in Qatar?',
        answer: 'Yes, Pakistani citizens can obtain a 30-day Visa on Arrival provided they have a valid passport (6+ months), return ticket, and hotel booking booked via Discover Qatar.',
      },
      {
        question: 'How many daily flights are there between Pakistan and Doha?',
        answer: 'Qatar Airways operates frequent daily widebody flights connecting Islamabad, Lahore, Karachi, and Peshawar to Doha.',
      },
    ],
  },
  {
    id: 'baku',
    name: 'Baku',
    country: 'Azerbaijan',
    description: 'The City of Winds on the Caspian Sea — combining futuristic Flame Towers with medieval walled fortress streets, budget-friendly European flair, and welcoming culture.',
    travelType: 'Budget European-Style Holiday, Culture & Leisure',
    image: '/images/destinations/baku.jpg',
    flightTime: 'Approx. 3h 45m direct from Islamabad, Lahore, Karachi',
    primaryAirports: ['Heydar Aliyev International Airport (GYD)'],
    airlines: ['Azerbaijan Airlines (AZAL)', 'PIA'],
    bestSeason: 'April to June (Spring) and September to November (Autumn)',
    visaType: 'Azerbaijan ASAN e-Visa (3-day processing online)',
    tagline: 'Where Caspian Breeze Meets Fire Architecture',
    highlights: [
      'Flame Towers illumination and Highland Park viewpoint',
      'Icherisheher (Old Walled City) & Maiden Tower',
      'Heydar Aliyev Center designed by Zaha Hadid',
      'Baku Boulevard Caspian Sea seaside promenade',
      'Day trip to Gobustan mud volcanoes & Yanar Dag (Burning Mountain)',
    ],
    travelTips: [
      'Azerbaijan ASAN e-Visa costs only around $26 and takes 3 business days to approve.',
      'Baku offers exceptional value for Pakistani families with high quality dining and accommodation at affordable rates.',
      'Shahdag mountain resort is a great winter day trip for snow and skiing.',
    ],
    faqs: [
      {
        question: 'Are there direct flights from Pakistan to Baku?',
        answer: 'Yes! Azerbaijan Airlines (AZAL) and PIA operate direct flights from Islamabad, Lahore, and Karachi directly to Baku in under 4 hours.',
      },
      {
        question: 'How easy is the Azerbaijan visa for Pakistanis?',
        answer: 'It is one of the easiest visas — processed online via the ASAN Visa portal with just a passport scan, approved within 3 working days.',
      },
    ],
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light — celebrated for world-class haute cuisine, iconic architecture, romantic Seine riverbanks, the Louvre, and timeless Parisian grandeur.',
    travelType: 'Romance, Culture, Art & Fashion',
    image: '/images/destinations/paris.jpg',
    flightTime: 'Approx. 9h to 10h (one-stop via GCC carriers from Islamabad, Lahore, Karachi)',
    primaryAirports: ['Charles de Gaulle (CDG)', 'Orly Airport (ORY)'],
    airlines: ['Emirates', 'Qatar Airways', 'Turkish Airlines', 'Gulf Air', 'Saudia'],
    bestSeason: 'April to June (Spring) and September to October (Autumn)',
    visaType: 'Schengen Visa (France Short-Stay Category C Visa)',
    tagline: 'Timeless Elegance, World-Class Art & Grand Boulevards',
    highlights: [
      'Eiffel Tower & Champ de Mars park views',
      'Louvre Museum and Mona Lisa gallery',
      'Notre-Dame Cathedral & Seine River cruise',
      'Champs-Élysées & Arc de Triomphe shopping boulevard',
      'Palace of Versailles royal gardens day trip',
    ],
    travelTips: [
      'Apply for your French Schengen visa at least 6 to 8 weeks before your travel dates.',
      'Comfortable walking shoes are essential as Paris is best explored on foot and by Metro.',
      'Purchase skip-the-line museum tickets in advance for the Eiffel Tower and Louvre.',
    ],
    faqs: [
      {
        question: 'Which airlines offer the best connections to Paris from Pakistan?',
        answer: 'Emirates, Qatar Airways, Turkish Airlines, and Gulf Air provide daily seamless connections to Paris Charles de Gaulle with luggage checked all the way through.',
      },
      {
        question: 'Does BookMyFlight assist with French Schengen visa appointments?',
        answer: 'Yes, our visa consultancy team at O.S Travel & Tours prepares full document files, itinerary plans, hotel reservations, and travel insurance required for French Schengen visa submissions.',
      },
    ],
  },
  {
    id: 'makkah',
    name: 'Makkah',
    country: 'Saudi Arabia',
    description: 'The holy sanctuary of Islam — home to the Holy Kaaba and Masjid al-Haram. A life-transforming pilgrimage journey for every believer.',
    travelType: 'Umrah & Spiritual Pilgrimage',
    image: '/images/destinations/makkah.jpg',
    flightTime: 'Approx. 4h 30m direct to Jeddah (JED), then 54m via high-speed train or 1h 15m private road transfer',
    primaryAirports: ['King Abdulaziz International Airport Jeddah (JED)', 'Taif Regional Airport (TIF)'],
    airlines: ['Saudia', 'Flynas', 'PIA', 'Airblue', 'AirSial', 'Serene Air'],
    bestSeason: 'Year-round spiritual journey; cooler months are October to March; Ramadan is peak season',
    visaType: 'Saudi Umrah e-Visa (handled end-to-end by our team)',
    tagline: 'The Sacred Center of Faith & Pilgrimage',
    highlights: [
      'Masjid al-Haram & the Holy Kaaba',
      'Tawaf and Saee in the air-conditioned expansions',
      'Ziyarat to Jabal al-Nour (Cave of Hira) & Jabal Thawr',
      'Plaza clock tower luxury hotels with Haram-facing suites',
      'Haramain High-Speed Train connection to Madinah in 2 hours',
    ],
    travelTips: [
      'Choose markazia hotels within walking distance of the Haram courtyard for the easiest access for elders and children.',
      'Our team coordinates private GMC transfers directly from Jeddah airport to your Makkah hotel door.',
      'Download the Nusuk app for your official Umrah and Rawdah prayer permits.',
    ],
    faqs: [
      {
        question: 'What is included in BookMyFlight Umrah packages?',
        answer: 'Our packages include verified Umrah visas, return flight tickets, approved Makkah and Madinah hotel accommodations, ground transfers, and dedicated consultant support.',
      },
      {
        question: 'Can I customize my Umrah package duration and hotel choice?',
        answer: 'Absolutely. Every Umrah package can be customized to your preferred dates, hotel proximity to the Haram, airline choice, and family room configuration on WhatsApp.',
      },
    ],
  },
];

// ============================================================
// Navigation Items
// ============================================================
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Flights', href: '/flights' },
  { label: 'Cheap Flights', href: '/cheap-flights' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Umrah', href: '/umrah' },
  { label: 'Holidays', href: '/holidays' },
  { label: 'Visa', href: '/visa' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
