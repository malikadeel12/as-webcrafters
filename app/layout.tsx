/*
  Change summary:
  - What: Search title, description, and business details now use www.aswebcrafters.com.
  - Why: Link previews were still advertising the old Vercel address after the .com was attached.
  - Related: lib/site.ts, lib/data.ts founders, app/sitemap.ts
  - MCP Context 7: metadataBase, robots, and openGraph from /vercel/next.js.
*/

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { contact, founders } from "@/lib/data";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Custom Websites and Software | A&S WebCrafters",
    template: "%s | A&S WebCrafters",
  },
  description: siteDescription,
  // Ask Google to index the public pages. This does not choose a ranking.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en",
    url: "/",
    siteName,
    title: "Custom Websites and Software | A&S WebCrafters",
    description: siteDescription,
    images: [{ url: "/logo.png", alt: "A&S WebCrafters" }],
  },
  twitter: {
    card: "summary",
    title: "Custom Websites and Software | A&S WebCrafters",
    description: siteDescription,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteName,
              url: siteUrl,
              image: `${siteUrl}/logo.png`,
              description: siteDescription,
              email: contact.email,
              telephone: contact.phoneTel,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Islamabad",
                addressCountry: "PK",
              },
              areaServed: "Worldwide",
              founder: { "@type": "Person", name: "Adeel Riaz" },
              // Public profiles only. These help Google connect the studio to the founder.
              sameAs: founders[0].socials.filter((item) => item.href.startsWith("http")).map((item) => item.href),
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
