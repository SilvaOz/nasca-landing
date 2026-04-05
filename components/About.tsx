import { SectionLabel } from './Features'

const stats = [
  { number: '~2000', label: 'Años de historia' },
  { number: '3', label: 'Tamaños auténticos' },
  { number: '100%', label: 'Sonido real' },
  { number: '∞', label: 'Melodías posibles' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-gradient-to-b from-deep via-[#1d1710] to-deep">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <SectionLabel label="Historia" />
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-cream mb-5 leading-tight">
              La Voz del<br />
              <span className="text-gold">Antiguo Perú</span>
            </h2>
            <p className="text-cream-muted font-inter leading-relaxed mb-4">
              La antara nazca es uno de los instrumentos de viento más antiguos de América.
              Usada por la civilización Nazca (100 a.C. — 800 d.C.) en ceremonias y rituales,
              su sonido ha resonado en las pampas del sur del Perú por más de dos milenios.
            </p>
            <p className="text-cream-muted font-inter leading-relaxed">
              Cada tubo produce un tono diferente, creando melodías que evocan el desierto,
              el viento y la espiritualidad de una civilización extraordinaria. Hoy puedes
              llevar ese sonido contigo.
            </p>
          </div>

          {/* Stats */}
          <div className="bg-white/[0.04] border border-gold/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map(({ number, label }) => (
                <div key={label} className="text-center">
                  <div className="font-cinzel text-3xl md:text-4xl font-bold text-gold mb-1">
                    {number}
                  </div>
                  <div className="font-inter text-cream-muted text-xs tracking-wide uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gold/15 text-center">
              <p className="font-inter text-cream-muted text-xs leading-relaxed italic">
                "La antara es el alma de la música nazca"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
