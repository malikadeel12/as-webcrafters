/*
  Change summary:
  - What: Short original privacy page so the footer link works.
  - Why: Legal links on the live footer must not 404 in the recreation.
*/

import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { pageSearch } from "@/lib/site";

export const metadata: Metadata = pageSearch(
  "/privacy",
  "How A&S WebCrafters handles what you type into the contact form on this site.",
  "Privacy Policy",
);

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-32 pb-20">
      <Container className="max-w-3xl">
        <h1 className="serif text-[40px] font-bold">Privacy Policy</h1>
        <p className="mt-6 text-[15px] leading-7 text-muted">
          The contact form emails your note to aswebcrafters@gmail.com. The note is not saved as a list on this website. FormSubmit carries that email to the founder. WhatsApp messages follow WhatsApp’s own practices.
        </p>
        <p className="mt-4 text-[15px] leading-7 text-muted">
          Project notes stay with Adeel Riaz, the founder. They are not sold.
        </p>
      </Container>
    </section>
  );
}
