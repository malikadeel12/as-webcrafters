/*
  Change summary:
  - What: Homepage search details point at www.aswebcrafters.com. The review row stays off.
  - Why: The .com is the public address. The old testimonial block was not a real result.
  - Related: lib/site.ts, components/home sections, including LeadDeskBlock
*/

import type { Metadata } from "next";
import { pageSearch, siteDescription } from "@/lib/site";
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

// The homepage keeps its own canonical so it is not confused with an inner page.
export const metadata: Metadata = {
  ...pageSearch("/", siteDescription),
  title: { absolute: "Custom Websites and Software | A&S WebCrafters" },
};

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
