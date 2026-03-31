import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { getSiteUrl } from "@/lib/site";

const STATIC = [
  "",
  "/about",
  "/skills",
  "/projects",
  "/case-studies",
  "/services",
  "/testimonials",
  "/resume",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");
  const now = new Date();

  const routes: MetadataRoute.Sitemap = STATIC.map((path) => ({
    url: path === "" ? `${base}/` : `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.85,
  }));

  for (const cs of caseStudies) {
    routes.push({
      url: `${base}/case-studies/${cs.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return routes;
}
