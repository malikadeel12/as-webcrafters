/*
  Change summary:
  - What: Tells search engines they may read the site, and where the page list lives.
  - Why: A sitemap only helps if crawlers are allowed to use it.
  - Related: app/sitemap.ts, lib/site.ts
  - MCP Context 7: Next.js robots file convention from /vercel/next.js.
*/

import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
