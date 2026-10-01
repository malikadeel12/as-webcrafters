/*
  Change summary:
  - What: First screen uses a short label, one headline, and one support sentence.
  - Why: Studio sites such as MadeByShah and Plinth put the offer in the headline and the founder plus place in the line under it. A longer paragraph was repeating the same facts.
  - Related: app/page.tsx, lib/site.ts
  - MCP Context 7: Next.js Link from /vercel/next.js. Only facts already true for this studio. No invented years or results.
*/

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="relative z-0 overflow-hidden bg-white pt-28 pb-12 md:pt-32 md:pb-16 lg:pb-20">
      {/* Soft cyan wash in the top-left — same blob as the live site */}
      <div className="pointer-events-none absolute -top-40 -left-40 z-0 h-[500px] w-[500px] rounded-full bg-cyan-100/30 blur-[120px]" />

      {/*
        Perspective floor: a large grid, tipped back, then faded with a
        radial mask so it reads as a room floor, not a wallpaper.
      */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, transparent 15%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 15%, black 40%, transparent 80%)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 h-[200%] w-[200%]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.2) 2px, transparent 2px), linear-gradient(to bottom, rgba(0,0,0,0.2) 2px, transparent 2px)",
            backgroundSize: "60px 60px",
            transform: "perspective(1000px) rotateX(75deg) translateY(-100px) scale(2)",
          }}
        />
      </div>

      {/* Center cyan glow sitting on the floor — matches the A&S logo */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[100px] md:block" />

      <Container className="relative z-10 text-center">
        <Reveal>
          <p className="mb-4 flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase md:mb-6 md:text-[13px]">
            <span className="h-[2px] w-8 bg-linear-to-r from-[#0a1628] via-[#22d3ee] to-[#27c6dd]" />
            Founder-built studio
            <span className="h-[2px] w-8 bg-linear-to-r from-[#0a1628] via-[#22d3ee] to-[#27c6dd]" />
          </p>
          <h1 className="serif mx-auto max-w-4xl text-[40px] font-bold leading-[1.1] tracking-tight text-slate-900 md:text-[60px]">
            Custom websites and software, built by the founder.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] font-medium leading-relaxed text-slate-600 md:mt-8 md:text-[18px]">
            Designed and coded by Adeel Riaz in Islamabad, for clients anywhere.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#0a1628] via-[#22d3ee] to-[#27c6dd] px-6 py-3.5 text-[15px] font-semibold text-white shadow-md hover:opacity-90"
            >
              Start a project
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href="/#featured-work"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 px-6 py-3.5 text-[15px] font-semibold text-slate-900 hover:bg-slate-200"
            >
              See the work
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
