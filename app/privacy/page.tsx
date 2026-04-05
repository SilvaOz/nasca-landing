import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Nazca Antara',
  description: 'Política de privacidad de la aplicación Nazca Antara.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-deep text-cream">
      <TopBar />

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <PageHeader
          title="Política de Privacidad"
          updated="5 de abril de 2026"
        />

        <div className="space-y-8">
          <Section title="1. Información que recopilamos">
            <p>
              <strong className="text-cream">Nazca Antara no recopila información personal.</strong> La
              aplicación funciona completamente en tu dispositivo sin transmitir datos a nuestros servidores.
            </p>
            <p className="mt-3">Las grabaciones de audio que realices:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-cream-muted/80">
              <li>Se almacenan únicamente en tu dispositivo</li>
              <li>Nunca se transmiten a nuestros servidores</li>
              <li>Solo se comparten si tú lo decides explícitamente</li>
            </ul>
          </Section>

          <Section title="2. Compras dentro de la aplicación">
            <p>El procesamiento de pagos es gestionado por:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-cream-muted/80">
              <li><strong className="text-cream">Apple</strong> (App Store) — sujeto a su política de privacidad</li>
              <li><strong className="text-cream">Google</strong> (Google Play) — sujeto a su política de privacidad</li>
              <li><strong className="text-cream">RevenueCat</strong> — usado para verificación de compras</li>
            </ul>
            <p className="mt-3">No almacenamos información de pago.</p>
          </Section>

          <Section title="3. Permisos del dispositivo">
            <div className="space-y-3">
              <PermBox name="Micrófono" desc="Requerido para grabar audio. Solo se activa cuando inicias una grabación." />
              <PermBox name="Almacenamiento" desc="Para guardar tus grabaciones en el dispositivo (solo si otorgas permiso)." />
            </div>
          </Section>

          <Section title="4. Servicios de terceros">
            <ul className="list-disc pl-5 space-y-1 text-cream-muted/80">
              <li>Apple App Store / Google Play Store (distribución)</li>
              <li>RevenueCat (gestión de compras in-app)</li>
              <li>Expo / React Native (framework de desarrollo)</li>
            </ul>
          </Section>

          <Section title="5. Privacidad de menores">
            <p>
              Nazca Antara es adecuada para todas las edades. No recopilamos intencionalmente
              información de niños menores de 13 años.
            </p>
          </Section>

          <Section title="6. Retención de datos">
            <p>
              Como no recopilamos datos personales, no hay datos en nuestros servidores.
              Tus grabaciones permanecen en tu dispositivo hasta que tú las elimines.
            </p>
          </Section>

          <Section title="7. Cambios en esta política">
            <p>
              Podemos actualizar esta política periódicamente. Los cambios se publicarán en
              esta página con una nueva fecha de actualización.
            </p>
          </Section>

          <Section title="8. Contacto">
            <p>Preguntas sobre privacidad:</p>
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

function PageHeader({ title, updated }: { title: string; updated: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-gold/50" />
        <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Legal</span>
      </div>
      <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-cream mb-3">{title}</h1>
      <p className="text-cream-muted font-inter text-sm">Última actualización: {updated}</p>
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

function PermBox({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="bg-white/[0.04] border border-gold/15 rounded-xl p-4">
      <div className="font-semibold text-cream text-sm mb-1">{name}</div>
      <div className="text-cream-muted text-sm">{desc}</div>
    </div>
  )
}
