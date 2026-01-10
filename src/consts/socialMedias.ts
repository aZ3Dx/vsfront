import type { SocialMedia, SocialMediaName } from '@/types/socialMedia';

export const SOCIAL_MEDIAS: Record<SocialMediaName, SocialMedia> = {
  WhatsApp: {
    name: '(+51) 969 333 527',
    link: 'https://wa.me/51969333527',
  },
  Instagram: {
    name: '@visual.studio_pe',
    link: 'https://www.instagram.com/visual.studio_pe/',
  },
  Facebook: {
    name: 'visualstudioperu',
    link: 'https://www.facebook.com/visualstudioperu',
  },
  Email: {
    name: 'contacto@visualstudio.pe',
    link: 'mailto:contacto@visualstudio.pe',
  },
};
