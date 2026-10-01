/*
  Change summary:
  - What: Dark infrastructure band plus a floating scale CTA.
  - Why: Signals modern delivery without turning the page into a tool list.
  - Related: lib/data.ts
*/

import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { techGroups } from "@/lib/data";

export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-[#070b16] pt-20 pb-28 text-white">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="serif text-[34px] font-bold tracking-[-0.03em] md:text-[48px]">
            Built on{" "}
            <span className="text-slate-400">Modern Infrastructure</span>
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-zinc-400">
            Modern tools chosen for speed, security, and room to grow — not for a logo wall.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group) => (
            <article key={group.title} className="rounded-[24px] border border-white/8 bg-white/4 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                {group.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/8 px-3 py-1.5 text-[12px] text-zinc-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Reveal className="relative z-10 mx-auto mt-16 max-w-md text-center">
          <div className="rounded-[28px] bg-ink px-8 py-6 shadow-[0_20px_60px_rgba(37,99,235,0.25)]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Ready to grow?
            </p>
            <p className="serif mt-1 text-[26px] font-bold">Scale Your Business</p>
            <div className="mt-4">
              <Button href="/contact" variant="blue" className="w-full">
                Start a project
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
