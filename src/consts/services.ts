import type { Service } from '@/types/service';

import ImagePerfume from '@/assets/images/services/perfume.png';
import ImageHotel from '@/assets/images/services/hotel.png';
import ImageEvento from '@/assets/images/services/evento.png';
import ImagePodcast from '@/assets/images/services/podcast.png';

export const SERVICES: Service[] = [
  {
    slug: 'fotos-productos',
    name: 'Fotografía de productos',
    description:
      'Creamos imágenes de alta calidad que resaltan cada detalle, ayudando a que tu tienda online o catálogo destaque frente a la competencia.',
    image: ImagePerfume,
  },
  {
    slug: 'fotos-corporativas',
    name: 'Fotografía de empresas',
    description:
      'Mostramos la personalidad y los valores de tu empresa en cada retrato, generando confianza en clientes, socios y colaboradores.',
    image: ImageHotel,
  },
  {
    slug: 'fotos-eventos',
    name: 'Fotografía de eventos',
    description:
      'Desde celebraciones privadas hasta conferencias empresariales, registramos cada momento con naturalidad y calidad para que perduren en el tiempo.',
    image: ImageEvento,
  },
  {
    slug: 'podcast',
    name: 'Podcast',
    description:
      'Nos encargamos de la grabación, montaje y postproducción de tu podcast para que suene impecable y conecte con tu audiencia.',
    image: ImagePodcast,
  },
];
