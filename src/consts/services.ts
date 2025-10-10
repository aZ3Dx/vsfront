import type { MediaFile, Service } from '@/types/service';

import ImagePerfume from '@/assets/images/services/perfume.png';
import ImageHotel from '@/assets/images/services/hotel.png';
import ImageEvento from '@/assets/images/services/evento.png';
import ImagePodcast from '@/assets/images/services/podcast.png';

const S3_BUCKET = import.meta.env.S3_BUCKET;

const addCarouselImages = (services: Service[]) => {
  return services.map((service) => {
    return {
      ...service,
      carouselImagesUrl: Array.from({ length: 5 }, (_, index) => {
        return `${S3_BUCKET}/services/${service.slug}/${index + 1}.webp`;
      }),
      allMediaFiles: Array.from({ length: 5 }, (_, index) => {
        return {
          url: `${S3_BUCKET}/services/${service.slug}/${index + 1}.webp`,
          type: 'image',
          alt: `${service.name} ${index + 1}`,
        };
      }) as MediaFile[],
    };
  });
};

export const SERVICES: Service[] = addCarouselImages([
  {
    slug: 'fotos-productos',
    name: 'Fotografía de productos',
    description:
      'Creamos imágenes de alta calidad que resaltan cada detalle, ayudando a que tu tienda online o catálogo destaque frente a la competencia.',
    portfolioDescription:
      'Cada producto tiene una historia. Nosotros la contamos con luz, enfoque y detalle.',
    points: [
      {
        title: 'Impacto visual inmediato',
        description:
          'Imágenes que destacan en catálogos y tiendas online, captando la atención de tu cliente ideal.',
      },
      {
        title: 'Listas para vender',
        description: 'Fotografía optimizada para e-commerce, redes sociales y campañas digitales.',
      },
      {
        title: 'Detalle que enamora',
        description: 'Resaltamos la textura, color y atributos únicos de cada producto.',
      },
    ],
    image: ImagePerfume,
    carouselImagesUrl: [],
    allMediaFiles: [],
  },
  {
    slug: 'fotos-corporativas',
    name: 'Fotografía de empresas',
    description:
      'Mostramos la personalidad y los valores de tu empresa en cada retrato, generando confianza en clientes, socios y colaboradores.',
    portfolioDescription: 'La imagen de tu empresa, en su mejor versión.',
    points: [
      {
        title: 'Proyecta profesionalismo',
        description: 'Retratos corporativos y de equipo que transmiten confianza.',
      },
      {
        title: 'Marca con identidad',
        description: 'Fotografías de espacios y procesos que cuentan la historia de tu negocio.',
      },
      {
        title: 'Visibilidad en todos los canales',
        description: 'Imágenes ideales para web, presentaciones y redes sociales.',
      },
    ],
    image: ImageHotel,
    carouselImagesUrl: [],
    allMediaFiles: [],
  },
  {
    slug: 'fotos-eventos',
    name: 'Fotografía de eventos',
    description:
      'Desde celebraciones privadas hasta conferencias empresariales, registramos cada momento con naturalidad y calidad para que perduren en el tiempo.',
    portfolioDescription: 'Instantes únicos, capturados para revivirlos siempre.',
    points: [
      {
        title: 'Recuerdos auténticos',
        description:
          'Capturamos momentos espontáneos y significativos sin interrumpir la experiencia.',
      },
      {
        title: 'Cobertura completa',
        description: 'Desde la llegada hasta el cierre, ningún detalle se pierde.',
      },
      {
        title: 'Memorias duraderas',
        description: 'Fotos que reviven la emoción de tu evento una y otra vez.',
      },
    ],
    image: ImageEvento,
    carouselImagesUrl: [],
    allMediaFiles: [],
  },
  {
    slug: 'podcast',
    name: 'Podcast',
    description:
      'Nos encargamos de la grabación, montaje y postproducción de tu podcast para que suene impecable y conecte con tu audiencia.',
    portfolioDescription: 'Tu voz puede llegar más lejos. Nosotros te ayudamos a amplificarla.',
    points: [
      {
        title: 'Proyecta profesionalismo',
        description: 'Grabación y edición de audio con calidad de estudio.',
      },
      {
        title: 'Marca con identidad',
        description: 'Desde la preparación hasta el montaje final, nos encargamos de todo.',
      },
      {
        title: 'Visibilidad en todos los canales',
        description: 'Podcasts diseñados para conectar con tu audiencia y fortalecer tu marca.',
      },
    ],
    image: ImagePodcast,
    carouselImagesUrl: [],
    allMediaFiles: [],
  },
]);
