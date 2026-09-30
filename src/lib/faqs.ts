// ============================================================
// Page FAQs (keyword-rich, used for on-page accordions + FAQPage schema)
// ============================================================
import type { Faq } from '@/components/sections/FaqSection';

export const homeFaqs: Faq[] = [
  {
    question: 'How does BookMyFlight work?',
    answer:
      'Enter where you are flying from, where you want to go, your dates and the number of travellers, then press Search. Your request goes straight to the air ticketing team at O.S Travel & Tours, who check live fares across the airline systems (Amadeus and Sabre GDS plus airline-direct inventory) and send you the cheapest suitable options on WhatsApp during office hours (Monday to Saturday, 9:00 AM – 6:00 PM).\n\nOnce you choose a flight, we hold the seat, confirm the fare rules with you and issue an official airline e-ticket.',
  },
  {
    question: 'How can I find the cheapest flights from Pakistan?',
    answer:
      'Be flexible by a few days, fly mid-week (Tuesday and Wednesday departures are usually cheaper), and book international tickets 4 to 8 weeks ahead. Avoid the peak weeks around Eid ul-Fitr, Eid ul-Adha, the June–August school holidays and late December.\n\nOne-stop itineraries via Dubai, Doha, Abu Dhabi, Muscat or Bahrain are often cheaper than non-stop flights to Europe and North America. Our airline pages show the cheap, average and expensive months for each carrier.',
  },
  {
    question: 'Which airlines fly from Islamabad, Lahore and Karachi?',
    answer:
      'Pakistani carriers PIA, Airblue, AirSial and Fly Jinnah fly domestic and Gulf routes. International airlines serving Pakistan include Emirates, flydubai, Qatar Airways, Etihad, Air Arabia, Saudia, flynas, flyadeal, Turkish Airlines, Oman Air, Gulf Air, SalamAir, Thai Airways and British Airways. Schedules differ by city, so check each airline page for the Pakistani airports it serves.',
  },
  {
    question: 'Is BookMyFlight an airline or a travel agent?',
    answer:
      'BookMyFlight is the online flight desk of O.S Travel & Tours, a government-licensed travel agency in Blue Area, Islamabad. We do not operate flights; we issue tickets on scheduled airlines. Every booking has an airline PNR that you can check on the airline’s own “Manage booking” page.',
  },
  {
    question: 'Are the fares on BookMyFlight live prices?',
    answer:
      'Air fares change by the minute, so we quote live prices only when you send a search. The cheap, average and expensive season bands on our airline pages are based on typical demand patterns from Pakistan and help you choose better dates. The price in your quote is the price in the airline system at that moment.',
  },
  {
    question: 'How do I pay for my air ticket?',
    answer:
      'Your consultant confirms the fare, baggage and payment options before anything is issued. Tickets are issued only after payment is received, and you receive the e-ticket and a receipt immediately afterwards. We never ask for card details over WhatsApp.',
  },
  {
    question: 'What happens after my flight is booked?',
    answer:
      'You receive your e-ticket (PDF) on WhatsApp or email with the airline PNR and ticket number. Verify it on the airline website, complete online check-in when it opens (usually 24 to 48 hours before departure), and reach the airport at least 3 hours before an international flight from Pakistan.',
  },
  {
    question: 'Can I cancel my ticket or get a refund?',
    answer:
      'Refunds depend on the fare rules of the ticket you bought. Flexible fares are refundable with a small fee or none, while saver and promotional fares are often non-refundable except for taxes. The airline’s penalty is deducted and the balance is returned once the airline approves the refund. Each airline page on BookMyFlight explains its refund rules.',
  },
  {
    question: 'What is a ticket reissue or date change?',
    answer:
      'A reissue changes the date, time or route of an existing ticket. You pay the airline’s change fee (if any) plus any fare difference between the old and the new flight. Changes must usually be made before the original departure time, otherwise the ticket may be treated as a no-show.',
  },
  {
    question: 'Do you book Umrah flights and group tickets?',
    answer:
      'Yes. We book Umrah flights to Jeddah and Madinah on Saudia, PIA, Airblue, AirSial, Fly Jinnah, flynas and flyadeal, along with complete Umrah packages with visa, hotels and transport. Family and group bookings of 10 or more travellers can get group fares on request.',
  },
  {
    question: 'Can I book a hotel with my flight?',
    answer:
      'Yes. Tick “Add a place to stay” in the search form and our team will add hotel options for your destination and dates to your flight quote, from budget stays to hotels near the Haram in Makkah and Madinah.',
  },
  {
    question: 'Is O.S Travel & Tours a licensed and IATA-accredited agency?',
    answer:
      'O.S Travel & Tours is listed in the Government of Pakistan Department of Tourist Services (DTS) registry (Islamabad listing #402), is a registered FBR taxpayer and SECP-registered business, and issues tickets through the Amadeus and Sabre GDS as an IATA-accredited agent. See our Partners page for the full credentials.',
  },
];

