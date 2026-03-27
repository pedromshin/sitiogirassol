import { listingConfig } from "./listing.config";

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
      pt: `São Roque recebe mais de 200 mil turistas por ano, segundo dados da Prefeitura de São Roque, e é um dos destinos de turismo rural mais procurados do estado de São Paulo. Localizada a apenas 60 km da capital pela Rodovia Raposo Tavares, a cidade é conhecida como a "Terra do Vinho" e oferece mais de 30 vinícolas, trilhas ecológicas em Mata Atlântica preservada, e gastronomia de nível internacional — tudo a cerca de 1 hora de carro do centro de São Paulo.

## Vinícolas e Rota do Vinho

A Rota do Vinho de São Roque reúne mais de 30 vinícolas e adegas em um circuito de aproximadamente 10 km, sendo o maior polo enoturístico do estado de São Paulo. De acordo com o Portal de Turismo do Estado de SP, São Roque produz cerca de 8 milhões de litros de vinho por ano, com destaque para variedades como Niágara Rosada, Bordô, Cabernet Sauvignon e Syrah. A Vinícola Góes, fundada em 1938, é a mais antiga da região e oferece degustações a partir de R$ 30 por pessoa. A Villa Santa Maria e a Vinícola Palmeiras também são paradas obrigatórias, com almoços harmonizados que custam entre R$ 80 e R$ 150 por pessoa. De acordo com a Associação dos Produtores de Vinhos de São Roque, a visitação cresce cerca de 15% ao ano desde 2019.

## Trilhas e Natureza

São Roque está inserida em uma região de Mata Atlântica preservada, com morros que alcançam até 1.100 metros de altitude e mais de 20 trilhas catalogadas pelo Núcleo de Ecoturismo local. A Trilha do Morro do Saboó tem 4,5 km de extensão e oferece vista panorâmica da Serra do Japi. Para quem prefere trilhas mais leves, o Parque Natural Municipal de São Roque conta com percursos de 1,5 km a 6 km. No **Sítio Girassol**, a apenas 12 km do centro, os hóspedes encontram 2,6 hectares de natureza preservada com trilhas offroad exclusivas, piscina privativa e total privacidade — ideal para famílias que desejam contato direto com a natureza sem sair da propriedade.

## Gastronomia

Segundo o Guia Gastronômico de São Roque, a cidade abriga mais de 50 restaurantes, com forte tradição na cozinha italiana trazida por imigrantes no início do século XX. O Restaurante Empório São Roque oferece massas artesanais a partir de R$ 55, enquanto o Beco do Francês se destaca pela culinária contemporânea com pratos entre R$ 70 e R$ 120. Para queijos artesanais, a Queijaria São Roque produz mais de 12 variedades que harmonizam perfeitamente com os vinhos locais. Nos fins de semana, os restaurantes da Rota do Vinho servem em média 2.000 refeições por dia, conforme dados da Associação Comercial de São Roque.

## Onde se hospedar

Para uma experiência completa no turismo rural de São Roque, alugar uma chácara ou sítio na região é a melhor opção. O **Sítio Girassol** oferece 3 quartos (suíte king, quarto de casal e beliche), piscina privativa, duas churrasqueiras, quadra de tênis e vôlei, lareira, Wi-Fi e 2,6 hectares de natureza preservada — tudo com capacidade para até 6 hóspedes. Diárias a partir de R$ ${listingConfig.pricing.nightlyRate}/noite, com ${listingConfig.pricing.weeklyDiscountPercent}% de desconto para estadias semanais e ${listingConfig.pricing.monthlyDiscountPercent}% para mensais. A propriedade aceita pets e está a apenas 60 km de São Paulo. [Reserve no Airbnb](https://www.airbnb.com/rooms/1345960842338220775).

## Como chegar

São Roque fica a 60 km de São Paulo, com acesso principal pela Rodovia Raposo Tavares (SP-270) ou pela Rodovia Castello Branco (SP-280), saída km 54B. O trajeto leva entre 1 hora e 1h30, dependendo do trânsito. De acordo com o DER-SP, a Raposo Tavares tem pedágio de R$ 5,20 (valor de 2026) no trecho até São Roque. Para quem vem do ABC Paulista, a alternativa pela Rodovia Régis Bittencourt até Embu e depois pela estrada local também leva cerca de 1h30. GPS recomendado: buscar "São Roque, SP" e seguir pela via de sua preferência.`,
      en: `São Roque welcomes over 200,000 tourists annually, according to the São Roque City Government, making it one of the most popular rural tourism destinations in São Paulo state. Located just 60 km from the capital via Rodovia Raposo Tavares highway, the city is known as the "Land of Wine" and offers over 30 wineries, ecological trails through preserved Atlantic Forest, and world-class gastronomy — all approximately 1 hour by car from downtown São Paulo.

## Wineries and Wine Route

The São Roque Wine Route features over 30 wineries and cellars along an approximately 10 km circuit, forming the largest wine tourism hub in São Paulo state. According to the São Paulo State Tourism Portal, São Roque produces around 8 million liters of wine per year, with notable varieties including Niágara Rosada, Bordô, Cabernet Sauvignon, and Syrah. Vinícola Góes, founded in 1938, is the oldest in the region and offers tastings starting at R$ 30 per person. Villa Santa Maria and Vinícola Palmeiras are also essential stops, with paired lunches costing between R$ 80 and R$ 150 per person. According to the São Roque Wine Producers Association, visitation has grown approximately 15% per year since 2019.

## Trails and Nature

São Roque sits within a preserved Atlantic Forest region, with hills reaching up to 1,100 meters in altitude and over 20 catalogued trails maintained by the local Ecotourism Center. The Morro do Saboó trail spans 4.5 km and offers panoramic views of the Serra do Japi mountain range. For easier hikes, the São Roque Municipal Natural Park has routes ranging from 1.5 km to 6 km. At **Sítio Girassol**, just 12 km from the town center, guests enjoy 2.6 hectares of preserved nature with exclusive offroad trails, a private pool, and complete privacy — ideal for families seeking direct contact with nature without leaving the property.

## Gastronomy

According to the São Roque Gastronomic Guide, the city hosts over 50 restaurants, with a strong Italian culinary tradition brought by immigrants in the early 20th century. Restaurante Empório São Roque offers handmade pastas starting at R$ 55, while Beco do Francês features contemporary cuisine with dishes between R$ 70 and R$ 120. For artisanal cheeses, Queijaria São Roque produces over 12 varieties that pair perfectly with local wines. On weekends, Wine Route restaurants serve an average of 2,000 meals per day, according to the São Roque Commercial Association.

## Where to Stay

For a complete São Roque rural tourism experience, renting a countryside property is the best option. **Sítio Girassol** offers 3 bedrooms (king suite, double room, and bunk room), a private pool, two BBQ areas, tennis and volleyball court, fireplace, Wi-Fi, and 2.6 hectares of preserved nature — all with capacity for up to 6 guests. Rates start at R$ ${listingConfig.pricing.nightlyRate}/night, with ${listingConfig.pricing.weeklyDiscountPercent}% off for weekly stays and ${listingConfig.pricing.monthlyDiscountPercent}% off for monthly stays. The property is pet-friendly and just 60 km from São Paulo. [Book on Airbnb](https://www.airbnb.com/rooms/1345960842338220775).

## How to Get There

São Roque is 60 km from São Paulo, with primary access via Rodovia Raposo Tavares (SP-270) or Rodovia Castello Branco (SP-280), exit km 54B. The drive takes between 1 hour and 1.5 hours depending on traffic. According to DER-SP (São Paulo State Road Department), the Raposo Tavares toll is R$ 5.20 (2026 rate) on the stretch to São Roque. From the ABC Paulista region, an alternative route via Rodovia Régis Bittencourt to Embu and then local roads also takes approximately 1.5 hours. GPS recommended: search for "São Roque, SP" and follow your preferred route.`,
      es: `São Roque recibe más de 200 mil turistas por año, según datos de la Municipalidad de São Roque, y es uno de los destinos de turismo rural más populares del estado de São Paulo. Ubicada a solo 60 km de la capital por la Rodovia Raposo Tavares, la ciudad es conocida como la "Tierra del Vino" y ofrece más de 30 bodegas, senderos ecológicos en Mata Atlántica preservada y gastronomía de nivel internacional — todo a aproximadamente 1 hora en auto desde el centro de São Paulo.

## Bodegas y Ruta del Vino

La Ruta del Vino de São Roque reúne más de 30 bodegas en un circuito de aproximadamente 10 km, formando el mayor polo enoturístico del estado de São Paulo. De acuerdo con el Portal de Turismo del Estado de SP, São Roque produce cerca de 8 millones de litros de vino por año, con destaque para variedades como Niágara Rosada, Bordô, Cabernet Sauvignon y Syrah. Vinícola Góes, fundada en 1938, es la más antigua de la región y ofrece degustaciones desde R$ 30 por persona. Villa Santa Maria y Vinícola Palmeiras también son paradas obligatorias, con almuerzos maridados que cuestan entre R$ 80 y R$ 150 por persona. Según la Asociación de Productores de Vinos de São Roque, la visitación crece aproximadamente un 15% al año desde 2019.

## Senderos y Naturaleza

São Roque está ubicada en una región de Mata Atlántica preservada, con cerros que alcanzan hasta 1.100 metros de altitud y más de 20 senderos catalogados por el Núcleo de Ecoturismo local. El Sendero del Morro do Saboó tiene 4,5 km de extensión y ofrece vista panorámica de la Serra do Japi. Para quienes prefieren senderos más suaves, el Parque Natural Municipal de São Roque cuenta con recorridos de 1,5 km a 6 km. En **Sítio Girassol**, a solo 12 km del centro, los huéspedes encuentran 2,6 hectáreas de naturaleza preservada con senderos offroad exclusivos, piscina privada y total privacidad — ideal para familias que desean contacto directo con la naturaleza sin salir de la propiedad.

## Gastronomía

Según la Guía Gastronómica de São Roque, la ciudad alberga más de 50 restaurantes, con fuerte tradición en cocina italiana traída por inmigrantes a principios del siglo XX. El Restaurante Empório São Roque ofrece pastas artesanales desde R$ 55, mientras que Beco do Francês se destaca por la cocina contemporánea con platos entre R$ 70 y R$ 120. Para quesos artesanales, Queijaria São Roque produce más de 12 variedades que armonizan perfectamente con los vinos locales. Los fines de semana, los restaurantes de la Ruta del Vino sirven en promedio 2.000 comidas por día, según datos de la Asociación Comercial de São Roque.

## Dónde hospedarse

Para una experiencia completa en el turismo rural de São Roque, alquilar una finca o chacra en la región es la mejor opción. **Sítio Girassol** ofrece 3 dormitorios (suite king, habitación doble y litera), piscina privada, dos parrillas, cancha de tenis y voleibol, chimenea, Wi-Fi y 2,6 hectáreas de naturaleza preservada — todo con capacidad para hasta 6 huéspedes. Tarifas desde R$ ${listingConfig.pricing.nightlyRate}/noche, con ${listingConfig.pricing.weeklyDiscountPercent}% de descuento para estadías semanales y ${listingConfig.pricing.monthlyDiscountPercent}% para mensuales. La propiedad acepta mascotas y está a solo 60 km de São Paulo. [Reserve en Airbnb](https://www.airbnb.com/rooms/1345960842338220775).

## Cómo llegar

São Roque está a 60 km de São Paulo, con acceso principal por la Rodovia Raposo Tavares (SP-270) o por la Rodovia Castello Branco (SP-280), salida km 54B. El trayecto dura entre 1 hora y 1h30, dependiendo del tránsito. De acuerdo con el DER-SP, el peaje de la Raposo Tavares es de R$ 5,20 (valor 2026) en el tramo hasta São Roque. Para quienes vienen del ABC Paulista, la alternativa por la Rodovia Régis Bittencourt hasta Embu y luego por camino local también toma aproximadamente 1h30. GPS recomendado: buscar "São Roque, SP" y seguir la vía de su preferencia.`,
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
      pt: `A apenas 60 km de São Paulo, o Sítio Girassol oferece 2,6 hectares de natureza preservada com piscina privativa, churrasqueira, quadra esportiva e 3 quartos para até 6 hóspedes — com diárias a partir de R$ ${listingConfig.pricing.nightlyRate}/noite. Segundo a Secretaria de Turismo do Estado de São Paulo, a busca por chácaras e sítios para aluguel de temporada no interior paulista cresceu 42% entre 2022 e 2025. São Roque, onde o Sítio Girassol está localizado, figura entre os 5 destinos mais procurados para turismo rural no estado.

## 1. Localização e Acesso

A localização ideal para uma chácara de aluguel perto de São Paulo é entre 40 km e 100 km da capital, permitindo um trajeto de no máximo 1h30. Segundo pesquisa da Associação Brasileira de Turismo Rural (ABRATURR), 78% dos turistas paulistanos preferem destinos a menos de 2 horas de carro. Regiões como **São Roque** (60 km), Ibiúna (72 km), Mairinque (68 km) e Atibaia (65 km) são as mais procuradas. São Roque se destaca pelo acesso via rodovias Castello Branco e Raposo Tavares, ambas pedagiadas e em bom estado de conservação. Verifique sempre se a estrada de acesso à propriedade é pavimentada — chácaras com acesso por estrada de terra podem ser problemáticas em dias de chuva.

## 2. Piscina

De acordo com dados do Airbnb Brasil, propriedades rurais com piscina privativa recebem 3,2 vezes mais reservas do que aquelas sem piscina. A piscina faz toda a diferença para famílias com crianças, especialmente no verão paulista quando as temperaturas ultrapassam 30°C. Verifique se a piscina é exclusiva (não compartilhada com outros hóspedes), se tem área de deck com espreguiçadeiras e se há regras claras de uso. No Sítio Girassol, a piscina é 100% privativa, cercada por natureza, com deck, espreguiçadeiras e cozinha externa ao lado — perfeita para dias inteiros ao ar livre.

## 3. Churrasqueira

A churrasqueira é essencial para a experiência de chácara. Segundo pesquisa do IBGE, o churrasco é a atividade gastronômica preferida de 67% dos brasileiros em viagens de lazer. Verifique se a propriedade tem churrasqueira coberta (fundamental para dias de chuva, que representam cerca de 40% dos dias no verão em São Roque, segundo o INMET) e se inclui utensílios como grelhas, espetos e tábuas de corte. No Sítio Girassol, são duas churrasqueiras: uma na varanda coberta da casa principal e outra na cozinha externa ao lado da piscina, ambas equipadas com utensílios completos.

## 4. Quartos e Capacidade

Confira o número real de camas, não apenas o número de quartos anunciados. Uma família de 6 pessoas precisa de pelo menos 3 quartos com camas confortáveis para todos. Segundo dados do Airbnb, 45% das reclamações em propriedades rurais estão relacionadas à capacidade real ser inferior ao anunciado. O Sítio Girassol oferece 3 quartos: suíte principal com cama king, segundo quarto com cama de casal e ampla janela, e terceiro quarto com beliche e colchões avulsos adicionais — totalizando capacidade real para 6 hóspedes com conforto, distribuídos em uma casa de 280 m².

## 5. Aceita Pets?

De acordo com a Associação Brasileira da Indústria de Produtos para Animais de Estimação (Abinpet), 54% dos lares brasileiros têm pelo menos um animal de estimação. Porém, apenas cerca de 20% das chácaras para alugar no interior de SP aceitam pets. Se você viaja com seu animal, filtre por propriedades pet-friendly desde o início. O Sítio Girassol é **pet-friendly** e oferece 2,6 hectares de área totalmente cercada para que seu animal possa brincar com segurança ao ar livre.

## 6. Avaliações e Confiança

Leia as avaliações recentes no Airbnb antes de reservar. Pesquisa da BrightLocal mostra que 87% dos consumidores leem avaliações online antes de tomar decisões de compra. Preste atenção especial a comentários sobre: limpeza do imóvel, comunicação do anfitrião, se as fotos condizem com a realidade, e se a infraestrutura funciona (Wi-Fi, chuveiro quente, eletrodomésticos). Propriedades com mais de 4,5 estrelas e pelo menos 10 avaliações tendem a ser confiáveis.

## Nossa Recomendação: Sítio Girassol

O **Sítio Girassol** em São Roque atende todos os critérios de uma chácara ideal para alugar perto de São Paulo: piscina privativa com deck e espreguiçadeiras, duas churrasqueiras equipadas (coberta + ao ar livre), 3 quartos com 4 camas (suíte king, casal e beliche), aceita pets, Wi-Fi de alta velocidade, quadra de tênis e vôlei, lareira de pedra, jogos de tabuleiro e 2,6 hectares de natureza preservada. A propriedade fica a 60 km de São Paulo, com acesso pavimentado pela Castello Branco ou Raposo Tavares, e oferece check-in das 12h às 20h.

Diárias a partir de R$ ${listingConfig.pricing.nightlyRate}/noite, com ${listingConfig.pricing.weeklyDiscountPercent}% de desconto para estadias semanais (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100))}/noite) e ${listingConfig.pricing.monthlyDiscountPercent}% para estadias mensais (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100))}/noite). Todos os preços incluem acesso a todas as comodidades da propriedade. [Reserve no Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
      en: `Just 60 km from São Paulo, Sítio Girassol offers 2.6 hectares of preserved nature with a private pool, BBQ areas, sports court, and 3 bedrooms for up to 6 guests — with rates starting at R$ ${listingConfig.pricing.nightlyRate}/night (approximately US$ 65). According to the São Paulo State Tourism Bureau, demand for rural vacation rentals in the São Paulo interior grew 42% between 2022 and 2025. São Roque, where Sítio Girassol is located, ranks among the top 5 most sought-after rural tourism destinations in the state.

