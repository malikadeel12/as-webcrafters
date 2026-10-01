/*
  Change summary:
  - What: Phone overlay uses a real bezel and clips the right-edge scrollbar.
  - Why: Cropped screenshots looked like a desktop browser, not a phone.
  - Related: FeaturedWork.tsx, public/projects/*-mobile.png
  - MCP Context 7: Next.js Image fill + object-position
*/

import Image from "next/image";

export function BrowserFrame({ src, name }: { src: string; name: string }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-white px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={src}
          alt={`${name} website`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export function PhoneFrame({ src, name }: { src: string; name: string }) {
  return (
    // Real phone bezel + 9:16 screen. Image is left-aligned and slightly
    // wider so a leftover browser scrollbar is clipped on the right.
    <div className="flex aspect-[9/16] w-full flex-col overflow-hidden rounded-[22px] border-[3px] border-slate-900 bg-slate-900 p-[3px] shadow-[0_15px_40px_rgba(15,23,42,0.28)]">
      <div className="flex justify-center py-[3px]">
        <span className="h-[3px] w-8 rounded-full bg-slate-600" />
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[14px] bg-white">
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={`${name} mobile site`}
            fill
            sizes="(min-width: 1024px) 160px, 30vw"
            className="object-cover object-top"
          />
        </div>
      </div>
      <div className="flex justify-center py-[3px]">
        <span className="h-[2px] w-7 rounded-full bg-slate-600" />
      </div>
    </div>
  );
}
