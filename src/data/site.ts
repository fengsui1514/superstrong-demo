export const site = {
  name: 'Super Strong',
  legalName: 'Super Strong Power Tools',
  tagline: 'Factory-direct circular saws',
  description:
    'Circular saw manufacturer in Ningbo, China. 185 mm (7-1/4 in) electric saws for OEM and private-label programs — CE/GS/RoHS and factory-direct supply.',
  descriptionEs:
    'Fabricante de sierras circulares en Ningbo, China. Sierras eléctricas de 185 mm para programas OEM y de marca blanca: CE/GS/RoHS y suministro directo de fábrica.',
  url: 'https://www.superstrong.example',
  email: 'sales@example.com',
  phone: '+86 000 0000 0000',
  whatsapp: '',
  address: {
    line1: 'Ningbo, Zhejiang',
    country: 'China',
  },
  founded: 2004,

  // Replace with real numbers before launch.
  stats: [
    { value: '20+', label: 'Years manufacturing', labelEs: 'Años de fabricación' },
    { value: '12,000m²', valueEs: '12.000 m²', label: 'Production floor', labelEs: 'Superficie de producción' },
    { value: '300k', valueEs: '300 mil', label: 'Units per year', labelEs: 'Unidades al año' },
    { value: '40+', label: 'Export markets', labelEs: 'Mercados de exportación' },
  ],

  certifications: ['ISO 9001', 'CE', 'GS', 'RoHS', 'BSCI'],

  nav: [
    { href: '/products/', label: 'Products', labelEs: 'Productos' },
    { href: '/oem-odm/', label: 'OEM / ODM', labelEs: 'OEM / ODM' },
    { href: '/#factory', label: 'Factory', labelEs: 'Fábrica' },
    { href: '/#quality', label: 'Quality', labelEs: 'Calidad' },
    { href: '/#inquiry', label: 'Contact', labelEs: 'Contacto' },
  ],

  // Leave empty to disable.
  ga4Id: '',
  formEndpoint: '',

  // Set to false for production.
  demoMode: true,
} as const;
