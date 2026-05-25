import { Resend } from "resend";

let resend;

function init() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
}

const escapeHtml = (text) => {
  if (!text) return "";
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
};

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  init();

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return res
      .status(500)
      .json({ error: "Server configuration error: RESEND_API_KEY is missing" });
  }

  const TO_EMAIL = process.env.CONTACT_TO_EMAIL;
  if (!TO_EMAIL) {
    console.error("CONTACT_TO_EMAIL is not set");
    return res
      .status(500)
      .json({ error: "Server configuration error: CONTACT_TO_EMAIL is missing" });
  }

  try {
    const { name, email, message, website } = req.body || {};

    // Honeypot: silently accept if a bot filled the hidden "website" field.
    if (website) return res.status(200).json({ ok: true });

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields: name, email, and message are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const html = `
      <div>
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
      </div>
    `;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const result = await resend.emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio contact from ${name}`,
      html,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return res
        .status(500)
        .json({ error: result.error.message || "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res
      .status(500)
      .json({ error: err.message || "Server error. Please try again later." });
  }
}