export const airlinesFaqs: Faq[] = [
  {
    question: 'Which airlines fly from Pakistan?',
    answer:
      'Pakistani airlines PIA, Airblue, AirSial and Fly Jinnah operate domestic and international flights. Foreign airlines serving Pakistan include Emirates, flydubai, Qatar Airways, Etihad, Air Arabia, Saudia, flynas, flyadeal, Turkish Airlines, Oman Air, Gulf Air, Thai Airways, British Airways and SalamAir, plus regional carriers such as Azerbaijan Airlines and China Southern.',
  },
  {
    question: 'Which airline is cheapest from Pakistan to Dubai?',
    answer:
      'On Dubai routes the low-cost carriers flydubai and Air Arabia (to Sharjah), as well as Fly Jinnah and Airblue, often have the lowest base fares, but their cheapest fares exclude checked baggage. Once you add a 20–30 kg bag, Emirates Saver or PIA can be similar in price. We compare all of them for your dates.',
  },
  {
    question: 'Which airline is best for Umrah flights from Pakistan?',
    answer:
      'Saudia, PIA, Airblue, AirSial, Fly Jinnah, flynas and flyadeal fly direct to Jeddah, Madinah or Riyadh. Direct flights to Jeddah or Madinah with a checked-bag fare (for Zamzam water and luggage) are usually the most practical choice for Umrah families.',
  },
  {
    question: 'Which airlines fly from Pakistan to the UK?',
    answer:
      'PIA flies non-stop from Lahore and Islamabad to London Heathrow and Manchester, and British Airways flies Islamabad–London Gatwick non-stop. One-stop options include Emirates, Qatar Airways, Etihad, Turkish Airlines, Gulf Air and Oman Air.',
  },
  {
    question: 'What is the difference between a refund and a reissue?',
    answer:
      'A refund cancels your ticket and returns the refundable amount, after airline penalties, to you or as airline credit. A reissue keeps the ticket but changes the date, time or route; you pay the change fee plus any fare difference.',
  },
  {
    question: 'Why do low-cost airlines refund as credit instead of cash?',
    answer:
      'Carriers such as flydubai, Air Arabia, Fly Jinnah, flynas and flyadeal return cancellations as a travel voucher or wallet credit on many fares. Some fares let you choose a cash refund for a higher fee. Always check whether a fare is cash-refundable before booking.',
  },
  {
    question: 'How do airline fare types (fare families) work?',
    answer:
      'Most airlines sell the same seat at several fare types, for example Emirates Special, Saver, Flex and Flex Plus. Cheaper types carry less baggage and stricter change and refund rules; more expensive types add baggage, free seat selection and free changes.',
  },
  {
    question: 'Which months are cheapest to fly from Pakistan?',
    answer:
      'For Gulf and Europe routes, September to November and February are usually the cheapest months. Saudi routes are cheaper in July, August, October and November. Fares peak around Eid ul-Fitr, Eid ul-Adha, June–August and December.',
  },
  {
    question: 'Do all airlines include checked baggage from Pakistan?',
    answer:
      'No. Many basic fares, including flydubai Lite, Air Arabia Basic, Airblue Value, flynas Light and British Airways Basic, include only hand baggage. Full-service fares usually include 20–35 kg. Check the fare-type table on each airline page.',
  },
  {
    question: 'Can BookMyFlight book any airline?',
    answer:
      'Yes. As a GDS-connected agency (Amadeus and Sabre), O.S Travel & Tours can issue tickets on most scheduled airlines, including interline and multi-airline itineraries, as well as low-cost carriers through their agency channels.',
  },
  {
    question: 'Are airline refund rules on BookMyFlight up to date?',
    answer:
      'Each airline page lists the official airline sources and the date we last checked them. Airlines can change rules without notice, so the conditions printed on your ticket and confirmed in your quote always take priority.',
  },
  {
    question: 'Can I combine two airlines on one ticket?',
    answer:
      'Often, yes. Codeshare and interline partners such as Emirates and flydubai, or Qatar Airways with oneworld partners, can be combined on one ticket with baggage checked through. Separate tickets on low-cost airlines are cheaper but not protected if you miss a connection.',
  },
];

