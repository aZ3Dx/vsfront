# Plan SEO — Visual Studio (visualstudio.pe)

## Diagnóstico

El sitio recibe ~80 vistas/mes y no aparece en las primeras páginas por estas razones:

- No hay Google Search Console ni Google Business Profile — Google no "sabe" oficialmente que existes
- Los 4 posts del blog son placeholder ("Bienvenido al Blog") y todos tienen la **misma fecha futura** (2025-09-25, cuando hoy es 2026-05-14) — Google penaliza contenido thin y fechas futuras
- Las páginas de servicios no tienen suficiente contenido para rankear por palabras clave
- No existe la página `/servicios` aunque el breadcrumb la referencia (genera un 404 en el sitemap)
- Sin `font-display: swap` en las fuentes → CLS alto → peor puntuación en Core Web Vitals
- Las imágenes del gallery no tienen `width`/`height` → otro CLS hit

Servicios prioritarios: **Fotografía de Productos** y **Fotografía de Moda**

---

## FASE 0 — Acciones externas (tú debes hacer esto)

> Sin estos pasos, ningún cambio de código va a rankear el sitio.

- [ ] **Google Search Console** → https://search.google.com/search-console
  - Agregar propiedad → URL prefix → `https://visualstudio.pe`
  - Verificar con el método de archivo HTML (descargar y poner en `public/`)
  - Después: Sitemaps → enviar `https://visualstudio.pe/sitemap-index.xml`
  - Inspeccionar las URLs principales y solicitar indexación

- [ ] **Google Business Profile** → https://business.google.com
  - Crear ficha: "Visual Studio" → categoría "Fotógrafo" → Lima, Perú
  - Agregar teléfono, sitio web, descripción y al menos 10 fotos
  - Verificar por postal (demora ~5 días)
  - Pedir a cada cliente satisfecho que deje una reseña en Google

- [ ] **Google Analytics 4** — conectar con Search Console si no está hecho

---

## FASE 1 — Contenido del Blog (crítico)

> Todos los posts tienen cuerpo placeholder y fecha futura → Google los ignora.

- [ ] **`src/content/blogs/blog-1.mdx`** — "Cómo unas buenas fotos de producto pueden duplicar tus ventas online"
  - Cambiar fecha: `createdAt: '2025-04-10'`
  - Escribir artículo real de 600–800 palabras:
    - Por qué la foto es el primer factor de decisión en compras online
    - Diferencia entre foto con celular vs estudio profesional
    - 5 tipos de fotos de producto (fondo blanco, lifestyle, detalle, escala, 360°)
    - CTA a `/servicios/fotos-productos`
  - Keywords objetivo: "fotografía de productos Lima", "fotos de productos para e-commerce Perú"

- [ ] **`src/content/blogs/blog-4.mdx`** — Cambiar tema a Fotografía de Moda
  - Nuevo título: `'Fotografía de moda en Lima: guía para marcas y diseñadores'`
  - Nueva categoría: `'Fotografía de moda'`
  - Cambiar fecha: `createdAt: '2025-07-22'`
  - Escribir artículo de 600–800 palabras:
    - Editorial vs comercial: diferencias y cuándo usar cada una
    - Qué preparar para una sesión de moda (casting, looks, locación)
    - CTA a `/servicios/fotos-moda`
  - Keywords objetivo: "fotografía de moda Lima", "sesión de fotos de moda Lima"

- [ ] **`src/content/blogs/blog-2.mdx`** — "5 claves para un evento corporativo exitoso en imágenes"
  - Cambiar fecha: `createdAt: '2025-05-28'`
  - Escribir artículo de 500 palabras con las 5 claves como H2s

- [ ] **`src/content/blogs/blog-3.mdx`** — "El poder del podcast como herramienta empresarial"
  - Cambiar fecha: `createdAt: '2025-06-15'`
  - Escribir artículo de 500 palabras

- [ ] **`src/content/blogs/blog-5.mdx`** — Nuevo post
  - Título: "Fotografía de productos para e-commerce en Perú: lo que nadie te cuenta"
  - Fecha: `createdAt: '2025-09-10'`
  - 700 palabras: precios reales, tiempos de entrega, formatos para Mercado Libre / Shopify

- [ ] **`src/content/blogs/blog-6.mdx`** — Nuevo post
  - Título: "¿Por qué tu marca de ropa necesita una sesión de fotos profesional?"
  - Fecha: `createdAt: '2025-11-05'`
  - 700 palabras: ROI de la fotografía de moda para marcas peruanas

---