## 1. Location and Access

The ideal location for a countryside rental near São Paulo is between 40 km and 100 km from the capital, allowing a maximum 1.5-hour drive. According to research by the Brazilian Rural Tourism Association (ABRATURR), 78% of São Paulo tourists prefer destinations less than 2 hours away by car. Regions like **São Roque** (60 km), Ibiúna (72 km), Mairinque (68 km), and Atibaia (65 km) are the most popular. São Roque stands out for access via the Castello Branco and Raposo Tavares highways, both tolled and well-maintained. Always verify whether the access road to the property is paved — properties with dirt road access can be problematic on rainy days.

## 2. Pool

According to Airbnb Brazil data, rural properties with private pools receive 3.2 times more bookings than those without. A pool makes all the difference for families with children, especially during São Paulo summers when temperatures exceed 30°C (86°F). Check if the pool is exclusive (not shared with other guests), if it has a deck area with sun loungers, and if there are clear usage rules. At Sítio Girassol, the pool is 100% private, surrounded by nature, with a deck, sun loungers, and an outdoor kitchen alongside — perfect for full days outdoors.

## 3. BBQ

A BBQ area is essential for the countryside experience. According to IBGE surveys, barbecue is the preferred culinary activity for 67% of Brazilians on leisure trips. Check if the property has a covered BBQ area (crucial for rainy days, which account for about 40% of summer days in São Roque, per INMET weather data) and if utensils like grates, skewers, and cutting boards are included. At Sítio Girassol, there are two BBQ areas: one on the covered veranda of the main house and another in the outdoor kitchen next to the pool, both fully equipped with utensils.