export const ticketingFaqs: Faq[] = [
  {
    question: 'What is air ticketing?',
    answer:
      'Air ticketing is the process of reserving a seat on a flight (creating a PNR, or booking reference) and then issuing an electronic ticket with a 13-digit ticket number once the fare is paid. Only an issued e-ticket guarantees your seat; a reservation on hold can be cancelled by the airline when its time limit expires.',
  },
  {
    question: 'How do I book an air ticket with BookMyFlight?',
    answer:
      'Search your route and dates on BookMyFlight or message us on WhatsApp. Our O.S Travel & Tours ticketing team sends you the best options, holds your chosen flight, confirms the passenger names against passports and issues the e-ticket after payment.',
  },
  {
    question: 'Can you hold a seat before I pay?',
    answer:
      'Yes. For most airlines we can create a reservation and hold the fare for a limited time, anywhere from a few hours to a couple of days depending on the airline, fare and how close departure is. The fare is only guaranteed once the ticket is issued.',
  },
  {
    question: 'Which documents do I need to book a flight from Pakistan?',
    answer:
      'For international flights: a passport valid for at least 6 months, the visa or entry permit for your destination, and a Protector stamp from the Bureau of Emigration if you travel on an employment visa. For domestic flights: your CNIC (or B-form/passport for children). Names on the ticket must match the passport exactly.',
  },
  {
    question: 'How long does it take to issue an e-ticket?',
    answer:
      'Once payment is confirmed, most tickets are issued the same office day, often straight away. You receive the e-ticket PDF with the airline PNR and ticket number on WhatsApp or email.',
  },
  {
    question: 'Can I change the date of my ticket after issue?',
    answer:
      'Yes, if your fare allows changes. We reissue the ticket for the new date; you pay the airline’s change fee (if any) plus any fare difference. The fare rules for every major airline are on our Airlines pages.',
  },
  {
    question: 'How are air ticket refunds processed?',
    answer:
      'We submit the refund to the airline under your ticket’s fare rules. The airline deducts its cancellation penalty and non-refundable taxes, and the balance is returned once the airline approves it. Low-cost airlines often refund as travel credit instead of cash.',
  },
  {
    question: 'Can I correct a spelling mistake in the passenger name?',
    answer:
      'Minor corrections of one or two letters are usually allowed by airlines, sometimes for a fee. A full name change or transferring a ticket to another person is not allowed; a new ticket must be bought. That is why we confirm names against passports before issuing.',
  },
  {
    question: 'Do you issue group tickets?',
    answer:
      'Yes. For 10 or more passengers travelling together (Umrah groups, weddings, corporate or student trips) we request group fares from airlines, which can offer fixed prices, flexible name submission and a deposit-based payment schedule.',
  },
  {
    question: 'Can I book one-way and multi-city tickets?',
    answer:
      'Yes. Choose One way or Multi-city in the search form. Multi-city tickets such as Islamabad–London, Paris–Islamabad are often cheaper than two separate one-way tickets.',
  },
  {
    question: 'Do you book Umrah and visit-visa return tickets?',
    answer:
      'Yes. We issue Umrah tickets to Jeddah and Madinah, and return tickets required for visit visas. Some airlines sell special Umrah fares that are return-only and cannot be partly refunded, so tell us if your trip is for Umrah.',
  },
  {
    question: 'Can I pre-book seats, meals, extra baggage or a wheelchair?',
    answer:
      'Yes. After ticketing we can add seat selection, special meals, prepaid extra baggage and wheelchair or special assistance requests to your booking, subject to airline availability and charges.',
  },
  {
    question: 'Is my ticket valid if I booked through a travel agent?',
    answer:
      'Yes. An agent-issued e-ticket is the same airline ticket you would buy on the airline website. You can view it with your PNR and surname on the airline’s “Manage booking” page and check in online.',
  },
  {
    question: 'What is a PNR and where do I find it?',
    answer:
      'The PNR (Passenger Name Record) is the 6-character booking reference, for example X7K2QP. It is printed at the top of your e-ticket and is used to manage your booking, check in online and check flight status.',
  },
  {
    question: 'What happens if the airline cancels or reschedules my flight?',
    answer:
      'We contact you with the airline’s options: an alternative flight at no extra cost, or a refund where the airline offers one. Because we issued the ticket, we handle the rebooking or refund with the airline for you.',
  },
];

