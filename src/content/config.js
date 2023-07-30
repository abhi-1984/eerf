import { defineCollection, z } from "astro:content";

const wingCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    description: z.string(),
    accent: z.string(),
    title: z.string(),
    subtitle: z.string(),
    cover: z.string(),
  }),
});
export const collections = {
  wings: wingCollection,
};
