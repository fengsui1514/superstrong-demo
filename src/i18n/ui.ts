import type { Locale } from './index';

type UiCopy = {
  skip: string;
  menuOpen: string;
  menuClose: string;
  language: string;
  navPrimary: string;
  navMobile: string;
  quote: string;
  breadcrumbLabel: string;
  home: string;
  products: string;
  footer: {
    products: string;
    company: string;
    contact: string;
    allProducts: string;
    oem: string;
    factory: string;
    quality: string;
    contactLink: string;
    privacy: string;
    rights: string;
    demo: string;
    legal: string;
  };
  inquiry: {
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    company: string;
    companyPh: string;
    country: string;
    countryPh: string;
    model: string;
    anyModel: string;
    oemProgram: string;
    other: string;
    qty: string;
    qtyPh: string;
    message: string;
    messagePh: string;
    consentBefore: string;
    privacy: string;
    consentAfter: string;
    send: string;
    sending: string;
    demoMsg: string;
    successMsg: string;
    errorMsg: string;
    noteLive: string;
    noteDemo: string;
    whatsappQuestion: string;
    whatsappLink: string;
    emailQuestion: string;
  };
  cookie: {
    label: string;
    textBefore: string;
    privacy: string;
    textAfter: string;
    decline: string;
    accept: string;
  };
  whatsapp: { aria: string; prefilled: string };
  notFound: { eyebrow: string; title: string; body: string; products: string; contact: string };
  product: {
    requestQuote: string;
    allProducts: string;
    demoMedia: string;
    viewSpecs: string;
    oemReady: string;
  };
  cursor: { view: string; switch: string; ask: string };
};

