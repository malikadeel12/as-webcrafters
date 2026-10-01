/*
  Change summary:
  - What: About copy now speaks as one founder, Adeel Riaz, not a team.
  - Why: The studio is one person. "Team", "together", and "founders" made clients think several people work here.
  - Related: lib/data.ts founders, components/home/Founders.tsx, components/contact/ContactForm.tsx
  - MCP context 7: keep the words accurate and simple. Do not invent a team.
*/

import type { Metadata } from "next";
import { Button, Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { founders, techGroups } from "@/lib/data";
import { FounderSocials } from "@/components/FounderSocials";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Adeel Riaz designs and builds the work himself. A&S WebCrafters takes clients anywhere, and the studio is based in Islamabad.",
};

// One founder does the design and the code, so these points stay in the singular.
const diffs = [
  { n: "01", t: "Speed of Execution", d: "Robust digital work in weeks, not a calendar of stall." },
  { n: "02", t: "Data-Driven Approach", d: "The work starts from leaks in the funnel, not from a mood board." },
  { n: "03", t: "Uncompromising Quality", d: "Custom code and considered design, shipped by the same person you brief." },
  { n: "04", t: "Direct Founder Access", d: "No account-manager maze. You work with the founder from the first call to launch." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="The Founder Behind"
        accent="A&S WebCrafters"
        subtitle="I design and build the software and marketing systems that help a business grow."
      />

      <section className="bg-night py-16 text-white md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="serif text-[36px] font-bold md:text-[48px]">Our Story</h2>
            <p className="mt-5 text-[15px] leading-7 text-zinc-400">
              I started A&S WebCrafters after watching the same pattern: businesses paid premium agency rates, then never met the person actually building the work. Context got lost. The finished product rarely matched the original intent.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-zinc-400">
              While shipping freelance projects, I saw that most businesses needed a technical partner who understood the goal before writing code. That belief is the studio.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-zinc-400">
              Today every project is designed, built, and delivered by me. There is no hidden bench.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative mx-auto grid h-[280px] w-[280px] place-items-center md:h-[320px] md:w-[320px]">
              <div className="absolute inset-8 rounded-full border border-white/10" />
              {[
                { label: "1. Capture", sub: "Web & funnels", pos: "top-0 left-1/2 -translate-x-1/2" },
                { label: "2. Manage", sub: "CRM / SaaS", pos: "top-1/2 right-0 -translate-y-1/2" },
                { label: "3. Operate", sub: "Automation", pos: "bottom-0 left-1/2 -translate-x-1/2" },
                { label: "4. Scale", sub: "Growth", pos: "top-1/2 left-0 -translate-y-1/2" },
              ].map((n) => (
                <div key={n.label} className={`absolute ${n.pos} w-28 rounded-2xl bg-[#16161a] px-3 py-2 text-center`}>
                  <p className="text-[12px] font-semibold">{n.label}</p>
                  <p className="text-[10px] text-zinc-500">{n.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="serif text-center text-[36px] font-bold">Meet the Founder</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6">
            {founders.map((person) => (
              <article key={person.name} className="overflow-hidden rounded-[28px] border border-slate-100 bg-slate-50 md:grid md:grid-cols-[300px_1fr]">
                <img
                  src={person.image}
                  alt={person.name}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-[24px] font-bold">{person.name}</h3>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">{person.role}</p>
                  <p className="mt-1 text-[14px] text-muted">{person.subtitle}</p>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">{person.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {person.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white px-3 py-1 text-[12px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <FounderSocials links={person.socials} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] bg-white p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-400">Our Vision</p>
            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Be a catalyst for digital transformation — helping businesses of every size use software and data-led marketing to grow with intent.
            </p>
          </article>
          <article className="rounded-[28px] bg-white p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-400">Our Mission</p>
            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Deliver custom software and sites that work, scale, and produce revenue — with the founder still on the tools.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="serif text-center text-[36px] font-bold">What Makes Us Different</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {diffs.map((item) => (
              <article key={item.n} className="rounded-[24px] border border-slate-100 p-6">
                <p className="text-[12px] font-bold text-brand">{item.n}</p>
                <h3 className="mt-2 text-[18px] font-bold">{item.t}</h3>
                <p className="mt-2 text-[14px] leading-6 text-muted">{item.d}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <h2 className="serif text-center text-[36px] font-bold">Our Tech Stack</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {techGroups.flatMap((g) => g.items).map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-slate-600 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-night py-16 text-white">
        <Container className="text-center">
          <h2 className="serif text-[34px] font-bold">Let&apos;s build your engine for growth.</h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Fast turnaround, custom architecture, and direct founder commitment from first call to launch.
          </p>
          <div className="mt-6">
            <Button href="/contact">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
