/*
  Change summary:
  - What: Split “diagnose before we build” band with three proof pills.
  - Why: Explains the studio’s difference before the services grid.
  - Related: app/page.tsx
*/

import { Check } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const pills = [
  "We ask before we assume",
  "You work with the founder who builds it",
  "Solutions built for the actual problem",
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              Why Businesses Choose A&S WebCrafters
            </p>
            <h2 className="serif mt-3 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-ink md:text-[52px]">
              We diagnose
              <br />
              before we build.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[16px] leading-7 text-muted md:text-[17px]">
              Most agencies start with “what do you want us to build?” We start
              with “what is actually slowing you down?” Sometimes that is a
              website. Sometimes it is a broken workflow or disconnected tools.
            </p>
            <div className="mt-6 space-y-3">
              {pills.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-slate-200/80 bg-white px-4 py-3 shadow-sm"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-50 text-accent-deep">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <p className="text-[14px] font-medium text-ink">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
