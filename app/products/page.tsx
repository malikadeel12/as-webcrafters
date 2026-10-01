/*
  Change summary:
  - What: Products page now sells WhatsApp Lead Desk only.
  - Why: Fit8 and RestroQR were not real products, and the screenshots belonged to another project.
  - Related: lib/data.ts leadDesk, components/home/LeadDeskBlock.tsx
  - MCP Context 7: Next.js Metadata and a server page, same pattern as the other inner pages.
*/

import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { leadDesk } from "@/lib/data";

export const metadata: Metadata = {
  title: "WhatsApp Lead Desk",
  description:
    "WhatsApp Lead Desk sends a website form lead to your WhatsApp, saves it in one list, and reminds you if nobody replies.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="WhatsApp"
        accent="Lead Desk"
        subtitle={leadDesk.summary}
      />

      {/* --- Who it is for --- */}
      <section className="bg-white pb-4">
        <Container className="grid gap-4 md:grid-cols-3">
          {leadDesk.who.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-slate-100 bg-slate-50 p-5">
              <h2 className="text-[18px] font-bold text-ink">{item.title}</h2>
              <p className="mt-2 text-[14px] leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </Container>
      </section>

      {/* --- How a lead moves --- */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <h2 className="serif text-[32px] font-bold text-ink md:text-[40px]">How it works</h2>
          <p className="mt-2 max-w-xl text-[15px] text-muted">
            Four steps. No extra app for your customer to install.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {leadDesk.steps.map((step, index) => (
              <li key={step.title} className="rounded-[24px] border border-slate-100 p-5">
                <p className="text-[12px] font-semibold tracking-[0.14em] text-brand uppercase">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-[18px] font-bold">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* --- What's included, plus a labeled sample so it never looks like a real customer's data --- */}
      <section className="bg-white pb-16 md:pb-24">
        <Container className="grid items-center gap-10 rounded-[32px] bg-slate-50 p-6 md:p-10 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">What you get</p>
            <h2 className="serif mt-2 text-[36px] font-bold leading-[1.1] text-ink md:text-[42px]">
              Follow-up, without a second inbox.
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-muted">
              Added to a new A&S website, or connected to the site you already run.
            </p>
            <ul className="mt-6 space-y-2">
              {leadDesk.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/contact">Add this to my website</Button>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[12px] font-semibold tracking-wide text-muted uppercase">Example · not a real customer</p>
            <div className="mt-4 max-w-sm rounded-2xl rounded-tl-sm bg-emerald-50 px-4 py-3">
              <p className="text-[12px] font-semibold text-emerald-800">WhatsApp · your phone</p>
              <p className="mt-1 text-[14px] leading-6 text-slate-800">
                New lead: Sample Name
                <br />
                98XXXXXX10
                <br />
                Wants a site visit this Saturday.
              </p>
            </div>
            <div className="mt-3 rounded-2xl bg-slate-50 px-4 py-3">
              <p className="text-[13px] font-semibold text-ink">Saved in your list</p>
              <p className="mt-1 text-[13px] text-muted">No reply yet. A reminder is sent if it stays quiet.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
