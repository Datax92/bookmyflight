// Photo credits for Creative Commons images (sourced via Openverse / Wikimedia Commons).
// CC BY licences require attribution; CC0 and public-domain images are credited as a courtesy.

export interface ImageCredit {
  file: string;
  title: string;
  creator: string;
  license: string;
  licenseUrl: string;
  source: string;
}

export const imageCredits: ImageCredit[] = [
  { file: '/images/destinations/abu-dhabi.jpg', title: 'Abu Dhabi Corniche skyline (panoramio)', creator: 'giggel', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=59199161' },
  { file: '/images/destinations/bahrain.jpg', title: 'Bahrain Fort 8', creator: 'Peter from Riyadh, Saudi Arabia', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=5812918' },
  { file: '/images/destinations/beijing.jpg', title: 'Great Wall of China at Juyongguan', creator: 'Anagoria', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=49571711' },
  { file: '/images/destinations/colombo.jpg', title: 'Colombo Sri Lanka Railway – Train SLR Class S3', creator: 'Joost J. Bakker from IJmuiden', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=16086055' },
  { file: '/images/destinations/dammam.jpg', title: 'Dammam Corniche (2)', creator: 'Radosław Botev', license: 'CC BY 3.0 PL', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/pl/deed.en', source: 'https://commons.wikimedia.org/w/index.php?curid=151321966' },
  { file: '/images/destinations/madinah.jpg', title: "Al-Masjid An-Nabawi (Bird's Eye View)", creator: 'Konevi', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en', source: 'https://commons.wikimedia.org/w/index.php?curid=72639794' },
  { file: '/images/destinations/male.jpg', title: 'Sun Island Resort, Alif Dhaal Atoll, Maldives', creator: 'Syd Sujuaan', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en', source: 'https://commons.wikimedia.org/w/index.php?curid=61757145' },
  { file: '/images/destinations/manchester.jpg', title: 'Piccadilly Basin arch, Manchester city centre', creator: 'Ridiculopathy', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en', source: 'https://commons.wikimedia.org/w/index.php?curid=162849907' },
  { file: '/images/destinations/muscat.jpg', title: 'Sultan Qaboos Grand Mosque', creator: 'Riyadh Al Balushi', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=87353896' },
  { file: '/images/destinations/new-york.jpg', title: 'Midtown Manhattan Skyline seen from Wall Street', creator: 'David Shankbone', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=6238687' },
  { file: '/images/destinations/sharjah.jpg', title: 'Al Majaz, Downtown Sharjah, United Arab Emirates, 2012', creator: 'VarunRajendran', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=194086243' },
  { file: '/images/destinations/tashkent.jpg', title: 'Hazrati Imam Mosque 01', creator: 'Bgag', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en', source: 'https://commons.wikimedia.org/w/index.php?curid=141832727' },
  { file: '/images/destinations/tbilisi.jpg', title: 'Tbilisi Old town (Vakhtang Gorgasali Square)', creator: 'Jelger Groeneveld', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=112319064' },
  { file: '/images/destinations/toronto.jpg', title: 'Toronto Skyline 2017', creator: 'Open Grid Scheduler / Grid Engine', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en', source: 'https://commons.wikimedia.org/w/index.php?curid=90555517' },
  { file: '/images/blog/cheapest-months.jpg', title: 'Sunset sky view from an airplane', creator: 'U.S. Department of State', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://www.rawpixel.com/image/4042484/photo-image-background-cloud-sky' },
  { file: '/images/blog/fare-families.jpg', title: 'Upper deck cabin, Boeing 747', creator: 'Ricardobtg from Mexico', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=36971969' },
  { file: '/images/blog/low-cost-airlines.jpg', title: 'Matsuyama Airport (MYJ) 2', creator: 'Jyo81', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=13286095' },
  { file: '/images/blog/check-in.jpg', title: 'Athens International Airport check-in desks', creator: 'Leonid Mamchenkov', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=5065269' },
  { file: '/images/blog/refunds.jpg', title: 'Airport departures board, Melbourne Airport', creator: 'Marek Ślusarczyk (Tupungato)', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/', source: 'https://commons.wikimedia.org/w/index.php?curid=126439379' },
  { file: '/images/blog/reissue.jpg', title: 'Brasília International Airport check-in counters', creator: 'Antonio Cruz/ABr', license: 'CC BY 3.0 BR', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/br/deed.en', source: 'https://commons.wikimedia.org/w/index.php?curid=2478068' },
  { file: '/images/blog/heathrow.jpg', title: 'Heathrow Airport 010', creator: 'Panhard', license: 'CC BY 2.5', licenseUrl: 'https://creativecommons.org/licenses/by/2.5/', source: 'https://commons.wikimedia.org/w/index.php?curid=9723042' },
  { file: '/images/blog/masjid-nabawi.jpg', title: 'Masjid Al Nabawi', creator: 'Shahid Siddiqi from Karachi, Pakistan', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en', source: 'https://commons.wikimedia.org/w/index.php?curid=42178279' },
  { file: '/images/blog/passport-visa.jpg', title: 'Passport – Australian, Esma Banner, 1950', creator: 'Museums Victoria', license: 'Public Domain Mark 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/', source: 'https://collections.museumsvictoria.com.au/items/1967155' },
  { file: '/images/blog/airport-terminal.jpg', title: 'Toronto Airport Terminal 1 travellers', creator: 'Raysonho @ Open Grid Scheduler', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en', source: 'https://commons.wikimedia.org/w/index.php?curid=88722317' },
  { file: '/images/airlines/fleet-hero.jpg', title: 'Commercial airliner in flight at sunrise', creator: 'BookMyFlight Aviation Assets', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://bookmyflight.pk' },
];
