/*
  Change summary:
  - What: Homepage band for WhatsApp Lead Desk.
  - Why: The old band claimed a Fit8 product with made-up check-in numbers.
  - Related: lib/data.ts leadDesk, app/products/page.tsx, app/page.tsx
  - MCP Context 7: server component, no new Next.js API.
*/

import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { leadDesk } from "@/lib/data";

// Short proof points for the dark card. These describe the offer, not live usage.
// No clock times here. The site has not measured a 10-second send or a 2-hour reminder.
const highlights = [
  { label: "WhatsApp alert", hint: "The lead reaches the owner's phone", value: "WhatsApp" },
  { label: "Saved lead", hint: "Name, phone, and request", value: "1 list" },
  { label: "Quiet reminder", hint: "If nobody has replied", value: "A nudge" },
];

export function LeadDeskBlock() {
  return (
    <section className="relative bg-white py-8 md:py-12">
      <Container>
        <Reveal>
          <div className="grid items-center gap-8 rounded-[32px] bg-night px-6 py-10 text-white md:px-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[12px] font-semibold tracking-[0.16em] text-accent uppercase">
                Our product
              </p>
              <h2 className="serif text-[30px] font-bold leading-[1.15] tracking-[-0.03em] md:text-[40px]">
                A new enquiry should reach your WhatsApp before the lead goes cold.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-zinc-400">
                <strong className="text-white">{leadDesk.name}</strong> is the follow-up desk we add to a
                business website. {leadDesk.summary}
              </p>
              <div className="mt-6">
                <Button href="/products" variant="white">
                  See WhatsApp Lead Desk
                </Button>
              </div>
            </div>

            {/* Example panel: timings of the offer, not a live dashboard */}
            <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
              <div className="mb-4 flex items-center justify-between text-[12px] text-zinc-400">
                <span className="font-semibold tracking-wide text-zinc-200">Lead Desk</span>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-zinc-200">With your website</span>
              </div>
              <div className="space-y-3">
                {highlights.map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-2xl bg-black/30 px-4 py-3">
                    <div>
                      <p className="text-[14px] font-medium text-white">{row.label}</p>
                      <p className="text-[12px] text-zinc-500">{row.hint}</p>
                    </div>
                    <p className="text-[20px] font-semibold text-white">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
