import type { Client } from '@/types/client';

const MEDIA_URL = import.meta.env.MEDIA_URL;

const addImages = (clients: Client[]) => {
  return clients.map((client) => {
    return {
      ...client,
      image: {
        ...client.image,
        url: `${MEDIA_URL}/clients/${client.image.alt}`,
      },
    };
  });
};

export const CLIENTS: Client[] = addImages([
  {
    name: 'Tournasol',
    image: {
      url: '',
      type: 'image',
      alt: 'Tournasol Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'SAZA',
    image: {
      url: '',
      type: 'image',
      alt: 'SAZA logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'Micro-Tech',
    image: {
      url: '',
      type: 'image',
      alt: 'Micro-Tech logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'Limasoft',
    image: {
      url: '',
      type: 'image',
      alt: 'Limasoft Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'JW-Marriott',
    image: {
      url: '',
      type: 'image',
      alt: 'JW-Marriott Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'ItsWood',
    image: {
      url: '',
      type: 'image',
      alt: 'ItsWood Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'HanaHandmade',
    image: {
      url: '',
      type: 'image',
      alt: 'HanaHandmade Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'Dispolab',
    image: {
      url: '',
      type: 'image',
      alt: 'Dispolab',
      orientation: 'landscape',
    },
  },
  {
    name: 'Courtyard',
    image: {
      url: '',
      type: 'image',
      alt: 'Courtyard Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'Cenergia',
    image: {
      url: '',
      type: 'image',
      alt: 'Cenergia Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'Baoz',
    image: {
      url: '',
      type: 'image',
      alt: 'Baoz Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'AICI',
    image: {
      url: '',
      type: 'image',
      alt: 'AICI Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'Comfy',
    image: {
      url: '',
      type: 'image',
      alt: 'Comfy Logo',
      orientation: 'landscape',
    },
  },
  {
    name: 'FrancescaMaxera',
    image: {
      url: '',
      type: 'image',
      alt: 'FrancescaMaxera',
      orientation: 'landscape',
    },
  },
]);
