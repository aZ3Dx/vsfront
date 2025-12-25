type MediaType = 'image' | 'video';

export type MediaFile = {
  url: string;
  type: MediaType;
  alt: string;
  orientation: 'landscape' | 'portrait';
};
