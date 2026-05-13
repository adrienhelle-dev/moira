import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Moïra Advisory <contact@moiradvisory.com>',
      to: 'adrien.helle@moiradvisory.com',
      replyTo: email,
      subject: `[Moïra] ${subject} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1A1A1A;">
          <h2 style="font-size:18px;font-weight:400;border-bottom:1px solid #E8E4DC;padding-bottom:12px;margin-bottom:24px;">
            Nouvelle demande — Moïra Advisory
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6B6B6B;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;width:90px;">Nom</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6B6B6B;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#A08C5B;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6B6B6B;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;">Téléphone</td><td style="padding:8px 0;"><a href="tel:${phone}" style="color:#A08C5B;">${phone}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6B6B6B;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;">Sujet</td><td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <div style="margin-top:24px;padding-top:24px;border-top:1px solid #E8E4DC;">
            <p style="color:#6B6B6B;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">Message</p>
            <p style="line-height:1.7;white-space:pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