export const exploreFaqs: Faq[] = [
  {
    question: 'Where can I fly from Pakistan without a visa in advance?',
    answer:
      'Pakistani passport holders can visit a handful of countries with visa on arrival or an easy e-visa, including Azerbaijan (ASAN e-visa), Malaysia (eVisa), Sri Lanka (ETA), the Maldives (visa on arrival) and Qatar (conditions apply). Rules change often, so our visa team confirms current requirements before you book.',
  },
  {
    question: 'What are the cheapest international destinations from Pakistan?',
    answer:
      'Short Gulf routes, such as Dubai, Sharjah, Muscat and Bahrain, usually have the lowest fares from Pakistan, especially on flydubai, Air Arabia, SalamAir, Fly Jinnah and Airblue. Baku, Tashkent and Colombo are affordable holiday options too.',
  },
  {
    question: 'Which destinations have direct flights from Islamabad?',
    answer:
      'From Islamabad you can fly non-stop to Dubai, Abu Dhabi, Sharjah, Doha, Muscat, Bahrain, Jeddah, Madinah, Riyadh, Dammam, Istanbul, Baku, Tashkent, Bangkok, Kuala Lumpur, Beijing, London, Manchester, Paris and Toronto, depending on the airline and season.',
  },
  {
    question: 'Which destinations have direct flights from Lahore and Karachi?',
    answer:
      'Lahore has non-stop flights to the Gulf, Saudi Arabia, Istanbul, Baku, Tashkent, Bangkok, Kuala Lumpur, Colombo, London and Manchester. Karachi adds Toronto, Beijing and Colombo along with extensive Gulf and Saudi routes.',
  },
  {
    question: 'What is the best time of year to travel abroad from Pakistan?',
    answer:
      'For cheaper fares, travel in September to November or February, outside Eid and school holidays. For weather, the Gulf is best from November to March, Europe from May to September, and South-East Asia from November to February.',
  },
  {
    question: 'What does “Direct” mean on the Explore page?',
    answer:
      'Direct means at least one airline flies non-stop between your chosen Pakistani airport and that destination. “1+ stops” means you connect through a hub such as Dubai, Doha, Abu Dhabi, Istanbul or Muscat.',
  },
  {
    question: 'Are the cheapest months on Explore live prices?',
    answer:
      'No. They are the months when demand from Pakistan is usually lowest for that region. For live fares, press “Get fares” and our ticketing team will quote current prices for your dates.',
  },
  {
    question: 'What are good honeymoon destinations from Pakistan?',
    answer:
      'Popular honeymoon picks are the Maldives, Baku, Tbilisi, Bali, Kuala Lumpur with Langkawi, Istanbul with Cappadocia, and Thailand’s islands. Most are within 4 to 8 hours of Pakistan with one stop or non-stop.',
  },
  {
    question: 'What are the best family holiday destinations from Pakistan?',
    answer:
      'Dubai, Kuala Lumpur, Istanbul, Baku and Bangkok are family favourites, with halal food, theme parks and short flights. We can combine flights, hotels and visas into one holiday package.',
  },
  {
    question: 'Can BookMyFlight help with visas for these destinations?',
    answer:
      'Yes. Our parent company O.S Travel & Tours processes visit visas and Schengen visa files for more than 20 countries. See the Visa page or ask on WhatsApp for requirements.',
  },
  {
    question: 'Can I search flights to “Everywhere”?',
    answer:
      'Yes. Type “Everywhere” in the To field of the search form to open this page with your departure airport selected, then filter by region or non-stop flights.',
  },
  {
    question: 'How far in advance should I book an international holiday?',
    answer:
      'Book 6 to 10 weeks ahead for long-haul trips and summer holidays, and 3 to 6 weeks ahead for Gulf and South-East Asia trips. Allow extra time if you need a visa.',
  },
];

