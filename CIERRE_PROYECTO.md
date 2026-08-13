# Nadia Oñatibia — Web personal — Documento maestro de cierre

Última actualización: 2026-08-12 · commit `23757ee` en `main`

## 1. Qué es esto

Web personal de Nadia Oñatibia: React + TypeScript + Vite + Tailwind + Supabase.
Deployada en Vercel, con dominio actual `https://nadia-web-theta.vercel.app`.

- **Repo GitHub:** `https://github.com/nadiaonatibia-ui/nadia-web` (rama `main`)
- **Carpeta local:** `C:\Users\Rodrigo\Documents\Cloude Code\nadia-web`
- **Identidad de git para commits en este repo:** `nadiaonatibia-netizen <nadiaonatibia-netizen@users.noreply.github.com>` (ya configurada en el repo local vía `git config user.name`/`user.email`, no es la identidad global de la máquina)
- **Colaborador con push access:** `rodrigoalexiscelaoviedo-netizen` (agregado como colaborador en GitHub; es quien efectivamente empuja los commits)
- **NUNCA pegar tokens/contraseñas de GitHub (u otro servicio) en el chat.** Ya pasó dos veces en este proyecto con un PAT (`ghp_...`) que tuvo que ser rechazado y se recomendó revocar. El acceso de push ya está resuelto vía colaborador de GitHub, no hace falta ningún token para seguir trabajando.

## 2. Stack y arquitectura

- React 18 + React Router (rutas: `/`, `/portfolio`, `/blog`, `/cv`, `/contact`)
- Vite 5 + TypeScript (`tsc -b && vite build`) — `tsconfig.json` requiere `"jsx":"react-jsx"` y `"noEmit":true`; si algún cambio futuro los toca sin querer, el build se rompe con errores de TS crípticos.
- Tailwind CSS 3 + `@tailwindcss/forms`. Sin ESLint configurado (solo el chequeo estricto de TypeScript).
- Supabase (`@supabase/supabase-js`) — proyecto `heabqkigomppqgwfzgvj.supabase.co`, credenciales en `.env.local` (NO está en git, cubierto por `.gitignore`).
- Deploy: Vercel, con `vercel.json` (buildCommand + outputDirectory + rewrites SPA). Auto-deploy en cada push a `main`.

### Tablas de Supabase

| Tabla | ¿La usa el sitio? | Estado |
|---|---|---|
| `contact_messages` | Sí — el formulario de Contact inserta ahí | Nunca confirmado si tiene mensajes sin leer (ver pendientes) |
| `blog_posts` | Sí, parcialmente — Blog.tsx la consulta y muestra una sección extra "Actualizaciones recientes" solo si hay posts con `published=true` | Vacía; el contenido principal del Blog (paper + 8 reflexiones) está hardcodeado, no viene de acá |
| `portfolio_projects` | **No** | Huérfana desde el rediseño — Portfolio.tsx tiene los 7 proyectos hardcodeados |
| `cv_content` | **No** | Huérfana desde el rediseño — CV.tsx es completamente estático |

Con la anon key, las 4 tablas devuelven 0 filas, pero **es ambiguo**: no se puede distinguir si están vacías o si RLS bloquea la lectura pública (lo cual sería correcto para `contact_messages`). Nadie confirmó todavía desde el dashboard de Supabase.

## 3. Estado visual actual (post-rediseño completo)

El sitio pasó por un rediseño completo en 4 commits sucesivos (2026-08-11 y 2026-08-12), de un estilo "teatral/polaroid" a uno **editorial photo-first moderno**. Las 5 páginas están unificadas en el sistema de diseño nuevo.

### Paleta y sistema de diseño (`tailwind.config.js` / `src/styles/index.css`)

```
crudo #F5F0E8 (blanco cálido)   crudo-dark #1A1A2E (secciones oscuras)
ink #241129    vino #7A1440    vino-2 #611033    rojo #D2491F
coral #E8794E    teal #39B98E    rosa #F29CC3    hueso #F3EFC2    gray-warm #6B6B6B
```

