import type { MetadataRoute } from "next";

const BASE_URL = "https://hopefortheworld.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/know-god", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/daily", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/worship", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/testimony", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/fellowship", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/missions", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/missions-partner", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/recommended-sites", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
