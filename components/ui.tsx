/*
  Change summary:
  - What: Shared buttons, chips, and page-width wrappers.
  - Why: One CTA language keeps every page feeling like the same studio.
  - Related: all pages
  - MCP Context 7: Next.js Link from /vercel/next.js.
*/

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "blue" | "black" | "ghost" | "white" | "outline";
  className?: string;
  external?: boolean;
  arrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "blue",
  className = "",
  external,
  arrow = true,
}: BtnProps) {
  const styles = {
    blue: "bg-brand-bright text-ink hover:bg-accent-deep hover:text-white shadow-[0_10px_24px_rgba(34,211,238,0.35)]",
    black: "bg-ink text-white hover:bg-black",
    ghost: "bg-white text-ink border border-slate-200 hover:bg-slate-50",
    white: "bg-white text-ink hover:bg-slate-50",
    outline: "bg-white/5 text-white border border-white/15 hover:bg-white/10",
  }[variant];

  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-medium transition ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
        {arrow && <ArrowRight className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-3 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${
        light ? "text-white/50" : "text-brand"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    </p>
  );
}

export function AccentTitle({
  before,
  accent,
  after = "",
  className = "",
}: {
  before: string;
  accent: string;
  after?: string;
  className?: string;
}) {
  return (
    <h2
      className={`serif text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-ink md:text-[52px] md:leading-[1.08] ${className}`}
    >
      {before}{" "}
      <span className="bg-linear-to-r from-[#0a1628] to-accent bg-clip-text text-transparent">
        {accent}
      </span>
      {after}
    </h2>
  );
}
