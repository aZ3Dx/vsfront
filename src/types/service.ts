import type { ImageMetadata } from 'astro';
import type { MediaFile } from './mediaFile';

type Point = {
  title: string;
  description: string;
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
};
