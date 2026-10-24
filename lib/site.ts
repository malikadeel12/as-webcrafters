/*
  Change summary:
  - What: The public address is now https://www.aswebcrafters.com, and each page can name that address as its own.
  - Why: The .com is attached, and the bare domain already forwards to www. Search should follow that one address.
  - Related: app/layout.tsx, app/sitemap.ts, app/robots.ts, next.config.ts, app/api/contact/route.ts
  - MCP Context 7: metadataBase plus a relative canonical, from /vercel/next.js.
*/

import type { Metadata } from "next";

// www is the address Vercel already uses. aswebcrafters.com forwards there.
export const siteUrl = "https://www.aswebcrafters.com";

// The old public address. next.config sends this host to siteUrl so Google does not keep two copies.
export const previousHost = "as-webcrafters.vercel.app";

export const siteName = "A&S WebCrafters";

export const siteDescription =
  "A&S WebCrafters builds custom websites, software, and WhatsApp lead follow-up for clients anywhere. The studio is based in Islamabad and works remotely.";

// One place for the canonical link and the share link, so a page does not point at the homepage by mistake.
export function pageSearch(path: "/" | `/${string}`, description: string, title?: string): Metadata {
  const brandedTitle = title ? `${title} | ${siteName}` : undefined;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      description,
      ...(brandedTitle ? { title: brandedTitle } : {}),
    },
  };
}
