/*
  Change summary:
  - What: Submit sends the note to the founder's Gmail. The page says "sent" only after that send is accepted.
  - Why: Opening the visitor's email app left the note unsent unless they pressed send there.
  - Related: app/api/contact/route.ts, app/contact/page.tsx, app/privacy/page.tsx, lib/data.ts contact.email
  - Business rule: name, phone, email, and primary service are required. Do not say the note arrived if the send failed.
*/

"use client";

import { useState, type FormEvent } from "react";
import { contact, services } from "@/lib/data";

type Errors = Partial<Record<"name" | "phone" | "email" | "service", string>>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    const company = String(data.get("company") || "").trim();
    const next: Errors = {};

    if (!name) next.name = "Please add your name.";
    if (!phone || phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid phone number.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email.";
    if (!service) next.service = "Choose a primary service.";

    setErrors(next);
    setFormError("");
    if (Object.keys(next).length > 0) return;

    // --- Hand-off ---
    // The note is posted to this site, which emails aswebcrafters@gmail.com.
    // "Sent" is shown only when that email is accepted.
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, message, company }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setFormError(result.error || "The note could not be sent. Email the founder directly, or use WhatsApp.");
        return;
      }
      form.reset();
      setSent(true);
    } catch {
      setFormError("The note could not be sent. Email the founder directly, or use WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-[28px] bg-white p-8 text-center shadow-sm">
        <p className="serif text-[28px] font-bold">Note sent.</p>
        <p className="mt-3 text-[15px] leading-7 text-muted">
          It is in the founder&apos;s inbox at {contact.email}. Nothing else is stored on this website.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full bg-brand-bright px-5 py-3 text-[14px] font-medium text-white"
        >
          Send another brief
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] outline-none focus:border-brand focus:bg-white";

  return (
    <form onSubmit={onSubmit} className="rounded-[28px] bg-white p-6 shadow-sm md:p-8" noValidate>
      <h2 className="text-[22px] font-bold">Send the founder a note</h2>
      <p className="mt-1 text-[14px] text-muted">
        This sends the note to {contact.email}. WhatsApp is faster if you want a reply today.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <label className="text-[13px]">
          <span className="mb-1.5 block font-medium">Your full name *</span>
          <input name="name" className={field} placeholder="Your full name" />
          {errors.name && <span className="mt-1 block text-[12px] text-red-600">{errors.name}</span>}
        </label>
        <label className="text-[13px]">
          <span className="mb-1.5 block font-medium">Your phone number *</span>
          <input name="phone" className={field} placeholder="10-digit mobile" />
          {errors.phone && <span className="mt-1 block text-[12px] text-red-600">{errors.phone}</span>}
        </label>
      </div>
      <label className="mt-3 block text-[13px]">
        <span className="mb-1.5 block font-medium">Your email *</span>
        <input name="email" type="email" className={field} placeholder="you@company.com" />
        {errors.email && <span className="mt-1 block text-[12px] text-red-600">{errors.email}</span>}
      </label>
      <label className="mt-3 block text-[13px]">
        <span className="mb-1.5 block font-medium">Primary service *</span>
        <select name="service" defaultValue="" className={field}>
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.service && <span className="mt-1 block text-[12px] text-red-600">{errors.service}</span>}
      </label>
      <label className="mt-3 block text-[13px]">
        <span className="mb-1.5 block font-medium">Goals or timeline (optional)</span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] outline-none focus:border-brand focus:bg-white"
          placeholder="Describe the bottleneck, features, or deadline"
        />
      </label>
      {/* Bots fill this. People never see it. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      {formError && <p className="mt-4 text-[13px] text-red-600">{formError}</p>}
      <button
        type="submit"
        disabled={sending}
        className="mt-5 w-full rounded-full bg-brand-bright py-3.5 text-[15px] font-medium text-white hover:bg-brand disabled:opacity-60"
      >
        {sending ? "Sending..." : "Send the note"}
      </button>
    </form>
  );
}
