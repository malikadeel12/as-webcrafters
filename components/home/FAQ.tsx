/*
  Change summary:
  - What: FAQ help button says "Contact the founder" instead of "Contact our team".
  - Why: There is one founder, so the button should not imply a team.
  - Related: lib/data.ts
  - MCP Context 7: React client state; Framer Motion swap from /grx7/framer-motion.
*/

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [active, setActive] = useState(0);
  const current = faqs[active];

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-faq py-16 text-white md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="serif text-[34px] font-bold tracking-[-0.03em] md:text-[48px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[15px] text-zinc-500">
            Plain answers about the work, the founder, and how a project starts.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {faqs.map((item, i) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setActive(i)}
                className={`snap-start shrink-0 rounded-2xl px-4 py-3 text-left text-[13px] font-medium transition ${
                  i === active
                    ? "bg-white text-ink shadow-md"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.q}
              </button>
            ))}
          </div>

          <div className="rounded-[28px] border border-white/8 bg-[#111113] p-6 md:p-8">
            <HelpCircle className="h-6 w-6 text-brand-bright" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.q}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="mt-4 text-[20px] font-bold tracking-tight">{current.q}</h3>
                <p className="mt-3 text-[15px] leading-7 text-zinc-400">{current.a}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-5 text-[13px]">
              <span className="text-zinc-500">Need more help?</span>
              <Button href="/contact" variant="ghost" className="!border-white/10 !bg-transparent !text-white hover:!bg-white/10">
                Contact the founder
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
