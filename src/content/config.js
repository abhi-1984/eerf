import { defineCollection, z } from "astro:content";

const wingCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    accent: z.string(),
    title: z.string(),
    subtitle: z.string(),
    cover: image(),
  }),
});

const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    cover: z.string(),
  }),
});


export const collections = {
  wings: wingCollection,
  blogs: blogCollection,
};
