'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const iosUrl = process.env.NEXT_PUBLIC_IOS_STORE_URL
const androidUrl = process.env.NEXT_PUBLIC_ANDROID_STORE_URL

export default function DownloadPage() {
  const [platform, setPlatform] = useState<'ios' | 'android' | 'other'>('other')

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios')
    } else if (/android/.test(userAgent)) {
      setPlatform('android')
    }
  }, [])

  const preferredUrl = platform === 'ios' ? iosUrl : platform === 'android' ? androidUrl : undefined

  return (
    <main className="min-h-screen bg-deep text-cream flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl text-center">
        <Link href="/" className="font-cinzel text-gold font-bold tracking-widest text-sm">
          ✦ NAZCA ANTARA ✦
        </Link>
        <p className="text-gold text-xs font-inter tracking-[0.3em] uppercase mt-12 mb-4">
          Descarga oficial
        </p>
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-5">
          Lleva la antara contigo
        </h1>
        <p className="text-cream-muted font-inter leading-relaxed max-w-md mx-auto mb-10">
          Prueba Malta gratis y descubre los sonidos ancestrales de Chuli y Sanqa.
        </p>

        {preferredUrl ? (
          <a
            href={preferredUrl}
            className="inline-flex bg-gold hover:bg-gold-light text-deep font-semibold font-inter px-8 py-4 rounded-xl transition-colors"
          >
            Descargar para {platform === 'ios' ? 'iPhone y iPad' : 'Android'}
          </a>
        ) : (
          <p className="border border-gold/30 rounded-xl px-6 py-4 text-cream-muted font-inter">
            {platform === 'other'
              ? 'Elige tu plataforma para descargar la aplicación.'
              : 'La descarga para esta plataforma estará disponible próximamente.'}
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <StoreLink href={iosUrl} label="App Store" />
          <StoreLink href={androidUrl} label="Google Play" />
        </div>

        <p className="text-cream-muted/60 text-xs font-inter mt-10">
          Esta página es el destino permanente del código QR de la presentación.
        </p>
      </div>
    </main>
  )
}

function StoreLink({ href, label }: { href?: string; label: string }) {
  if (!href) {
    return (
      <span className="border border-cream/10 rounded-xl px-5 py-3 text-cream-muted/50 font-inter text-sm">
        {label}: próximamente
      </span>
    )
  }

  return (
    <a
      href={href}
      className="border border-gold/35 hover:border-gold rounded-xl px-5 py-3 text-cream font-inter text-sm transition-colors"
    >
      Descargar en {label}
    </a>
  )
}
