const features = [
  {
    icon: '◈',
    title: 'Tres Tamaños Auténticos',
    desc: 'Chuli, Sanqa y Malta — cada antara con su registro y timbre propios, fielmente recreados.',
  },
  {
    icon: '⏺',
    title: 'Graba tus Melodías',
    desc: 'Captura tus composiciones con un solo toque. Reproduce y comparte lo que crees.',
  },
  {
    icon: '▶',
    title: 'Demo Incluido',
    desc: 'Aprende escuchando una melodía de demostración pre-cargada para cada tamaño.',
  },
  {
    icon: '♪',
    title: 'Sonido Auténtico',
    desc: 'Muestras grabadas de antaras nazca reales. Sin síntesis, sin artificios.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-deep">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="Características" />
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-cream text-center mb-3">
          Un Instrumento Completo
        </h2>
        <p className="text-cream-muted font-inter text-center mb-14 max-w-md mx-auto">
          Todo lo que necesitas para explorar los sonidos del antiguo Perú
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/[0.04] border border-gold/15 rounded-2xl p-7 hover:border-gold/35 hover:bg-white/[0.07] transition-all group cursor-default"
            >
              <div className="text-2xl text-gold mb-4 group-hover:scale-110 transition-transform inline-block select-none">
                {f.icon}
              </div>
              <h3 className="font-cinzel text-cream font-semibold text-sm mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-cream-muted font-inter text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-12 bg-gold/50" />
      <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">{label}</span>
      <div className="h-px w-12 bg-gold/50" />
    </div>
  )
}
