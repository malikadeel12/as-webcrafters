/*
  Change summary:
  - What: Footer service names open the services overview, not separate package pages.
  - Why: The individual service pages were removed, so those links must not lead nowhere.
  - Related: lib/data.ts
  - MCP Context 7: Next.js Link from /vercel/next.js.
*/

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { contact, services } from "@/lib/data";

const company = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 md:grid-cols-4 md:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[14px] leading-6 text-muted">
            Custom websites and software, built by the founder in Islamabad, for clients anywhere.
          </p>
          <div className="mt-5 flex gap-2" aria-hidden>
            {[0, 1, 2, 3].map((id) => (
              <span
                key={id}
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              </span>
            ))}
          </div>
          <p className="mt-5 text-[13px] text-muted">{contact.address}</p>
          <a href={`tel:${contact.phoneTel}`} className="mt-1 block text-[13px] font-medium text-ink">
            {contact.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-400">Services</p>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="text-[14px] text-slate-600 hover:text-ink">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-400">Company</p>
          <ul className="mt-4 space-y-2.5">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[14px] text-slate-600 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-400">Get In Touch</p>
          <p className="mt-4 text-[14px] leading-6 text-slate-600">
            Ready to start the next project? Tell us what is stalling growth.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[14px] font-medium text-ink hover:bg-slate-50"
          >
            <Mail className="h-4 w-4" />
            {contact.email}
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[14px] font-medium text-white hover:bg-black"
          >
            <Phone className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1180px] flex-col items-start justify-between gap-3 border-t border-slate-100 px-5 pt-6 text-[13px] text-muted md:flex-row md:items-center md:px-8">
        <p>© {new Date().getFullYear()} A&S WebCrafters. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
