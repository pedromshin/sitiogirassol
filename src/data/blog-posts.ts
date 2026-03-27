export type BlogPost = {
  slug: string;
  title: Record<string, string>;
  description: Record<string, string>;
  content: Record<string, string>;
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  coverAlt: Record<string, string>;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-fazer-em-sao-roque",
    title: {
      pt: "O que fazer em São Roque, SP: Guia Completo para Visitantes",
      en: "What to do in São Roque, SP: Complete Visitor Guide",
      es: "Qué hacer en São Roque, SP: Guía Completa para Visitantes",
    },
    description: {
      pt: "Descubra as melhores atrações, vinícolas, trilhas e restaurantes de São Roque. Guia completo para planejar seu fim de semana no interior de São Paulo.",
      en: "Discover the best attractions, wineries, trails, and restaurants in São Roque. Complete guide to planning your weekend in the São Paulo countryside.",
      es: "Descubre las mejores atracciones, bodegas, senderos y restaurantes de São Roque. Guía completa para planificar tu fin de semana en el interior de São Paulo.",
    },
    content: {
      pt: `São Roque é um dos destinos mais procurados do interior de São Paulo, localizado a apenas 60 km da capital. Conhecida como a "Terra do Vinho", a cidade oferece uma combinação perfeita de natureza, gastronomia e cultura.

## Vinícolas e Rota do Vinho

A Rota do Vinho de São Roque é a principal atração da cidade, com mais de 30 vinícolas e adegas abertas para visitação. Destaque para a Vinícola Góes, a mais antiga da região, e a Villa Santa Maria.

## Trilhas e Natureza

Para os amantes de natureza, São Roque oferece diversas trilhas ecológicas. A região tem morros, cachoeiras e áreas de mata atlântica preservada. No **Sítio Girassol**, você encontra 2,6 hectares de natureza preservada com trilhas offroad, piscina privativa e total privacidade.

## Gastronomia

A cidade é famosa por seus restaurantes de comida italiana e contemporânea. Não deixe de experimentar o vinho local acompanhado de queijos artesanais.

## Onde se hospedar

Para uma experiência completa, recomendamos alugar uma chácara na região. O **Sítio Girassol** oferece 3 quartos, piscina privativa, churrasqueira e 2,6 hectares de natureza — perfeito para famílias e grupos de até 6 pessoas. [Reserve no Airbnb](https://www.airbnb.com/rooms/1345960842338220775).

## Como chegar

De São Paulo, pegue a Rodovia Castello Branco e saia no km 54B para acessar a Rodovia Raposo Tavares. O trajeto leva aproximadamente 1 hora.`,
      en: `São Roque is one of the most sought-after destinations in the São Paulo countryside, located just 60 km from the capital. Known as the "Land of Wine", the city offers a perfect combination of nature, gastronomy, and culture.

## Wineries and Wine Route

The São Roque Wine Route is the city's main attraction, with over 30 wineries and cellars open for visits. Highlights include Vinícola Góes, the oldest in the region, and Villa Santa Maria.

## Trails and Nature

For nature lovers, São Roque offers various ecological trails. The region has hills, waterfalls, and preserved Atlantic Forest areas. At **Sítio Girassol**, you'll find 2.6 hectares of preserved nature with offroad trails, a private pool, and complete privacy.

## Gastronomy

The city is famous for its Italian and contemporary restaurants. Be sure to try the local wine paired with artisanal cheeses.

## Where to Stay

For a complete experience, we recommend renting a countryside property in the region. **Sítio Girassol** offers 3 bedrooms, a private pool, BBQ, and 2.6 hectares of nature — perfect for families and groups of up to 6 people. [Book on Airbnb](https://www.airbnb.com/rooms/1345960842338220775).

## How to Get There

From São Paulo, take Rodovia Castello Branco and exit at km 54B to access Rodovia Raposo Tavares. The trip takes approximately 1 hour.`,
      es: `São Roque es uno de los destinos más buscados del interior de São Paulo, ubicado a solo 60 km de la capital. Conocida como la "Tierra del Vino", la ciudad ofrece una combinación perfecta de naturaleza, gastronomía y cultura.

## Bodegas y Ruta del Vino

La Ruta del Vino de São Roque es la principal atracción de la ciudad, con más de 30 bodegas abiertas para visitas. Destacan Vinícola Góes, la más antigua de la región, y Villa Santa Maria.

## Senderos y Naturaleza

Para los amantes de la naturaleza, São Roque ofrece diversos senderos ecológicos. La región tiene cerros, cascadas y áreas de mata atlántica preservada. En **Sítio Girassol**, encontrarás 2,6 hectáreas de naturaleza preservada con senderos offroad, piscina privada y total privacidad.

## Gastronomía

La ciudad es famosa por sus restaurantes de cocina italiana y contemporánea. No dejes de probar el vino local acompañado de quesos artesanales.

## Dónde hospedarse

Para una experiencia completa, recomendamos alquilar una finca en la región. **Sítio Girassol** ofrece 3 dormitorios, piscina privada, parrilla y 2,6 hectáreas de naturaleza — perfecto para familias y grupos de hasta 6 personas. [Reserve en Airbnb](https://www.airbnb.com/rooms/1345960842338220775).

## Cómo llegar

Desde São Paulo, tome la Rodovia Castello Branco y salga en el km 54B para acceder a la Rodovia Raposo Tavares. El trayecto toma aproximadamente 1 hora.`,
    },
    publishedAt: "2026-03-27",
    coverImage: "/images/exterior/008_Exterior_1.jpeg",
    coverAlt: {
      pt: "Vista do Sítio Girassol em São Roque, interior de São Paulo",
      en: "View of Sítio Girassol in São Roque, São Paulo countryside",
      es: "Vista de Sítio Girassol en São Roque, interior de São Paulo",
    },
    tags: ["são roque", "turismo", "interior sp", "natureza"],
  },
  {
    slug: "chacara-para-alugar-perto-de-sao-paulo",
    title: {
      pt: "Chácara para Alugar Perto de São Paulo: Dicas para Escolher a Melhor",
      en: "Countryside Rental Near São Paulo: Tips for Choosing the Best",
      es: "Finca para Alquilar Cerca de São Paulo: Consejos para Elegir la Mejor",
    },
    description: {
      pt: "Guia completo para escolher a melhor chácara para alugar perto de São Paulo. Veja o que avaliar: piscina, churrasqueira, quartos, pets e localização.",
      en: "Complete guide to choosing the best countryside rental near São Paulo. See what to evaluate: pool, BBQ, bedrooms, pets, and location.",
      es: "Guía completa para elegir la mejor finca para alquilar cerca de São Paulo. Vea qué evaluar: piscina, parrilla, dormitorios, mascotas y ubicación.",
    },
    content: {
      pt: `Escolher a chácara ideal para alugar perto de São Paulo pode parecer difícil com tantas opções. Neste guia, vamos te ajudar a tomar a melhor decisão.

## 1. Localização e Acesso

Prefira chácaras a no máximo 1h30 de São Paulo. Regiões como **São Roque**, Ibiúna, Mairinque e Atibaia oferecem ótimas opções. Verifique se a estrada de acesso é pavimentada ou se precisa de veículo 4x4.

## 2. Piscina

Piscina privativa faz toda a diferença, especialmente com crianças. Verifique se é aquecida e se tem área de deck.

## 3. Churrasqueira

Essencial para o programa de chácara! Veja se tem churrasqueira coberta (importante para dias de chuva) e se vem com utensílios.

## 4. Quartos e Capacidade

Confira o número real de camas, não apenas "quartos". Uma família de 6 pessoas precisa de pelo menos 3 quartos com camas confortáveis.

## 5. Aceita Pets?

Nem todas aceitam. Se você tem pets, filtre por propriedades pet-friendly desde o início.

## 6. Avaliações

Leia as avaliações recentes no Airbnb. Preste atenção em comentários sobre limpeza, comunicação do anfitrião e se as fotos condizem com a realidade.

## Nossa Recomendação: Sítio Girassol

O **Sítio Girassol** em São Roque atende todos esses critérios: piscina privativa, duas churrasqueiras (coberta + ao ar livre), 3 quartos (suíte king, casal e beliche), aceita pets, Wi-Fi, e 2,6 hectares de natureza preservada. A apenas 60 km de São Paulo.

Diária a partir de R$ 340 com descontos de até 50% para estadias mensais. [Reserve no Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
      en: `Choosing the ideal countryside property to rent near São Paulo can seem difficult with so many options. In this guide, we'll help you make the best decision.

## 1. Location and Access

Prefer properties within 1.5 hours of São Paulo. Regions like **São Roque**, Ibiúna, Mairinque, and Atibaia offer great options. Check if the access road is paved or requires a 4x4 vehicle.

## 2. Pool

A private pool makes all the difference, especially with children. Check if it's heated and has a deck area.

## 3. BBQ

Essential for the countryside experience! Check if there's a covered BBQ area (important for rainy days) and if utensils are included.

## 4. Bedrooms and Capacity

Check the actual number of beds, not just "bedrooms". A family of 6 needs at least 3 bedrooms with comfortable beds.

## 5. Pet-Friendly?

Not all accept pets. If you have pets, filter for pet-friendly properties from the start.

## 6. Reviews

Read recent Airbnb reviews. Pay attention to comments about cleanliness, host communication, and whether photos match reality.

## Our Recommendation: Sítio Girassol

**Sítio Girassol** in São Roque meets all these criteria: private pool, two BBQ areas (covered + outdoor), 3 bedrooms (king suite, double, bunk), pet-friendly, Wi-Fi, and 2.6 hectares of preserved nature. Just 60 km from São Paulo.

Rates from R$ 340/night with up to 50% discounts for monthly stays. [Book on Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
      es: `Elegir la finca ideal para alquilar cerca de São Paulo puede parecer difícil con tantas opciones. En esta guía, te ayudaremos a tomar la mejor decisión.

## 1. Ubicación y Acceso

Prefiere fincas a un máximo de 1h30 de São Paulo. Regiones como **São Roque**, Ibiúna, Mairinque y Atibaia ofrecen excelentes opciones. Verifica si el camino de acceso está pavimentado o si necesita vehículo 4x4.

## 2. Piscina

Una piscina privada marca la diferencia, especialmente con niños. Verifica si es climatizada y si tiene área de deck.

## 3. Parrilla

¡Esencial para la experiencia campestre! Verifica si tiene parrilla cubierta (importante para días de lluvia) y si incluye utensilios.

## 4. Dormitorios y Capacidad

Verifica el número real de camas, no solo "dormitorios". Una familia de 6 personas necesita al menos 3 dormitorios con camas cómodas.

## 5. ¿Acepta Mascotas?

No todas aceptan. Si tienes mascotas, filtra por propiedades pet-friendly desde el inicio.

## 6. Reseñas

Lee las reseñas recientes en Airbnb. Presta atención a comentarios sobre limpieza, comunicación del anfitrión y si las fotos coinciden con la realidad.

## Nuestra Recomendación: Sítio Girassol

**Sítio Girassol** en São Roque cumple todos estos criterios: piscina privada, dos parrillas (cubierta + al aire libre), 3 dormitorios (suite king, doble y litera), acepta mascotas, Wi-Fi, y 2,6 hectáreas de naturaleza preservada. A solo 60 km de São Paulo.

Tarifas desde R$ 340/noche con descuentos de hasta 50% para estadías mensuales. [Reserve en Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
    },
    publishedAt: "2026-03-27",
    coverImage: "/images/pool/001_Pool_1.jpeg",
    coverAlt: {
      pt: "Piscina privativa do Sítio Girassol, chácara para alugar em São Roque",
      en: "Private pool at Sítio Girassol, countryside rental in São Roque",
      es: "Piscina privada de Sítio Girassol, finca para alquilar en São Roque",
    },
    tags: ["chácara", "aluguel temporada", "são paulo", "piscina"],
  },
];
