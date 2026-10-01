/*
  Change summary:
  - What: Circular GitHub, LinkedIn, and email buttons for the founder card.
  - Why: These are the social links on the live A&S founder card.
  - Related: lib/data.ts founders.socials, components/home/Founders.tsx, app/about/page.tsx
*/

import { Mail } from "lucide-react";

type Social = {
  kind: "github" | "linkedin" | "email";
  label: string;
  href: string;
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .26.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M6.5 9H3.7v11.2h2.8V9ZM5.1 3.8A1.7 1.7 0 1 0 5.1 7.2 1.7 1.7 0 0 0 5.1 3.8ZM20.3 13.4c0-3.2-1.7-4.7-4-4.7-1.8 0-2.7 1-3.2 1.7V9H10.3c0 1.5 0 11.2 0 11.2h2.8v-6.3c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.7v6H20.3v-6.8Z" />
    </svg>
  );
}

export function FounderSocials({ links }: { links: readonly Social[] }) {
  return (
    <div className="mt-4 flex gap-2">
      {links.map((link) => (
        <a
          key={link.kind}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={link.label}
          className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 hover:border-brand hover:text-brand"
        >
          {link.kind === "github" && <GithubIcon />}
          {link.kind === "linkedin" && <LinkedinIcon />}
          {link.kind === "email" && <Mail className="h-3.5 w-3.5" />}
        </a>
      ))}
    </div>
  );
}
