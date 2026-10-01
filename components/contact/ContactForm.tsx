/*
  Change summary:
  - What: Submit opens the visitor's email app with the note, addressed to the founder.
  - Why: The form does not store anything on a server, so it must not say the scope was received.
  - Related: app/contact/page.tsx, app/privacy/page.tsx, lib/data.ts contact.email
  - Business rule: name, phone, email, and primary service are required. The message only leaves when the visitor presses send in their email app.
*/

"use client";

import { useState, type FormEvent } from "react";
import { contact, services } from "@/lib/data";

type Errors = Partial<Record<"name" | "phone" | "email" | "service", string>>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    const next: Errors = {};

    if (!name) next.name = "Please add your name.";
    if (!phone || phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid phone number.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email.";
    if (!service) next.service = "Choose a primary service.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // --- Hand-off ---
    // This site has no inbox of its own. The note is placed in the visitor's email app.
    const serviceTitle = services.find((item) => item.slug === service)?.title ?? service;
    const subject = encodeURIComponent(`Project note from ${name}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email}`, `Service: ${serviceTitle}`, "", message || "(No extra note)"]
        .join("\n"),
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    event.currentTarget.reset();
  }

  if (sent) {
    return (
      <div className="rounded-[28px] bg-white p-8 text-center shadow-sm">
        <p className="serif text-[28px] font-bold">Email app opened.</p>
        <p className="mt-3 text-[15px] leading-7 text-muted">
          Press send in your email app. The note is addressed to {contact.email}. Nothing is stored on this website. If the app did not open, write to that address or use WhatsApp.
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
        This opens an email to {contact.email}. It is not sent until you press send there. WhatsApp is faster if you want a reply today.
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
      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-brand-bright py-3.5 text-[15px] font-medium text-white hover:bg-brand"
      >
        Open email to the founder
      </button>
    </form>
  );
}
