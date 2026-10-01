/*
  Change summary:
  - What: Navbar logo is back to the old bar height. The picture stays cropped to the mark.
  - Why: Raising the logo also made the whole navbar too tall. The crop keeps the name readable inside the original size.
  - Related: public/logo.png, components/Header.tsx, components/Footer.tsx
*/

import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center rounded-xl bg-[#0a1628] px-2 py-1"
      aria-label="A&S WebCrafters home"
    >
      <Image
        src="/logo.png"
        alt="A&S WebCrafters"
        width={370}
        height={223}
        priority
        className={compact ? "h-9 w-auto md:h-10" : "h-12 w-auto md:h-14"}
      />
    </Link>
  );
}
