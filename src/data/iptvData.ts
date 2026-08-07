import { PricingPlan, FeatureItem, SupportedDevice, FAQItem } from '../types';

export const WHATSAPP_NUMBER = '447832486269';

/** Builds a wa.me link with a pre-filled message. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const PLAN_FEATURES = [
  '+80.000 live tv-kanalen',
  '+100.000 films en series',
  '4K, FHD, HD & SD kwaliteit',
  'EPG & terugkijken inbegrepen',
  'Werkt op al uw apparaten',
  'Netflix, Amazon, HBO, Apple TV, Hulu',
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '3-maanden',
    name: '3 Maanden',
    price: { 1: 24.99, 2: 39.99 },
    billingText: 'Driemaandelijks',
    features: PLAN_FEATURES,
  },
  {
    id: '6-maanden',
    name: '6 Maanden',
    price: { 1: 34.99, 2: 49.99 },
    billingText: 'Halfjaarlijks',
    features: PLAN_FEATURES,
  },
  {
    id: '12-maanden',
    name: '12 Maanden',
    price: { 1: 51.99, 2: 79 },
    billingText: 'Jaarlijks',
    popular: true,
    badge: 'BESTE PRIJS',
    features: PLAN_FEATURES,
  },
];

/** Splits a price into whole euros and cents so cards can render the cents smaller. */
export const splitPrice = (price: number) => {
  const [whole, cents = '00'] = price.toFixed(2).split('.');
  return { whole, cents };
};

/** Dutch price notation, e.g. 24,99 */
export const formatPrice = (price: number) => price.toFixed(2).replace('.', ',');

export const FEATURES: FeatureItem[] = [
  {
    id: 'wereldwijd',
    title: 'Eindeloos Wereldwijd Aanbod',
    description:
      'Kijk live tv van zenders uit heel de wereld: nieuws, sport, films en documentaires in één abonnement.',
    iconName: 'Globe',
  },
  {
    id: 'entertainment',
    title: '24/7 Premium Entertainment',
    description:
      'Non-stop films, series en sport in haarscherpe kwaliteit, wanneer het u uitkomt.',
    iconName: 'Clock',
  },
  {
    id: 'betaalbaar',
    title: 'Betaalbaar & Kostenbesparend',
    description:
      'Bespaar fors op uw maandelijkse tv-kosten met een voordelig IPTV-abonnement zonder contract.',
    iconName: 'Banknote',
  },
];

export const SUPPORTED_DEVICES: SupportedDevice[] = [
  {
    id: 'smart-tv',
    name: "Smart TV's",
    description: 'Samsung, LG, Sony, Philips en Hisense',
    iconName: 'Tv',
  },
  {
    id: 'firestick',
    name: 'Amazon Fire Stick',
    description: 'Fire TV Stick 4K, Lite en Fire TV Cube',
    iconName: 'Cast',
  },
  {
    id: 'android',
    name: 'Android Box & TV',
    description: 'Formuler, Xsarius, Mecool en NVIDIA Shield',
    iconName: 'Box',
  },
  {
    id: 'apple',
    name: 'Apple TV & iOS',
    description: 'Apple TV 4K, iPhone, iPad en Mac',
    iconName: 'Smartphone',
  },
  {
    id: 'android-phone',
    name: 'Telefoon & Tablet',
    description: 'Android telefoons en tablets, ook via Chromecast',
    iconName: 'Tablet',
  },
  {
    id: 'pc',
    name: 'Windows PC & Laptop',
    description: 'VLC, IPTV Smarters Pro en de webplayer',
    iconName: 'Laptop',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-bestellen',
    question: 'Hoe bestel ik een abonnement?',
    answer:
      'Kies bij "Kies uw plan" het pakket en het aantal schermen dat u wilt en klik op Nu kopen. WhatsApp opent dan met uw bestelling er al in — u hoeft alleen op verzenden te drukken. Wij bevestigen de bestelling en sturen u een betaallink.',
  },
  {
    id: 'faq-betalen',
    question: 'Hoe kan ik betalen?',
    answer:
      'Na uw bestelling via WhatsApp ontvangt u van ons een betaallink. U kunt betalen met iDEAL, creditcard, PayPal of Bancontact.',
  },
  {
    id: 'faq-twee-apparaten',
    question: 'Kan ik met één abonnement op twee apparaten kijken?',
    answer:
      'Een abonnement voor één scherm werkt op al uw apparaten, maar u kunt er slechts op één tegelijk mee kijken. Wilt u tegelijkertijd op twee schermen kijken, kies dan bij Kies uw plan voor de optie "Twee schermen".',
  },
  {
    id: 'faq-tegelijk',
    question: 'Kan ik op twee apparaten tegelijk kijken?',
    answer:
      'Ja, met het abonnement voor twee schermen kijkt u op twee apparaten tegelijk, bijvoorbeeld in de woonkamer en de slaapkamer. Meer schermen nodig? Neem contact met ons op voor een aangepast pakket.',
  },
  {
    id: 'faq-box',
    question: 'Heb ik een box nodig om van jullie service gebruik te maken?',
    answer:
      'Nee. Heeft u een Smart TV, telefoon, tablet, laptop of Fire Stick, dan volstaat een gratis IPTV-app. Een losse TV box is alleen handig als uw televisie geen apps ondersteunt.',
  },
  {
    id: 'faq-chromecast',
    question: 'Kan ik dit op mijn telefoon gebruiken en naar mijn Chromecast streamen?',
    answer:
      'Dat kan. Installeer een IPTV-app op uw telefoon of tablet, voer uw gegevens in en cast het beeld naar uw Chromecast of Google TV.',
  },
  {
    id: 'faq-formuler',
    question: 'Ik heb een Formuler, Xsarius of Amiko box — werkt de service daarop?',
    answer:
      'Ja. Onze dienst werkt met Formuler, Xsarius, Amiko en vrijwel elke andere box via een M3U-lijst of Xtream Codes. Wij helpen u desgewenst stap voor stap met de installatie.',
  },
  {
    id: 'faq-snelheid',
    question: 'Wat is de minimale internetsnelheid die vereist is voor IPTV?',
    answer:
      'Voor HD raden wij minimaal 15 Mbit/s aan. Voor 4K en live sport op 60 fps adviseren wij een stabiele verbinding van 25 Mbit/s of hoger, bij voorkeur via een netwerkkabel.',
  },
  {
    id: 'faq-abonnement',
    question: 'Wat gebeurt er als ik een abonnement neem?',
    answer:
      'Direct na uw betaling sturen wij u via WhatsApp uw inloggegevens, de M3U-link en een installatiehandleiding voor uw apparaat. Meestal bent u binnen enkele minuten aan het kijken.',
  },
  {
    id: 'faq-wederverkoper',
    question: 'Kan ik een wederverkoper van jullie service worden?',
    answer:
      'Zeker. Wij bieden een wederverkoperspaneel met eigen tarieven en credits. Stuur ons een bericht via WhatsApp, dan bespreken we de mogelijkheden.',
  },
];

export const FOOTER_LINKS = [
  'Installatiegids',
  'Wederverkoper worden',
  'Voorwaarden',
  'Privacybeleid',
  'Restitutiebeleid',
  'Online discussies',
  'Gratis diensten',
  'Aanbevelingen',
  'Technische bronnen',
  'Apparaten en toepassingen',
  'Technologie',
];
