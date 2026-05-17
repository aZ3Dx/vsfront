import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    madeBy: z.string(),
    lectureTime: z.string(),
    coverImageUrl: z.string(),
    coverImageAlt: z.string().optional(),
    description: z.string(),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blogs,
};
