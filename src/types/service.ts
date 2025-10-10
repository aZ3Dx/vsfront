import type { ImageMetadata } from 'astro';

type Point = {
  title: string;
  description: string;
};

type MediaType = 'image' | 'video';

export type MediaFile = {
  url: string;
  type: MediaType;
  alt: string;
};

export type Service = {
  slug: string;
  name: string;
  description: string;
  portfolioDescription: string;
  points: Point[];
  image: ImageMetadata;
  carouselImagesUrl: string[];
  allMediaFiles: MediaFile[];
};