**Tipografía:** solo Inter (cuerpo y títulos) + IBM Plex Mono (eyebrows tipo "SE ABRE EL TELÓN"). Se eliminaron por completo Anton, Caveat y Dancing Script — no queda ninguna fuente manuscrita en el sitio.

**Clases CSS custom vigentes:** `.eyebrow-mono`, `.role-card` (+ `.role-card-overlay/-number/-title/-cta`), `.modal-overlay`/`.modal-card` (+ `-header`/-`body`/-`close`), `.btn`, `.container-wide`, `.section-padding`.

**Clases eliminadas — si aparecen en algún código nuevo o copiado de una versión vieja, son un bug:** `.gingham-*`, `.polaroid`/`.polaroid-photo`, `.accordion-*`, `.timeline`/`.timeline-item` (el layout de CV ya no las necesita salvo confirmarlo), `.logo-pill`, `bg-crudo-alt`, `font-dancing`/`font-anton`, `.subtitle`, `btn-primary` (nunca existió, era un bug del código heredado, ya corregido donde se encontró).

### Páginas (todas migradas al estilo nuevo)

- **Home** (`src/pages/Home.tsx`): hero oscuro/cinematic (`bg-crudo-dark`) con foto grande de Nadia (`hero-headshot.jpg`), eyebrow teatral ("SE ABRE EL TELÓN" / "CURTAIN UP" / "S'OBRE EL TELÓ") + ubicación en mono debajo, manifiesto ("MONÓLOGO"), y sección "Tres registros" ("CAMBIO DE ESCENA") con 3 role-cards (foto + overlay + hover) que abren un modal con foto secundaria y descripción del rol. CTA final sobre fondo oscuro.
- **Portfolio** (`src/pages/Portfolio.tsx`): 7 proyectos reales (Rassif, SMASH, Miretage, Beyond Gender, Reignite, EDI Go, EMPATHEATRY), filtro por sector, cards blancas donde el **logo real de cada proyecto ocupa toda la cabecera** de la card (fondo blanco, `object-contain`) con badge de sector superpuesto. Click abre modal (mismo tratamiento de logo a pantalla completa) con bullets + descripción + link "Visitar sitio del proyecto".
- **Blog** (`src/pages/Blog.tsx`): paper destacado en card blanca con link al PDF real; 8 "reflexiones" que son carruseles tipo Instagram — cada card usa como portada el primer slide real (`/images/reflexiones/{id}-slide-1.jpg`) y al clickear abre un modal con carrusel navegable (flechas + dots) mostrando **las 42 imágenes reales** extraídas de los PDFs originales de Nadia. Sección opcional "Actualizaciones recientes" si hay posts en Supabase.
- **CV** (`src/pages/CV.tsx`): timeline de 6 "actos", con el Acto III (docencia) separado en 4 sub-items con link a EMAD; Actos V (InfoLibros) y VI (La Xixa Teatre) con link "(Web)". Formación en lista. Idiomas en 3 cards blancas. Botón de descarga del PDF.
- **Contact** (`src/pages/Contact.tsx`): header oscuro (`crudo-dark`) con email en coral y LinkedIn/ubicación, formulario en card blanca conectado a Supabase (`contact_messages`).
- **Navbar** (`src/components/Navbar.tsx`): logo reemplazado por un **ícono de casa SVG inline** (sin texto), fondo `bg-crudo/95` con blur, menú mobile con hamburguesa.
- **Footer** (`src/components/Footer.tsx`): fondo oscuro, minimalista, copyright + LinkedIn + Email. Requiere prop `language` (se pasa desde `App.tsx`).

Multiidioma: **completo** en las 5 páginas (ES/EN/CA), incluyendo los textos nuevos del rediseño.

## 4. Assets: fotos, logos, PDFs

### Imágenes en `public/images/` (todo sirve directo, sin CDN/compresión adicional)

