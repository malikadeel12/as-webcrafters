/*
  Change summary:
  - What: Four plain steps, the same names as the services page.
  - Why: "Friction Audit" and "Methodology" were two names for one first step.
  - Related: lib/data.ts
*/

import { Activity, Code2, Crosshair, LineChart } from "lucide-react";
import { AccentTitle, Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/data";

const icons = [Activity, Crosshair, Code2, LineChart];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <AccentTitle before="Read it first." accent="Then build." />
          <p className="mt-5 text-[16px] leading-7 text-muted">
            Every project starts with a look at the current site and the follow-up, before a line of new code is written.
          </p>
        </Reveal>

        <div className="relative mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="pointer-events-none absolute top-3 right-8 left-8 hidden h-px bg-slate-200 xl:block" />
          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={step.title} delay={i * 0.05}>
                <article className="relative rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
                  <span
                    className={`mb-5 inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] ${
                      i === 0 ? "text-ink" : "text-slate-400"
                    }`}
                  >
                    {step.phase}
                  </span>
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-[18px] font-extrabold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-muted">{step.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
