/*
  Change summary:
  - What: The page list uses www.aswebcrafters.com, with a steady "last changed" date.
  - Why: A fresh date on every visit tells Google that nothing is stable. The .com is the address to list.
  - Related: lib/site.ts, lib/data.ts blogPosts, app/robots.ts
  - MCP Context 7: Next.js sitemap file convention from /vercel/next.js.
*/

import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { siteUrl } from "@/lib/site";

// The day the public address and featured work were updated. Change this when a page's words change.
const updatedOn = new Date("2026-10-24");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...pages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: updatedOn,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: updatedOn,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
