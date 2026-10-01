/*
  Change summary:
  - What: Short original terms page so the footer link works.
  - Why: Completes the legal pair from the live footer.
*/

import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "How engagements with A&S WebCrafters are scoped, and where prices are shared.",
};

export default function TermsPage() {
  return (
    <section className="bg-white pt-32 pb-20">
      <Container className="max-w-3xl">
        <h1 className="serif text-[40px] font-bold">Terms of Service</h1>
        <p className="mt-6 text-[15px] leading-7 text-muted">
          Engagements with A&S WebCrafters are scoped in a written proposal. Prices are shared in that proposal, not listed on this site.
        </p>
        <p className="mt-4 text-[15px] leading-7 text-muted">
          Third-party project links open the client&apos;s live sites. Those properties have their own terms.
        </p>
      </Container>
    </section>
  );
}
