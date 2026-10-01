/*
  Change summary:
  - What: A list of every public page for search engines.
  - Why: Google finds new pages faster when the site publishes a sitemap.
  - Related: lib/site.ts, lib/data.ts blogPosts, app/robots.ts
  - MCP Context 7: Next.js sitemap file convention from /vercel/next.js.
*/

import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/blog", "/products", "/contact", "/privacy", "/terms"];

  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
