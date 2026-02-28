/**
 * Centralized listing configuration - single source of truth for Girassol property
 * Edit this file to update all listing content across the site.
 */

export type PhotoCategory =
  | "living-room"
  | "dining-area"
  | "bedroom-1"
  | "bedroom-2"
  | "bedroom-3"
  | "bathroom-1"
  | "bathroom-2"
  | "bathroom-3"
  | "exterior"
  | "pool"
  | "additional";

export interface ListingConfig {
  meta: {
    title: Record<string, string>;
    description: Record<string, string>;
  };
  hero: {
    headline: Record<string, string>;
    subheadline: Record<string, string>;
  };
  pricing: {
    nightlyRate: number;
    weeklyDiscountPercent: number;
    monthlyDiscountPercent: number;
    cleaningFee?: number;
    serviceFee?: number;
    currency: "BRL";
  };
  calendar: {
    airbnbIcalUrl?: string;
    blockedDates?: string[];
  };
  photos: Array<{ src: string; alt: string; category: PhotoCategory }>;
  property: {
    bedrooms: number;
    beds: number;
    bathrooms: number;
    maxGuests: number;
    sizeSqm: number;
    yearBuilt: number;
    categories: string[];
    type: string;
  };
  amenities: Array<{ category: string; items: string[] }>;
  infoSections: Array<{ id: string; title: Record<string, string>; content: Record<string, string> }>;
  nearbyPlaces: Array<{ name: string; url: string; distance: string; type: string }>;
  directions: Record<string, string>;
  shopping: Record<string, string>;
  airbnbUrl: string;
}

