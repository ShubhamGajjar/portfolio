import { Resend } from 'resend';

// Initialize Resend only if API key exists to avoid errors during module load
let resend;
let TO_EMAIL;

// Initialize on first request if env vars are available
function initializeResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  if (!TO_EMAIL) {
    TO_EMAIL = process.env.CONTACT_TO_EMAIL;
  }
}

export default async function handler(req, res) {
  // Set CORS headers if needed
  res.setHeader('Content-Type', 'application/json');

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Initialize Resend
  initializeResend();

  // Check if environment variables are set
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Server configuration error: RESEND_API_KEY is missing' });
  }

  if (!process.env.CONTACT_TO_EMAIL) {
    console.error('CONTACT_TO_EMAIL is not set');
    return res.status(500).json({ error: 'Server configuration error: CONTACT_TO_EMAIL is missing' });
  }

  try {
    const { firstName, lastName, email, subject, message, website } = req.body;

    // Honeypot: block bots
    if (website) {
      return res.status(200).json({ ok: true });
    }

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Escape HTML to prevent XSS
    const escapeHtml = (text) => {
      if (!text) return '';
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return String(text).replace(/[&<>"']/g, (m) => map[m]);
    };

    const html = `
      <div>
        <p><strong>From:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
      </div>
    `;

    // Use Resend's onboarding domain for testing, or configure your own
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact: ${subject}`,
      html,
    });

    if (emailResult.error) {
      console.error('Resend API error:', emailResult.error);
      return res.status(500).json({ 
        error: emailResult.error.message || 'Failed to send email. Please check server configuration.' 
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ 
      error: err.message || 'Server error. Please try again later.' 
    });
  }
}
