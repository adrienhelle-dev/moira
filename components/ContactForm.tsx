'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/getDictionary'

interface ContactFormProps {
  dict: Dictionary['contact']
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: dict.subjectOptions[0],
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full font-dm text-sm text-[#1A1A1A] bg-transparent border-b border-[#E8E4DC] py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-[#6B6B6B]/60'

  if (status === 'sent') {
    return (
      <div className="py-12 text-center">
        <p className="font-cormorant text-2xl font-light text-[#1A1A1A] mb-2">{dict.successTitle}</p>
        <p className="font-dm text-sm text-[#6B6B6B]">{dict.successText}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input
          type="text"
          name="name"
          placeholder={dict.namePlaceholder}
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder={dict.emailPlaceholder}
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <select
        name="subject"
        value={form.subject}
        onChange={handleChange}
        className={`${inputClass} cursor-pointer`}
      >
        {dict.subjectOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder={dict.messagePlaceholder}
        required
        rows={5}
        value={form.message}
        onChange={handleChange}
        className={`${inputClass} resize-none`}
      />

      {status === 'error' && (
        <p className="font-dm text-sm text-red-500">{dict.errorText}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="font-dm text-sm tracking-[0.15em] uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-white transition-all duration-500 disabled:opacity-50"
        >
          {status === 'sending' ? dict.sending : dict.submit}
        </button>
      </div>
    </form>
  )
}