- **Hero y roles** (8 fotos, ~2.8 MB): `hero-headshot.jpg`, `pm-presentation.jpg`, `pm-panel.jpg`, `facilitadora-teatro.jpg`, `facilitadora-beyond-gender.jpg`, `productora-patheatry.jpg`, `productora-collage.jpg`, `stage-performance.jpg` (esta última **no se usa en ningún componente todavía**, quedó copiada "por si acaso").
- **Fotos viejas sin usar** (~1 MB, código muerto de assets): `01_headshot_principal.jpg`, `02_escenario_patheatry.jpg`, `03_panel_miretage_horizontal.jpg` — eran las 3 fotos del hero del diseño teatral anterior. Ya no las referencia ningún componente, pero siguen en `public/` y por lo tanto **se siguen deployando** a producción sin necesidad.
- **Logos de proyectos** (`public/images/projects/`, 7 archivos, ~620 KB): un PNG/JPG por proyecto del Portfolio.
- **Slides de reflexiones** (`public/images/reflexiones/`, 42 archivos, ~4.9 MB): imágenes 800×800 extraídas de los 8 PDFs originales de reflexiones de Nadia, nombradas `{slug}-slide-{n}.jpg`.
- **Total `public/images/`: ~8.6 MB** — ninguna imagen tiene `loading="lazy"`, compresión WebP, ni `srcset` responsive. El build final (`dist/`) pesa ~9.2 MB en total.

### PDFs (`public/documents/`)

- `Paper_Culture_as_Democratic_Infrastructure.pdf` (135 KB) — **el paper real escrito por Nadia**, ya reemplazó al borrador.
- `CV_Nadia_Onatibia.pdf` (5 KB) — **sigue siendo el borrador generado con ReportLab** (script `build_cv.py`, no está en el repo). Nunca se reemplazó por el CV real. Si Nadia quiere reemplazarlo: mismo nombre de archivo en `public/documents/`.
- `.gitattributes` con `*.pdf binary` evita que Git corrompa los PDFs con conversión de saltos de línea en Windows (`core.autocrlf=true`).

### Origen de los assets nuevos

Todas las fotos, logos y slides de esta ronda de rediseño vinieron de carpetas locales del usuario (no del repo, no de Supabase):
- `C:\Users\Rodrigo\Downloads\fotos nadia web\optimized\` → 8 fotos de Home
- `C:\Users\Rodrigo\Downloads\fotos nadia web\logos-proyectos\` → 7 logos de Portfolio
- `C:\Users\Rodrigo\Downloads\fotos nadia web\reflexiones-optimized\` → 42 slides de Blog

## 5. Código: hallazgos técnicos vigentes

- **Build:** limpio, 0 errores. Un único warning inofensivo de Vite sobre el orden de `@import` en `src/styles/index.css` (el `@import` de Google Fonts va después de las directivas `@tailwind`) — no rompe nada, viene así desde el rediseño.
- **Código muerto — tipos:** `types/index.ts` exporta `PortfolioProject`, `ContactMessage` y `CVContent`, ninguno se usa en `src/` (Portfolio y CV tienen sus propios tipos locales desde que pasaron a ser estáticos).
- **Código muerto — campo `color`:** en `Portfolio.tsx`, cada proyecto tiene un campo `color` (gradiente Tailwind, ej. `from-rose-900 to-rose-700`) que ya no se usa en el JSX desde que las cards pasaron a mostrar el logo a pantalla completa sobre fondo blanco. Sigue declarado en la interfaz y en los datos, no rompe nada pero es basura.
- **Assets huérfanos:** las 3 fotos viejas del hero (`01_`, `02_`, `03_`) y `stage-performance.jpg` (ver sección 4) se siguen deployando sin usarse.
- **Accesibilidad:** el problema real de contraste que había en el diseño teatral anterior (`text-rosa` sobre `bg-crudo-alt`, ~1.7:1) **ya no aplica** — esas clases no existen en la paleta nueva. No se hizo una auditoría de contraste nueva sobre el diseño actual, pero a simple vista los pares usados (`text-vino`/`text-ink` sobre `bg-crudo`, texto blanco sobre `bg-crudo-dark`) son de alto contraste.
- **Modales sin Escape ni focus trap:** ni el modal de Portfolio, ni el del carrusel de reflexiones en Blog, ni el de roles en Home cierran con la tecla Escape, y no hay focus trap (con Tab se puede salir del modal y seguir navegando la página de atrás mientras el modal sigue abierto visualmente).
- **SEO:** sigue sin `robots.txt`, sin `sitemap.xml`, y **sin `<title>`/`<meta description>` por página** (son fijos y únicos en `index.html`, iguales en las 5 rutas). El `og:image` en `index.html` usa una ruta relativa (`/images/hero-headshot.jpg`) — para que funcione bien al compartir en redes sociales debería ser una URL absoluta (`https://nadia-web-theta.vercel.app/images/hero-headshot.jpg`).
- **Favicon:** sigue sin uno real. La referencia rota a `/vite.svg` se eliminó en la auditoría original, pero nunca se agregó un favicon de marca — hoy el sitio no tiene ninguno.
- **Analytics:** no hay ninguno instalado (Vercel Analytics, Plausible, etc.) — cero visibilidad de tráfico.
- **Blog dinámico:** el fetch a `blog_posts` no tiene loading state — si la conexión es lenta hay un parpadeo/vacío momentáneo antes de que aparezca o no la sección "Actualizaciones recientes".
- **Formulario de contacto:** nunca se probó un envío real end-to-end (para no ensuciar la bandeja real de Nadia con un mensaje de prueba). El código está revisado y parece correcto.
- **Nota de entorno (no es un bug del sitio):** cuando se prueba el sitio en el navegador de Claude Code, los fetches a Supabase (`ERR_NAME_NOT_RESOLVED`) fallan porque el Browser pane de este entorno no tiene salida a internet general — es una restricción del entorno de desarrollo, no del código. En producción (Vercel) esto no pasa.

