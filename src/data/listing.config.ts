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
    headlineItalic: Record<string, string>;
    subheadline: Record<string, string>;
    paragraph: Record<string, string>;
    visual: {
      tagline: Record<string, string>;
      taglineUppercase: Record<string, string>;
    };
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
  infoSections: Array<{
    id: string;
    title: Record<string, string>;
    content: Record<string, string>;
  }>;
  nearbyPlaces: Array<{
    name: string;
    url: string;
    distance: string;
    type: string;
  }>;
  location: {
    /** General area map (no exact property pin) - embed iframe src */
    mapEmbedUrl: string;
    /** Link for "View Full Map" - general São Roque area */
    generalAreaUrl: string;
  };
  directions: Record<string, string>;
  shopping: Record<string, string>;
  airbnbUrl: string;
}

export const listingConfig: ListingConfig = {
  meta: {
    title: {
      en: "Sítio Girassol - Nature Refuge | São Roque, Brazil",
      pt: "Sítio Girassol - Refúgio de Natureza | São Roque, Brasil",
      es: "Sítio Girassol - Refugio de Naturaleza | São Roque, Brasil",
    },
    description: {
      en: "Authentic Brazilian Sitio - Offroad, Nature, BBQ. 3 bedrooms, pool, 2.6 hectares of nature. Book your stay in São Roque.",
      pt: "Remoto, natureza, privativo, completo, tranquilo. 3 quartos, piscina, 2,6 hectares de natureza. Reserve em São Roque.",
      es: "Sitio a 1,5 h SP offroad, senderos, piscina asador. 3 dormitorios, piscina. Reserve en São Roque.",
    },
  },
  hero: {
    headline: {
      en: "Nature refuge,",
      pt: "Refúgio de natureza,",
      es: "Refugio de naturaleza,",
    },
    headlineItalic: {
      en: "comfort and tranquility",
      pt: "conforto e tranquilidade",
      es: "confort y tranquilidad",
    },
    subheadline: {
      en: "Remote, nature, private, complete, tranquil.",
      pt: "Remoto, natureza, privativo, completo, tranquilo.",
      es: "Remoto, naturaleza, privado, completo, tranquilo.",
    },
    paragraph: {
      en: "3 bedrooms, private pool and 2.6 hectares of preserved nature for your family. Book your stay in São Roque.",
      pt: "3 quartos, piscina privativa e 2,6 hectares de natureza preservada para sua família. Reserve sua estadia em São Roque.",
      es: "3 dormitorios, piscina privada y 2,6 hectáreas de naturaleza preservada para tu familia. Reserva tu estadía en São Roque.",
    },
    visual: {
      tagline: {
        en: "Inner peace",
        pt: "Paz interior",
        es: "Paz interior",
      },
      taglineUppercase: {
        en: "Exclusive experience",
        pt: "Experiência exclusiva",
        es: "Experiencia exclusiva",
      },
    },
  },
  pricing: {
    nightlyRate: 260,
    weeklyDiscountPercent: 33,
    monthlyDiscountPercent: 50,
    currency: "BRL",
  },
  calendar: {
    airbnbIcalUrl:
      "https://www.airbnb.com/calendar/ical/1345960842338220775.ics?t=5807f23cb26b48919e07c0f8e95c05a9",
    blockedDates: [],
  },
  photos: [
    // Living room (4)
    {
      src: "/images/living-room/001_Living-room_1.jpeg",
      alt: "Living room Girassol",
      category: "living-room",
    },
    {
      src: "/images/living-room/011_Living-room_2.jpeg",
      alt: "Living room view",
      category: "living-room",
    },
    {
      src: "/images/living-room/012_Living-room_3.jpeg",
      alt: "Living room interior",
      category: "living-room",
    },
    {
      src: "/images/living-room/013_Living-room_4.jpeg",
      alt: "Living room detail",
      category: "living-room",
    },
    // Dining area (2)
    {
      src: "/images/dining-area/002_Dining-area_1.jpeg",
      alt: "Dining area Girassol",
      category: "dining-area",
    },
    {
      src: "/images/dining-area/014_Dining-area_2.jpeg",
      alt: "Dining area view",
      category: "dining-area",
    },
    // Bedroom 1 (2)
    {
      src: "/images/bedroom-1/003_Bedroom-1_1.jpeg",
      alt: "Bedroom 1 Girassol",
      category: "bedroom-1",
    },
    {
      src: "/images/bedroom-1/015_Bedroom-1_2.jpeg",
      alt: "Bedroom 1 view",
      category: "bedroom-1",
    },
    // Bedroom 2 (1)
    {
      src: "/images/bedroom-2/004_Bedroom-2_1.jpeg",
      alt: "Bedroom 2 Girassol",
      category: "bedroom-2",
    },
    // Bedroom 3 (1)
    {
      src: "/images/bedroom-3/005_Bedroom-3_1.jpeg",
      alt: "Bedroom 3 Girassol",
      category: "bedroom-3",
    },
    // Full bathroom 1 (1)
    {
      src: "/images/bathroom-1/006_Full-bathroom-1_1.jpeg",
      alt: "Bathroom 1 Girassol",
      category: "bathroom-1",
    },
    // Full bathroom 2 (1)
    {
      src: "/images/bathroom-2/007_Full-bathroom-2_1.jpeg",
      alt: "Bathroom 2 Girassol",
      category: "bathroom-2",
    },
    // Exterior (6)
    {
      src: "/images/exterior/008_Exterior_1.jpeg",
      alt: "Girassol exterior",
      category: "exterior",
    },
    {
      src: "/images/exterior/016_Exterior_2.jpeg",
      alt: "Exterior view",
      category: "exterior",
    },
    {
      src: "/images/exterior/017_Exterior_3.jpeg",
      alt: "Property exterior",
      category: "exterior",
    },
    {
      src: "/images/exterior/018_Exterior_4.jpeg",
      alt: "Garden view",
      category: "exterior",
    },
    {
      src: "/images/exterior/019_Exterior_5.jpeg",
      alt: "Nature surroundings",
      category: "exterior",
    },
    {
      src: "/images/exterior/020_Exterior_6.jpeg",
      alt: "Outdoor area",
      category: "exterior",
    },
    // Pool (20)
    {
      src: "/images/pool/001_Pool_1.jpeg",
      alt: "Pool area Girassol",
      category: "pool",
    },
    { src: "/images/pool/002_Pool_2.jpeg", alt: "Pool view", category: "pool" },
    {
      src: "/images/pool/003_Pool_3.jpeg",
      alt: "Pool and deck",
      category: "pool",
    },
    { src: "/images/pool/004_Pool_4.jpeg", alt: "Pool area", category: "pool" },
    {
      src: "/images/pool/005_Pool_5.jpeg",
      alt: "Swimming pool Girassol",
      category: "pool",
    },
    {
      src: "/images/pool/006_Pool_6.jpeg",
      alt: "Pool with nature view",
      category: "pool",
    },
    {
      src: "/images/pool/007_Pool_7.jpeg",
      alt: "Pool deck area",
      category: "pool",
    },
    {
      src: "/images/pool/008_Pool_8.jpeg",
      alt: "Pool and garden",
      category: "pool",
    },
    {
      src: "/images/pool/009_Pool_9.jpeg",
      alt: "Pool area view",
      category: "pool",
    },
    {
      src: "/images/pool/010_Pool_10.jpeg",
      alt: "Pool Girassol",
      category: "pool",
    },
    {
      src: "/images/pool/011_Pool_11.jpeg",
      alt: "Pool and sun loungers",
      category: "pool",
    },
    {
      src: "/images/pool/012_Pool_12.jpeg",
      alt: "Pool area Girassol",
      category: "pool",
    },
    {
      src: "/images/pool/013_Pool_13.jpeg",
      alt: "Swimming pool",
      category: "pool",
    },
    {
      src: "/images/pool/014_Pool_14.jpeg",
      alt: "Pool deck",
      category: "pool",
    },
    {
      src: "/images/pool/015_Pool_15.jpeg",
      alt: "Pool and outdoor area",
      category: "pool",
    },
    {
      src: "/images/pool/016_Pool_16.jpeg",
      alt: "Pool view Girassol",
      category: "pool",
    },
    {
      src: "/images/pool/017_Pool_17.jpeg",
      alt: "Pool area",
      category: "pool",
    },
    {
      src: "/images/pool/018_Pool_18.jpeg",
      alt: "Pool and nature",
      category: "pool",
    },
    {
      src: "/images/pool/019_Pool_19.jpeg",
      alt: "Pool Girassol property",
      category: "pool",
    },
    {
      src: "/images/pool/020_Pool_20.jpeg",
      alt: "Pool area São Roque",
      category: "pool",
    },
    // Additional (1)
    {
      src: "/images/additional/010_Additional-photos_1.jpeg",
      alt: "Girassol property",
      category: "additional",
    },
  ],
  property: {
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    maxGuests: 6,
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
      id: "property-description",
      title: {
        en: "About the space",
        pt: "Sobre o espaço",
        es: "Sobre el espacio",
      },
      content: {
        en: "Property on two plateaus plus 2.6 hectares of nature. Pool, game room and barbecue grill on the upper plateau, with access to the main house second floor where the main suite is located with king bed and access to a common balcony with hammock supports. Second spacious bedroom with large window and double bed, third bedroom with bunk bed and additional single mattresses, and bathroom with glass shower enclosure and electric shower. On the ground floor there is a large covered balcony and barbecue grill, living room with smart TV, fireplace, and access to a secondary balcony with beautiful sunset views. The kitchen and living room share the space. Various board games, hammocks for resting, tennis and volleyball court, balls and pump, mosquito repellent equipment.",
        pt: "Terreno em dois platôs mais 2,6 hectares de natureza. Piscina, sala de jogos e churrasqueira no platô superior, com acesso ao segundo andar da casa principal onde está a suíte principal com cama king e acesso a varanda comum com suporte para redes. Segundo quarto espaçoso com janelão e cama de casal, terceiro quarto com cama beliche e mais colchões avulsos, e banheiro com box de vidro e chuveiro elétrico. No primeiro andar há uma grande varanda coberta e churrasqueira, sala com TV smart, lareira, e acesso a uma varanda secundária com belo visual do pôr do Sol. A cozinha e a sala compartilham o espaço. Diversos jogos de tabuleiro, redes para descansar, rede de tênis e vôlei, bolas e enchedor, equipamentos contra mosquitos.",
        es: "Terreno en dos mesetas más 2,6 hectáreas de naturaleza. Piscina, sala de juegos y parrilla en la meseta superior, con acceso al segundo piso de la casa principal donde está la suite principal con cama king y acceso a la terraza común con soportes para hamacas. Segundo dormitorio espacioso con ventanal y cama de matrimonio, tercer dormitorio con litera y colchones adicionales, y baño con ducha de vidrio y ducha eléctrica. En la planta baja hay una gran terraza cubierta y parrilla, sala con TV smart, chimenea, y acceso a una terraza secundaria con hermosa vista del atardecer. La cocina y la sala comparten el espacio. Diversos juegos de mesa, hamacas para descansar, cancha de tenis y voleibol, pelotas e inflador, equipos contra mosquitos.",
      },
    },
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
      title: {
        en: "Shopping and nearby",
        pt: "Compras e proximidades",
        es: "Compras y cercanías",
      },
      content: {
        en: "Market approximately 5 km before the property. For larger shopping, market 12 km before arrival.",
        pt: "Mercado a aproximadamente 5 km antes da propriedade. Para compras maiores, mercado a 12 km antes da chegada.",
        es: "Mercado aproximadamente 5 km antes de la propiedad. Para compras más grandes, mercado 12 km antes de la llegada.",
      },
    },
    {
      id: "house-rules",
      title: {
        en: "House rules",
        pt: "Regras da casa",
        es: "Reglas de la casa",
      },
      content: {
        en: "Pets allowed. Events allowed. Smoking, vaping and e-cigarettes allowed. No quiet hours. Commercial photography and filming allowed. Maximum 6 guests. Check-in between 12:00 PM and 8:00 PM. Check-out before 6:00 PM. Please do not use glass objects in the pool area. Collect all cigarette butts and small garbage that falls on the floor during your stay.",
        pt: "Animais permitidos. Eventos permitidos. Fumo, vaporizadores e cigarros eletrônicos permitidos. Sem horário de silêncio. Fotografia e filmagem comercial permitidas. Máximo 6 hóspedes. Check-in entre 12h e 20h. Check-out antes das 18h. Pedimos que não usem objetos de vidro na área da piscina. Recolher todas bitucas e pequenos lixos que caem no chão durante a estadia.",
        es: "Mascotas permitidas. Eventos permitidos. Fumar, vapear y cigarrillos electrónicos permitidos. Sin horario de silencio. Fotografía y filmación comercial permitidas. Máximo 6 huéspedes. Check-in entre 12:00 y 20:00. Check-out antes de las 18:00. Pedimos que no usen objetos de vidrio en el área de la piscina. Recolectar todas las colillas y pequeños desperdicios que caen al suelo durante la estadía.",
      },
    },
    {
      id: "pool-rules",
      title: {
        en: "Swimming pool rules",
        pt: "Regras da piscina",
        es: "Reglas de la piscina",
      },
      content: {
        en: "Do not use glass objects in the pool area. Please use plastic or other safe materials for drinks and food by the pool.",
        pt: "Não use objetos de vidro na área da piscina. Utilize plástico ou outros materiais seguros para bebidas e alimentos à beira da piscina.",
        es: "No usar objetos de vidrio en el área de la piscina. Utilice plástico u otros materiales seguros para bebidas y alimentos junto a la piscina.",
      },
    },
    {
      id: "pool-schedule",
      title: {
        en: "Pool cleaning schedule",
        pt: "Horário de limpeza da piscina",
        es: "Horario de limpieza de la piscina",
      },
      content: {
        en: "Please contact the host for the current pool cleaning schedule.",
        pt: "Consulte o horário de limpeza da piscina com o anfitrião.",
        es: "Consulte el horario de limpieza de la piscina con el anfitrión.",
      },
    },
  ],
  location: {
    mapEmbedUrl:
      "https://www.google.com/maps?q=-23.49073257663386,-47.270569464393205&output=embed",
    generalAreaUrl:
      "https://www.google.com/maps?q=-23.49073257663386,-47.270569464393205",
  },
  nearbyPlaces: [
    {
      name: "Main property (Girassol)",
      url: "https://maps.app.goo.gl/T4AyvKtfkvXzrEA67",
      distance: "12 km antes",
      type: "property",
    },
    {
      name: "Mercado São Roque",
      url: "https://maps.app.goo.gl/uc15RYv9sPc9Euij8",
      distance: "12 km antes",
      type: "market",
    },
    {
      name: "Farmácia",
      url: "https://maps.app.goo.gl/WATMaV2xWTJHARhT6",
      distance: "12 km antes",
      type: "pharmacy",
    },
    {
      name: "Panificadora e frango de padaria",
      url: "https://maps.app.goo.gl/zaotkbtZU7FLkL7C9",
      distance: "5 km antes",
      type: "bakery",
    },
    {
      name: "Mercearia Figueiras, açougue, adega, tabacaria Siqueira",
      url: "https://maps.app.goo.gl/uc15RYv9sPc9Euij8",
      distance: "5 km antes",
      type: "market",
    },
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
