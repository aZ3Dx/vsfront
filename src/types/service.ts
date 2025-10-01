import type { ImageMetadata } from "astro";

export type Service = {
  slug: string;
  name: string;
  description: string;
  image: ImageMetadata;
};
