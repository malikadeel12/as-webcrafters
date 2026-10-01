/*
  Change summary:
  - What: Homepage without the "Trusted by Founders & Businesses" review row.
  - Why: That testimonial block was removed from the public page.
  - Related: components/home sections, including LeadDeskBlock
*/

import { Hero } from "@/components/home/Hero";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ServicesBento } from "@/components/home/ServicesBento";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Process } from "@/components/home/Process";
import { LeadDeskBlock } from "@/components/home/LeadDeskBlock";
import { Founders } from "@/components/home/Founders";
import { TechStack } from "@/components/home/TechStack";
import { FAQ } from "@/components/home/FAQ";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { faqs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
      <Hero />
      <WhyChoose />
      <ServicesBento />
      <FeaturedWork />
      <Process />
      <LeadDeskBlock />
      <Founders />
      <TechStack />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
