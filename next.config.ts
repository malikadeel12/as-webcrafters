/*
  Change summary:
  - What: Visits to the old Vercel address permanently move to www.aswebcrafters.com.
  - Why: The .com is the studio's address now. Two public addresses split search credit.
  - Related: lib/site.ts previousHost and siteUrl. Those two strings must stay in step with the values below.
  - MCP Context 7: next.config redirects with a host match, from /vercel/next.js.
*/

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // :path* includes the homepage and every inner page.
        source: "/:path*",
        has: [{ type: "host", value: "as-webcrafters.vercel.app" }],
        destination: "https://www.aswebcrafters.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
