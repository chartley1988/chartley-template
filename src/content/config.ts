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
					})
				)
				.optional(),
		}),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	services: servicesCollection,
};
