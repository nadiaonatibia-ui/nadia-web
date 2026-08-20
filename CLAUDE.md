# CLAUDE.md — Nadia Web

Este archivo lo lee Claude Code automáticamente al arrancar en este repo.
Contiene las reglas fijas. No hace falta repetir nada de esto en cada instrucción.

## QUÉ ES
Portfolio profesional multiidioma (ES/EN/CA) de Nadia Oñatibia — Senior Project
Manager en gestión cultural y cooperación europea, Barcelona.
5 páginas: Home · Portfolio · CV · Blog · Contact.
Producción: https://nadia-web-theta.vercel.app

## STACK (no cambiar sin acuerdo explícito)
- React 18 + TypeScript + Vite
- Tailwind CSS (no CSS artesanal salvo casos justificados)
- Supabase (PostgreSQL): blog, contacto, CV
- Deploy en Vercel (auto-deploy al pushear a `main`)

## REGLA DE ORO
Todo cambio visual se verifica en pantalla real (viewport + DevTools) ANTES de darlo
por cerrado. No alcanza con escribir el código y asumir que funcionó. Si podés sacar
captura del sitio en vivo, hacelo; si no, dejá dicho explícitamente que falta
verificación visual.

## TIPOGRAFÍA (estricto)
SOLO Inter (sans, títulos + cuerpo) e IBM Plex Mono (mono, datos/labels).
PROHIBIDO: Anton, Caveat, Dancing Script, cualquier manuscrita/display.
Si aparecen esas fuentes en el código, son restos viejos: eliminarlas.

## PALETA (cerrada — no agregar colores sin justificación fuerte)
- crudo       #F5F0E8   fondo claro
- crudo-dark  #1A1A2E   fondo oscuro (hero, footer)
- ink         #241129   texto principal
- vino        #7A1440   links, accents, flechas, navbar activo
- vino-2      #611033   vino más oscuro
- rojo        #D2491F   highlights, eyebrows, link descarga CV
- coral       #E8794E   registro Productora
- teal        #39B98E   registro PM
- rosa        #F29CC3   registro Facilitadora
- hueso       #F3EFC2   fondos suaves
- gray-warm   #6B6B6B   texto secundario

Color por registro (igual en Home y CV): PM=teal · Facilitadora=rosa · Productora=coral

## NOMENCLATURA Y RUTAS DE ASSETS (se define una vez, no se cambia)
- Archivos: kebab-case, sin tildes, sin espacios (ej: casal-infants.png)
- Estructura fija: public/images/[categoria]/[proyecto]/archivo.ext
    public/images/partners/rassif/casal-infants.png
    public/images/projects/miretage.png
    public/images/reflexiones/reflexion-01.jpg
- PDFs: public/documents/
- Imágenes optimizadas (JPG 80% quality, max 1920px)

## GIT
- Commit email: nadiaonatibia-netizen@users.noreply.github.com
- Commits separados: código vs. builds/assets autogenerados
- Nombres de campos/columnas: se deciden una vez, no se renombran

## BASE DE DATOS (Supabase)
- Todo SQL idempotente (IF NOT EXISTS, ON CONFLICT)
- El SQL lo ejecuta Nadia manualmente en el SQL Editor — NUNCA autónomo
- Antes de tocar una tabla, auditar el esquema real en producción
- RLS en todas las tablas de usuario
- Tablas: blog_posts · portfolio_projects · contact_messages · cv_content

## MOBILE
Prioritario, no afterthought. Portfolio y Blog especialmente.
Para comportamiento distinto mobile/desktop: editar clases Tailwind con prefijo `md:`
directamente. NO pelear con media queries CSS externas: pierden contra las utility
classes de Tailwind sin prefijo de breakpoint.

## NO REABRIR (decisiones cerradas tras varios intentos fallidos)
- Tratamiento decorativo de la Ñ → texto plano. Definitivo.
- Cortina animada del paper del Blog → abandonada, es colapsable.
- Glow en el CTA "Contactar" → probado, no gustó, no volver.
Regla: idea que falla 2-3 veces con el mismo enfoque → cambiar de estrategia o
abandonar, no re-iterar.

## LECCIONES TÉCNICAS
- El CSS de ejemplo en las instrucciones es ILUSTRATIVO: adaptarlo a los selectores/
  clases reales del componente, nunca copiar literal.
- IntersectionObserver que debe dispararse una sola vez: necesita unobserve() explícito.
- scroll-snap-type y animación JS de scrollLeft se pelean: desactivar snap durante la
  animación, reactivar al terminar.

## COMPONENTES REUTILIZABLES YA EXISTENTES
- `.toggle-icon` — ícono + que rota a × al expandir. Usado en CV (entradas colapsables)
  y en el paper colapsable del Blog. Reutilizar, no duplicar.

## SEGURIDAD — PENDIENTE CRÍTICO
El token de GitHub quedó expuesto en una conversación anterior. Rotarlo en
GitHub Settings → Developer settings → Personal access tokens.
No exponer la service_role key de Supabase en el frontend
(solo VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY).
