import type { ImageMetadata } from 'astro';
import type { MediaFile } from './mediaFile';

type Point = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  description: string;
  portfolioDescription: string;
  points: Point[];
  videos?: string[];
  image: MediaFile;
  allMediaFiles: MediaFile[];
  carouselMediaFiles: MediaFile[];
  /** Meta description optimizada para SEO (150-160 car.). Fallback: description. */
  seoDescription?: string;
  /** Párrafos de texto extenso para dar profundidad de contenido (SEO). */
  about?: string[];
  /** Preguntas frecuentes. Se renderizan como sección + schema FAQPage. */
  faqs?: ServiceFaq[];
};
