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
