import { NextResponse } from 'next/server'

// Email sending via Resend — à configurer avec RESEND_API_KEY
export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // TODO: activer Resend quand RESEND_API_KEY est configuré dans Vercel
    console.log('Contact form submission:', { name, email, subject, message })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
