import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const guideSchema = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  author: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  featured: z.boolean().optional(),
  tags: z
    .array(z.string())
    .or(
      // HackMD inline tags
      z
        .string()
        .transform((value) => value.split(',').map(String))
        .pipe(z.string().array()),
    )
    .default(['Meshtastic']),
  hackmd: z.string().optional(),
});

const guideCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/contents/guide' }),
  schema: guideSchema,
  type: 'content_layer',
});

export const collections = { guide: guideCollection };
