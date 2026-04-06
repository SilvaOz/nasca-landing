import { SectionLabel } from './Features'

const antaras = [
  {
    size: 'chuli',
    name: 'Chuli',
    world: 'Hanan Pacha',
    worldLabel: 'Upper World',
    range: '276 – 782 Hz',
    desc: 'Bright, soaring tones that called rain from the heavens.',
    accent: '#C9A84C',
    bg: 'from-[#2e1f06] to-[#140d02]',
    border: 'border-[#C9A84C]/30',
    free: true,
    img: '/images/chuli.png',
  },
  {
    size: 'malta',
    name: 'Malta',
    world: 'Ukhu Pacha',
    worldLabel: 'Inner World',
    range: '138 – 391 Hz',
    desc: 'Deep resonances that carried prayers into the ancestral world.',
    accent: '#4A7AB5',
    bg: 'from-[#060f1e] to-[#020509]',
    border: 'border-[#4A7AB5]/40',
    featured: true,
    img: '/images/malta.png',
  },
  {
    size: 'sanqa',
    name: 'Sanqa',
    world: 'Kay Pacha',
    worldLabel: 'Living World',
    range: '184 – 521 Hz',
    desc: 'Warm, balanced tones played in agricultural ceremonies.',
    accent: '#C4621A',
    bg: 'from-[#2a1208] to-[#100604]',
    border: 'border-[#C4621A]/30',
    img: '/images/sanqa.png',
  },
]

export default function Antaras() {
  return (
    <section id="antaras" className="py-28 px-6 bg-deep">
      <div className="max-w-5xl mx-auto">
        <SectionLabel label="Las Tres Voces" />
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-cream text-center mb-3">
          Tres Mundos, Tres Registros
        </h2>
        <p className="text-cream-muted font-inter text-center mb-14 max-w-lg mx-auto">
          La cosmología andina divide la existencia en tres planos. Cada tamaño de antara
          lleva la voz de uno de ellos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {antaras.map((a) => (
            <div
              key={a.size}
              className={`relative rounded-2xl bg-gradient-to-br ${a.bg} border ${a.border} p-6 flex flex-col gap-4 overflow-hidden
                ${a.featured ? 'ring-2 ring-[#4A7AB5]/50 shadow-2xl shadow-[#4A7AB5]/15 md:-mt-4 md:pb-10' : ''}
              `}
            >
              {a.featured && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4A7AB5] to-transparent" />
              )}

              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="text-[10px] font-inter tracking-[0.25em] uppercase mb-1"
                    style={{ color: `${a.accent}99` }}
                  >
                    {a.world}
                  </p>
                  <h3 className="font-cinzel text-xl font-bold text-cream">{a.name}</h3>
                  <p className="font-inter text-xs mt-0.5" style={{ color: `${a.accent}BB` }}>
                    {a.worldLabel}
                  </p>
                </div>
                {a.free ? (
                  <span
                    className="text-[9px] font-inter tracking-widest px-2 py-1 rounded-md border"
                    style={{ color: a.accent, borderColor: `${a.accent}50`, background: `${a.accent}18` }}
                  >
                    FREE
                  </span>
                ) : a.featured ? (
                  <span
                    className="text-[9px] font-inter tracking-widest px-2 py-1 rounded-md border"
                    style={{ color: a.accent, borderColor: `${a.accent}50`, background: `${a.accent}18` }}
                  >
                    ✦ FEATURED
                  </span>
                ) : null}
              </div>

              {/* Antara real photo */}
              <div className="w-full flex items-center justify-center" style={{ height: 160 }}>
                <img
                  src={a.img}
                  alt={a.name}
                  className="h-full w-full object-contain drop-shadow-xl"
                  style={{ filter: `drop-shadow(0 4px 16px ${a.accent}40)` }}
                />
              </div>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: `${a.accent}20` }} />

              {/* Range */}
              <p className="font-inter text-xs" style={{ color: `${a.accent}CC` }}>
                ∿ {a.range}
              </p>

              {/* Description */}
              <p className="font-inter text-sm text-cream-muted leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