## 6. Pendientes consolidados — todo lo que falta

### 🔴 Requieren info o una acción de Nadia/Rodrigo (no los puede resolver Claude solo)

1. **Handle real de LinkedIn.** El link actual (`linkedin.com/in/nadiaoñatibia`, en `Footer.tsx` y `Contact.tsx`) es casi seguro inválido — LinkedIn no permite `ñ` en URLs de perfil. Falta el handle real para corregirlo en los dos archivos.
2. **Revisar el Table Editor de Supabase.** Entrar al dashboard de Supabase → Table Editor → `contact_messages` y confirmar si hay mensajes sin leer. Es lo más urgente de todo el proyecto porque nadie lo revisó nunca y es información real que puede estar esperando respuesta.
3. **Decidir qué hacer con `portfolio_projects` y `cv_content`** (tablas huérfanas en Supabase): dejarlas por si algún día se vuelve a un modelo dinámico, o eliminarlas para reducir superficie de ataque/confusión.
4. **Confirmar variables de entorno en Vercel** (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) en Project Settings → Environment Variables — nunca se pudo verificar desde ningún entorno de Claude Code.
5. **Revisar el texto de EMPATHEATRY** en Portfolio — lo redactó Claude a partir de búsqueda web pública (el sitio oficial bloquea scraping con 403), no de contenido provisto por Nadia. Rodrigo lo aprobó antes de subirlo, pero conviene que Nadia lo revise por precisión.
6. **Reemplazar el CV en PDF** — sigue siendo el borrador de ReportLab, nunca se subió la versión real de Nadia.
7. **Confirmar visualmente en producción** (`https://nadia-web-theta.vercel.app`) los últimos 4 commits de rediseño — Claude Code no tiene acceso a dominios externos desde este entorno para verificarlo por su cuenta.
8. **Elegir con cuál mejora seguir primero** de la lista técnica de abajo (o de la Parte 4 de `AUDITORIA_2026-08-03.md`, todavía vigente en su mayoría).

### 🟡 Limpieza técnica — se puede hacer sin pedir nada a nadie

