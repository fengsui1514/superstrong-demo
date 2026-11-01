import type { Locale } from '../i18n';

export type Category = {
  slug: string;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  comingSoon?: boolean;
};

export type Spec = { key: string; label: string; value: string };

export type ProductLocalized = {
  name: string;
  badge?: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  description: string;
  imageAlt: string;
  highlights: { label: string; value: string }[];
  specs: Spec[];
  features: string[];
  applications: string[];
  faqs: { q: string; a: string }[];
};

export type Product = {
  slug: string;
  model: string;
  name: string;
  category: string;
  badge?: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  video?: string;
  poster?: string;
  highlights: { label: string; value: string }[];
  specs: Spec[];
  features: string[];
  applications: string[];
  faqs: { q: string; a: string }[];
  es: ProductLocalized;
};

export type ResolvedProduct = Omit<Product, 'es'>;

export const categories: Category[] = [
  {
    slug: 'circular-saws',
    name: 'Circular Saws',
    nameEs: 'Sierras circulares',
    description: '185 mm platform, built on our own line in Ningbo.',
    descriptionEs: 'Plataforma de 185 mm, fabricada en nuestra propia línea de Ningbo.',
  },
  {
    slug: 'other-power-tools',
    name: 'Other Power Tools',
    nameEs: 'Otras herramientas eléctricas',
    description: 'New categories are in development. Ask about OEM programs.',
    descriptionEs: 'Nuevas categorías en desarrollo. Consulta los programas OEM.',
    comingSoon: true,
  },
];

