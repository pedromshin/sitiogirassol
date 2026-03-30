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
      addressLocality: "São Roque",
      addressRegion: "SP",
      postalCode: "18181-000",
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
    containsPlace: {
      "@type": "Accommodation",
      bed: [
        { "@type": "BedDetails", typeOfBed: "King", numberOfBeds: 1 },
        { "@type": "BedDetails", typeOfBed: "Double", numberOfBeds: 2 },
        { "@type": "BedDetails", typeOfBed: "Bunk Bed", numberOfBeds: 1 },
      ],
      occupancy: {
        "@type": "QuantitativeValue",
        value: listingConfig.property.maxGuests,
      },
      amenityFeature,
    },
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
    additionalType: "https://schema.org/House",
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
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/${loc}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
