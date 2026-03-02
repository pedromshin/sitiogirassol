/**
 * Amenities configuration - single source of truth for "O que este lugar oferece"
 * Each item has icon (Material Symbols) and i18n titles.
 */

export type Locale = "en" | "pt" | "es";

export interface AmenityItem {
  id: string;
  icon: string;
  title: Record<Locale, string>;
  desc?: Record<Locale, string>;
}

export interface AmenityCategory {
  id: string;
  icon: string;
  titleKey: string;
  items: AmenityItem[];
}

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "bathroom",
    icon: "bathtub",
    titleKey: "bathroom",
    items: [
      { id: "baby_bath", icon: "baby_changing_station", title: { en: "Baby bath", pt: "Banheira para bebê", es: "Bañera para bebé" }, desc: { en: "Always at the listing.", pt: "Sempre disponível.", es: "Siempre disponible." } },
      { id: "body_soap", icon: "soap", title: { en: "Body soap", pt: "Sabonete", es: "Jabón corporal" } },
      { id: "hair_dryer", icon: "dry", title: { en: "Hair dryer", pt: "Secador de cabelo", es: "Secador de pelo" } },
      { id: "hot_water", icon: "water_drop", title: { en: "Hot water", pt: "Água quente", es: "Agua caliente" }, desc: { en: "Water from the sink and shower that's hot enough for washing", pt: "Água quente na pia e chuveiro", es: "Agua caliente en lavabo y ducha" } },
      { id: "outdoor_shower", icon: "shower", title: { en: "Outdoor shower", pt: "Chuveiro externo", es: "Ducha exterior" }, desc: { en: "A place for bathing under a spray of water, located outdoors", pt: "Área de banho ao ar livre", es: "Lugar para bañarse al aire libre" } },
      { id: "cleaning_products", icon: "cleaning_services", title: { en: "Cleaning products", pt: "Produtos de limpeza", es: "Productos de limpieza" } },
    ],
  },
  {
    id: "bedroom",
    icon: "bed",
    titleKey: "bedroomAndLaundry",
    items: [
      { id: "bed_linens", icon: "bed", title: { en: "Bed linens", pt: "Roupas de cama", es: "Ropa de cama" } },
      { id: "crib", icon: "crib", title: { en: "Crib", pt: "Berço", es: "Cuna" }, desc: { en: "Standard • Always at the listing • Room-darkening shades • Sheets provided", pt: "Padrão • Sempre disponível • Cortinas blackout • Lençóis inclusos", es: "Estándar • Siempre disponible • Cortinas blackout • Sábanas incluidas" } },
      { id: "extra_pillows", icon: "pill", title: { en: "Extra pillows and blankets", pt: "Travesseiros e cobertores extras", es: "Almohadas y mantas extra" } },
      { id: "room_darkening", icon: "blinds_closed", title: { en: "Room-darkening shades", pt: "Cortinas blackout", es: "Persianas opacas" } },
      { id: "clothing_storage", icon: "checkroom", title: { en: "Clothing storage", pt: "Armário para roupas", es: "Almacenamiento de ropa" } },
      { id: "hangers", icon: "checkroom", title: { en: "Hangers", pt: "Cabides", es: "Perchas" } },
      { id: "washer", icon: "local_laundry_service", title: { en: "Washer", pt: "Máquina de lavar", es: "Lavadora" }, desc: { en: "A machine that washes dirty clothes", pt: "Máquina de lavar roupas", es: "Máquina para lavar ropa" } },
      { id: "iron", icon: "iron", title: { en: "Iron", pt: "Ferro de passar", es: "Plancha" } },
      { id: "drying_rack", icon: "dry_cleaning", title: { en: "Drying rack for clothing", pt: "Varal para roupas", es: "Tendedero" } },
    ],
  },
  {
    id: "entertainment",
    icon: "tv",
    titleKey: "entertainment",
    items: [
      { id: "tv", icon: "tv", title: { en: "TV", pt: "TV", es: "TV" }, desc: { en: "A device for watching television", pt: "Televisão", es: "Dispositivo para ver televisión" } },
      { id: "books", icon: "menu_book", title: { en: "Books and reading material", pt: "Livros e material de leitura", es: "Libros y material de lectura" } },
      { id: "board_games", icon: "sports_esports", title: { en: "Board games", pt: "Jogos de tabuleiro", es: "Juegos de mesa" } },
      { id: "game_room_foosball", icon: "sports_soccer", title: { en: "Game room with foosball", pt: "Sala de jogos com pebolim", es: "Sala de juegos con futbolín" } },
    ],
  },
  {
    id: "sports",
    icon: "sports_soccer",
    titleKey: "sportsCourt",
    items: [
      { id: "tennis_equipment", icon: "sports_tennis", title: { en: "Tennis equipment", pt: "Equipamento de tênis", es: "Equipo de tenis" } },
      { id: "volleyball_equipment", icon: "sports_volleyball", title: { en: "Volleyball equipment", pt: "Equipamento de vôlei", es: "Equipo de voleibol" } },
      { id: "football_equipment", icon: "sports_soccer", title: { en: "Football / Soccer equipment", pt: "Equipamento de futebol", es: "Equipo de fútbol" } },
      { id: "badminton_equipment", icon: "sports", title: { en: "Badminton equipment", pt: "Equipamento de badminton", es: "Equipo de bádminton" } },
    ],
  },
  {
    id: "heating",
    icon: "ac_unit",
    titleKey: "heatingAndCooling",
    items: [
      { id: "ceiling_fan", icon: "air", title: { en: "Ceiling fan", pt: "Ventilador de teto", es: "Ventilador de techo" } },
      { id: "portable_fans", icon: "air", title: { en: "Portable fans", pt: "Ventiladores portáteis", es: "Ventiladores portátiles" } },
      { id: "heating", icon: "local_fire_department", title: { en: "Heating", pt: "Aquecimento", es: "Calefacción" }, desc: { en: "Portable heater.", pt: "Aquecedor portátil.", es: "Calefactor portátil." } },
      { id: "indoor_fireplace", icon: "local_fire_department", title: { en: "Indoor fireplace", pt: "Lareira interna", es: "Chimenea interior" } },
    ],
  },
  {
    id: "internet",
    icon: "wifi",
    titleKey: "internetAndOffice",
    items: [
      { id: "wifi", icon: "wifi", title: { en: "Wifi", pt: "Wi-Fi", es: "Wifi" }, desc: { en: "Wireless technology that lets devices connect to the internet", pt: "Internet sem fio em toda a propriedade", es: "Tecnología inalámbrica para conectar dispositivos" } },
      { id: "dedicated_workspace", icon: "desk", title: { en: "Dedicated workspace", pt: "Espaço de trabalho", es: "Espacio de trabajo dedicado" }, desc: { en: "An area for focused activities that includes a desk or table and a power source", pt: "Área com mesa e tomada para trabalho", es: "Área con escritorio y toma de corriente" } },
    ],
  },
  {
    id: "kitchen",
    icon: "kitchen",
    titleKey: "kitchenAndDining",
    items: [
      { id: "kitchen", icon: "kitchen", title: { en: "Kitchen", pt: "Cozinha", es: "Cocina" }, desc: { en: "A space for cooking meals that includes at least a refrigerator, oven, and stovetop", pt: "Espaço completo para cozinhar", es: "Espacio con nevera, horno y cocina" } },
      { id: "refrigerator", icon: "kitchen", title: { en: "Refrigerator", pt: "Geladeira", es: "Nevera" } },
      { id: "freezer", icon: "ac_unit", title: { en: "Freezer", pt: "Freezer", es: "Congelador" } },
      { id: "stove", icon: "restaurant", title: { en: "Stove", pt: "Fogão", es: "Estufa" } },
      { id: "oven", icon: "microwave", title: { en: "Oven", pt: "Forno", es: "Horno" } },
      { id: "microwave", icon: "microwave", title: { en: "Microwave", pt: "Micro-ondas", es: "Microondas" } },
      { id: "cooking_basics", icon: "restaurant", title: { en: "Cooking basics", pt: "Básicos de cozinha", es: "Básicos de cocina" }, desc: { en: "Pots and pans, oil, salt and pepper", pt: "Panelas, óleo, sal e pimenta", es: "Ollas, aceite, sal y pimienta" } },
      { id: "dishes_silverware", icon: "dinner_dining", title: { en: "Dishes and silverware", pt: "Pratos e talheres", es: "Platos y cubiertos" }, desc: { en: "Plates, bowls, cups, cutlery, and other utensils", pt: "Pratos, tigelas, copos e talheres", es: "Platos, bowls, vasos y cubiertos" } },
      { id: "dining_table", icon: "table_restaurant", title: { en: "Dining table", pt: "Mesa de jantar", es: "Mesa de comedor" } },
      { id: "coffee_maker", icon: "coffee", title: { en: "Coffee maker", pt: "Cafeteira", es: "Cafetera" } },
      { id: "coffee", icon: "coffee", title: { en: "Coffee", pt: "Café", es: "Café" } },
      { id: "toaster", icon: "breakfast_dining", title: { en: "Toaster", pt: "Torradeira", es: "Tostadora" } },
      { id: "baking_sheet", icon: "bakery_dining", title: { en: "Baking sheet", pt: "Assadeira", es: "Bandeja para hornear" } },
      { id: "blender", icon: "blender", title: { en: "Blender", pt: "Liquidificador", es: "Licuadora" } },
      { id: "rice_maker", icon: "rice_bowl", title: { en: "Rice maker", pt: "Panela de arroz", es: "Arrocera" } },
      { id: "barbecue_utensils", icon: "outdoor_grill", title: { en: "Barbecue utensils", pt: "Utensílios de churrasco", es: "Utensilios de barbacoa" }, desc: { en: "Fuel and utensils used for grilling food", pt: "Combustível e utensílios para grelhar", es: "Combustible y utensilios para parrilla" } },
    ],
  },
  {
    id: "outdoor",
    icon: "yard",
    titleKey: "locationFeatures",
    items: [
      { id: "backyard", icon: "yard", title: { en: "Backyard", pt: "Quintal", es: "Patio trasero" }, desc: { en: "Private • Fully fenced.", pt: "Privado • Totalmente cercado.", es: "Privado • Totalmente cercado." } },
      { id: "bbq_grill", icon: "outdoor_grill", title: { en: "BBQ grill", pt: "Churrasqueira", es: "Parrilla" } },
      { id: "fire_pit", icon: "local_fire_department", title: { en: "Fire pit", pt: "Fogueira", es: "Fogata" } },
      { id: "outdoor_dining", icon: "table_restaurant", title: { en: "Outdoor dining area", pt: "Área de jantar externa", es: "Área de comedor exterior" }, desc: { en: "A dining area located outdoors", pt: "Mesa de jantar ao ar livre", es: "Área de comedor al aire libre" } },
      { id: "outdoor_furniture", icon: "deck", title: { en: "Outdoor furniture", pt: "Móveis externos", es: "Mobiliario exterior" } },
      { id: "outdoor_kitchen", icon: "outdoor_grill", title: { en: "Outdoor kitchen", pt: "Cozinha externa", es: "Cocina exterior" }, desc: { en: "Private • Oven.", pt: "Privada • Com forno.", es: "Privada • Con horno." } },
      { id: "patio_balcony", icon: "balcony", title: { en: "Patio or balcony", pt: "Pátio ou varanda", es: "Patio o balcón" } },
      { id: "pool", icon: "pool", title: { en: "Pool", pt: "Piscina", es: "Piscina" }, desc: { en: "A structure used for swimming or other water activities", pt: "Piscina para natação", es: "Estructura para nadar" } },
      { id: "sun_loungers", icon: "deck", title: { en: "Sun loungers", pt: "Espreguiçadeiras", es: "Tumbonas" } },
      { id: "hammock", icon: "deck", title: { en: "Hammock", pt: "Rede", es: "Hamaca" } },
      { id: "private_entrance", icon: "door_front", title: { en: "Private entrance", pt: "Entrada privada", es: "Entrada privada" }, desc: { en: "An entrance that's only available to guests", pt: "Entrada exclusiva para hóspedes", es: "Entrada solo para huéspedes" } },
      { id: "private_living_room", icon: "living", title: { en: "Private living room", pt: "Sala de estar privada", es: "Sala de estar privada" } },
    ],
  },
  {
    id: "parking",
    icon: "local_parking",
    titleKey: "parkingAndFacilities",
    items: [
      { id: "free_parking", icon: "local_parking", title: { en: "Free parking on premises", pt: "Estacionamento gratuito", es: "Estacionamiento gratuito" }, desc: { en: "Parking on-site that's free of charge", pt: "Estacionamento no local sem custo", es: "Estacionamiento en el lugar sin costo" } },
      { id: "free_street_parking", icon: "local_parking", title: { en: "Free street parking", pt: "Estacionamento na rua gratuito", es: "Estacionamiento en la calle gratuito" }, desc: { en: "Parking on a nearby street that's free of charge", pt: "Estacionamento na rua próximo", es: "Estacionamiento en calle cercana" } },
    ],
  },
  {
    id: "services",
    icon: "handyman",
    titleKey: "services",
    items: [
      { id: "pets_allowed", icon: "pets", title: { en: "Pets allowed", pt: "Animais permitidos", es: "Mascotas permitidas" } },
      { id: "smoking_allowed", icon: "smoking_rooms", title: { en: "Smoking allowed", pt: "Fumo permitido", es: "Fumar permitido" }, desc: { en: "Smoking, vaping and e-cigarettes allowed", pt: "Fumo, vaporizadores e cigarros eletrônicos permitidos", es: "Fumar, vapear y cigarrillos electrónicos permitidos" } },
      { id: "long_term_stays", icon: "calendar_month", title: { en: "Long term stays allowed", pt: "Estadias longas permitidas", es: "Estadías largas permitidas" }, desc: { en: "Guests can stay for 28 days or longer", pt: "Hóspedes podem ficar 28 dias ou mais", es: "Huéspedes pueden quedarse 28 días o más" } },
    ],
  },
];
