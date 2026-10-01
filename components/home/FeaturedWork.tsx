/*
  Change summary:
  - What: Four alternating case studies with device mockups.
  - Why: Proof sits after services so the offer feels earned.
  - Related: lib/data.ts, components/home/Mockups.tsx
*/

import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/data";
import { BrowserFrame, PhoneFrame } from "./Mockups";

export function FeaturedWork() {
  return (
    <section id="featured-work" className="relative scroll-mt-28 overflow-hidden border-t border-slate-200 bg-white py-20 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="serif text-[36px] font-bold tracking-[-0.03em] text-ink md:text-[52px]">
            Featured Work
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-muted">
            Sites built for clients. Each button opens the live project. These notes
            describe the job, not a measured result.
          </p>
        </Reveal>

        <div className="mt-16 space-y-28 pb-10">
          {caseStudies.map((study, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={study.slug}>
                <article className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {study.industry}
                    </p>
                    <h3 className="serif mt-2 text-[34px] font-bold tracking-[-0.03em] text-ink md:text-[44px]">
                      {study.name}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-slate-600">{study.body}</p>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">{study.result}</p>
                    <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Services
                    </p>
                    <p className="mt-1 text-[14px] text-slate-600">{study.services}</p>
                    <div className="mt-6">
                      <Button href={study.href} variant="ghost" external>
                        View Live Project
                      </Button>
                    </div>
                  </div>
                  <div className="relative pb-8 md:pb-12">
                    <BrowserFrame src={`/projects/${study.slug}-desktop.png`} name={study.name} />
                    <div
                      className={`absolute z-10 w-[34%] md:w-[28%] ${
                        reverse
                          ? "bottom-0 left-2 md:-left-4"
                          : "bottom-0 right-2 md:-right-4"
                      }`}
                    >
                      <PhoneFrame src={`/projects/${study.slug}-phone.png`} name={study.name} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