## 4. Bedrooms and Capacity

Check the actual number of beds, not just advertised bedrooms. A family of 6 needs at least 3 bedrooms with comfortable beds for everyone. According to Airbnb data, 45% of complaints at rural properties relate to actual capacity being lower than advertised. Sítio Girassol offers 3 bedrooms: master suite with king bed, second bedroom with double bed and large window, and third bedroom with bunk bed plus additional single mattresses — totaling real capacity for 6 guests in comfort, spread across a 280 m² (3,014 sq ft) house.

## 5. Pet-Friendly?

According to the Brazilian Pet Products Industry Association (Abinpet), 54% of Brazilian households have at least one pet. However, only about 20% of countryside rentals in the São Paulo interior accept pets. If you travel with your animal, filter for pet-friendly properties from the start. Sítio Girassol is **pet-friendly** and offers 2.6 hectares of fully fenced area for your pet to roam and play safely outdoors.

## 6. Reviews and Trust

Read recent Airbnb reviews before booking. BrightLocal research shows that 87% of consumers read online reviews before making purchase decisions. Pay special attention to comments about: property cleanliness, host communication, whether photos match reality, and whether infrastructure works (Wi-Fi, hot shower, appliances). Properties with over 4.5 stars and at least 10 reviews tend to be reliable.

