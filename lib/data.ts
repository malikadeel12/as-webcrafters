/*
  Change summary:
  - What: Shared site content, including WhatsApp Lead Desk as the only product. Testimonials were removed.
  - Why: One source keeps labels, routes, and CTAs consistent, and the review row is no longer on the site.
  - Related: app/products/page.tsx, components/home/LeadDeskBlock.tsx
  - MCP Context 7: plain data module; no framework API here.
*/

// --- Navigation ---
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/products", label: "Products" },
] as const;

// Business contact: one email and one mobile, used by the footer, contact page, and founder card.
export const contact = {
  email: "aswebcrafters@gmail.com",
  phoneDisplay: "0302 3368307",
  phoneTel: "+923023368307",
  whatsapp: "https://wa.me/923023368307",
  address: "Islamabad, Pakistan",
};

// --- Services (business rule: six offers, each has its own route) ---
export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    eyebrow: "Turn Visitors Into Customers",
    blurb:
      "Fast, search-ready sites built to earn trust, collect enquiries, and grow the business — not just look finished.",
    summary:
      "A high-performance storefront that actually converts, built around your offer instead of a generic template.",
    who: [
      "Teams stuck with a slow or mobile-unfriendly site",
      "New brands that need to look established on day one",
      "Founders who have outgrown locked-down templates",
    ],
    why: [
      "Most buyers judge credibility from the first screen.",
      "A clear site works as a salesperson after hours.",
      "Ads and SEO need a single, fast landing hub.",
    ],
    packages: [
      { name: "Landing Page", pages: "1", note: "Focused campaign page" },
      { name: "Business Website", pages: "3–5", note: "Most requested" },
      { name: "Custom / Commerce", pages: "6–8", note: "Deeper product flows" },
    ],
  },
] as const;
