import { listingConfig } from "@/data/listing.config";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sitiogirassol.org";

type Locale = "en" | "pt" | "es";

const faqItems: Record<Locale, Array<{ question: string; answer: string }>> = {
  pt: [
    {
      question: "Onde fica o Sítio Girassol?",
      answer: "O Sítio Girassol fica em São Roque, SP, a aproximadamente 60 km de São Paulo. O acesso é pela Rodovia Castello Branco ou Raposo Tavares.",
    },
    {
      question: "Quantos quartos tem o Sítio Girassol?",
      answer: "São 3 quartos: suíte principal com cama king, segundo quarto com cama de casal e terceiro com beliche e colchões extras. Capacidade para até 6 hóspedes.",
    },
    {
      question: "A piscina é privativa?",
      answer: "Sim, a piscina é totalmente privativa, exclusiva para os hóspedes. A propriedade tem 2,6 hectares e é totalmente cercada.",
    },
    {
      question: "Aceita animais de estimação?",
      answer: "Sim! O Sítio Girassol é pet-friendly. Animais de estimação são bem-vindos na propriedade.",
    },
    {
      question: "Qual o valor da diária?",
      answer: `A diária a partir de R$ ${listingConfig.pricing.nightlyRate}. Oferecemos ${listingConfig.pricing.weeklyDiscountPercent}% de desconto para estadias semanais e ${listingConfig.pricing.monthlyDiscountPercent}% para mensais.`,
    },
    {
      question: "Tem churrasqueira?",
      answer: "Sim, a propriedade conta com duas churrasqueiras: uma na varanda coberta e outra na cozinha externa ao lado da piscina.",
    },
    {
      question: "Tem Wi-Fi?",
      answer: "Sim, a propriedade oferece Wi-Fi de alta velocidade em toda a casa.",
    },
    {
      question: "Quais atividades posso fazer no sítio?",
      answer: "Trilhas offroad, piscina, churrasqueira, quadra de tênis e vôlei, jogos de tabuleiro, redes para descanso, lareira e contemplação da natureza em 2,6 hectares preservados.",
    },
  ],
  en: [
    {
      question: "Where is Sítio Girassol located?",
      answer: "Sítio Girassol is located in São Roque, SP, approximately 60 km from São Paulo. Access is via Rodovia Castello Branco or Raposo Tavares highway.",
    },
    {
      question: "How many bedrooms does Sítio Girassol have?",
      answer: "There are 3 bedrooms: master suite with king bed, second bedroom with double bed, and third with bunk bed plus extra mattresses. Capacity for up to 6 guests.",
    },
    {
      question: "Is the pool private?",
      answer: "Yes, the pool is completely private, exclusive to guests. The property spans 2.6 hectares and is fully fenced.",
    },
    {
      question: "Are pets allowed?",
      answer: "Yes! Sítio Girassol is pet-friendly. Pets are welcome on the property.",
    },
    {
      question: "What is the nightly rate?",
      answer: `Rates start at R$ ${listingConfig.pricing.nightlyRate} per night. We offer ${listingConfig.pricing.weeklyDiscountPercent}% weekly and ${listingConfig.pricing.monthlyDiscountPercent}% monthly discounts.`,
    },
    {
      question: "Is there a BBQ grill?",
      answer: "Yes, the property has two BBQ grills: one on the covered balcony and another in the outdoor kitchen by the pool.",
    },
    {
      question: "Is there Wi-Fi?",
      answer: "Yes, the property offers high-speed Wi-Fi throughout the house.",
    },
    {
      question: "What activities can I do at the sítio?",
      answer: "Offroad trails, swimming pool, BBQ, tennis and volleyball court, board games, hammocks, fireplace, and nature contemplation across 2.6 hectares of preserved land.",
    },
  ],
  es: [
    {
      question: "¿Dónde queda Sítio Girassol?",
      answer: "Sítio Girassol está ubicado en São Roque, SP, aproximadamente a 60 km de São Paulo. Se accede por la Rodovia Castello Branco o Raposo Tavares.",
    },
    {
      question: "¿Cuántos dormitorios tiene Sítio Girassol?",
      answer: "Tiene 3 dormitorios: suite principal con cama king, segundo dormitorio con cama doble y tercero con litera y colchones extra. Capacidad para hasta 6 huéspedes.",
    },
    {
      question: "¿La piscina es privada?",
      answer: "Sí, la piscina es completamente privada, exclusiva para los huéspedes. La propiedad tiene 2,6 hectáreas y está completamente cercada.",
    },
    {
      question: "¿Se aceptan mascotas?",
      answer: "¡Sí! Sítio Girassol acepta mascotas. Las mascotas son bienvenidas en la propiedad.",
    },
    {
      question: "¿Cuál es el valor de la estadía?",
      answer: `Tarifas desde R$ ${listingConfig.pricing.nightlyRate} por noche. Ofrecemos ${listingConfig.pricing.weeklyDiscountPercent}% de descuento semanal y ${listingConfig.pricing.monthlyDiscountPercent}% mensual.`,
    },
    {
      question: "¿Tiene parrilla?",
      answer: "Sí, la propiedad cuenta con dos parrillas: una en la terraza cubierta y otra en la cocina exterior junto a la piscina.",
    },
    {
      question: "¿Tiene Wi-Fi?",
      answer: "Sí, la propiedad ofrece Wi-Fi de alta velocidad en toda la casa.",
    },
    {
      question: "¿Qué actividades puedo hacer en el sítio?",
      answer: "Senderos offroad, piscina, parrilla, cancha de tenis y voleibol, juegos de mesa, hamacas, chimenea y contemplación de la naturaleza en 2,6 hectáreas preservadas.",
    },
  ],
};

