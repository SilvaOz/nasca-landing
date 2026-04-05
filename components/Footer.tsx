import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-deep py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-cinzel text-gold font-bold tracking-widest text-sm">
            ✦ NASCA ANTARA ✦
          </span>

          <nav className="flex items-center gap-8">
            {[
              ['/privacy', 'Privacidad'],
              ['/terms', 'Términos'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-cream-muted hover:text-cream text-sm font-inter transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:soporte@nascaantara.com"
              className="text-cream-muted hover:text-cream text-sm font-inter transition-colors"
            >
              Contacto
            </a>
          </nav>

          <p className="text-cream-muted/40 font-inter text-xs">
            © {new Date().getFullYear()} Nasca Antara
          </p>
        </div>

        <p className="mt-8 pt-6 border-t border-gold/10 text-center text-cream-muted/30 font-inter text-xs">
          Hecho con amor para preservar la música ancestral del antiguo Perú
        </p>
      </div>
    </footer>
  )
}