## FASE 2 — Optimización de Páginas de Servicio

- [ ] **`src/pages/servicios/[slug].astro`** — Agregar ubicación al título SEO
  - Cambiar `title={service.name}` → `title={`${service.name} en Lima, Perú`}`
  - Resultado: "Fotografía de Productos en Lima, Perú | Visual Studio" ← rankeable localmente

- [ ] **`src/consts/services.ts`** — Agregar campo `seoDescription` a cada servicio
  - `fotos-productos`: "Fotografía profesional de productos en Lima para e-commerce, catálogos y redes sociales. Imágenes que venden: fondo blanco, lifestyle y detalle. Cotiza gratis."
  - `fotos-moda`: "Fotografía de moda en Lima para marcas, diseñadores y tiendas. Lookbooks, campañas y contenido editorial con dirección creativa. Estudio Visual Studio."
  - Pasar como `description={service.seoDescription}` en Layout

- [ ] **`src/consts/services.ts`** — Agregar campo `faqs` a fotos-productos y fotos-moda
  - Preguntas para `fotos-productos`:
    - "¿Cuánto cuesta una sesión de fotografía de productos en Lima?"
    - "¿Cuántas fotos incluye la sesión?"
    - "¿Necesito preparar mis productos antes de la sesión?"
  - Preguntas para `fotos-moda`:
    - "¿Cómo se cotiza una sesión de fotografía de moda?"
    - "¿Incluyen modelo y maquilladora?"
    - "¿Cuántos looks se pueden hacer en una sesión?"

- [ ] **`src/pages/servicios/[slug].astro`** — Renderizar sección FAQ con schema
  - Agregar sección FAQ al final de la página de servicio (si el servicio tiene `faqs`)
  - Agregar `FAQPage` JSON-LD al array de schemas

- [ ] **`src/pages/servicios/[slug].astro`** — Agregar `VideoObject` schema para YouTube
  - Cuando `service.videos` tiene entradas, generar un schema `VideoObject` por video y añadirlo a `jsonLd`

---

## FASE 3 — Página Hub `/servicios` (nueva página)

- [ ] **`src/pages/servicios/index.astro`** — Crear página hub de servicios
  - El breadcrumb de cada página de servicio apunta a `/servicios` — esa página no existe (404)
  - Contenido: "Servicios de Fotografía en Lima" con una tarjeta por servicio
  - Schemas: `BreadcrumbList` + `ItemList`

---

## FASE 4 — Fixes Técnicos (Core Web Vitals)

- [ ] **`src/styles/globals.css`** — Agregar `font-display: swap`
  - Reemplazar `@import '@fontsource-variable/outfit'` con declaración `@font-face` personalizada
  - Apuntar al woff2 en `node_modules/@fontsource-variable/outfit/files/outfit-variable-wght-normal.woff2`
  - Hacer lo mismo para Fraunces
  - Impacto: corrige CLS y mejora LCP en Core Web Vitals

- [ ] **`src/components/Gallery.astro`**, `Gallery2.astro`, `Gallery3.astro` — Agregar `width`/`height` a `<img>`
  - Para `landscape`: `width="800" height="600"`
  - Para `portrait`: `width="600" height="800"`
  - Verificar que todas tienen `loading="lazy"` (excepto la imagen hero que debe tener `loading="eager"`)

---

## Verificación

Después de cada fase:

- [ ] `pnpm build` — debe completar sin errores
- [ ] `pnpm preview` — revisar `/servicios`, `/servicios/fotos-productos`, `/servicios/fotos-moda`, `/blog`, cada post
- [ ] https://search.google.com/test/rich-results — pegar URL del servicio → validar Service + FAQPage + Breadcrumb
- [ ] https://pagespeed.web.dev — verificar mejora en LCP y CLS después de la fase 4
- [ ] En Search Console → URL Inspection → solicitar indexación para home, servicios prioritarios, y todos los blogs

---

## Cronograma realista

| Plazo | Qué esperar |
|-------|-------------|
| Semana 1 | Google rastrea el contenido actualizado |
| Semana 2–4 | Blog posts y páginas de servicio se indexan |
| Mes 2–3 | Primeras posiciones en keywords long-tail ("fotografía de productos Lima") |
| Mes 3–6 | GBP con reseñas → aparición en Google Maps / local pack |
| Mes 4–6 | Top 5 para keywords locales objetivo (con GBP + backlinks activos) |

SEO local tarda entre 3 y 6 meses. Los cambios de código desbloquean el potencial — el GBP, el contenido y las reseñas son los que convierten eso en tráfico real.
