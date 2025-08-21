"use server";

// server action for sending contact form emails via Resend
// comments: all lowercase per project guidelines

import { Resend } from "resend";

type ActionState = {
  ok: boolean | null;
  message: string | null;
};

function escapeHtml(input: string): string {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactEmail(prevState: ActionState | undefined, formData: FormData): Promise<ActionState> {
  const name = String(formData.get("name") || "")
    .trim()
    .slice(0, 200);
  const email = String(formData.get("email") || "")
    .trim()
    .slice(0, 200);
  const message = String(formData.get("message") || "")
    .trim()
    .slice(0, 5000);

  if (!name || !email || !message) {
    return { ok: false, message: "missing required fields" };
  }
  if (!isValidEmail(email)) {
    return { ok: false, message: "invalid email" };
  }

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2 style="margin: 0 0 12px 0;">New contact form submission</h2>
      <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <div style="margin-top: 16px; white-space: pre-wrap;">
        <strong>Message:</strong>
        <div>${escapeHtml(message)}</div>
      </div>
    </div>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, message: "server misconfigured: RESEND_API_KEY missing" };
  }

  // initialize sdk per request to avoid leaking envs across edge/runtime boundaries
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "contact@zafeer.pk",
    to: ["christopher@christopherpoole.design"],
    subject: `New message from ${name}`,
    html,
    replyTo: email,
  });

  if (error) {
    console.error("Failed to send email:", error);
    return { ok: false, message: "failed to send email" };
  }

  return { ok: true, message: "message sent successfully." };
}
