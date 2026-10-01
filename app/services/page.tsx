/*
  Change summary:
  - What: Services page uses the same four project steps as the homepage.
  - Why: Two different step names made the first call confusing.
  - Related: components/home/ServicesBento.tsx
*/

import type { Metadata } from "next";
import { Button, Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ServicesBento } from "@/components/home/ServicesBento";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, custom software, search, ads, SaaS, and automation for clients anywhere. The quote comes after the scope is clear.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Digital"
        accent="Services"
        subtitle="Websites, custom software, search, ads, and WhatsApp follow-up. The quote comes after the work is clear."
      />
      <ServicesBento />
      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="serif text-center text-[36px] font-bold">How a project starts</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted">
            The same four steps as the homepage, so the first call has one name.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {processSteps.map((s) => (
              <article key={s.title} className="rounded-[24px] border border-slate-100 p-6">
                <p className="text-[12px] font-bold text-brand">{s.phase}</p>
                <h3 className="mt-2 text-[18px] font-bold">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-muted">{s.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-slate-50 py-16">
        <Container className="text-center">
          <h2 className="serif text-[32px] font-bold">Need a custom solution?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            A new site, a software tool, or WhatsApp follow-up starts with a short note to the founder.
          </p>
          <div className="mt-6">
            <Button href="/contact">Start a project</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
