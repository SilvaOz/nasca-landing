'use client'

import { useState } from 'react'
import { SectionLabel } from './Features'

export default function Download() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: connect to Mailchimp / ConvertKit / Resend for real email capture
    setSubmitted(true)
  }

  return (
    <section id="download" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#241a08] via-deep to-deep pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        <SectionLabel label="Descarga" />

        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
          Lleva la Antara<br />
          <span className="text-gold">Contigo</span>
        </h2>
        <p className="text-cream-muted font-inter text-lg mb-12 max-w-sm mx-auto">
          Próximamente en App Store y Google Play.
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <StoreButton
            href="#"
            icon={<AppleIcon />}
            label="App Store"
            bg
          />
          <StoreButton
            href="#"
            icon={<PlayIcon />}
            label="Google Play"
          />
        </div>

        {/* Notify form */}
        <div className="border border-gold/20 rounded-2xl p-7 bg-white/[0.03]">
          {submitted ? (
            <div className="text-center py-2">
              <div className="text-gold font-cinzel text-lg mb-1">¡Gracias!</div>
              <p className="text-cream-muted font-inter text-sm">
                Te avisamos cuando esté disponible.
              </p>
            </div>
          ) : (
            <>
              <p className="text-cream font-cinzel text-sm tracking-wide mb-4">
                Avísame cuando esté disponible
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 bg-deep/80 border border-gold/20 focus:border-gold/60 rounded-xl px-4 py-3 text-cream font-inter text-sm outline-none transition-colors placeholder:text-cream-muted/40"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-deep font-semibold font-inter px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                >
                  Notificarme
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function StoreButton({
  href,
  icon,
  label,
  bg,
}: {
  href: string
  icon: React.ReactNode
  label: string
  bg?: boolean
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-7 py-4 rounded-xl font-inter font-semibold transition-all hover:scale-105 w-full sm:w-auto justify-center ${
        bg
          ? 'bg-cream hover:bg-white text-deep shadow-lg shadow-black/30'
          : 'border border-gold/35 hover:border-gold text-cream'
      }`}
    >
      {icon}
      <div className="text-left">
        <div className="text-xs opacity-55 leading-none mb-0.5">Próximamente</div>
        <div className="text-lg leading-tight">{label}</div>
      </div>
    </a>
  )
}

function AppleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83 1.01-.8 1.28-.27l13.54 8.29c.27.55.01 1.27-.3 1.48L4.27 20.77C4 21.3 3 21.33 3 20.5z" />
    </svg>
  )
}