9. Borrar código muerto: tipos sin usar en `types/index.ts` (`PortfolioProject`, `ContactMessage`, `CVContent`) y campo `color` sin usar en `Portfolio.tsx`.
10. Borrar assets huérfanos de `public/images/` (`01_headshot_principal.jpg`, `02_escenario_patheatry.jpg`, `03_panel_miretage_horizontal.jpg`, y decidir si `stage-performance.jpg` se usa en algún lado o se borra) — ahorra ~1 MB de deploy innecesario.
11. Agregar `robots.txt` + `sitemap.xml` + `<title>`/`<meta description>` únicos por página (hoy son globales e iguales en las 5 rutas).
12. Cambiar el `og:image` de `index.html` a URL absoluta.
13. Favicon real de marca (hoy no hay ninguno).
14. Comprimir/optimizar imágenes (WebP + `loading="lazy"` + `srcset`) — especialmente las 42 de reflexiones y las 8 de Home, que suman la mayoría de los ~8.6 MB de `public/images/`.
15. Analytics básico (Vercel Analytics es el más simple de instalar por estar ya en Vercel).
16. Escape + focus trap en los 3 modales del sitio (Home roles, Portfolio, Blog reflexiones).
17. Loading state en el fetch de `blog_posts`.

### 🟢 Funcionalidad nueva (mayor esfuerzo, evaluar prioridad)

18. **Panel admin simple** para leer mensajes de contacto y publicar posts del blog sin entrar a Supabase a mano — sigue siendo, en opinión de las auditorías previas, lo de mayor impacto real sobre el uso diario del sitio.
19. Animaciones sutiles de scroll (fade-in de secciones) y transición entre páginas — pulido visual, no urgente.
20. Probar el envío real del formulario de contacto end-to-end (con permiso explícito, para no ensuciar la bandeja real).

## 7. Cosas importantes para la próxima conversación (contexto operativo)

- El repo remoto empezó vacío (solo un `.gitignore` genérico autogenerado por GitHub) — todo el código se subió desde esta máquina en la sesión de rediseño original.
- Antes de cualquier `npm run build` local, si aparecen archivos `.js`/`.d.ts`/`.tsbuildinfo` sueltos en `src/` o en la raíz (residuos de builds fallidos anteriores), borrarlos — ya pasó una vez y rompía el build de Vite. Están cubiertos por `.gitignore` pero pueden ensuciar el árbol de trabajo local igual.
- Cuando llegan instrucciones de rediseño "V2" ya completamente especificadas (código exacto por archivo) que se parecen mucho a una instrucción anterior: **diffear contra lo ya aplicado antes de asumir que hay que rehacer todo** — en esta última ronda llegaron 3 instrucciones "V2" casi idénticas en mensajes sucesivos, cada una con solo 2-3 diferencias reales sobre la anterior (esto probablemente viene de una sesión de diseño externa —Figma/otra IA— que itera y reenvía la instrucción completa en vez de solo el diff).
- Los assets (fotos, logos, slides) llegan como carpetas en `C:\Users\Rodrigo\Downloads\fotos nadia web\`, no dentro del repo — hay que buscarlos ahí si una instrucción los referencia como si ya estuvieran en el workspace.
- Siempre verificar en el navegador (dev server local, `npm run dev` vía preview) antes de dar por terminado un cambio visual: build limpio no garantiza que el JSX/CSS se vea bien. Los errores de red a Supabase en este entorno (`ERR_NAME_NOT_RESOLVED`) son esperables y no indican un bug real.
- Siempre pedir confirmación explícita antes de `git push origin main` — cada commit dispara un deploy automático a producción en Vercel.

## 8. Cómo retomar en una conversación nueva

Si volvés a este proyecto en otra sesión de Claude Code, decile a Claude:

> "Estoy retomando el proyecto nadia-web en `C:\Users\Rodrigo\Documents\Cloude Code\nadia-web`. Leé `CIERRE_PROYECTO.md` en la raíz del proyecto para el contexto completo antes de hacer nada. También existe `AUDITORIA_2026-08-03.md` en el mismo directorio con el detalle completo de la auditoría original (navegación, Supabase, código, propuestas) — la mayoría de sus hallazgos de código y accesibilidad ya no aplican porque cambió el diseño, pero las propuestas de la Parte 4 y las decisiones pendientes siguen vigentes y están resumidas en la sección 6 de CIERRE_PROYECTO.md."

Eso le da todo el historial de decisiones sin tener que repetir la explicación completa.
