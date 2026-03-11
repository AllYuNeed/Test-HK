import { MetadataRoute } from "next";
import { getAllProductRoutes } from "@/data/products";
import { getAllClientRoutes } from "@/data/clients";
import { categories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hookimpex.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/clients`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.flatMap(cat => [
    { url: `${base}/products/${cat.categorySlug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    ...cat.subcategories.map(sub => ({
      url: `${base}/products/${cat.categorySlug}/${sub.subcategorySlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ]);

  const productRoutes: MetadataRoute.Sitemap = getAllProductRoutes().map(r => ({
    url: `${base}/products/${r.category}/${r.subcategory}/${r.product}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const clientRoutes: MetadataRoute.Sitemap = getAllClientRoutes().map(r => ({
    url: `${base}/clients/${r.client}/${r.location}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...clientRoutes];
}