export const partnersFaqs: Faq[] = [
  {
    question: 'Who is BookMyFlight associated with?',
    answer:
      'BookMyFlight is the online flight desk of O.S Travel & Tours, a travel agency at Office No. 3, Aaly Plaza, Fazal-e-Haq Road, Blue Area, Islamabad, with 10+ years of experience in air ticketing, visas and Umrah.',
  },
  {
    question: 'Is O.S Travel & Tours IATA accredited?',
    answer:
      'Yes. O.S Travel & Tours issues airline tickets as an IATA-accredited agent through the Amadeus and Sabre global distribution systems, so your e-ticket is issued directly in the airline’s system.',
  },
  {
    question: 'What does IATA accreditation mean for travellers?',
    answer:
      'IATA-accredited agents are approved by the International Air Transport Association to sell and issue tickets for member airlines. For you, it means genuine airline e-tickets, access to airline fares and a financially vetted agency handling your payment.',
  },
  {
    question: 'Is O.S Travel & Tours licensed by the Government of Pakistan?',
    answer:
      'Yes. O.S Travel & Tours is listed in the Department of Tourist Services (DTS) registry, Islamabad listing #402, and you can verify it on the official dts.gov.pk portal. It is also a registered FBR taxpayer and SECP-registered business.',
  },
  {
    question: 'How can I verify a travel agency’s DTS licence in Pakistan?',
    answer:
      'Search the agency name on the Department of Tourist Services website (dts.gov.pk) and check the address and licence details. Our listing is linked on this page. Only book with agencies whose registered address matches the office you visit.',
  },
  {
    question: 'What are Amadeus and Sabre?',
    answer:
      'Amadeus and Sabre are global distribution systems (GDS), the booking platforms airlines use to publish fares to travel agents. Being connected to both lets our team compare fares from hundreds of airlines and issue tickets instantly.',
  },
  {
    question: 'Which airlines can you issue tickets for?',
    answer:
      'We ticket PIA, Airblue, AirSial, Fly Jinnah, Emirates, flydubai, Qatar Airways, Etihad, Air Arabia, Saudia, flynas, flyadeal, Turkish Airlines, Oman Air, Gulf Air, Thai Airways, British Airways, SalamAir and most other scheduled airlines through GDS and agency channels.',
  },
  {
    question: 'Are you an official airline partner?',
    answer:
      'We are an accredited ticketing agent, not an airline. Airline names and codes on this site identify the carriers we issue tickets for; they do not imply that the airline endorses BookMyFlight.',
  },
  {
    question: 'Do you work with corporate clients and other travel agents?',
    answer:
      'Yes. Businesses, schools and travel agents can contact our Islamabad office for group fares, corporate travel and ticketing support. Message us on WhatsApp or call during office hours.',
  },
  {
    question: 'Where is the O.S Travel & Tours office?',
    answer:
      'Office No. 3, Aaly Plaza, Fazal-e-Haq Road, Block E, G-6/2, Blue Area, Islamabad. Office hours are Monday to Saturday, 9:00 AM to 6:00 PM.',
  },
  {
    question: 'Where can I read reviews of O.S Travel & Tours?',
    answer:
      'Client reviews are on the O.S Travel & Tours website, and the agency has a Facebook community of more than 32,000 followers where travellers share their experiences.',
  },
  {
    question: 'Is my payment protected when I book through BookMyFlight?',
    answer:
      'Tickets are issued only after payment is received, and you get an airline e-ticket number that you can verify immediately on the airline website. We never ask for card details on WhatsApp.',
  },
];

