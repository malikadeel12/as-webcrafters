/*
  Change summary:
  - What: Floating pill navigation plus a mobile drawer.
  - Why: Every primary action on the live site starts from this bar.
  - Related: lib/data.ts, app/layout.tsx
  - MCP Context 7: Next.js usePathname from /vercel/next.js App Router.
*/

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="pointer-events-auto mx-auto flex max-w-[1180px] items-center justify-between rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.06)] backdrop-blur-md md:px-6">
        <Logo compact />

        {/* Desktop links stay in a tight cluster like the live pill */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-[14px] font-semibold transition ${
                  active ? "text-brand" : "text-slate-600 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-ink px-4 py-2 text-[14px] font-semibold text-white hover:bg-black"
          >
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1180px] rounded-2xl border border-slate-200 bg-white p-3 shadow-xl lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-700 hover:bg-slate-50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-full bg-ink px-4 py-3 text-center text-[15px] font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