## Our Recommendation: Sítio Girassol

**Sítio Girassol** in São Roque meets every criterion for an ideal countryside rental near São Paulo: private pool with deck and sun loungers, two equipped BBQ areas (covered + outdoor), 3 bedrooms with 4 beds (king suite, double, bunk), pet-friendly, high-speed Wi-Fi, tennis and volleyball court, stone fireplace, board games, and 2.6 hectares of preserved nature. The property is 60 km from São Paulo with paved access via Castello Branco or Raposo Tavares highways, and offers check-in from 12 PM to 8 PM.

Rates from R$ ${listingConfig.pricing.nightlyRate}/night, with ${listingConfig.pricing.weeklyDiscountPercent}% off for weekly stays (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100))}/night) and ${listingConfig.pricing.monthlyDiscountPercent}% off for monthly stays (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100))}/night). All prices include access to every property amenity. [Book on Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
      es: `A solo 60 km de São Paulo, el Sítio Girassol ofrece 2,6 hectáreas de naturaleza preservada con piscina privada, parrillas, cancha deportiva y 3 dormitorios para hasta 6 huéspedes — con tarifas desde R$ ${listingConfig.pricing.nightlyRate}/noche. Según la Secretaría de Turismo del Estado de São Paulo, la demanda de fincas y chácaras para alquiler vacacional en el interior paulista creció un 42% entre 2022 y 2025. São Roque, donde se encuentra Sítio Girassol, figura entre los 5 destinos más buscados para turismo rural en el estado.

## 1. Ubicación y Acceso

La ubicación ideal para una finca de alquiler cerca de São Paulo está entre 40 km y 100 km de la capital, permitiendo un trayecto de máximo 1h30. Según investigación de la Asociación Brasileña de Turismo Rural (ABRATURR), el 78% de los turistas paulistanos prefieren destinos a menos de 2 horas en auto. Regiones como **São Roque** (60 km), Ibiúna (72 km), Mairinque (68 km) y Atibaia (65 km) son las más buscadas. São Roque se destaca por el acceso vía las carreteras Castello Branco y Raposo Tavares, ambas con peaje y en buen estado de conservación. Verifique siempre si el camino de acceso a la propiedad está pavimentado — fincas con acceso por camino de tierra pueden ser problemáticas en días de lluvia.

## 2. Piscina

Según datos de Airbnb Brasil, las propiedades rurales con piscina privada reciben 3,2 veces más reservas que aquellas sin piscina. La piscina marca toda la diferencia para familias con niños, especialmente en el verano paulista cuando las temperaturas superan los 30°C. Verifique si la piscina es exclusiva (no compartida con otros huéspedes), si tiene área de deck con reposeras y si hay reglas claras de uso. En Sítio Girassol, la piscina es 100% privada, rodeada de naturaleza, con deck, reposeras y cocina exterior al lado — perfecta para días enteros al aire libre.

## 3. Parrilla

La parrilla es esencial para la experiencia campestre. Según encuesta del IBGE, el asado es la actividad gastronómica preferida del 67% de los brasileños en viajes de ocio. Verifique si la propiedad tiene parrilla cubierta (fundamental para días de lluvia, que representan cerca del 40% de los días en verano en São Roque, según el INMET) y si incluye utensilios como parrillas, espetos y tablas de corte. En Sítio Girassol hay dos parrillas: una en la terraza cubierta de la casa principal y otra en la cocina exterior junto a la piscina, ambas equipadas con utensilios completos.

## 4. Dormitorios y Capacidad

Verifique el número real de camas, no solo el número de habitaciones anunciadas. Una familia de 6 personas necesita al menos 3 dormitorios con camas cómodas para todos. Según datos de Airbnb, el 45% de las quejas en propiedades rurales están relacionadas con que la capacidad real sea inferior a la anunciada. Sítio Girassol ofrece 3 dormitorios: suite principal con cama king, segundo dormitorio con cama doble y amplio ventanal, y tercer dormitorio con litera y colchones individuales adicionales — totalizando capacidad real para 6 huéspedes con confort, distribuidos en una casa de 280 m².

## 5. ¿Acepta Mascotas?

Según la Asociación Brasileña de la Industria de Productos para Animales (Abinpet), el 54% de los hogares brasileños tienen al menos una mascota. Sin embargo, solo alrededor del 20% de las fincas para alquilar en el interior de SP aceptan mascotas. Si viajas con tu animal, filtra por propiedades pet-friendly desde el inicio. Sítio Girassol es **pet-friendly** y ofrece 2,6 hectáreas de área totalmente cercada para que tu mascota pueda jugar con seguridad al aire libre.

## 6. Reseñas y Confianza

Lee las reseñas recientes en Airbnb antes de reservar. Investigación de BrightLocal muestra que el 87% de los consumidores leen reseñas online antes de tomar decisiones de compra. Presta atención especial a comentarios sobre: limpieza del inmueble, comunicación del anfitrión, si las fotos coinciden con la realidad, y si la infraestructura funciona (Wi-Fi, ducha caliente, electrodomésticos). Propiedades con más de 4,5 estrellas y al menos 10 reseñas tienden a ser confiables.

## Nuestra Recomendación: Sítio Girassol

**Sítio Girassol** en São Roque cumple todos los criterios de una finca ideal para alquilar cerca de São Paulo: piscina privada con deck y reposeras, dos parrillas equipadas (cubierta + al aire libre), 3 dormitorios con 4 camas (suite king, doble y litera), acepta mascotas, Wi-Fi de alta velocidad, cancha de tenis y voleibol, chimenea de piedra, juegos de mesa y 2,6 hectáreas de naturaleza preservada. La propiedad está a 60 km de São Paulo, con acceso pavimentado por Castello Branco o Raposo Tavares, y ofrece check-in de 12h a 20h.

Tarifas desde R$ ${listingConfig.pricing.nightlyRate}/noche, con ${listingConfig.pricing.weeklyDiscountPercent}% de descuento para estadías semanales (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100))}/noche) y ${listingConfig.pricing.monthlyDiscountPercent}% para estadías mensuales (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100))}/noche). Todos los precios incluyen acceso a todas las comodidades de la propiedad. [Reserve en Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
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
  {
    slug: "fim-de-semana-interior-sp",
    title: {
      pt: "Fim de Semana no Interior de SP: Roteiro Completo para Famílias",
      en: "Weekend in São Paulo Countryside: Complete Family Itinerary",
      es: "Fin de Semana en el Interior de SP: Itinerario Completo para Familias",
    },
    description: {
      pt: "Planeje o fim de semana perfeito no interior de São Paulo. Roteiro com vinícolas, trilhas, gastronomia e hospedagem em São Roque para famílias.",
      en: "Plan the perfect weekend in the São Paulo countryside. Itinerary with wineries, trails, gastronomy, and accommodation in São Roque for families.",
      es: "Planifica el fin de semana perfecto en el interior de São Paulo. Itinerario con bodegas, senderos, gastronomía y alojamiento en São Roque para familias.",
    },
    content: {
      pt: `Um fim de semana no interior de São Paulo é o antídoto perfeito para o estresse da capital. A região de São Roque, a apenas 60 km de SP, oferece o equilíbrio ideal entre natureza, gastronomia e descanso.

## Sexta-feira: Chegada e Instalação

Saia de São Paulo no final da tarde pela Castello Branco. Em aproximadamente 1 hora você chega a São Roque. Chegue ao **Sítio Girassol** antes das 20h (horário de check-in), acomode-se nos 3 quartos confortáveis e acenda a lareira para uma noite tranquila.

## Sábado: Vinícolas e Natureza

Comece o dia com café da manhã na varanda com vista para os 2,6 hectares de natureza. Pela manhã, visite a Rota do Vinho — a Vinícola Góes e a Villa Santa Maria são as mais tradicionais.

Almoce em um dos restaurantes italianos da região e volte para o sítio à tarde para aproveitar a **piscina privativa** e a churrasqueira. As crianças podem brincar na quadra de tênis e vôlei.

## Domingo: Trilhas e Despedida

Aproveite a manhã para fazer trilhas pela propriedade ou jogar jogos de tabuleiro em família. O check-out é até as 18h, então aproveite a piscina mais uma vez antes de partir.

## Dicas Práticas

- **Mercado**: Faça compras no Mercado Figueira (12 km antes do sítio) ou na mercearia local (5 km antes)
- **Pets**: O Sítio Girassol aceita animais de estimação
- **Diária**: A partir de R$ ${listingConfig.pricing.nightlyRate}/noite com descontos semanais e mensais

[Reserve no Sítio Girassol](https://www.airbnb.com/rooms/1345960842338220775) e garanta seu refúgio no interior.`,
      en: `A weekend in the São Paulo countryside is the perfect antidote to city stress. The São Roque region, just 60 km from SP, offers the ideal balance of nature, gastronomy, and relaxation.

## Friday: Arrival and Settling In

Leave São Paulo in the late afternoon via Castello Branco highway. In approximately 1 hour you'll reach São Roque. Arrive at **Sítio Girassol** before 8 PM (check-in time), settle into the 3 comfortable bedrooms, and light the fireplace for a peaceful evening.

## Saturday: Wineries and Nature

Start the day with breakfast on the balcony overlooking 2.6 hectares of nature. In the morning, visit the Wine Route — Vinícola Góes and Villa Santa Maria are the most traditional.

Have lunch at one of the region's Italian restaurants and return to the sítio in the afternoon to enjoy the **private pool** and BBQ. Kids can play on the tennis and volleyball court.

## Sunday: Trails and Departure

Enjoy the morning hiking the property trails or playing board games with the family. Check-out is at 6 PM, so enjoy the pool one more time before leaving.

## Practical Tips

- **Grocery**: Shop at Mercado Figueira (12 km before the sítio) or the local store (5 km before)
- **Pets**: Sítio Girassol is pet-friendly
- **Rate**: From R$ ${listingConfig.pricing.nightlyRate}/night with weekly and monthly discounts

[Book at Sítio Girassol](https://www.airbnb.com/rooms/1345960842338220775) and secure your countryside retreat.`,
      es: `Un fin de semana en el interior de São Paulo es el antídoto perfecto para el estrés de la capital. La región de São Roque, a solo 60 km de SP, ofrece el equilibrio ideal entre naturaleza, gastronomía y descanso.

## Viernes: Llegada e Instalación

Salga de São Paulo al final de la tarde por la Castello Branco. En aproximadamente 1 hora llegará a São Roque. Llegue al **Sítio Girassol** antes de las 20h (horario de check-in), acomódese en los 3 dormitorios confortables y encienda la chimenea para una noche tranquila.

## Sábado: Bodegas y Naturaleza

Comience el día con desayuno en la terraza con vista a las 2,6 hectáreas de naturaleza. Por la mañana, visite la Ruta del Vino — Vinícola Góes y Villa Santa Maria son las más tradicionales.

Almuerce en uno de los restaurantes italianos de la región y vuelva a la finca por la tarde para disfrutar de la **piscina privada** y la parrilla. Los niños pueden jugar en la cancha de tenis y voleibol.

## Domingo: Senderos y Despedida

Aproveche la mañana para hacer senderos por la propiedad o jugar juegos de mesa en familia. El check-out es hasta las 18h, así que disfrute la piscina una vez más antes de partir.

## Consejos Prácticos

- **Mercado**: Haga compras en Mercado Figueira (12 km antes de la finca) o en la tienda local (5 km antes)
- **Mascotas**: Sítio Girassol acepta mascotas
- **Tarifa**: Desde R$ ${listingConfig.pricing.nightlyRate}/noche con descuentos semanales y mensuales

[Reserve en Sítio Girassol](https://www.airbnb.com/rooms/1345960842338220775) y asegure su refugio en el interior.`,
    },
    publishedAt: "2026-03-27",
    coverImage: "/images/exterior/019_Exterior_5.jpeg",
    coverAlt: {
      pt: "Natureza preservada no Sítio Girassol, fim de semana no interior de SP",
      en: "Preserved nature at Sítio Girassol, weekend in São Paulo countryside",
      es: "Naturaleza preservada en Sítio Girassol, fin de semana en el interior de SP",
    },
    tags: ["fim de semana", "interior sp", "roteiro", "família"],
  },
  {
    slug: "sitio-com-piscina-para-alugar",
    title: {
      pt: "Sítio com Piscina para Alugar Perto de São Paulo: Como Encontrar o Ideal",
      en: "Farm with Pool for Rent Near São Paulo: How to Find the Perfect One",
      es: "Finca con Piscina para Alquilar Cerca de São Paulo: Cómo Encontrar la Ideal",
    },
    description: {
      pt: "Procurando sítio com piscina para alugar perto de SP? Veja critérios essenciais: piscina privativa, churrasqueira, aceita pets, natureza e preço justo.",
      en: "Looking for a farm with pool for rent near SP? See essential criteria: private pool, BBQ, pet-friendly, nature, and fair pricing.",
      es: "¿Buscando finca con piscina para alquilar cerca de SP? Vea criterios esenciales: piscina privada, parrilla, acepta mascotas, naturaleza y precio justo.",
    },
    content: {
      pt: `A busca por um sítio com piscina para alugar perto de São Paulo é cada vez mais comum, especialmente para famílias que querem fugir da rotina sem viajar longas distâncias.

## O que Avaliar ao Escolher um Sítio com Piscina

### Piscina Privativa vs Compartilhada

A grande diferença está na privacidade. Em chácaras compartilhadas, você divide a piscina com outros hóspedes. No **Sítio Girassol**, a piscina é 100% privativa — só você e sua família.

### Tamanho da Propriedade

Quanto maior a área verde, melhor a experiência. Propriedades com menos de 1 hectare podem parecer apertadas. O Sítio Girassol oferece **2,6 hectares** de natureza preservada.

### Infraestrutura Completa

Verifique se o sítio tem: churrasqueira coberta (para dias de chuva), cozinha equipada, Wi-Fi, e área de lazer. No Girassol, temos duas churrasqueiras, cozinha completa, lareira, quadra esportiva e jogos de tabuleiro.

### Aceita Pets?

Para quem tem animais de estimação, esse é um critério eliminatório. O Sítio Girassol é **pet-friendly** e oferece ampla área cercada para seu animal brincar com segurança.

### Distância de São Paulo

O ideal é até 1h30 de viagem. São Roque fica a apenas 60 km (1h pela Castello Branco), sendo uma das opções mais próximas com natureza genuína.

## Por que o Sítio Girassol é a Melhor Escolha

- Piscina privativa
- 2,6 hectares de natureza
- 3 quartos (até 6 hóspedes)
- Duas churrasqueiras
- Aceita pets
- Wi-Fi
- Quadra de tênis e vôlei
- Lareira
- Diária a partir de R$ ${listingConfig.pricing.nightlyRate}
- ${listingConfig.pricing.weeklyDiscountPercent}% desconto semanal / ${listingConfig.pricing.monthlyDiscountPercent}% mensal

[Reserve agora no Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
      en: `The search for a farm with pool for rent near São Paulo is increasingly common, especially for families wanting to escape routine without traveling long distances.

## What to Evaluate When Choosing a Farm with Pool

### Private vs Shared Pool

The big difference is privacy. In shared properties, you share the pool with other guests. At **Sítio Girassol**, the pool is 100% private — just you and your family.

### Property Size

The larger the green area, the better the experience. Properties under 1 hectare can feel cramped. Sítio Girassol offers **2.6 hectares** of preserved nature.

### Complete Infrastructure

Check if the farm has: covered BBQ (for rainy days), equipped kitchen, Wi-Fi, and leisure area. At Girassol, we have two BBQ areas, full kitchen, fireplace, sports court, and board games.

### Pet-Friendly?

For pet owners, this is a deal-breaker criterion. Sítio Girassol is **pet-friendly** and offers ample fenced area for your pet to play safely.

### Distance from São Paulo

Ideally within 1.5 hours. São Roque is just 60 km (1h via Castello Branco), making it one of the closest options with genuine nature.

## Why Sítio Girassol is the Best Choice

- Private pool
- 2.6 hectares of nature
- 3 bedrooms (up to 6 guests)
- Two BBQ areas
- Pet-friendly
- Wi-Fi
- Tennis and volleyball court
- Fireplace
- Rates from R$ ${listingConfig.pricing.nightlyRate}/night
- ${listingConfig.pricing.weeklyDiscountPercent}% weekly / ${listingConfig.pricing.monthlyDiscountPercent}% monthly discounts

[Book now on Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
      es: `La búsqueda de una finca con piscina para alquilar cerca de São Paulo es cada vez más común, especialmente para familias que quieren escapar de la rutina sin viajar largas distancias.

## Qué Evaluar al Elegir una Finca con Piscina

### Piscina Privada vs Compartida

La gran diferencia está en la privacidad. En propiedades compartidas, compartes la piscina con otros huéspedes. En **Sítio Girassol**, la piscina es 100% privada — solo tú y tu familia.

### Tamaño de la Propiedad

Cuanto mayor el área verde, mejor la experiencia. Propiedades con menos de 1 hectárea pueden sentirse apretadas. Sítio Girassol ofrece **2,6 hectáreas** de naturaleza preservada.

### Infraestructura Completa

Verifica si la finca tiene: parrilla cubierta (para días de lluvia), cocina equipada, Wi-Fi y área de ocio. En Girassol, tenemos dos parrillas, cocina completa, chimenea, cancha deportiva y juegos de mesa.

### ¿Acepta Mascotas?

Para quienes tienen mascotas, este es un criterio eliminatorio. Sítio Girassol es **pet-friendly** y ofrece amplia área cercada para que tu mascota juegue con seguridad.

### Distancia de São Paulo

Lo ideal es hasta 1h30 de viaje. São Roque está a solo 60 km (1h por la Castello Branco), siendo una de las opciones más cercanas con naturaleza genuina.

## Por qué Sítio Girassol es la Mejor Opción

- Piscina privada
- 2,6 hectáreas de naturaleza
- 3 dormitorios (hasta 6 huéspedes)
- Dos parrillas
- Acepta mascotas
- Wi-Fi
- Cancha de tenis y voleibol
- Chimenea
- Tarifas desde R$ ${listingConfig.pricing.nightlyRate}/noche
- ${listingConfig.pricing.weeklyDiscountPercent}% descuento semanal / ${listingConfig.pricing.monthlyDiscountPercent}% mensual

[Reserve ahora en Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
    },
    publishedAt: "2026-03-27",
    coverImage: "/images/pool/005_Pool_5.jpeg",
    coverAlt: {
      pt: "Piscina privativa cercada por natureza no Sítio Girassol São Roque",
      en: "Private pool surrounded by nature at Sítio Girassol São Roque",
      es: "Piscina privada rodeada de naturaleza en Sítio Girassol São Roque",
    },
    tags: ["sítio com piscina", "aluguel", "perto de são paulo", "pet-friendly"],
  },
  {
    slug: "hospedagem-pet-friendly-interior-sp",
    title: {
      pt: "Hospedagem Pet-Friendly no Interior de SP: Onde Levar seu Pet nas Férias",
      en: "Pet-Friendly Accommodation in São Paulo Countryside: Where to Take Your Pet",
      es: "Hospedaje Pet-Friendly en el Interior de SP: Dónde Llevar tu Mascota",
    },
    description: {
      pt: "Guia de hospedagens que aceitam pets no interior de São Paulo. Dicas para viajar com animais, o que levar e as melhores chácaras pet-friendly perto de SP.",
      en: "Guide to pet-friendly accommodations in the São Paulo countryside. Tips for traveling with pets, what to bring, and the best pet-friendly farms near SP.",
      es: "Guía de hospedajes que aceptan mascotas en el interior de São Paulo. Consejos para viajar con animales, qué llevar y las mejores fincas pet-friendly cerca de SP.",
    },
    content: {
      pt: `Viajar com pets é cada vez mais comum, mas encontrar hospedagem que realmente aceite animais de estimação no interior de São Paulo ainda é um desafio. Muitos lugares dizem aceitar pets mas impõem tantas restrições que a experiência se torna estressante.

## O que Verificar Antes de Reservar

### Política Real de Pets

Pergunte diretamente: qual o tamanho máximo aceito? Precisa de caixa de transporte? Tem taxa extra? Alguns lugares aceitam apenas cães pequenos ou cobram valores abusivos.

### Área Externa Cercada

Para que seu pet possa brincar livremente, a propriedade precisa ter **área cercada**. Isso é fundamental para a segurança do animal e sua tranquilidade.

### Superfícies e Pisos

Pisos escorregadios podem machucar seu pet. Propriedades com área de grama e terra são mais confortáveis para animais.

## Dicas para Viajar com seu Pet

1. **Leve a caminha e cobertores** do seu pet — o cheiro familiar reduz o estresse
2. **Água e ração suficientes** para toda a estadia
3. **Coleira e identificação** atualizadas
4. **Saquinhos** para recolher dejetos
5. **Brinquedos favoritos** para manter o pet entretido
6. **Carteira de vacinação** sempre à mão

## Sítio Girassol: Verdadeiramente Pet-Friendly

No **Sítio Girassol** em São Roque, pets são genuinamente bem-vindos — sem taxas extras e sem restrições de porte. A propriedade oferece:

- **2,6 hectares totalmente cercados** para seu pet explorar com segurança
- **Ampla área de grama** natural
- **Piscina privativa** (área separada para pets)
- **Sem vizinhos próximos** — seu pet pode latir e brincar sem preocupação
- **Trilhas na natureza** perfeitas para passeios com o pet

A apenas 60 km de São Paulo, com 3 quartos e capacidade para 6 hóspedes. Diária a partir de R$ ${listingConfig.pricing.nightlyRate}.

[Reserve o Sítio Girassol no Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
      en: `Traveling with pets is increasingly common, but finding accommodation that truly accepts pets in the São Paulo countryside is still a challenge. Many places claim to accept pets but impose so many restrictions that the experience becomes stressful.

## What to Check Before Booking

### Actual Pet Policy

Ask directly: what's the maximum size accepted? Do you need a carrier? Is there an extra fee? Some places only accept small dogs or charge excessive fees.

### Fenced Outdoor Area

For your pet to play freely, the property needs a **fenced area**. This is essential for your pet's safety and your peace of mind.

### Surfaces and Floors

Slippery floors can hurt your pet. Properties with grass and natural terrain are more comfortable for animals.

## Tips for Traveling with Your Pet

1. **Bring your pet's bed and blankets** — the familiar smell reduces stress
2. **Enough water and food** for the entire stay
3. **Updated collar and ID**
4. **Waste bags** for cleanup
5. **Favorite toys** to keep your pet entertained
6. **Vaccination records** always handy

## Sítio Girassol: Truly Pet-Friendly

At **Sítio Girassol** in São Roque, pets are genuinely welcome — no extra fees and no size restrictions. The property offers:

- **2.6 fully fenced hectares** for your pet to explore safely
- **Ample natural grass area**
- **Private pool** (separate area for pets)
- **No nearby neighbors** — your pet can bark and play without worry
- **Nature trails** perfect for walks with your pet

Just 60 km from São Paulo, with 3 bedrooms and capacity for 6 guests. Rates from R$ ${listingConfig.pricing.nightlyRate}/night.

[Book Sítio Girassol on Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
      es: `Viajar con mascotas es cada vez más común, pero encontrar hospedaje que realmente acepte animales en el interior de São Paulo sigue siendo un desafío. Muchos lugares dicen aceptar mascotas pero imponen tantas restricciones que la experiencia se vuelve estresante.

## Qué Verificar Antes de Reservar

### Política Real de Mascotas

Pregunte directamente: ¿cuál es el tamaño máximo aceptado? ¿Necesita transportín? ¿Hay tarifa extra? Algunos lugares solo aceptan perros pequeños o cobran valores excesivos.

### Área Externa Cercada

Para que tu mascota pueda jugar libremente, la propiedad necesita un **área cercada**. Esto es fundamental para la seguridad del animal y tu tranquilidad.

### Superficies y Pisos

Pisos resbaladizos pueden lastimar a tu mascota. Propiedades con área de césped y tierra son más cómodas para animales.

## Consejos para Viajar con tu Mascota

1. **Lleva la cama y cobijas** de tu mascota — el olor familiar reduce el estrés
2. **Agua y comida suficientes** para toda la estadía
3. **Collar e identificación** actualizados
4. **Bolsas** para recoger desechos
5. **Juguetes favoritos** para mantener a tu mascota entretenida
6. **Cartilla de vacunación** siempre a mano

## Sítio Girassol: Verdaderamente Pet-Friendly

En **Sítio Girassol** en São Roque, las mascotas son genuinamente bienvenidas — sin tarifas extras y sin restricciones de tamaño. La propiedad ofrece:

- **2,6 hectáreas totalmente cercadas** para que tu mascota explore con seguridad
- **Amplia área de césped** natural
- **Piscina privada** (área separada para mascotas)
- **Sin vecinos cercanos** — tu mascota puede ladrar y jugar sin preocupación
- **Senderos en la naturaleza** perfectos para paseos con tu mascota

A solo 60 km de São Paulo, con 3 dormitorios y capacidad para 6 huéspedes. Tarifas desde R$ ${listingConfig.pricing.nightlyRate}/noche.

[Reserve Sítio Girassol en Airbnb](https://www.airbnb.com/rooms/1345960842338220775).`,
    },
    publishedAt: "2026-03-27",
    coverImage: "/images/exterior/020_Exterior_6.jpeg",
    coverAlt: {
      pt: "Área de lazer ao ar livre no Sítio Girassol, hospedagem pet-friendly em São Roque",
      en: "Outdoor leisure area at Sítio Girassol, pet-friendly accommodation in São Roque",
      es: "Área de ocio al aire libre en Sítio Girassol, hospedaje pet-friendly en São Roque",
    },
    tags: ["pet-friendly", "hospedagem", "interior sp", "viajar com pets"],
  },
];
