
import { z, defineCollection } from "astro:content";

const productsCollection = defineCollection({
  type: "data", // Usamos archivos JSON
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    type: z.enum(["Software médico", "Servidores", "Monitores de Grado Médico", "Publicadores"]),
    category: z.string(), // Puedes definir un enum si quieres limitar categorías específicas
    description: z.string(),
    largeDescription: z.string(),
    image: z.string(),
    features: z.array(z.string()),
    fullFeatures: z.array(z.string()).optional(), // Solo algunos productos lo usan
    url: z.string().url(),
    order: z.number()
  })
});

export const collections = {
  monitores: productsCollection,
  software: productsCollection,
  servidores: productsCollection,
  publicadores: productsCollection
};
