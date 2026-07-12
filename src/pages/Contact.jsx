import { useState } from 'react'
import Reveal from '../components/Reveal'
import useSeo from '../components/useSeo'
import contactImg from '../assets/stock/contact.webp'

const OFFERINGS = [
  'Virtual or in-person sessions to hear more about the DocuCourse approach to storytelling, narrative transformation, and community activation.',
  'Consultation on how community members and/or university students can create a community-based project.',
  'Film, production, and storytelling services for your community.',
]

export default function Contact() {
  useSeo({
    title: 'Contact | DocuCourse',
    description:
      'Get in touch with DocuCourse for storytelling consultations, CE course access, or organizational partnerships.',
    path: '/contact',
  })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    // NOTE: no form backend is wired up yet. This opens the visitor's email
    // client pre-filled as a working fallback until a real endpoint
    // (Formspree, EmailJS, etc.) is connected to Seth's own account.
    const subject = encodeURIComponent(`DocuCourse contact form — ${form.name || 'New message'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:info@docucourse.org?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden">
        <img
          src={contactImg}
          alt="Two people in a warm, attentive conversation"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6">
              Gain Insights and Inspiration
            </p>
            <h1 className="font-display text-4xl sm:text-5xl mb-6">Contact Us</h1>
            <p className="text-paper-dim leading-relaxed max-w-2xl mx-auto">
              We specialize in social impact storytelling and narrative transformation, through
              curated production. We work with people and people-serving organizations to develop
              authentic storytelling that magnifies the vision of physically, economically, and
              socially well communities and just health care systems. We work with the changemakers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <p className="text-paper-dim leading-relaxed mb-8">
                We narrate through the lens of subjective and objective truths, through the voices
                of real people and the support of evidence-based strategies. At DocuCourse, we
                always say to be a changemaker it is important to take the first step and get
                started&mdash;to take action. We believe that most people want to make a
                difference. Sometimes, we just need a better understanding of the issues out there.
                And then we need some practical steps on where to get started.
              </p>
              <h2 className="font-mono text-xs uppercase tracking-widest text-amber mb-4">We Offer</h2>
              <ul className="space-y-4">
                {OFFERINGS.map((o) => (
                  <li key={o} className="flex gap-3 text-sm text-paper-dim leading-relaxed">
                    <span className="text-amber mt-1">&#10003;</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-ink-soft p-8">
              <h2 className="font-display text-2xl mb-1">We&rsquo;d Love to Hear From You</h2>
              <p className="text-paper-dim text-sm mb-6">
                Fill out the form and a staff member will get in touch with you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-paper-dim mb-2">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg bg-ink border border-white/15 px-4 py-3 text-sm focus:border-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-paper-dim mb-2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg bg-ink border border-white/15 px-4 py-3 text-sm focus:border-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-paper-dim mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg bg-ink border border-white/15 px-4 py-3 text-sm focus:border-amber focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-amber px-6 py-3.5 text-ink font-mono text-xs uppercase tracking-widest hover:bg-amber-dim transition-colors"
                >
                  Send Message
                </button>
                {status === 'sent' && (
                  <p className="text-xs text-slate-bright font-mono">
                    Opening your email client to send this message.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
