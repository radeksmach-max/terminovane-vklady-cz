import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const SITE_URL = "https://terminovane-vklady.cz";

function getInfocentrumRoutes(): string[] {
  const infocentrumDir = path.join(process.cwd(), "src", "app", "infocentrum");

  if (!fs.existsSync(infocentrumDir)) return [];

  return fs
    .readdirSync(infocentrumDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `/infocentrum/${entry.name}`)
    .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["/", "/blog", "/infocentrum", "/kontakty"];
  const infocentrumRoutes = getInfocentrumRoutes();
  const blogRoutes = getAllPosts().map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...infocentrumRoutes, ...blogRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
