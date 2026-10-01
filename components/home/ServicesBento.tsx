/*
  Change summary:
  - What: Services overview cards, without links into separate package pages.
  - Why: The individual service pages were removed. The cards stay as a summary.
  - Related: lib/data.ts, app/services
*/

import { Filter, Shield, Sparkles, Workflow, Zap } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function ServicesBento() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] bg-void py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="rounded-[28px] bg-[#111113] px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <h2 className="serif text-[34px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[48px]">
                  Everything You Need to{" "}
                  <span className="bg-linear-to-r from-[#22d3ee] to-[#67e8f9] bg-clip-text text-transparent">
                    Grow
                  </span>{" "}
                  Your Business
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-zinc-400">
                  Websites, custom software, search, ads, and WhatsApp follow-up,
                  shaped around how the business already works.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Zap, label: "100% Custom Code" },
                  { icon: Shield, label: "Scalable Infrastructure" },
                  { icon: Sparkles, label: "Data-Driven Growth" },
                ].map((chip) => (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1.5 text-[12px] text-zinc-200"
                  >
                    <chip.icon className="h-3.5 w-3.5 text-accent" />
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* Website */}
          <Reveal className="rounded-[28px] bg-[#111113] p-6 md:p-7">
            <h3 className="text-[22px] font-bold tracking-tight text-white">Website Development</h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Turn Visitors Into Customers
            </p>
            <p className="mt-3 text-[14px] leading-6 text-zinc-400">
              Fast, search-friendly websites designed to generate enquiries, build trust, and grow the business.
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/8 bg-[#0b0b0d] p-4 font-mono text-[11px] leading-5 text-zinc-500">
              <p>&lt;!DOCTYPE html&gt;</p>
              <p>&lt;html lang=&quot;en&quot;&gt;</p>
              <p>&lt;head&gt;</p>
              <p>&nbsp;&nbsp;&lt;title&gt;A&amp;S WebCrafters | Digital Growth Partner&lt;/title&gt;</p>
              <p className="text-zinc-600">body &#123; font-family: Inter; &#125;</p>
            </div>
          </Reveal>

          {/* SEO */}
          <Reveal delay={0.05} className="rounded-[28px] bg-[#111113] p-6 md:p-7">
            <h3 className="text-[22px] font-bold tracking-tight text-white">SEO & Growth</h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Be Found Before Your Competitors
            </p>
            <p className="mt-3 text-[14px] leading-6 text-zinc-400">
              Rank higher, attract qualified customers, and keep a steady organic pipeline.
            </p>
            <div className="mt-5 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] text-zinc-400">
              how to scale my business|
            </div>
          </Reveal>

          {/* SaaS */}
          <Reveal delay={0.1} className="rounded-[28px] bg-[#111113] p-6 md:p-7">
            <h3 className="text-[22px] font-bold tracking-tight text-white">SaaS Development</h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Build the Product You&apos;ve Been Planning
            </p>
            <p className="mt-3 text-[14px] leading-6 text-zinc-400">
              From first useful version to a full platform people can pay for and scale.
            </p>
          </Reveal>

          {/* Custom software */}
          <Reveal className="rounded-[28px] bg-[#111113] p-6 md:p-7">
            <h3 className="text-[22px] font-bold tracking-tight text-white">Custom Software</h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Software Built Around Your Business
            </p>
            <p className="mt-3 text-[14px] leading-6 text-zinc-400">
              Custom systems around your workflow instead of forcing the team to change it.
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/8 bg-black p-4 font-mono text-[11px] leading-5 text-emerald-400/80">
              <p className="text-zinc-500">~ npm run deploy</p>
              <p>&gt; Building custom architecture...</p>
              <p>&gt; Compiling source logic...</p>
              <p className="text-emerald-300">[SUCCESS] System online (12ms)</p>
            </div>
          </Reveal>

          {/* Performance */}
          <Reveal delay={0.05} className="rounded-[28px] bg-[#111113] p-6 md:p-7">
            {/* No percentage here. A bare number would look like a client result we do not have. */}
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Paid ads</p>
            <h3 className="mt-3 text-[22px] font-bold tracking-tight text-white">Performance Marketing</h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Turn Ad Spend Into Revenue
            </p>
            <p className="mt-3 text-[14px] leading-6 text-zinc-400">
              Campaigns judged on enquiries and sales, not on how many people merely saw the ad.
            </p>
          </Reveal>

          {/* Automation */}
          <Reveal delay={0.1} className="rounded-[28px] bg-[#111113] p-6 md:p-7">
            <div className="mb-5 grid gap-2">
              {[
                { icon: Zap, label: "Trigger", text: "New form enquiry" },
                { icon: Filter, label: "Filter", text: "No reply yet" },
                { icon: Workflow, label: "Action", text: "WhatsApp reminder" },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3 rounded-2xl bg-white/4 px-3 py-2.5">
                  <row.icon className="h-4 w-4 text-accent" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500">{row.label}</p>
                    <p className="text-[13px] text-zinc-200">{row.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-[22px] font-bold tracking-tight text-white">Business Automation</h3>
            <p className="mt-3 text-[14px] leading-6 text-zinc-400">
              Automate the repeat work, connect the tools, and give the team time back.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
