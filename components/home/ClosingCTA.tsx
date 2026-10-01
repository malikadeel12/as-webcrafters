/*
  Change summary:
  - What: Final split CTA before the footer.
  - Why: One last, obvious next step after FAQ.
  - Related: app/contact/page.tsx
*/

import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function ClosingCTA() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-[12px] font-semibold text-accent-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Available for New Engagements
              </p>
              <h2 className="serif mt-3 text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-ink md:text-[48px]">
                Let&apos;s find what&apos;s holding your revenue back.
              </h2>
            </div>
            <div>
              <p className="text-[15px] leading-7 text-muted">
                Best fit: an owner who wants the website, the software, or the WhatsApp follow-up
                to keep working after launch. You talk to the founder, not an account manager.
              </p>
              <div className="mt-6">
                <Button href="/contact">Start a project</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