// Sample specifications — replace with real data before launch.
export const products: Product[] = [
  {
    slug: 'cs-115',
    model: 'CS-115',
    name: 'CS-115 Circular Saw',
    category: 'circular-saws',
    badge: 'Best seller',
    seoTitle: '185 mm Circular Saw, 1,800 W — CS-115 | Super Strong',
    seoDescription:
      '185 mm (7-1/4 in) circular saw: 1,800 W, 5,800 rpm, 65 mm cut at 90°. Factory-direct OEM and private-label supply with CE, GS and RoHS documentation.',
    summary:
      'A 185 mm circular saw built for site carpentry and panel work: 1,800 W, 5,800 rpm, 65 mm depth at 90°, and a die-cast base that stays true after years of use.',
    description:
      'The CS-115 is our most frequently specified 185 mm circular saw for private-label and OEM programs. The motor is wound in-house, the gearbox is CNC-machined, and every unit is run under load before packing. Distributors choose it when they need repeatable quality across containers, not a one-off sample.',
    image: '/media/cs115.webp',
    imageAlt: 'Super Strong CS-115 185 mm circular saw with red blade',
    video: '/media/cs115.mp4',
    poster: '/media/cs115-poster.jpg',
    highlights: [
      { label: 'Power', value: '1,800 W' },
      { label: 'Blade', value: '185 mm' },
      { label: 'Speed', value: '5,800 rpm' },
      { label: 'Weight', value: '4.6 kg' },
    ],
    specs: [
      { key: 'model', label: 'Model', value: 'CS-115' },
      { key: 'power', label: 'Rated power', value: '1,800 W' },
      { key: 'voltage', label: 'Voltage / frequency', value: '230 V / 50 Hz' },
      { key: 'speed', label: 'No-load speed', value: '5,800 rpm' },
      { key: 'blade', label: 'Blade diameter', value: '185 mm' },
      { key: 'teeth', label: 'Blade teeth', value: '24T carbide' },
      { key: 'bore', label: 'Bore', value: '20 mm' },
      { key: 'depth-90', label: 'Cutting depth at 90°', value: '65 mm' },
      { key: 'depth-45', label: 'Cutting depth at 45°', value: '45 mm' },
      { key: 'bevel', label: 'Bevel capacity', value: '0–45°' },
      { key: 'weight', label: 'Weight', value: '4.6 kg' },
      { key: 'certification', label: 'Certification', value: 'CE / GS / RoHS' },
    ],
    features: [
      'In-house wound 1,800 W motor with thermal overload protection.',
      'Die-cast aluminium base, machined flat for consistent 65 mm depth at 90°.',
      '185 mm (7-1/4 in) blade with 20 mm bore; 24T carbide blade fitted as standard.',
      'Spindle lock for fast blade changes with the supplied wrench.',
      'Soft-grip rear handle and auxiliary front knob for two-hand control.',
      'Dust port accepts standard 35 mm extraction hoses.',
      'Batch traceability on armature, gearbox and final test.',
    ],
    applications: [
      'Framing, roofing and decking',
      'Timber and panel sizing',
      'Site carpentry and fit-out',
      'Private-label and OEM programs',
    ],
    faqs: [
      {
        q: 'What can a 185 mm circular saw cut?',
        a: 'A 185 mm saw is sized for framing timber, roof battens, decking boards, sheet goods and general site carpentry. With 65 mm maximum depth at 90°, the CS-115 handles standard framing lumber and most panel sizing. For repeated straight cuts in sheet goods, a track or table saw is a better fit.',
      },
      {
        q: 'How deep does the CS-115 cut at 90° and 45°?',
        a: '65 mm at 90° and 45 mm at 45°, with a 0–45° bevel. Cutting depth is measured with the blade fitted and the base flat on the workpiece.',
      },
      {
        q: 'What blade does the CS-115 use?',
        a: 'A 185 mm blade with a 20 mm bore; a 24T carbide blade is fitted as standard. Any compatible 185 mm blade can be used, including finer-tooth blades for clean panel cuts.',
      },
      {
        q: 'Is the CS-115 available for private label?',
        a: 'Yes. It is the model we build most often for OEM and private-label programs. Housing colour, logo, rating plate, carton artwork and manual language can be specified, and certification files are supplied with the order.',
      },
      {
        q: 'What voltage and plug options are available?',
        a: 'The sample build is 230 V / 50 Hz. Tell us the destination market and we will confirm the voltage and plug configuration for your order.',
      },
      {
        q: 'Can I order a sample before a production run?',
        a: 'Yes. Sample units can be shipped before a production commitment so your team can test the saw and approve packaging.',
      },
    ],
    es: {
      name: 'Sierra circular CS-115',
      badge: 'Más vendido',
      seoTitle: 'Sierra circular de 185 mm, 1.800 W — CS-115 | Super Strong',
      seoDescription:
        'Sierra circular de 185 mm (7-1/4 in): 1.800 W, 5.800 rpm, corte de 65 mm a 90°. Suministro directo de fábrica OEM y marca blanca con documentación CE, GS y RoHS.',
      summary:
        'Una sierra circular de 185 mm pensada para carpintería en obra y corte de paneles: 1.800 W, 5.800 rpm, 65 mm de profundidad a 90° y una base de aluminio inyectado que se mantiene recta tras años de uso.',
      description:
        'La CS-115 es nuestra sierra circular de 185 mm más solicitada para programas de marca blanca y OEM. El motor se bobina en casa, la caja de engranajes se mecaniza por CNC y cada unidad se prueba bajo carga antes del embalaje. Los distribuidores la eligen cuando necesitan una calidad repetible contenedor tras contenedor, no una muestra puntual.',
      imageAlt: 'Sierra circular Super Strong CS-115 de 185 mm con disco rojo',
      highlights: [
        { label: 'Potencia', value: '1.800 W' },
        { label: 'Disco', value: '185 mm' },
        { label: 'Velocidad', value: '5.800 rpm' },
        { label: 'Peso', value: '4,6 kg' },
      ],
      specs: [
        { key: 'model', label: 'Modelo', value: 'CS-115' },
        { key: 'power', label: 'Potencia nominal', value: '1.800 W' },
        { key: 'voltage', label: 'Tensión / frecuencia', value: '230 V / 50 Hz' },
        { key: 'speed', label: 'Velocidad sin carga', value: '5.800 rpm' },
        { key: 'blade', label: 'Diámetro de disco', value: '185 mm' },
        { key: 'teeth', label: 'Dientes de disco', value: '24 dientes de carburo' },
        { key: 'bore', label: 'Diámetro interior', value: '20 mm' },
        { key: 'depth-90', label: 'Profundidad de corte a 90°', value: '65 mm' },
        { key: 'depth-45', label: 'Profundidad de corte a 45°', value: '45 mm' },
        { key: 'bevel', label: 'Capacidad de inglete', value: '0–45°' },
        { key: 'weight', label: 'Peso', value: '4,6 kg' },
        { key: 'certification', label: 'Certificación', value: 'CE / GS / RoHS' },
      ],
      features: [
        'Motor de 1.800 W bobinado en casa con protección térmica.',
        'Base de aluminio inyectado, mecanizada plana para una profundidad constante de 65 mm a 90°.',
        'Disco de 185 mm (7-1/4 in) con diámetro interior de 20 mm; disco de carburo de 24 dientes incluido de serie.',
        'Bloqueo del husillo para cambiar el disco rápido con la llave suministrada.',
        'Empuñadura trasera de agarre blando y pomo delantero auxiliar para control a dos manos.',
        'Puerto de aspiración compatible con mangueras estándar de 35 mm.',
        'Trazabilidad por lote en rotor, caja de engranajes y prueba final.',
      ],
      applications: [
        'Estructuras, cubiertas y terrazas',
        'Dimensionado de madera y paneles',
        'Carpintería y acabados en obra',
        'Programas de marca blanca y OEM',
      ],
      faqs: [
        {
          q: '¿Qué puede cortar una sierra circular de 185 mm?',
          a: 'Una sierra de 185 mm está pensada para madera estructural, rastrel, tablas de terraza, paneles y carpintería general en obra. Con 65 mm de profundidad máxima a 90°, la CS-115 corta madera estructural habitual y la mayoría de paneles. Para cortes rectos repetidos en tableros, una sierra de mesa o de guía es más adecuada.',
        },
        {
          q: '¿Qué profundidad de corte tiene la CS-115 a 90° y 45°?',
          a: '65 mm a 90° y 45 mm a 45°, con inglete de 0–45°. La profundidad se mide con el disco montado y la base apoyada plana sobre la pieza.',
        },
        {
          q: '¿Qué disco utiliza la CS-115?',
          a: 'Un disco de 185 mm con diámetro interior de 20 mm; se incluye un disco de carburo de 24 dientes. Se puede usar cualquier disco compatible de 185 mm, incluidos discos de más dientes para cortes limpios en panel.',
        },
        {
          q: '¿La CS-115 está disponible con marca blanca?',
          a: 'Sí. Es el modelo que fabricamos con más frecuencia para programas OEM y de marca blanca. Se pueden especificar el color de la carcasa, el logotipo, la placa de características, el arte del cartón y el idioma del manual, y los archivos de certificación se suministran con el pedido.',
        },
        {
          q: '¿Qué tensión y enchufe están disponibles?',
          a: 'La versión de muestra es 230 V / 50 Hz. Indícanos el mercado de destino y confirmaremos la tensión y el enchufe para tu pedido.',
        },
        {
          q: '¿Puedo pedir una muestra antes de producir?',
          a: 'Sí. Podemos enviar unidades de muestra antes de un compromiso de producción para que tu equipo pruebe la sierra y apruebe el embalaje.',
        },
      ],
    },
  },
  {
    slug: 'cs-140',
    model: 'CS-140',
    name: 'CS-140 Circular Saw',
    category: 'circular-saws',
    badge: 'High output',
    seoTitle: '2000 W 185 mm Circular Saw — CS-140 | Super Strong',
    seoDescription:
      '2,000 W 185 mm circular saw for dense timber: 6,000 rpm, 68 mm cut at 90°, 47 mm at 45°. Factory-direct OEM and private-label supply with CE, GS and RoHS documentation.',
    summary:
      'The high-output 185 mm circular saw for dense timber and long shifts: 2,000 W, 6,000 rpm and 68 mm cutting depth at 90°.',
    description:
      'The CS-140 shares the CS-115 platform but runs a higher-output motor and a revised gear set. It is the 185 mm circular saw we recommend for markets where crews cut dense hardwood, engineered timber or run saws through long shifts.',
    image: '/media/cs140.webp',
    imageAlt: 'Super Strong CS-140 2000 W 185 mm circular saw with red blade',
    video: '/media/cs140.mp4',
    poster: '/media/cs140-poster.jpg',
    highlights: [
      { label: 'Power', value: '2,000 W' },
      { label: 'Blade', value: '185 mm' },
      { label: 'Speed', value: '6,000 rpm' },
      { label: 'Weight', value: '4.8 kg' },
    ],
    specs: [
      { key: 'model', label: 'Model', value: 'CS-140' },
      { key: 'power', label: 'Rated power', value: '2,000 W' },
      { key: 'voltage', label: 'Voltage / frequency', value: '230 V / 50 Hz' },
      { key: 'speed', label: 'No-load speed', value: '6,000 rpm' },
      { key: 'blade', label: 'Blade diameter', value: '185 mm' },
      { key: 'teeth', label: 'Blade teeth', value: '24T carbide' },
      { key: 'bore', label: 'Bore', value: '20 mm' },
      { key: 'depth-90', label: 'Cutting depth at 90°', value: '68 mm' },
      { key: 'depth-45', label: 'Cutting depth at 45°', value: '47 mm' },
      { key: 'bevel', label: 'Bevel capacity', value: '0–45°' },
      { key: 'weight', label: 'Weight', value: '4.8 kg' },
      { key: 'certification', label: 'Certification', value: 'CE / GS / RoHS' },
    ],
    features: [
      'Higher-output 2,000 W motor for dense timber and continuous use.',
      'Revised gear set rated for longer duty cycles.',
      'Same 185 mm blade, 20 mm bore and base as the CS-115 — one consumables list.',
      'Spindle lock for fast blade changes with the supplied wrench.',
      'Soft-grip handles and standard 35 mm dust port.',
      '100% run-test under load before packing.',
    ],
    applications: [
      'Dense hardwood and engineered timber',
      'High-volume site work',
      'Roofing and framing',
      'Private-label and OEM programs',
    ],
    faqs: [
      {
        q: 'What is the CS-140 used for?',
        a: 'The CS-140 is the high-output model in the range, intended for dense hardwood, engineered timber and crews that run a saw through long shifts. It shares the blade, bore and base with the CS-115.',
      },
      {
        q: 'How deep does the CS-140 cut at 90° and 45°?',
        a: '68 mm at 90° and 47 mm at 45°, with a 0–45° bevel. Cutting depth is measured with the blade fitted and the base flat on the workpiece.',
      },
      {
        q: 'What is the difference between the CS-115 and CS-140?',
        a: 'Both are 185 mm circular saws on the same platform. The CS-115 runs a 1,800 W motor at 5,800 rpm with 65 mm depth at 90°; the CS-140 runs 2,000 W at 6,000 rpm with a revised gear set and 68 mm depth at 90°.',
      },
      {
        q: 'Is the CS-140 available for private label?',
        a: 'Yes. Housing colour, logo, rating plate, carton artwork and manual language can be specified for your market, and certification files are supplied with the order.',
      },
      {
        q: 'What voltage does the CS-140 use?',
        a: 'The sample build is 230 V / 50 Hz. Tell us the destination market and we will confirm the voltage and plug configuration for your order.',
      },
      {
        q: 'Can I order a sample before a production run?',
        a: 'Yes. Sample units can be shipped before a production commitment so your team can test the saw and approve packaging.',
      },
    ],
    es: {
      name: 'Sierra circular CS-140',
      badge: 'Alto rendimiento',
      seoTitle: 'Sierra circular de 2.000 W y 185 mm — CS-140 | Super Strong',
      seoDescription:
        'Sierra circular de 185 mm y 2.000 W para madera dura: 6.000 rpm, corte de 68 mm a 90° y 47 mm a 45°. Suministro directo de fábrica OEM y marca blanca con documentación CE, GS y RoHS.',
      summary:
        'La sierra circular de 185 mm de alto rendimiento para madera dura y turnos largos: 2.000 W, 6.000 rpm y 68 mm de profundidad de corte a 90°.',
      description:
        'La CS-140 comparte la plataforma de la CS-115, pero monta un motor de mayor potencia y un juego de engranajes revisado. Es la sierra circular de 185 mm que recomendamos para mercados en los que los equipos cortan madera dura, madera de ingeniería o utilizan la sierra durante turnos largos.',
      imageAlt: 'Sierra circular Super Strong CS-140 de 2.000 W y 185 mm con disco rojo',
      highlights: [
        { label: 'Potencia', value: '2.000 W' },
        { label: 'Disco', value: '185 mm' },
        { label: 'Velocidad', value: '6.000 rpm' },
        { label: 'Peso', value: '4,8 kg' },
      ],
      specs: [
        { key: 'model', label: 'Modelo', value: 'CS-140' },
        { key: 'power', label: 'Potencia nominal', value: '2.000 W' },
        { key: 'voltage', label: 'Tensión / frecuencia', value: '230 V / 50 Hz' },
        { key: 'speed', label: 'Velocidad sin carga', value: '6.000 rpm' },
        { key: 'blade', label: 'Diámetro de disco', value: '185 mm' },
        { key: 'teeth', label: 'Dientes de disco', value: '24 dientes de carburo' },
        { key: 'bore', label: 'Diámetro interior', value: '20 mm' },
        { key: 'depth-90', label: 'Profundidad de corte a 90°', value: '68 mm' },
        { key: 'depth-45', label: 'Profundidad de corte a 45°', value: '47 mm' },
        { key: 'bevel', label: 'Capacidad de inglete', value: '0–45°' },
        { key: 'weight', label: 'Peso', value: '4,8 kg' },
        { key: 'certification', label: 'Certificación', value: 'CE / GS / RoHS' },
      ],
      features: [
        'Motor de 2.000 W de mayor potencia para madera dura y uso continuo.',
        'Juego de engranajes revisado para ciclos de trabajo más largos.',
        'Mismo disco de 185 mm, diámetro interior de 20 mm y base que la CS-115: una sola lista de consumibles.',
        'Bloqueo del husillo para cambiar el disco rápido con la llave suministrada.',
        'Empuñaduras blandas y puerto de aspiración estándar de 35 mm.',
        'Prueba al 100% bajo carga antes del embalaje.',
      ],
      applications: [
        'Madera dura y madera de ingeniería',
        'Trabajo intensivo en obra',
        'Cubiertas y estructuras',
        'Programas de marca blanca y OEM',
      ],
      faqs: [
        {
          q: '¿Para qué sirve la CS-140?',
          a: 'La CS-140 es el modelo de alto rendimiento de la gama, pensado para madera dura, madera de ingeniería y equipos que utilizan la sierra durante turnos largos. Comparte disco, diámetro interior y base con la CS-115.',
        },
        {
          q: '¿Qué profundidad de corte tiene la CS-140 a 90° y 45°?',
          a: '68 mm a 90° y 47 mm a 45°, con inglete de 0–45°. La profundidad se mide con el disco montado y la base apoyada plana sobre la pieza.',
        },
        {
          q: '¿Cuál es la diferencia entre la CS-115 y la CS-140?',
          a: 'Ambas son sierras circulares de 185 mm sobre la misma plataforma. La CS-115 monta un motor de 1.800 W a 5.800 rpm con 65 mm de profundidad a 90°; la CS-140 monta 2.000 W a 6.000 rpm con un juego de engranajes revisado y 68 mm de profundidad a 90°.',
        },
        {
          q: '¿La CS-140 está disponible con marca blanca?',
          a: 'Sí. Se pueden especificar el color de la carcasa, el logotipo, la placa de características, el arte del cartón y el idioma del manual para tu mercado, y los archivos de certificación se suministran con el pedido.',
        },
        {
          q: '¿Qué tensión utiliza la CS-140?',
          a: 'La versión de muestra es 230 V / 50 Hz. Indícanos el mercado de destino y confirmaremos la tensión y el enchufe para tu pedido.',
        },
        {
          q: '¿Puedo pedir una muestra antes de producir?',
          a: 'Sí. Podemos enviar unidades de muestra antes de un compromiso de producción para que tu equipo pruebe la sierra y apruebe el embalaje.',
        },
      ],
    },
  },
];

export function productFor(product: Product, lang: Locale): ResolvedProduct {
  const { es, ...rest } = product;
  return lang === 'es' ? { ...rest, ...es } : rest;
}

export function categoryFor(category: Category, lang: Locale) {
  return {
    ...category,
    name: lang === 'es' ? category.nameEs : category.name,
    description: lang === 'es' ? category.descriptionEs : category.description,
  };
}

export function specValue(product: ResolvedProduct, key: string): string {
  return product.specs.find((spec) => spec.key === key)?.value ?? '';
}

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getRelated = (slug: string) => products.filter((p) => p.slug !== slug).slice(0, 2);
