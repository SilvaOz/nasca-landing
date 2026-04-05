'use client'

import { useRef, useEffect } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {
      // autoplay blocked — poster visible
    })
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-deep/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-transparent to-deep" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
          <div className="h-px w-16 bg-gold/60" />
          <span className="text-gold text-xs font-inter tracking-[0.35em] uppercase">
            Instrumento Ancestral · Perú
          </span>
          <div className="h-px w-16 bg-gold/60" />
        </div>

        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-3 leading-none animate-fade-up">
          Nazca
          <br />
          <span className="text-gold">Antara</span>
        </h1>

        <p className="font-inter text-lg md:text-xl text-cream-muted mb-10 leading-relaxed animate-fade-up max-w-lg mx-auto">
          El sonido de una civilización milenaria,<br />
          ahora en la palma de tu mano
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <a
            href="#download"
            className="flex items-center gap-3 bg-cream hover:bg-white text-deep px-6 py-3.5 rounded-xl font-inter font-semibold transition-all hover:scale-105 shadow-xl shadow-black/40 w-full sm:w-auto justify-center"
          >
            <AppleIcon />
            <div className="text-left">
              <div className="text-xs opacity-60 leading-none mb-0.5">Próximamente en</div>
              <div className="text-base leading-tight">App Store</div>
            </div>
          </a>

          <a
            href="#download"
            className="flex items-center gap-3 border border-gold/40 hover:border-gold bg-deep/60 backdrop-blur-sm text-cream px-6 py-3.5 rounded-xl font-inter font-semibold transition-all hover:scale-105 w-full sm:w-auto justify-center"
          >
            <PlayIcon />
            <div className="text-left">
              <div className="text-xs opacity-60 leading-none mb-0.5">Próximamente en</div>
              <div className="text-base leading-tight">Google Play</div>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-gold/40" />
      </div>
    </section>
  )
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83 1.01-.8 1.28-.27l13.54 8.29c.27.55.01 1.27-.3 1.48L4.27 20.77C4 21.3 3 21.33 3 20.5z" />
    </svg>
  )
}
