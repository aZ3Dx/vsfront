export const SITE_CONFIG = {
  name: 'Visual Studio',
  url: 'https://visualstudio.pe',
  defaultTitle: 'Visual Studio | Fotografía y Producción Audiovisual en Lima, Perú',
  defaultDescription:
    'Agencia de fotografía y producción audiovisual en Lima, Perú. Especializados en fotografía de producto, moda, retrato corporativo, podcasts y más. Calidad profesional y entrega rápida.',
  defaultImage: 'https://assets.visualstudio.pe/og-default.jpg',
  logo: 'https://assets.visualstudio.pe/logo.png',
  locale: 'es_PE',
  phone: '+51969333527',
  email: 'contacto@visualstudio.pe',
  // Negocio de área de servicio por ahora (el local físico aún no está listo).
  // No se declara streetAddress/postalCode reales hasta abrir el local + crear el GBP.
  address: {
    addressLocality: 'Lima',
    addressRegion: 'Lima',
    addressCountry: 'PE',
  },
  socialLinks: [
    'https://www.instagram.com/visual.studio_pe/',
    'https://www.facebook.com/visualstudioperu',
  ],
} as const;
