import type { ImageMetadata } from 'astro';

export type Comment = {
  comment: string;
  rating: number;
  userName: string;
  userInfo: string;
  userPhoto: ImageMetadata;
};