export default function JsonLd({ locale }: { locale: string }) {
  const loc = (locale as Locale) ?? "en";
  const title = listingConfig.meta.title[loc] ?? listingConfig.meta.title.en;
  const description = listingConfig.meta.description[loc] ?? listingConfig.meta.description.en;
  const faqs = faqItems[loc] ?? faqItems.en;

  const amenityFeature = listingConfig.amenities.flatMap((a) =>
    a.items.map((item) => ({
      "@type": "LocationFeatureSpecification" as const,
      name: item,
      value: true,
    }))
  );

  const vacationRental = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: title,
    description,
    url: `${BASE_URL}/${locale}`,
    identifier: "1345960842338220775",
    tourBookingPage: listingConfig.airbnbUrl,
    image: listingConfig.photos.slice(0, 10).map((p) => `${BASE_URL}${p.src}`),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Sem Nome, 3.14 - Vila Sorocabana",
      addressLocality: "Mairinque",
      addressRegion: "SP",
      postalCode: "18120-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.49073257663386,
      longitude: -47.270569464393205,
    },
    numberOfRooms: listingConfig.property.bedrooms,
    numberOfBathroomsTotal: listingConfig.property.bathrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: listingConfig.property.sizeSqm,
      unitCode: "MTK",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      value: listingConfig.property.maxGuests,
    },
    petsAllowed: true,
    checkinTime: "12:00",
    checkoutTime: "18:00",
    amenityFeature,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.6,
      bestRating: 5,
      worstRating: 1,
      reviewCount: 15,
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Tatyana" },
        datePublished: "2026-01",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "Passando aqui para realizar minha avaliação, onde eu e mais 4 pessoas tivemos a oportunidade de se hospedar em um espaço maravilhoso. Lugar muito aconchegante que faz você estar mais conectado com Deus e com a natureza, o espaço muito limpo e organizado ,além de uma ótima estrutura. Fomos muito bem acolhidos pelos anfitriões e de todos os espaços que visitei ,sem dúvida este é um dos melhores. Agradeço por dias tão maravilhosos, e pela rica oportunidade. Espero que possamos voltar em breve!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Arnaldo" },
        datePublished: "2026-01",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "Bom nossa estadia foi simplesmente inesquecível ficamos 5 dias 4 pessoas um cachorro foram dias ótimos nos divertimos muito quando chegamos ja esta tudo limpo a casa tem tudo que precisa ! nos sentimos em casa a casa tinha 3 banheiros todos com chuveiro quente cozinha tem de tudo quartos com cama gigante cobertas e vários travesseiros a sala contém tv tv tem Wi-Fi tinha opções para jogar vôlei ou tênis a pscina e muito top com uma cascada! realmente valeu a pena passar esses dias no sitio girassol",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mateus" },
        datePublished: "2025-12",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "Vivemos um Natal inesquecível no Sítio Paraíso. Um lugar simplesmente maravilhoso, cercado de muito verde e natureza, que transmite paz desde a chegada. A proprietária, Rosângela, nos deu todo o suporte do início ao fim da estadia, sempre muito atenciosa e prestativa. Com certeza é um lugar para voltar muitas outras vezes. Gratidão por dias tão especiais!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Luciana" },
        datePublished: "2025-03",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "Eu e minha família passamos o final de semana no Sítio Girassol ,e amamos. Casa limpa e quartos confortáveis para as 10 pessoas. Área externa linda , piscina maravilhosa. Aproveitamos tudo que tinha pra oferecer,fizemos a trilha para o rio,jogamos na quadra, fizemos fogueira á noite, piscina com cascata relaxante. A caseira muito fofa nos recepcionou com um delicioso bolo de fubá. O caseiro sempre proativo. O anfitrião incrível,sempre respondendo rápido e resolvendo qualquer eventualidade. Enfim,amamos tudo e indico de olhos fechados.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ana Gloria" },
        datePublished: "2025-03",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "O lugar é maravilhoso, corresponde exatamente como as fotos. Fora. Dias mega agradáveis. Na propriedade tem uma trilha que vai até um rio bem gostoso para relaxar, trilha de fácil acesso. A piscina é muito boa, ao lado de um espaço com mesa de jogos, churrasqueira, geladeira e banheiro, podendo passar o dia todo no ambiente. A casa corresponde perfeitamente como as fotos, roupa de cama extremamente limpas e banheiros limpos. A cozinha conta com tudo que se é necessário.",
      },
    ],
    containsPlace: [
      {
        "@type": "Accommodation",
        name: loc === "pt" ? "Suíte Principal" : loc === "es" ? "Suite Principal" : "Master Suite",
        description: loc === "pt"
          ? "Quarto com cama king size e banheiro privativo"
          : loc === "es"
          ? "Habitación con cama king size y baño privado"
          : "Bedroom with king size bed and private bathroom",
        occupancy: {
          "@type": "QuantitativeValue",
          value: 2,
        },
        bed: [{ "@type": "BedDetails", typeOfBed: "King", numberOfBeds: 1 }],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Private Bathroom", value: true },
        ],
        numberOfBedrooms: 1,
        numberOfBathroomsTotal: 1,
        image: listingConfig.photos.slice(0, 8).map((p) => `${BASE_URL}${p.src}`),
      },
      {
        "@type": "Accommodation",
        name: loc === "pt" ? "Segundo Quarto" : loc === "es" ? "Segundo Dormitorio" : "Second Bedroom",
        description: loc === "pt"
          ? "Quarto com cama de casal"
          : loc === "es"
          ? "Habitación con cama doble"
          : "Bedroom with double bed",
        occupancy: {
          "@type": "QuantitativeValue",
          value: 2,
        },
        bed: [{ "@type": "BedDetails", typeOfBed: "Double", numberOfBeds: 1 }],
        numberOfBedrooms: 1,
        numberOfBathroomsTotal: 1,
        image: listingConfig.photos.slice(0, 8).map((p) => `${BASE_URL}${p.src}`),
      },
      {
        "@type": "Accommodation",
        name: loc === "pt" ? "Terceiro Quarto" : loc === "es" ? "Tercer Dormitorio" : "Third Bedroom",
        description: loc === "pt"
          ? "Quarto com beliche e colchões extras"
          : loc === "es"
          ? "Habitación con litera y colchones extra"
          : "Bedroom with bunk bed and extra mattresses",
        occupancy: {
          "@type": "QuantitativeValue",
          value: 2,
        },
        bed: [
          { "@type": "BedDetails", typeOfBed: "Bunk Bed", numberOfBeds: 1 },
          { "@type": "BedDetails", typeOfBed: "Single", numberOfBeds: 2 },
        ],
        numberOfBedrooms: 1,
        numberOfBathroomsTotal: 1,
        image: listingConfig.photos.slice(0, 8).map((p) => `${BASE_URL}${p.src}`),
      },
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100)),
      highPrice: listingConfig.pricing.nightlyRate,
      priceCurrency: "BRL",
      offerCount: 3,
      offers: [
        {
          "@type": "Offer",
          name: loc === "pt" ? "Diária" : loc === "es" ? "Por noche" : "Nightly",
          price: listingConfig.pricing.nightlyRate,
          priceCurrency: "BRL",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: listingConfig.pricing.nightlyRate,
            priceCurrency: "BRL",
            unitText: "NIGHT",
          },
          availability: "https://schema.org/InStock",
          url: listingConfig.airbnbUrl,
        },
        {
          "@type": "Offer",
          name: loc === "pt" ? "Semanal (33% desconto)" : loc === "es" ? "Semanal (33% descuento)" : "Weekly (33% off)",
          price: Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100)),
          priceCurrency: "BRL",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100)),
            priceCurrency: "BRL",
            unitText: "NIGHT",
          },
          availability: "https://schema.org/InStock",
          url: listingConfig.airbnbUrl,
        },
        {
          "@type": "Offer",
          name: loc === "pt" ? "Mensal (50% desconto)" : loc === "es" ? "Mensual (50% descuento)" : "Monthly (50% off)",
          price: Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100)),
          priceCurrency: "BRL",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100)),
            priceCurrency: "BRL",
            unitText: "NIGHT",
          },
          availability: "https://schema.org/InStock",
          url: listingConfig.airbnbUrl,
        },
      ],
    },
    containedInPlace: {
      "@type": "City",
      name: "São Roque",
      containedInPlace: {
        "@type": "State",
        name: "São Paulo",
      },
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sítio Girassol",
    url: BASE_URL,
    logo: `${BASE_URL}/icons/og-image.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${listingConfig.whatsappNumber}`,
      contactType: "reservations",
      availableLanguage: ["Portuguese", "English", "Spanish"],
    },
    sameAs: [
      listingConfig.airbnbUrl,
      "https://www.facebook.com/profile.php?id=61555772530647",
      "https://www.instagram.com/sitiogirassol.sp/",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Sítio Girassol",
        item: `${BASE_URL}/${locale}`,
      },
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sítio Girassol",
    url: BASE_URL,
    inLanguage: [
      { "@type": "Language", name: "Portuguese" },
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Spanish" },
    ],
  };

  const touristDestination = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: loc === "pt"
      ? "São Roque - Região Vinícola de São Paulo"
      : loc === "es"
      ? "São Roque - Región Vinícola de São Paulo"
      : "São Roque - São Paulo Wine Region",
    description: loc === "pt"
      ? "São Roque é conhecida como a Terra do Vinho, localizada a apenas 60 km de São Paulo. A região oferece vinícolas, trilhas, gastronomia e turismo rural."
      : loc === "es"
      ? "São Roque es conocida como la Tierra del Vino, ubicada a solo 60 km de São Paulo. La región ofrece bodegas, senderos, gastronomía y turismo rural."
      : "São Roque is known as the Land of Wine, located just 60 km from São Paulo. The region offers wineries, trails, gastronomy, and rural tourism.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.5292,
      longitude: -47.1353,
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "São Paulo",
      "@id": "https://www.wikidata.org/wiki/Q174",
    },
    touristType: loc === "pt"
      ? ["Turismo Rural", "Enoturismo", "Turismo de Natureza", "Turismo Familiar"]
      : loc === "es"
      ? ["Turismo Rural", "Enoturismo", "Turismo de Naturaleza", "Turismo Familiar"]
      : ["Rural Tourism", "Wine Tourism", "Nature Tourism", "Family Tourism"],
    containsPlace: {
      "@type": "LodgingBusiness",
      name: "Sítio Girassol",
      url: `${BASE_URL}/${locale}`,
    },
  };

  const schemas = [vacationRental, touristDestination, organization, faqPage, breadcrumb, webSite];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
