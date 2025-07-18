import { z, defineCollection } from "astro:content";

const productsCollection = defineCollection({
  type: "data", // Usamos archivos JSON
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      slug: z.string(),
      name: z.string(),
      type: z.enum([
        "Software médico",
        "Servidores",
        "Monitores de Grado Médico",
        "Publicadores",
      ]),
      category: z.string(), // Puedes definir un enum si quieres limitar categorías específicas
      description: z.string(),
      largeDescription: z.string(),
      image: image(),
      features: z.array(z.string()),
      fullFeatures: z.array(z.string()).optional(), // Solo algunos productos lo usan
      fullFeaturesTable: z
        .array(
          // Tabla estructurada
          z.object({
            section: z.string(), // Título de la sección (ej. "Gestión")
            items: z.array(z.string()), // Características dentro de la sección
          })
        )
        .optional(),
      url: z.string().url(),
      order: z.number(),
    }),
});

export const collections = {
  monitores: productsCollection,
  software: productsCollection,
  servidores: productsCollection,
  publicadores: productsCollection,
};
