"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

type Locale = "en" | "pt" | "es";

const faqItems: Record<Locale, Array<{ question: string; answer: string }>> = {
  pt: [
    {
      question: "Onde fica o Sítio Girassol?",
      answer: "O Sítio Girassol fica em São Roque, SP, a 60 km de São Paulo (coordenadas GPS: -23.4907, -47.2706). O acesso é pela Rodovia Castello Branco (SP-280, saída km 54B) ou pela Rodovia Raposo Tavares (SP-270). O trajeto de carro desde o centro de São Paulo leva entre 1 hora e 1h30. A propriedade fica a 12 km do centro de São Roque, com acesso por estrada local.",
    },
    {
      question: "Quantos quartos tem o Sítio Girassol?",
      answer: "O Sítio Girassol tem 3 quartos em uma casa de 280 m²: suíte principal com cama king e acesso à varanda com suporte para redes, segundo quarto espaçoso com cama de casal e janelão, e terceiro quarto com beliche e colchões avulsos adicionais. São 3 banheiros completos com box de vidro e chuveiro elétrico. Capacidade total para até 6 hóspedes com conforto.",
    },
    {
      question: "A piscina é privativa?",
      answer: "Sim, a piscina do Sítio Girassol é 100% privativa e exclusiva para os hóspedes durante toda a estadia. A propriedade ocupa 2,6 hectares (26.000 m²) e é totalmente cercada, garantindo privacidade total. A área da piscina conta com deck, espreguiçadeiras, cozinha externa com churrasqueira e chuveiro ao ar livre.",
    },
    {
      question: "Aceita animais de estimação?",
      answer: "Sim, o Sítio Girassol é pet-friendly. Animais de estimação são bem-vindos na propriedade sem custo adicional. A área de 2,6 hectares é totalmente cercada, permitindo que seu animal brinque com segurança ao ar livre. A propriedade conta com gramado amplo, trilhas e espaço de sobra para pets de todos os portes.",
    },
    {
      question: "Qual o valor da diária?",
      answer: `A diária no Sítio Girassol começa em R$ ${listingConfig.pricing.nightlyRate}/noite para estadias curtas. Para estadias semanais (7+ noites), oferecemos ${listingConfig.pricing.weeklyDiscountPercent}% de desconto, resultando em R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100))}/noite. Para estadias mensais (28+ noites), o desconto é de ${listingConfig.pricing.monthlyDiscountPercent}%, chegando a R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100))}/noite. Todos os preços incluem acesso a piscina privativa, churrasqueira, quadra esportiva, Wi-Fi, lareira e todas as comodidades da propriedade.`,
    },
    {
      question: "Tem churrasqueira?",
      answer: "Sim, o Sítio Girassol conta com duas churrasqueiras completas: uma na varanda coberta da casa principal (ideal para dias de chuva) e outra na cozinha externa ao lado da piscina (perfeita para churrascos ao ar livre). Ambas incluem utensílios como grelhas, espetos, tábuas de corte e barbecue completo. A cozinha externa também tem pia e bancada de apoio.",
    },
    {
      question: "Tem Wi-Fi?",
      answer: "Sim, o Sítio Girassol oferece Wi-Fi de alta velocidade em toda a casa de 280 m². A conexão é suficiente para streaming, videochamadas e trabalho remoto. A propriedade também conta com espaço de trabalho dedicado (dedicated workspace), ideal para quem deseja combinar descanso com home office no interior de São Paulo.",
    },
    {
      question: "Quais atividades posso fazer no sítio?",
      answer: "O Sítio Girassol oferece mais de 10 atividades em seus 2,6 hectares: trilhas offroad pela propriedade, piscina privativa com deck, duas churrasqueiras equipadas, quadra de tênis e vôlei com bolas e enchedor, jogos de tabuleiro variados, redes e hamacas para descanso, lareira de pedra na sala, fogueira ao ar livre, contemplação da natureza e observação de aves. A proximidade com a Rota do Vinho de São Roque (12 km) permite visitar mais de 30 vinícolas durante a estadia.",
    },
    {
      question: "Quanto custa alugar o Sítio Girassol?",
      answer: `O Sítio Girassol tem diárias a partir de R$ ${listingConfig.pricing.nightlyRate}/noite para a propriedade inteira (3 quartos, até 6 hóspedes). Estadias semanais têm ${listingConfig.pricing.weeklyDiscountPercent}% de desconto (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100))}/noite), e mensais ${listingConfig.pricing.monthlyDiscountPercent}% (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100))}/noite). O preço inclui todas as comodidades: piscina privativa, churrasqueira, quadra esportiva, Wi-Fi, lareira, jogos e 2,6 hectares de natureza. Não há taxas extras por pets ou estacionamento.`,
    },
    {
      question: "Como chegar ao Sítio Girassol saindo de São Paulo?",
      answer: "Saindo de São Paulo, há duas rotas principais: pela Rodovia Castello Branco (SP-280), saindo no km 54B para acessar a Raposo Tavares; ou diretamente pela Rodovia Raposo Tavares (SP-270). O trajeto é de aproximadamente 60 km e leva entre 1 hora e 1h30 dependendo do trânsito. O pedágio na Raposo Tavares custa cerca de R$ 5,20 (2026). A localização exata com coordenadas GPS (-23.4907, -47.2706) é fornecida após confirmação da reserva. O acesso final é por estrada local a 12 km do centro de São Roque.",
    },
    {
      question: "Pode fazer festa ou evento no sítio?",
      answer: "Sim, o Sítio Girassol permite eventos conforme as regras da casa. Eventos são permitidos para até 6 hóspedes (capacidade máxima da propriedade). Fotografia e filmagem comercial também são permitidas. Não há horário de silêncio obrigatório. Fumo, vaporizadores e cigarros eletrônicos são permitidos. Check-in entre 12h e 20h, check-out antes das 18h. Pedimos apenas que não sejam usados objetos de vidro na área da piscina e que bitucas e pequenos lixos sejam recolhidos durante a estadia.",
    },
    {
      question: "Qual a melhor época para visitar São Roque?",
      answer: "São Roque é um destino agradável o ano todo, com temperatura média anual de 19°C. No inverno (junho a agosto), as temperaturas variam entre 8°C e 22°C — ideal para aproveitar a lareira de pedra do Sítio Girassol e visitar as vinícolas da Rota do Vinho com degustações de tintos encorpados. No verão (dezembro a fevereiro), as temperaturas chegam a 30°C, perfeito para a piscina privativa e atividades ao ar livre. A primavera (setembro a novembro) oferece o melhor equilíbrio climático, com pouca chuva e temperaturas entre 15°C e 27°C.",
    },
    {
      question: "O sítio tem estacionamento?",
      answer: "Sim, o Sítio Girassol oferece estacionamento gratuito dentro da propriedade com espaço para múltiplos veículos. Há também estacionamento gratuito na rua. Não é necessário reservar vaga com antecedência. A propriedade tem entrada privativa com portão, garantindo segurança para seu veículo durante toda a estadia.",
    },
  ],
  en: [
    {
      question: "Where is Sítio Girassol located?",
      answer: "Sítio Girassol is located in São Roque, SP, 60 km from São Paulo (GPS coordinates: -23.4907, -47.2706). Access is via Rodovia Castello Branco (SP-280, exit km 54B) or Rodovia Raposo Tavares (SP-270). The drive from downtown São Paulo takes between 1 hour and 1.5 hours. The property is 12 km from the center of São Roque, accessed via a local road.",
    },
    {
      question: "How many bedrooms does Sítio Girassol have?",
      answer: "Sítio Girassol has 3 bedrooms in a 280 m² (3,014 sq ft) house: master suite with king bed and balcony access with hammock supports, spacious second bedroom with double bed and large window, and third bedroom with bunk bed plus additional single mattresses. There are 3 full bathrooms with glass shower enclosures and electric showers. Total capacity for up to 6 guests in comfort.",
    },
    {
      question: "Is the pool private?",
      answer: "Yes, the pool at Sítio Girassol is 100% private and exclusive to guests throughout their entire stay. The property spans 2.6 hectares (6.4 acres) and is fully fenced, ensuring complete privacy. The pool area includes a deck, sun loungers, outdoor kitchen with BBQ grill, and an outdoor shower.",
    },
    {
      question: "Are pets allowed?",
      answer: "Yes, Sítio Girassol is pet-friendly. Pets are welcome on the property at no additional cost. The 2.6-hectare (6.4-acre) area is fully fenced, allowing your pet to roam and play safely outdoors. The property features open lawns, trails, and ample space for pets of all sizes.",
    },
    {
      question: "What is the nightly rate?",
      answer: `Rates at Sítio Girassol start at R$ ${listingConfig.pricing.nightlyRate}/night (approximately US$ 65) for short stays. Weekly stays (7+ nights) receive a ${listingConfig.pricing.weeklyDiscountPercent}% discount at R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100))}/night. Monthly stays (28+ nights) get ${listingConfig.pricing.monthlyDiscountPercent}% off at R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100))}/night. All prices include access to the private pool, BBQ areas, sports court, Wi-Fi, fireplace, and every property amenity.`,
    },
    {
      question: "Is there a BBQ grill?",
      answer: "Yes, Sítio Girassol has two fully equipped BBQ areas: one on the covered veranda of the main house (ideal for rainy days) and another in the outdoor kitchen next to the pool (perfect for al fresco grilling). Both include utensils such as grates, skewers, cutting boards, and complete barbecue equipment. The outdoor kitchen also has a sink and prep counter.",
    },
    {
      question: "Is there Wi-Fi?",
      answer: "Yes, Sítio Girassol offers high-speed Wi-Fi throughout the 280 m² (3,014 sq ft) house. The connection supports streaming, video calls, and remote work. The property also includes a dedicated workspace, ideal for guests combining relaxation with remote work in the São Paulo countryside.",
    },
    {
      question: "What activities can I do at the sítio?",
      answer: "Sítio Girassol offers over 10 activities across its 2.6 hectares (6.4 acres): offroad trails through the property, private pool with deck, two equipped BBQ areas, tennis and volleyball court with balls and pump, assorted board games, hammocks for relaxation, stone fireplace in the living room, outdoor fire pit, nature contemplation, and birdwatching. The proximity to the São Roque Wine Route (12 km) allows visits to over 30 wineries during your stay.",
    },
    {
      question: "How much does it cost to rent Sítio Girassol?",
      answer: `Sítio Girassol rates start at R$ ${listingConfig.pricing.nightlyRate}/night (approximately US$ 65) for the entire property (3 bedrooms, up to 6 guests). Weekly stays get ${listingConfig.pricing.weeklyDiscountPercent}% off (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100))}/night), and monthly stays get ${listingConfig.pricing.monthlyDiscountPercent}% off (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100))}/night). The price includes all amenities: private pool, BBQ areas, sports court, Wi-Fi, fireplace, games, and 2.6 hectares of nature. No extra fees for pets or parking.`,
    },
    {
      question: "How to get to Sítio Girassol from São Paulo?",
      answer: "From São Paulo, there are two main routes: via Rodovia Castello Branco (SP-280), exiting at km 54B to access Raposo Tavares; or directly via Rodovia Raposo Tavares (SP-270). The drive is approximately 60 km and takes between 1 hour and 1.5 hours depending on traffic. The Raposo Tavares toll is approximately R$ 5.20 (2026). The exact location with GPS coordinates (-23.4907, -47.2706) is provided after booking confirmation. Final access is via a local road 12 km from São Roque town center.",
    },
    {
      question: "Can I host events at the property?",
      answer: "Yes, Sítio Girassol allows events per house rules. Events are permitted for up to 6 guests (maximum property capacity). Commercial photography and filming are also allowed. There are no mandatory quiet hours. Smoking, vaping, and e-cigarettes are permitted. Check-in is between 12 PM and 8 PM, check-out before 6 PM. We only ask that glass objects not be used in the pool area and that cigarette butts and small trash be collected during your stay.",
    },
    {
      question: "What is the best time to visit São Roque?",
      answer: "São Roque is a pleasant year-round destination with an average annual temperature of 19°C (66°F). In winter (June to August), temperatures range from 8°C to 22°C (46-72°F) — ideal for enjoying Sítio Girassol's stone fireplace and visiting Wine Route wineries for full-bodied red tastings. In summer (December to February), temperatures reach 30°C (86°F), perfect for the private pool and outdoor activities. Spring (September to November) offers the best weather balance with little rain and temperatures between 15°C and 27°C (59-81°F).",
    },
    {
      question: "Is there parking?",
      answer: "Yes, Sítio Girassol offers free on-premises parking with space for multiple vehicles. Free street parking is also available. No advance reservation needed for parking spots. The property has a private entrance with a gate, ensuring vehicle security throughout your stay.",
    },
  ],
  es: [
    {
      question: "¿Dónde queda Sítio Girassol?",
      answer: "Sítio Girassol está ubicado en São Roque, SP, a 60 km de São Paulo (coordenadas GPS: -23.4907, -47.2706). Se accede por la Rodovia Castello Branco (SP-280, salida km 54B) o por la Rodovia Raposo Tavares (SP-270). El trayecto en auto desde el centro de São Paulo dura entre 1 hora y 1h30. La propiedad está a 12 km del centro de São Roque, con acceso por camino local.",
    },
    {
      question: "¿Cuántos dormitorios tiene Sítio Girassol?",
      answer: "Sítio Girassol tiene 3 dormitorios en una casa de 280 m²: suite principal con cama king y acceso a terraza con soportes para hamacas, segundo dormitorio espacioso con cama doble y ventanal, y tercer dormitorio con litera y colchones individuales adicionales. Hay 3 baños completos con ducha de vidrio y ducha eléctrica. Capacidad total para hasta 6 huéspedes con confort.",
    },
    {
      question: "¿La piscina es privada?",
      answer: "Sí, la piscina de Sítio Girassol es 100% privada y exclusiva para los huéspedes durante toda la estadía. La propiedad ocupa 2,6 hectáreas (26.000 m²) y está completamente cercada, garantizando privacidad total. El área de la piscina cuenta con deck, reposeras, cocina exterior con parrilla y ducha al aire libre.",
    },
    {
      question: "¿Se aceptan mascotas?",
      answer: "¡Sí! Sítio Girassol acepta mascotas sin costo adicional. El área de 2,6 hectáreas está totalmente cercada, permitiendo que tu mascota juegue con seguridad al aire libre. La propiedad cuenta con césped amplio, senderos y espacio de sobra para mascotas de todos los tamaños.",
    },
    {
      question: "¿Cuál es el valor de la estadía?",
      answer: `Las tarifas en Sítio Girassol comienzan en R$ ${listingConfig.pricing.nightlyRate}/noche para estadías cortas. Estadías semanales (7+ noches) tienen ${listingConfig.pricing.weeklyDiscountPercent}% de descuento a R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100))}/noche. Estadías mensuales (28+ noches) reciben ${listingConfig.pricing.monthlyDiscountPercent}% de descuento a R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100))}/noche. Todos los precios incluyen acceso a piscina privada, parrilla, cancha deportiva, Wi-Fi, chimenea y todas las comodidades de la propiedad.`,
    },
    {
      question: "¿Tiene parrilla?",
      answer: "Sí, Sítio Girassol cuenta con dos parrillas completas: una en la terraza cubierta de la casa principal (ideal para días de lluvia) y otra en la cocina exterior junto a la piscina (perfecta para asados al aire libre). Ambas incluyen utensilios como parrillas, espetos, tablas de corte y equipo completo de barbacoa. La cocina exterior también tiene pileta y mesada de apoyo.",
    },
    {
      question: "¿Tiene Wi-Fi?",
      answer: "Sí, Sítio Girassol ofrece Wi-Fi de alta velocidad en toda la casa de 280 m². La conexión soporta streaming, videollamadas y trabajo remoto. La propiedad también cuenta con un espacio de trabajo dedicado, ideal para quienes desean combinar descanso con home office en el interior de São Paulo.",
    },
    {
      question: "¿Qué actividades puedo hacer en el sítio?",
      answer: "Sítio Girassol ofrece más de 10 actividades en sus 2,6 hectáreas: senderos offroad por la propiedad, piscina privada con deck, dos parrillas equipadas, cancha de tenis y voleibol con pelotas e inflador, juegos de mesa variados, hamacas para descanso, chimenea de piedra en la sala, fogata al aire libre, contemplación de la naturaleza y observación de aves. La proximidad con la Ruta del Vino de São Roque (12 km) permite visitar más de 30 bodegas durante la estadía.",
    },
    {
      question: "¿Cuánto cuesta alquilar el Sítio Girassol?",
      answer: `Las tarifas de Sítio Girassol comienzan en R$ ${listingConfig.pricing.nightlyRate}/noche para la propiedad entera (3 dormitorios, hasta 6 huéspedes). Estadías semanales tienen ${listingConfig.pricing.weeklyDiscountPercent}% de descuento (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.weeklyDiscountPercent / 100))}/noche), y mensuales ${listingConfig.pricing.monthlyDiscountPercent}% (R$ ${Math.round(listingConfig.pricing.nightlyRate * (1 - listingConfig.pricing.monthlyDiscountPercent / 100))}/noche). El precio incluye todas las comodidades: piscina privada, parrillas, cancha deportiva, Wi-Fi, chimenea, juegos y 2,6 hectáreas de naturaleza. Sin cargos extras por mascotas o estacionamiento.`,
    },
    {
      question: "¿Cómo llegar al Sítio Girassol desde São Paulo?",
      answer: "Desde São Paulo hay dos rutas principales: por la Rodovia Castello Branco (SP-280), saliendo en el km 54B para acceder a la Raposo Tavares; o directamente por la Rodovia Raposo Tavares (SP-270). El trayecto es de aproximadamente 60 km y dura entre 1 hora y 1h30 dependiendo del tránsito. El peaje en la Raposo Tavares cuesta cerca de R$ 5,20 (2026). La ubicación exacta con coordenadas GPS (-23.4907, -47.2706) se proporciona tras la confirmación de la reserva. El acceso final es por camino local a 12 km del centro de São Roque.",
    },
    {
      question: "¿Se pueden hacer fiestas o eventos?",
      answer: "Sí, Sítio Girassol permite eventos según las reglas de la casa. Se permiten eventos para hasta 6 huéspedes (capacidad máxima de la propiedad). La fotografía y filmación comercial también están permitidas. No hay horario de silencio obligatorio. Se permite fumar, vapear y cigarrillos electrónicos. Check-in entre 12h y 20h, check-out antes de las 18h. Solo pedimos que no se usen objetos de vidrio en el área de la piscina y que se recojan colillas y pequeños desperdicios durante la estadía.",
    },
    {
      question: "¿Cuál es la mejor época para visitar São Roque?",
      answer: "São Roque es un destino agradable todo el año, con temperatura media anual de 19°C. En invierno (junio a agosto), las temperaturas varían entre 8°C y 22°C — ideal para disfrutar la chimenea de piedra de Sítio Girassol y visitar las bodegas de la Ruta del Vino con degustaciones de tintos con cuerpo. En verano (diciembre a febrero), las temperaturas llegan a 30°C, perfecto para la piscina privada y actividades al aire libre. La primavera (septiembre a noviembre) ofrece el mejor equilibrio climático, con poca lluvia y temperaturas entre 15°C y 27°C.",
    },
    {
      question: "¿Hay estacionamiento?",
      answer: "Sí, Sítio Girassol ofrece estacionamiento gratuito dentro de la propiedad con espacio para múltiples vehículos. También hay estacionamiento gratuito en la calle. No es necesario reservar lugar con anticipación. La propiedad tiene entrada privada con portón, garantizando seguridad para su vehículo durante toda la estadía.",
    },
  ],
};

export default function FAQSection({ locale }: { locale: Locale }) {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = faqItems[locale] ?? faqItems.en;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display text-white leading-tight">
            {t("title")}
            <span className="italic text-accent-gold">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg font-light max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/[0.03]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/[0.03]"
              >
                <span className="text-white font-medium text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-accent-gold shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/70 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
