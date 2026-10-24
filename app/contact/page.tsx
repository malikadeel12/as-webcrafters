/*
  Change summary:
  - What: Contact heading names a website or software project.
  - Why: "Extraordinary" did not tell a client what gets built.
  - Related: components/contact/ContactForm.tsx
  - Business rule: WhatsApp and email are the real channels. The form emails the founder. Do not promise a reply time.
*/

import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui";
import { contact } from "@/lib/data";
import { ContactForm } from "@/components/contact/ContactForm";
import { pageSearch } from "@/lib/site";

export const metadata: Metadata = pageSearch(
  "/contact",
  "Email aswebcrafters@gmail.com, call 0302 3368307, or send a project note. A&S WebCrafters works with clients anywhere.",
  "Contact",
);

export default function ContactPage() {
  return (
    <section className="bg-[#f7f9fc] pt-32 pb-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="serif text-[40px] font-bold leading-[1.1] tracking-[-0.035em] md:text-[56px]">
            Start a website or{" "}
            <span className="bg-linear-to-r from-brand to-accent bg-clip-text text-transparent">
              software project.
            </span>
          </h1>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Direct channels</p>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[24px] bg-white p-5 shadow-sm"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-50">
                  <MessageCircle className="h-5 w-5 text-brand" />
                </span>
                <span>
                  <span className="block text-[13px] text-muted">Instant chat</span>
                  <span className="font-semibold text-ink">{contact.phoneDisplay}</span>
                </span>
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-700">
                WhatsApp
              </span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center justify-between rounded-[24px] bg-white p-5 shadow-sm"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-50">
                  <Mail className="h-5 w-5 text-brand" />
                </span>
                <span>
                  <span className="block text-[13px] text-muted">Email support</span>
                  <span className="font-semibold text-ink">{contact.email}</span>
                </span>
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold">Email</span>
            </a>
            <div className="rounded-[24px] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-semibold">What happens next?</p>
              </div>
              <ol className="mt-4 space-y-3 text-[14px] text-slate-600">
                <li>
                  <strong className="text-ink">You send the note.</strong> The form delivers it to the founder&apos;s email. WhatsApp still works if you want a reply today.
                </li>
                <li>
                  <strong className="text-ink">The founder reads it.</strong> Adeel replies with what the work is, and a realistic order to build it.
                </li>
                <li>
                  <strong className="text-ink">Work starts.</strong> Once the scope is agreed, you and the founder share one channel for the project.
                </li>
              </ol>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
