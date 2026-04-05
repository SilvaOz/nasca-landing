import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Servicio — Nazca Antara',
  description: 'Términos de servicio de la aplicación Nazca Antara.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-deep text-cream">
      <TopBar />

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Legal</span>
          </div>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-cream mb-3">
            Términos de Servicio
          </h1>
          <p className="text-cream-muted font-inter text-sm">
            Última actualización: 5 de abril de 2026
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. Aceptación de los términos">
            <p>
              Al descargar, instalar o usar <strong className="text-cream">Nazca Antara</strong>,
              aceptas quedar vinculado por estos Términos de Servicio. Si no estás de acuerdo,
              no utilices la aplicación.
            </p>
          </Section>

          <Section title="2. Licencia de uso">
            <p>
              Te otorgamos una licencia personal, no transferible, no exclusiva y revocable para
              usar la aplicación en dispositivos que poseas, exclusivamente para uso personal y no comercial.
            </p>
            <p className="mt-3">Queda expresamente prohibido:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-cream-muted/80">
              <li>Copiar, modificar o distribuir la aplicación</li>
              <li>Realizar ingeniería inversa del código</li>
              <li>Usar la aplicación con fines comerciales sin autorización</li>
              <li>Sublicenciar o vender derechos de uso</li>
            </ul>
          </Section>

          <Section title="3. Compras dentro de la aplicación">
            <ul className="list-disc pl-5 space-y-1 text-cream-muted/80">
              <li>Las compras son <strong className="text-cream">definitivas y no reembolsables</strong>, excepto según lo exija la ley aplicable</li>
              <li>Los precios pueden cambiar sin previo aviso</li>
              <li>Las compras están asociadas a tu cuenta de Apple ID o Google</li>
              <li>Para reembolsos, sigue los procedimientos de App Store o Google Play</li>
            </ul>
          </Section>

          <Section title="4. Propiedad intelectual">
            <p>
              Todos los derechos sobre la aplicación — código, diseño visual, muestras de audio,
              animaciones y contenido — son propiedad del desarrollador y están protegidos por
              las leyes de derechos de autor.
            </p>
            <p className="mt-3">
              Las grabaciones que realices con la app son de tu propiedad. No reclamamos
              derechos sobre el contenido que crees.
            </p>
          </Section>

          <Section title="5. Uso aceptable">
            <p>Aceptas no usar la aplicación para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-cream-muted/80">
              <li>Actividades ilegales o que violen derechos de terceros</li>
              <li>Difundir contenido ofensivo o inapropiado</li>
              <li>Comprometer la seguridad o integridad de la aplicación</li>
            </ul>
          </Section>

          <Section title="6. Exclusión de garantías">
            <p>
              La aplicación se proporciona <strong className="text-cream">"tal cual"</strong>,
              sin garantías de ningún tipo. No garantizamos que funcione sin interrupciones
              ni que sea adecuada para algún propósito específico.
            </p>
          </Section>

          <Section title="7. Limitación de responsabilidad">
            <p>
              En la máxima medida permitida por la ley, el desarrollador no será responsable
              por daños indirectos, incidentales o consecuentes que surjan del uso de la aplicación.
              Nuestra responsabilidad total no excederá el monto pagado en los últimos 12 meses.
            </p>
          </Section>

          <Section title="8. Terminación">
            <p>
              Podemos suspender tu acceso si violas estos términos. Al terminar, deberás
              dejar de usar la aplicación y eliminarla de tus dispositivos.
            </p>
          </Section>

          <Section title="9. Cambios en los términos">
            <p>
              Podemos modificar estos términos en cualquier momento. Las modificaciones entran
              en vigencia al publicarse. El uso continuado de la app implica aceptación.
            </p>
          </Section>

          <Section title="10. Ley aplicable">
            <p>
              Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa
              se someterá a los tribunales competentes de Lima, Perú.
            </p>
          </Section>

          <Section title="11. Contacto">
            <p>Para preguntas sobre estos Términos:</p>
            <a
              href="mailto:info@devos-web.de"
              className="text-gold hover:text-gold-light transition-colors mt-2 inline-block"
            >
              info@devos-web.de
            </a>
          </Section>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/20">
          <Link href="/" className="text-gold hover:text-gold-light font-inter text-sm transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}

function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-deep/95 backdrop-blur-md border-b border-gold/20 h-16 flex items-center px-6">
      <Link href="/" className="font-cinzel text-gold font-bold tracking-widest text-sm hover:text-gold-light transition-colors">
        ✦ NAZCA ANTARA ✦
      </Link>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-gold/30 pl-6">
      <h2 className="font-cinzel text-base text-cream font-semibold mb-3">{title}</h2>
      <div className="text-cream-muted font-inter text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}
