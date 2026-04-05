import { SectionLabel } from './Features'

export default function VideoDemo() {
  return (
    <section id="demo" className="py-28 px-6 bg-deep">
      <div className="max-w-4xl mx-auto">
        <SectionLabel label="En Acción" />
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-cream text-center mb-3">
          Escúchalo Tú Mismo
        </h2>
        <p className="text-cream-muted font-inter text-center mb-12 max-w-md mx-auto">
          Sonidos auténticos grabados en las tierras de Nasca, Perú
        </p>

        {/* Video wrapper */}
        <div className="relative rounded-2xl overflow-hidden border border-gold/25 shadow-2xl shadow-black/60 bg-black group">
          <video
            className="w-full aspect-video object-cover"
            src="/video/demo.mp4"
            controls
            playsInline
            poster="/images/demo-poster.jpg"
          />
          {/* Corner accents */}
          {['top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl',
            'top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl',
            'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl',
            'bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl',
          ].map((cls) => (
            <div
              key={cls}
              className={`absolute ${cls} w-6 h-6 border-gold/50 pointer-events-none`}
            />
          ))}
        </div>

        <p className="text-center text-cream-muted/50 font-inter text-xs mt-4">
          Grabado en las dunas de Nasca, Perú
        </p>
      </div>
    </section>
  )
}