export const blogFaqs: Faq[] = [
  {
    question: 'Who writes the BookMyFlight travel blog?',
    answer:
      'Articles are written by the BookMyFlight travel desk at O.S Travel & Tours, the same ticketing and visa team that books flights for travellers from Islamabad every day.',
  },
  {
    question: 'How often is the blog updated?',
    answer:
      'We publish new guides regularly and update existing ones when airline rules, visa requirements or seasonal patterns change. Each article shows its publish date.',
  },
  {
    question: 'Are the airline rules in the blog official?',
    answer:
      'Airline rules quoted in our articles come from the airlines’ own websites and match our airline pages, where the official sources are linked. Your ticket’s fare rules always take priority.',
  },
  {
    question: 'Where can I find the cheapest months to fly from Pakistan?',
    answer:
      'Read our month-by-month guide to the cheapest months to fly from Pakistan, or open any airline page to see its 12-month fare chart.',
  },
  {
    question: 'Do you have guides for Umrah travellers?',
    answer:
      'Yes. See our Umrah planning guide and our comparison of flying into Jeddah or Madinah, plus Umrah packages with visa, hotels and transport.',
  },
  {
    question: 'Can I ask a question about an article?',
    answer:
      'Yes. Message the travel desk on WhatsApp with the article title and your question, and a consultant will reply during office hours.',
  },
  {
    question: 'Do you write about airline refund and reissue policies?',
    answer:
      'Yes. Our refund rules guide and reissue guide explain how penalties, fare differences and credit refunds work, with examples from PIA, Emirates, flydubai, Air Arabia and more.',
  },
  {
    question: 'Is the blog advice suitable for overseas Pakistanis?',
    answer:
      'Yes. Many guides, such as our UK flights comparison and the peak-season calendar, are written for overseas Pakistanis travelling home as well as travellers leaving Pakistan.',
  },
  {
    question: 'Can I share BookMyFlight articles?',
    answer:
      'Yes. Feel free to share links to our articles with family and friends. Please link to the original page rather than copying the text.',
  },
  {
    question: 'How do I book a flight after reading a guide?',
    answer:
      'Use the search form at the top of any page or the WhatsApp button in the article, and our ticketing team will quote live fares for your dates.',
  },
];

