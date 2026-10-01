/*
  Change summary:
  - What: Shared page shell plus the search title, description, and business details.
  - Why: Search and link previews should show a studio that works with clients anywhere, based in Islamabad.
  - Related: app/globals.css, components/Header.tsx, components/Footer.tsx
  - MCP Context 7: next/font/google and root layout from /vercel/next.js.
*/

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { contact } from "@/lib/data";
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
    default: "A&S WebCrafters | Custom Websites and Software",
    template: "%s | A&S WebCrafters",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName,
    title: "A&S WebCrafters | Custom Websites and Software",
    description: siteDescription,
    images: [{ url: "/logo.png", alt: "A&S WebCrafters" }],
  },
  twitter: {
    card: "summary",
    title: "A&S WebCrafters | Custom Websites and Software",
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
              email: contact.email,
              telephone: contact.phoneTel,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Islamabad",
                addressCountry: "PK",
              },
              areaServed: "Worldwide",
              founder: { "@type": "Person", name: "Adeel Riaz" },
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
