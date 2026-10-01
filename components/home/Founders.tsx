/*
  Change summary:
  - What: Founder card shows the photo and social icons, without the written email or phone.
  - Why: The email address and mobile number were removed from this card.
  - Related: lib/data.ts founders, app/about/page.tsx, public/founders/adeel.jpg
*/

import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { founders } from "@/lib/data";
import { FounderSocials } from "@/components/FounderSocials";

export function Founders() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/70 bg-slate-50/70 py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="grid gap-6 rounded-[32px] bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)] md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Hands-On Technical Leadership
              </p>
              <h2 className="serif mt-3 text-[36px] font-bold tracking-[-0.03em] text-ink md:text-[44px]">
                Meet the{" "}
                <span className="bg-linear-to-r from-[#0a1628] to-accent bg-clip-text text-transparent">
                  Founder
                </span>
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-7 text-muted">
                The CEO stays on the work. Design, technology, and project strategy come from the same person you talk to.
              </p>
              <div className="mt-6">
                <Button href="/about" variant="black">
                  About A&S WebCrafters
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {founders.map((person) => (
                <article key={person.name} className="overflow-hidden rounded-[24px] border border-slate-100 bg-slate-50/80 sm:grid sm:grid-cols-[220px_1fr]">
                  {/* Real portrait, cropped from the top so the face stays in frame */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <div className="p-5">
                    <h3 className="text-[18px] font-bold text-ink">{person.name}</h3>
                    <p className="text-[13px] font-semibold text-brand">{person.role}</p>
                    <p className="text-[13px] text-muted">{person.subtitle}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {person.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <FounderSocials links={person.socials} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
