'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep/95 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-cinzel text-gold font-bold tracking-widest text-sm hover:text-gold-light transition-colors"
        >
          ✦ NASCA ANTARA ✦
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {[['#features', 'Características'], ['#about', 'Historia'], ['#demo', 'Demo']].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-cream-muted hover:text-cream text-sm font-inter tracking-wide transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#download"
            className="bg-gold hover:bg-gold-light text-deep text-sm font-semibold px-5 py-2 rounded-full transition-colors font-inter"
          >
            Obtener App
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span
            className="block w-6 h-px bg-gold transition-all origin-center"
            style={menuOpen ? { transform: 'rotate(45deg) translate(1px, 4px)' } : {}}
          />
          <span
            className="block w-6 h-px bg-gold transition-all"
            style={menuOpen ? { opacity: 0, transform: 'scaleX(0)' } : {}}
          />
          <span
            className="block w-6 h-px bg-gold transition-all origin-center"
            style={menuOpen ? { transform: 'rotate(-45deg) translate(1px, -4px)' } : {}}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 border-t border-gold/20' : 'max-h-0'
        } bg-deep/98 backdrop-blur-md`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {[['#features', 'Características'], ['#about', 'Historia'], ['#demo', 'Demo'], ['#download', 'Descargar']].map(
            ([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="text-cream-muted hover:text-cream py-2 font-inter transition-colors"
              >
                {label}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  )
}