export const ui: Record<Locale, UiCopy> = {
  en: {
    skip: 'Skip to content',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    navPrimary: 'Primary',
    navMobile: 'Mobile',
    quote: 'Get a quote',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    products: 'Products',
    footer: {
      products: 'Products',
      company: 'Company',
      contact: 'Contact',
      allProducts: 'All products',
      oem: 'OEM / ODM',
      factory: 'Factory',
      quality: 'Quality',
      contactLink: 'Contact',
      privacy: 'Privacy',
      rights: 'All rights reserved.',
      demo: 'Demo build — sample specs and AI-generated media. Replace before launch.',
      legal: 'Specifications subject to change without notice.',
    },
    inquiry: {
      name: 'Name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@company.com',
      company: 'Company',
      companyPh: 'Company name',
      country: 'Country',
      countryPh: 'Country / region',
      model: 'Model of interest',
      anyModel: 'Any model',
      oemProgram: 'OEM / ODM program',
      other: 'Other',
      qty: 'Est. quantity',
      qtyPh: 'e.g. 500 units',
      message: 'Message',
      messagePh: 'Target market, certification needs, packaging, delivery window...',
      consentBefore: 'I agree that',
      privacy: 'privacy policy',
      consentAfter: 'may use these details to respond to my inquiry, as described in the',
      send: 'Send inquiry →',
      sending: 'Sending…',
      demoMsg: 'Demo only — this form is not connected yet. Please email {email}.',
      successMsg: 'Thank you — your inquiry has been sent. Our team will reply within one business day.',
      errorMsg: 'Sorry, the form could not be sent. Please email {email} directly.',
      noteLive: 'Your details are only used to answer this inquiry.',
      noteDemo: 'Demo form — no data is sent. Connect formEndpoint in src/data/site.ts before launch.',
      whatsappQuestion: 'Prefer WhatsApp?',
      whatsappLink: 'Chat with sales →',
      emailQuestion: 'Prefer email?',
    },
    cookie: {
      label: 'Cookie consent',
      textBefore: 'We use analytics cookies to understand how the site is used. Nothing loads until you accept. Read the',
      privacy: 'privacy policy',
      textAfter: '.',
      decline: 'Essential only',
      accept: 'Accept analytics',
    },
    whatsapp: {
      aria: 'Chat with sales on WhatsApp',
      prefilled: 'Hello {name}, I would like a quote for your circular saws.',
    },
    notFound: {
      eyebrow: 'Error 404',
      title: '404',
      body: 'That page has been moved, renamed or never existed. Head back to the line-up or send us a note — we will point you to the right model.',
      products: 'View products',
      contact: 'Contact sales',
    },
    product: {
      requestQuote: 'Request a quote',
      allProducts: 'All products',
      demoMedia: 'Demo media',
      viewSpecs: 'View specs',
      oemReady: 'OEM ready',
    },
    cursor: { view: 'View', switch: 'Switch', ask: 'Ask' },
  },
  es: {
    skip: 'Saltar al contenido',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    language: 'Idioma',
    navPrimary: 'Principal',
    navMobile: 'Móvil',
    quote: 'Pedir presupuesto',
    breadcrumbLabel: 'Ruta de navegación',
    home: 'Inicio',
    products: 'Productos',
    footer: {
      products: 'Productos',
      company: 'Empresa',
      contact: 'Contacto',
      allProducts: 'Todos los productos',
      oem: 'OEM / ODM',
      factory: 'Fábrica',
      quality: 'Calidad',
      contactLink: 'Contacto',
      privacy: 'Privacidad',
      rights: 'Todos los derechos reservados.',
      demo: 'Versión demo — especificaciones de ejemplo y material generado por IA. Sustituir antes del lanzamiento.',
      legal: 'Las especificaciones pueden cambiar sin previo aviso.',
    },
    inquiry: {
      name: 'Nombre',
      namePh: 'Tu nombre',
      email: 'Correo electrónico',
      emailPh: 'tu@empresa.com',
      company: 'Empresa',
      companyPh: 'Nombre de la empresa',
      country: 'País',
      countryPh: 'País / región',
      model: 'Modelo de interés',
      anyModel: 'Cualquier modelo',
      oemProgram: 'Programa OEM / ODM',
      other: 'Otro',
      qty: 'Cantidad estimada',
      qtyPh: 'p. ej. 500 unidades',
      message: 'Mensaje',
      messagePh: 'Mercado objetivo, certificaciones, embalaje, plazo de entrega...',
      consentBefore: 'Acepto que',
      privacy: 'política de privacidad',
      consentAfter: 'utilice estos datos para responder a mi consulta, según se describe en la',
      send: 'Enviar consulta →',
      sending: 'Enviando…',
      demoMsg: 'Solo demo — este formulario aún no está conectado. Escribe a {email}.',
      successMsg: 'Gracias — tu consulta se ha enviado. Nuestro equipo responderá en un día laborable.',
      errorMsg: 'Lo sentimos, no se pudo enviar el formulario. Escribe directamente a {email}.',
      noteLive: 'Tus datos solo se utilizan para responder a esta consulta.',
      noteDemo: 'Formulario demo — no se envía ningún dato. Configura formEndpoint en src/data/site.ts antes del lanzamiento.',
      whatsappQuestion: '¿Prefieres WhatsApp?',
      whatsappLink: 'Habla con ventas →',
      emailQuestion: '¿Prefieres el correo?',
    },
    cookie: {
      label: 'Consentimiento de cookies',
      textBefore: 'Usamos cookies analíticas para entender cómo se utiliza el sitio. No se carga nada hasta que las aceptes. Lee la',
      privacy: 'política de privacidad',
      textAfter: '.',
      decline: 'Solo esenciales',
      accept: 'Aceptar analíticas',
    },
    whatsapp: {
      aria: 'Hablar con ventas por WhatsApp',
      prefilled: 'Hola {name}, me gustaría recibir un presupuesto de sus sierras circulares.',
    },
    notFound: {
      eyebrow: 'Error 404',
      title: '404',
      body: 'Esa página se ha movido, ha cambiado de nombre o nunca existió. Vuelve a la gama o escríbenos y te indicaremos el modelo adecuado.',
      products: 'Ver productos',
      contact: 'Contactar con ventas',
    },
    product: {
      requestQuote: 'Solicitar presupuesto',
      allProducts: 'Todos los productos',
      demoMedia: 'Material demo',
      viewSpecs: 'Ver especificaciones',
      oemReady: 'Listo para OEM',
    },
    cursor: { view: 'Ver', switch: 'Cambiar', ask: 'Consultar' },
  },
};