export const listingConfig: ListingConfig = {
  meta: {
    title: {
      en: "Girassol - Nature Refuge | São Roque, Brazil",
      pt: "Girassol - Refúgio de Natureza | São Roque, Brasil",
      es: "Girassol - Refugio de Naturaleza | São Roque, Brasil",
    },
    description: {
      en: "Authentic Brazilian Sitio - Offroad, Nature, BBQ. 3 bedrooms, pool, 2.6 hectares of nature. Book your stay in São Roque.",
      pt: "Remoto, natureza, privativo, completo, tranquilo. 3 quartos, piscina, 2,6 hectares de natureza. Reserve em São Roque.",
      es: "Sitio a 1,5 h SP offroad, senderos, piscina asador. 3 dormitorios, piscina. Reserve en São Roque.",
    },
  },
  hero: {
    headline: {
      en: "Nature refuge, comfort and tranquility",
      pt: "Refúgio de natureza, conforto e tranquilidade",
      es: "Refugio de naturaleza, confort y tranquilidad",
    },
    subheadline: {
      en: "Authentic Brazilian Sitio - Offroad, Nature, BBQ",
      pt: "Remoto, natureza, privativo, completo, tranquilo",
      es: "Sitio a 1,5 h SP offroad, senderos, piscina asador",
    },
  },
  pricing: {
    nightlyRate: 260,
    weeklyDiscountPercent: 33,
    monthlyDiscountPercent: 50,
    currency: "BRL",
  },
  calendar: {
    blockedDates: [],
  },
  photos: [
    // Living room (4)
    { src: "/images/living-room/001_Living-room_1.jpeg", alt: "Living room Girassol", category: "living-room" },
    { src: "/images/living-room/011_Living-room_2.jpeg", alt: "Living room view", category: "living-room" },
    { src: "/images/living-room/012_Living-room_3.jpeg", alt: "Living room interior", category: "living-room" },
    { src: "/images/living-room/013_Living-room_4.jpeg", alt: "Living room detail", category: "living-room" },
    // Dining area (2)
    { src: "/images/dining-area/002_Dining-area_1.jpeg", alt: "Dining area Girassol", category: "dining-area" },
    { src: "/images/dining-area/014_Dining-area_2.jpeg", alt: "Dining area view", category: "dining-area" },
    // Bedroom 1 (2)
    { src: "/images/bedroom-1/003_Bedroom-1_1.jpeg", alt: "Bedroom 1 Girassol", category: "bedroom-1" },
    { src: "/images/bedroom-1/015_Bedroom-1_2.jpeg", alt: "Bedroom 1 view", category: "bedroom-1" },
    // Bedroom 2 (1)
    { src: "/images/bedroom-2/004_Bedroom-2_1.jpeg", alt: "Bedroom 2 Girassol", category: "bedroom-2" },
    // Bedroom 3 (1)
    { src: "/images/bedroom-3/005_Bedroom-3_1.jpeg", alt: "Bedroom 3 Girassol", category: "bedroom-3" },
    // Full bathroom 1 (1)
    { src: "/images/bathroom-1/006_Full-bathroom-1_1.jpeg", alt: "Bathroom 1 Girassol", category: "bathroom-1" },
    // Full bathroom 2 (1)
    { src: "/images/bathroom-2/007_Full-bathroom-2_1.jpeg", alt: "Bathroom 2 Girassol", category: "bathroom-2" },
    // Exterior (6)
    { src: "/images/exterior/008_Exterior_1.jpeg", alt: "Girassol exterior", category: "exterior" },
    { src: "/images/exterior/016_Exterior_2.jpeg", alt: "Exterior view", category: "exterior" },
    { src: "/images/exterior/017_Exterior_3.jpeg", alt: "Property exterior", category: "exterior" },
    { src: "/images/exterior/018_Exterior_4.jpeg", alt: "Garden view", category: "exterior" },
    { src: "/images/exterior/019_Exterior_5.jpeg", alt: "Nature surroundings", category: "exterior" },
    { src: "/images/exterior/020_Exterior_6.jpeg", alt: "Outdoor area", category: "exterior" },
    // Pool (20)
    { src: "/images/pool/001_Pool_1.jpeg", alt: "Pool area Girassol", category: "pool" },
    { src: "/images/pool/002_Pool_2.jpeg", alt: "Pool view", category: "pool" },
    { src: "/images/pool/003_Pool_3.jpeg", alt: "Pool and deck", category: "pool" },
    { src: "/images/pool/004_Pool_4.jpeg", alt: "Pool area", category: "pool" },
    { src: "/images/pool/005_Pool_5.jpeg", alt: "Swimming pool Girassol", category: "pool" },
    { src: "/images/pool/006_Pool_6.jpeg", alt: "Pool with nature view", category: "pool" },
    { src: "/images/pool/007_Pool_7.jpeg", alt: "Pool deck area", category: "pool" },
    { src: "/images/pool/008_Pool_8.jpeg", alt: "Pool and garden", category: "pool" },
    { src: "/images/pool/009_Pool_9.jpeg", alt: "Pool area view", category: "pool" },
    { src: "/images/pool/010_Pool_10.jpeg", alt: "Pool Girassol", category: "pool" },
    { src: "/images/pool/011_Pool_11.jpeg", alt: "Pool and sun loungers", category: "pool" },
    { src: "/images/pool/012_Pool_12.jpeg", alt: "Pool area Girassol", category: "pool" },
    { src: "/images/pool/013_Pool_13.jpeg", alt: "Swimming pool", category: "pool" },
    { src: "/images/pool/014_Pool_14.jpeg", alt: "Pool deck", category: "pool" },
    { src: "/images/pool/015_Pool_15.jpeg", alt: "Pool and outdoor area", category: "pool" },
    { src: "/images/pool/016_Pool_16.jpeg", alt: "Pool view Girassol", category: "pool" },
    { src: "/images/pool/017_Pool_17.jpeg", alt: "Pool area", category: "pool" },
    { src: "/images/pool/018_Pool_18.jpeg", alt: "Pool and nature", category: "pool" },
    { src: "/images/pool/019_Pool_19.jpeg", alt: "Pool Girassol property", category: "pool" },
    { src: "/images/pool/020_Pool_20.jpeg", alt: "Pool area São Roque", category: "pool" },
    // Additional (1)
    { src: "/images/additional/010_Additional-photos_1.jpeg", alt: "Girassol property", category: "additional" },
  ],
  property: {
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    maxGuests: 12,
    sizeSqm: 280,
    yearBuilt: 2010,
    categories: ["Countryside", "Tropical"],
    type: "Entire place - House (Chalet)",
  },
  amenities: [
    {
      category: "Bathroom",
      items: [
        "Hair dryer",
        "Cleaning products",
        "Body soap",
        "Bidet",
        "Outdoor shower",
        "Hot water",
      ],
    },
    {
      category: "Bedroom and laundry",
      items: [
        "Washer",
        "Hangers",
        "Bed linens",
        "Extra pillows and blankets",
        "Room-darkening shades",
        "Iron",
        "Drying rack for clothing",
        "Clothing storage",
      ],
    },
    {
      category: "Entertainment",
      items: ["TV", "Books and reading material"],
    },
    {
      category: "Family",
      items: ["Baby bath (always at listing)", "Board games"],
    },
    {
      category: "Heating and cooling",
      items: [
        "Indoor fireplace",
        "Ceiling fan",
        "Portable fans",
        "Portable heater",
      ],
    },
    {
      category: "Internet and office",
      items: ["Wifi", "Dedicated workspace"],
    },
    {
      category: "Kitchen and dining",
      items: [
        "Kitchen (guests can cook)",
        "Refrigerator",
        "Microwave",
        "Cooking basics",
        "Dishes and silverware",
        "Freezer",
        "Stove",
        "Oven",
        "Coffee maker",
        "Toaster",
        "Baking sheet",
        "Blender",
        "Rice maker",
        "Barbecue utensils",
        "Dining table",
        "Coffee",
      ],
    },
    {
      category: "Location features",
      items: [
        "Private entrance",
        "Patio or balcony",
        "Private backyard (fully fenced)",
        "Open grass space",
        "Fire pit",
        "Outdoor furniture",
        "Hammock",
        "Outdoor dining area",
        "Outdoor kitchen with oven",
        "BBQ grill",
        "Sun loungers",
      ],
    },
    {
      category: "Parking and facilities",
      items: ["Free parking on premises", "Free street parking", "Pool"],
    },
    {
      category: "Services",
      items: [
        "Pets allowed",
        "Assistance animals always allowed",
        "Smoking allowed",
        "Long term stays (28+ days)",
        "Self check-in",
        "Building staff (24h)",
      ],
    },
  ],
  infoSections: [
    {
      id: "directions",
      title: { en: "How to get there", pt: "Como chegar", es: "Cómo llegar" },
      content: {
        en: "From São Paulo, the best route is via Rodovia Castello Branco, exit at km 54B to access Rodovia Raposo Tavares, or follow directly via Raposo. The exact location is provided after reservation confirmation.",
        pt: "Saindo de São Paulo, a melhor alternativa é ir pela Rodovia Castello Branco e sair no km 54B para acessar a Rodovia Raposo Tavares, ou seguir diretamente pela Raposo. A localização exata é fornecida após a confirmação da reserva.",
        es: "Desde São Paulo, la mejor ruta es por Rodovia Castello Branco, salida en km 54B para acceder a Rodovia Raposo Tavares, o seguir directamente por Raposo. La ubicación exacta se proporciona después de la confirmación de la reserva.",
      },
    },
    {
      id: "shopping",
      title: { en: "Shopping and nearby", pt: "Compras e proximidades", es: "Compras y cercanías" },
      content: {
        en: "Market approximately 5 km before the property. For larger shopping, market 12 km before arrival.",
        pt: "Mercado a aproximadamente 5 km antes da propriedade. Para compras maiores, mercado a 12 km antes da chegada.",
        es: "Mercado aproximadamente 5 km antes de la propiedad. Para compras más grandes, mercado 12 km antes de la llegada.",
      },
    },
    {
      id: "house-rules",
      title: { en: "House rules", pt: "Regras da casa", es: "Reglas de la casa" },
      content: {
        en: "Add your house rules here.",
        pt: "Adicione as regras da casa aqui.",
        es: "Añada las reglas de la casa aquí.",
      },
    },
    {
      id: "pool-rules",
      title: { en: "Swimming pool rules", pt: "Regras da piscina", es: "Reglas de la piscina" },
      content: {
        en: "Add pool rules here.",
        pt: "Adicione as regras da piscina aqui.",
        es: "Añada las reglas de la piscina aquí.",
      },
    },
    {
      id: "pool-schedule",
      title: { en: "Pool cleaning schedule", pt: "Horário de limpeza da piscina", es: "Horario de limpieza de la piscina" },
      content: {
        en: "Add pool cleaning schedule here.",
        pt: "Adicione o horário de limpeza da piscina aqui.",
        es: "Añada el horario de limpieza de la piscina aquí.",
      },
    },
  ],
  nearbyPlaces: [
    { name: "Main property (Girassol)", url: "https://maps.app.goo.gl/T4AyvKtfkvXzrEA67", distance: "", type: "property" },
    { name: "Mercado São Roque", url: "https://maps.app.goo.gl/uc15RYv9sPc9Euij8", distance: "12 km antes", type: "market" },
    { name: "Farmácia", url: "https://maps.app.goo.gl/WATMaV2xWTJHARhT6", distance: "12 km antes", type: "pharmacy" },
    { name: "Panificadora e frango de padaria", url: "https://maps.app.goo.gl/zaotkbtZU7FLkL7C9", distance: "5 km antes", type: "bakery" },
    { name: "Mercearia Figueiras, açougue, adega, tabacaria Siqueira", url: "https://maps.app.goo.gl/uc15RYv9sPc9Euij8", distance: "5 km antes", type: "market" },
  ],
  directions: {
    en: "From São Paulo, the best route is via Rodovia Castello Branco, exit at km 54B to access Rodovia Raposo Tavares, or follow directly via Raposo. Follow the 'Girassol' signs when approaching. The exact location is provided after reservation confirmation.",
    pt: "Saindo de São Paulo, a melhor alternativa é ir pela Rodovia Castello Branco e sair no km 54B para acessar a Rodovia Raposo Tavares, ou seguir diretamente pela Raposo. Siga as placas 'Girassol' quando estiver chegando perto. A localização exata é fornecida após a confirmação da reserva.",
    es: "Desde São Paulo, la mejor ruta es por Rodovia Castello Branco, salida en km 54B para acceder a Rodovia Raposo Tavares, o seguir directamente por Raposo. Siga las señales 'Girassol' al acercarse. La ubicación exacta se proporciona después de la confirmación de la reserva.",
  },
  shopping: {
    en: "Market approximately 5 km before the property. For larger shopping, market 12 km before arrival (with butcher, wine shop, tobacco shop).",
    pt: "Mercado a aproximadamente 5 km antes da propriedade. Para compras maiores, mercado a 12 km antes da chegada (com açougue, adega, tabacaria).",
    es: "Mercado aproximadamente 5 km antes de la propiedad. Para compras más grandes, mercado 12 km antes de la llegada (con carnicería, bodega, tabaquería).",
  },
  airbnbUrl: "https://www.airbnb.com/rooms/1345960842338220775",
};
