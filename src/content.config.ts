import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    madeBy: z.string(),
    lectureTime: z.string(),
    coverImageUrl: z.string(),
    description: z.string(),
    createdAt: z.string(),
  }),
});

export const collections = {
  blogs,
};
