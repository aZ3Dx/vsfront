import type { ImageMetadata } from 'astro';
import type { MediaFile } from './mediaFile';

export type Client = {
  name: string;
  image: MediaFile;
};