export const aboutFaqs: Faq[] = [
  {
    question: 'What is BookMyFlight?',
    answer:
      'BookMyFlight is a flight search and booking service for travellers from Pakistan. You search routes, compare airline rules and send your trip to our ticketing team, who quote live fares and issue your e-ticket.',
  },
  {
    question: 'Who runs BookMyFlight?',
    answer:
      'BookMyFlight is operated with O.S Travel & Tours, a DTS-licensed, IATA-accredited travel agency in Blue Area, Islamabad, with more than 10 years of experience in air ticketing, visas and Umrah.',
  },
  {
    question: 'Why book with a travel agent instead of the airline website?',
    answer:
      'An agent compares many airlines at once, explains fare rules, holds seats while you arrange visas, handles group bookings and manages changes and refunds for you. You still receive an official airline e-ticket.',
  },
  {
    question: 'Where is your office?',
    answer:
      'Office No. 3, Aaly Plaza, Fazal-e-Haq Road, Block E, G-6/2, Blue Area, Islamabad. You are welcome to visit Monday to Saturday, 9:00 AM to 6:00 PM.',
  },
  {
    question: 'Which services do you offer besides flights?',
    answer:
      'Umrah packages, visit and Schengen visa processing, hotel reservations, holiday packages and travel insurance, through O.S Travel & Tours.',
  },
  {
    question: 'Do you serve customers outside Islamabad?',
    answer:
      'Yes. We book flights for travellers across Pakistan and for overseas Pakistanis. Everything from quote to e-ticket can be done on WhatsApp, phone or email.',
  },
  {
    question: 'How many travellers have you served?',
    answer:
      'O.S Travel & Tours reports more than 12,000 happy clients and a Facebook community of over 32,000 followers.',
  },
  {
    question: 'Are your prices higher than the airline website?',
    answer:
      'We quote the airline fares available in the booking systems at that moment. Any service charge is shown in your quote before you pay, so you can compare the total.',
  },
  {
    question: 'How do you make sure airline information is accurate?',
    answer:
      'Our airline pages are based on each airline’s official website, with the sources linked and the date we last checked them. Fare rules on your ticket always take priority.',
  },
  {
    question: 'Is BookMyFlight connected to Skyscanner or other booking sites?',
    answer:
      'No. BookMyFlight is an independent service run with O.S Travel & Tours; we are not affiliated with any metasearch website.',
  },
  {
    question: 'How can I give feedback about my booking?',
    answer:
      'Message us on WhatsApp or email us. You can also read and leave reviews on the O.S Travel & Tours reviews page and Facebook page.',
  },
  {
    question: 'Do you offer jobs or internships?',
    answer: 'Contact the O.S Travel & Tours office with your CV if you are interested in travel and ticketing roles.',
  },
];

export const contactFaqs: Faq[] = [
  {
    question: 'What is the fastest way to contact BookMyFlight?',
    answer:
      'WhatsApp is fastest. Send your route, dates and number of travellers to +92 333 5542877 and our ticketing team will reply during office hours.',
  },
  {
    question: 'What are your office hours?',
    answer: 'Monday to Saturday, 9:00 AM to 6:00 PM (Pakistan time). We are closed on Sundays and public holidays.',
  },
  {
    question: 'What are your phone numbers?',
    answer: 'Landline: 051-2120700 and 051-2120701. Mobile / WhatsApp: +92 333 5542877.',
  },
  {
    question: 'Can I visit your office in person?',
    answer:
      'Yes. Our office is at Office No. 3, Aaly Plaza, Fazal-e-Haq Road, Block E, G-6/2, Blue Area, Islamabad. Use the map on this page for directions.',
  },
  {
    question: 'What information should I send for a flight quote?',
    answer:
      'Departure city, destination, travel dates (and flexibility), number of adults, children and infants, cabin class, baggage needs and any preferred airline.',
  },
  {
    question: 'How quickly will I get a reply?',
    answer:
      'We aim to reply to messages received during office hours on the same working day; messages sent after hours are answered on the next working day.',
  },
  {
    question: 'Can I send passport copies on WhatsApp?',
    answer:
      'Yes. Passport copies are needed to issue tickets with the correct names. Only share them with our official number, and never share card details on WhatsApp.',
  },
  {
    question: 'I booked with you. How do I change or cancel my ticket?',
    answer:
      'Send your PNR or ticket number on WhatsApp with the change you need. We will quote the airline’s fees and any fare difference before making the change.',
  },
  {
    question: 'Do you offer 24/7 support?',
    answer:
      'Our office runs Monday to Saturday. For urgent issues at the airport outside office hours, contact the airline directly using the number on your e-ticket, then inform us.',
  },
  {
    question: 'Can overseas Pakistanis book through you?',
    answer:
      'Yes. Many clients book tickets for family travelling from Pakistan or for their own trips home, entirely on WhatsApp and email.',
  },
  {
    question: 'Do you have other branches?',
    answer:
      'Our main office is in Blue Area, Islamabad. See the branches page on the O.S Travel & Tours website for current locations.',
  },
  {
    question: 'How do I report a problem or complaint?',
    answer:
      'Email us or message on WhatsApp with your booking reference and details. A senior consultant will review and respond.',
  },
];
