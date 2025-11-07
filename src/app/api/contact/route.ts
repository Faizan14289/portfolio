import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = (body?.name ?? '').toString().trim();
    const email = (body?.email ?? '').toString().trim();
    const subject = (body?.subject ?? '').toString().trim();
    const message = (body?.message ?? '').toString().trim();

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL || 'faizali2152@gmail.com';
    const resendKey = process.env.RESEND_API_KEY;

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; line-height: 1.6;">
        <h2 style="margin:0 0 12px">New Contact Message</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
        <p style="white-space:pre-wrap">${message}</p>
      </div>
    `;

    if (!resendKey) {
      console.warn('RESEND_API_KEY not set. Email sending disabled.');
      // Return 501 Not Implemented with instructions
      return Response.json(
        { ok: false, error: 'Email sending not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL.' },
        { status: 501 }
      );
    }

    const resend = new Resend(resendKey);
    const sendResult = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html
    });

    if ((sendResult as any).error) {
      console.error('Resend error:', (sendResult as any).error);
      return Response.json({ ok: false, error: 'Failed to send email.' }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return Response.json({ error: 'Unexpected error' }, { status: 500 });
  }
}

export const runtime = 'nodejs';