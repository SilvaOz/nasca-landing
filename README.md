# Nasca Antara — Landing Page

Landing page del app **Nasca Antara**, construida con Next.js 15 + Tailwind CSS. Deploy en Vercel.

## Estructura de páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home: hero, características, historia, demo en video, descarga |
| `/privacy` | Política de Privacidad (requerida por App Store y Google Play) |
| `/terms` | Términos de Servicio (requeridos para IAP) |

## Setup local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Agregar los videos

Copia tus videos a la carpeta `public/video/`:

```
public/
  video/
    hero.mp4    ← video de fondo del hero (sonidosnazca.mp4 o similar)
    demo.mp4    ← video tuyo tocando la antara
  images/
    hero-poster.jpg   ← frame del hero video (fallback sin autoplay)
    demo-poster.jpg   ← thumbnail del video demo
```

## Deploy en Vercel

1. Crea un repo en GitHub y sube este proyecto
2. Ve a https://vercel.com → "Add New Project" → importa el repo
3. Vercel detecta Next.js automáticamente
4. Click "Deploy" — listo en ~2 minutos

### Dominio personalizado en Vercel
Settings → Domains → agrega `nascaantara.com` (o el que tengas)

## Pendientes antes de publicar la app

- [ ] Agregar videos a `public/video/`
- [ ] Actualizar email de contacto en Privacy/Terms (`soporte@nascaantara.com`)
- [ ] Reemplazar nombre/empresa real en Privacy Policy y Terms
- [ ] Conectar formulario "Notificarme" a Mailchimp/Resend (ver `components/Download.tsx`)
- [ ] Actualizar links App Store / Google Play cuando estén publicados
- [ ] Agregar `app.json` → `"privacyPolicyUrl": "https://nascaantara.com/privacy"`
- [ ] Agregar `app.json` → `"termsOfServiceUrl": "https://nascaantara.com/terms"`
