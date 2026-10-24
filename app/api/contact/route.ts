/*
  Change summary:
  - What: The contact form now emails the founder's Gmail instead of opening the visitor's email app.
  - Why: A filled form should arrive in aswebcrafters@gmail.com without the visitor pressing send somewhere else.
  - Related: components/contact/ContactForm.tsx, app/privacy/page.tsx, lib/data.ts contact.email
  - Business rule: say the note was sent only after the mail service accepts it. Do not store a lead list on this website.
  - MCP Context 7: App Router POST route handler, request.json() and Response.json(), from /vercel/next.js.
*/

import { contact, services } from "@/lib/data";
import { siteUrl } from "@/lib/site";

type Note = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

// --- Checks ---
// Same rules as the form on the page, repeated here so a direct call cannot skip them.
function readNote(body: unknown): { note: Note } | { error: string } {
  if (!body || typeof body !== "object") return { error: "The note was empty." };
  const raw = body as Record<string, unknown>;

  // Hidden field. Real visitors leave it blank. Filled means a bot.
  if (String(raw.company || "").trim()) return { error: "bot" };

  const name = String(raw.name || "").trim();
  const phone = String(raw.phone || "").trim();
  const email = String(raw.email || "").trim();
  const service = String(raw.service || "").trim();
  const message = String(raw.message || "").trim();

  if (!name || name.length > 80) return { error: "Please add your name." };
  if (phone.replace(/\D/g, "").length < 10 || phone.length > 20) return { error: "Enter a valid phone number." };
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 120) return { error: "Enter a valid email." };
  if (!services.some((item) => item.slug === service)) return { error: "Choose a primary service." };
  if (message.length > 2000) return { error: "The note is too long." };

  return { note: { name, phone, email, service, message } };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "The note was empty." }, { status: 400 });
  }

  const parsed = readNote(body);
  if ("error" in parsed) {
    if (parsed.error === "bot") return Response.json({ ok: true });
    return Response.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const { note } = parsed;
  const serviceTitle = services.find((item) => item.slug === note.service)?.title ?? note.service;

  // --- Delivery ---
  // Gmail does not accept a normal login from a website. FormSubmit carries the note to the founder inbox.
  // The first ever send asks the founder to click Activate in Gmail. Until that click, this call must fail honestly.
  let delivery: { success?: string; message?: string };
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contact.email)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: siteUrl,
        Referer: `${siteUrl}/contact`,
      },
      cache: "no-store",
      body: JSON.stringify({
        name: note.name,
        email: note.email,
        phone: note.phone,
        service: serviceTitle,
        message: note.message || "(No extra note)",
        _subject: `Project note from ${note.name}`,
        _template: "table",
        _captcha: "false",
        _replyto: note.email,
      }),
    });
    delivery = (await response.json()) as { success?: string; message?: string };
  } catch {
    return Response.json(
      { ok: false, error: "The note could not be sent. Email the founder directly, or use WhatsApp." },
      { status: 502 },
    );
  }

  // FormSubmit reports success as the text "true". Anything else means the inbox did not get the note.
  if (String(delivery.success) !== "true") {
    return Response.json(
      { ok: false, error: "The note could not be sent. Email the founder directly, or use WhatsApp." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
