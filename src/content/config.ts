// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const servicesCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      picture: image().optional(),
      content: z
        .array(
          z.object({
            heading: z.string().optional(),
            text: z.string(),
            image: image().optional(),
          }),
        )
        .optional(),
    }),
});

const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string(),
      summary: z.string(),
      date: z.date(),
      thumbnail: z
        .object({
          image: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

// Team Members - Used in About Us page
const teamMembersCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      picture: image().optional(),
      content: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  services: servicesCollection,
  blog: blogCollection,
  team: teamMembersCollection,
};
