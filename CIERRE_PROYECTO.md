# Nadia Oñatibia — Web personal — Documento maestro de cierre

Última actualización: 2026-08-03 · commit `d27d22e` en `main`

## 1. Qué es esto

Web personal de Nadia Oñatibia: React + TypeScript + Vite + Tailwind + Supabase.
Deployada en Vercel, con dominio actual `https://nadia-web-theta.vercel.app`.

- **Repo GitHub:** `https://github.com/nadiaonatibia-ui/nadia-web` (rama `main`)
- **Carpeta local:** `C:\Users\Rodrigo\Documents\Cloude Code\nadia-web`
- **Identidad de git para commits en este repo:** `nadiaonatibia-netizen <nadiaonatibia-netizen@users.noreply.github.com>` (ya configurada en el repo local vía `git config user.name`/`user.email`, no es la identidad global de la máquina)
- **Colaborador con push access:** `rodrigoalexiscelaoviedo-netizen` (agregado como colaborador en GitHub; es quien efectivamente empuja los commits)

## 2. Stack y arquitectura

- React 18 + React Router (rutas: `/`, `/portfolio`, `/blog`, `/cv`, `/contact`)
- Vite 5 + TypeScript (`tsc -b && vite build`)
- Tailwind CSS 3 + `@tailwindcss/forms`
- Supabase (`@supabase/supabase-js`) — proyecto `heabqkigomppqgwfzgvj.supabase.co`, credenciales en `.env.local` (NO está en git, está en `.gitignore`, hay que configurarlas también en Vercel como env vars si no están)
- Deploy: Vercel, con `vercel.json` (buildCommand + outputDirectory + rewrites SPA, restaurado tras confirmar que faltaba)

### Tablas de Supabase en uso
- `contact_messages` — el formulario de contacto inserta acá (nombre, email, mensaje). Funcionando.
- `blog_posts` — sistema dinámico de blog, actualmente vacío. Blog.tsx lo sigue consultando y solo muestra una sección extra "Actualizaciones recientes" si hay posts publicados (`published=true`). El contenido visible principal del Blog (paper + 8 reflexiones) está hardcodeado en el componente, no viene de esta tabla.
- `portfolio_projects` — **ya NO se usa**. Portfolio.tsx pasó a tener los 6 proyectos hardcodeados como array local (con tags, bullets, descripción de modal y link). Se dejó de consultar Supabase para esto a pedido explícito del rediseño.
- `cv_content` — **ya NO se usa**. CV.tsx es ahora completamente estático (timeline, formación, idiomas hardcodeados).

## 3. Estado visual actual (post-rediseño)

Se hizo un rediseño completo de identidad visual "teatral" reemplazando el diseño genérico inicial. Paleta y sistema de diseño en `tailwind.config.js` / `src/styles/index.css`:

```
crudo #D8D45A · crudo-alt #898E46 · ink #241129 · vino #7A1440 · vino-2 #611033
rojo #D2491F · teal #1B7A6B · lila #A8AD6E · rosa #F29CC3 · hueso #F3EFC2
```

Fuentes: Anton (títulos), Dancing Script (subtítulos/Hablemos), Caveat (logo pill), Inter (cuerpo), IBM Plex Mono (eyebrows tipo "(se abre el telón)"). Todas cargadas vía Google Fonts en `index.html`.

Componentes CSS custom: `.eyebrow-mono`, `.logo-pill`, `.gingham-rosa`/`.gingham-teal`, `.polaroid`/`.polaroid-photo`, `.timeline`/`.timeline-item`, `.accordion-*`, `.modal-overlay`/`.modal-card`.

### Páginas
- **Home**: hero con polaroids y **fotos reales de Nadia** (`public/images/01_headshot_principal.jpg`, `02_escenario_patheatry.jpg`, `03_panel_miretage_horizontal.jpg` — la tercera es horizontal, montada con `object-cover object-[50%_35%]` para encuadrar cara/torso dentro del marco cuadrado), manifiesto "Lo que creo", 3 acordeones "Tres Registros", CTA final.
- **Portfolio**: **7 proyectos reales** (Rassif, SMASH, Miretage, Beyond Gender, Reignite, EDI Go, **EMPATHEATRY**) con filtro por sector y modal de detalle. Datos hardcodeados en `Portfolio.tsx`. El contenido de EMPATHEATRY (tag/bullets/descripción) fue redactado por Claude a partir de búsqueda web pública sobre el proyecto (no provisto directamente por Nadia) — aprobado por Rodrigo antes de subir, pero **Nadia debería revisarlo** por si quiere ajustar el texto con más precisión sobre el proyecto real.
- **CV**: timeline de 6 "actos" (trayectoria), formación, idiomas. Botón de descarga del CV **ya activo** → `/documents/CV_Nadia_Onatibia.pdf`.
- **Blog**: paper destacado con botón **ya activo** → `/documents/Paper_Culture_as_Democratic_Infrastructure.pdf`, + 8 reflexiones estáticas, + sección dinámica opcional desde Supabase si hay posts.
- **Contact**: fondo vino con marco gingham teal, "Hablemos" en Dancing Script, formulario conectado a Supabase (`contact_messages`) funcionando.
- **Navbar/Footer**: restilizados con logo pill y paleta nueva.

Multiidioma: **completo**. Home, Portfolio, CV, Blog y Contact tienen contenido real en ES/EN/CA (traducciones provistas por Nadia, cargadas en objetos `content`/`labels` por página). Navbar ya tenía sus 3 idiomas de antes. Footer no se traduce (decisión del brief original).

## 4. PDFs y assets conectados

- `public/documents/CV_Nadia_Onatibia.pdf` (5118 bytes) — generado con ReportLab, colores de marca. Linkeado desde CV.tsx. Sigue siendo el borrador original, no reemplazado todavía.
- `public/documents/Paper_Culture_as_Democratic_Infrastructure.pdf` (135316 bytes) — **reemplazado por el paper real escrito por Nadia** (el anterior era un borrador de ReportLab). Mismo nombre de archivo, no hubo que tocar el link en Blog.tsx.
- `public/images/01_headshot_principal.jpg`, `02_escenario_patheatry.jpg`, `03_panel_miretage_horizontal.jpg` — fotos reales del hero, verificadas cargando con las dimensiones correctas.
- `.gitattributes` con `*.pdf binary` evita que Git (con `core.autocrlf=true` en esta máquina Windows) corrompa los PDFs al convertir saltos de línea. Las imágenes JPG no mostraron el mismo riesgo (Git las detecta como binarias automáticamente), pero se verificó igual byte a byte que todos los blobs commiteados coinciden con los archivos originales.
- Todos los links y fetches verificados en local: `200` y content-type correcto.

## 5. Pendientes explícitos (lo que falta para considerar el sitio "terminado")

1. ~~Fotos reales del hero~~ — **hecho** (commit `a4f2b21`). Las 3 fotos ya están en `public/images/` y montadas en `Home.tsx`.
2. ~~Traducciones EN/CA reales~~ — **hecho** (commit `2a34506`). Todo el contenido de Home, Portfolio, CV, Blog y Contact tiene textos reales en los 3 idiomas, verificado navegando cada página con el toggle.
3. **Revisión de contenido del CV en PDF** — el `CV_Nadia_Onatibia.pdf` sigue siendo el borrador generado con ReportLab (script `build_cv.py`, no en el repo). El paper ya se reemplazó por el real; el CV todavía no. Si Nadia quiere reemplazarlo, mismo procedimiento: nuevo archivo con el mismo nombre en `public/documents/`.
4. **Variables de entorno en Vercel** — confirmar que `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` estén configuradas en el dashboard de Vercel (Project Settings → Environment Variables). No pude verificarlo desde este entorno (sin acceso a la CLI de Vercel autenticada ni al dashboard). **Pendiente que Rodrigo/Nadia lo confirmen manualmente.**
5. **Revisión del texto de EMPATHEATRY** — el tag, los 3 bullets y la descripción del modal de este 7° proyecto los redactó Claude a partir de resultados de búsqueda web pública (el sitio empatheatry.eu bloquea el scraping directo con 403), no a partir de contenido provisto por Nadia. Rodrigo aprobó el texto antes de subirlo, pero como no viene de la fuente original, **conviene que Nadia lo revise** y corrija cualquier imprecisión.
6. **Confirmar visualmente en producción los últimos cambios** — Rodrigo ya confirmó en una iteración anterior que home, `/portfolio` sin 404, y los PDFs viejos andaban bien en `https://nadia-web-theta.vercel.app`. Falta la misma confirmación para lo último: las 3 fotos del hero, el paper nuevo, y el 7° proyecto EMPATHEATRY con su link. No pude verificarlo yo mismo (sin acceso a dominios externos desde este entorno).
7. ~~Rewrite de rutas SPA~~ — **hecho y confirmado en producción** (commit `2a34506`).

## 6. Auditoría completa (2026-08-03, commit `d27d22e`)

Se hizo una auditoría en 4 partes, documento completo en [`AUDITORIA_2026-08-03.md`](AUDITORIA_2026-08-03.md). Resumen:

**Parte 1 (navegación/botones) — arreglado:**
- Bug real: React Router no reseteaba el scroll al cambiar de página (afectaba toda la navegación). Se agregó `ScrollToTop` en `App.tsx`.
- Logo del navbar ahora funcional: lleva a Home, o hace scroll suave arriba si ya estás en Home (antes no tenía efecto visible en ese segundo caso).
- Favicon roto (`/vite.svg`, 404 en producción porque el archivo nunca existió) — eliminada la referencia en `index.html`.
- **Pendiente que requiere info tuya:** el link de LinkedIn (`linkedin.com/in/nadiaoñatibia`, en Footer.tsx y Contact.tsx) es casi seguro inválido — LinkedIn no permite `ñ` en URLs de perfil. Falta el handle real para corregirlo.

**Parte 2 (Supabase) — solo reporte, nada tocado:**
- Las 4 tablas (`contact_messages`, `blog_posts`, `portfolio_projects`, `cv_content`) devuelven 0 filas vía anon key, pero **es ambiguo**: no se puede distinguir desde el cliente si están vacías o si RLS bloquea correctamente la lectura pública. **Falta que alguien revise el Table Editor del dashboard de Supabase directamente** para confirmar si hay mensajes de contacto sin leer — esto es lo más urgente pendiente de todo el proyecto.
- `portfolio_projects` y `cv_content` están huérfanas (el sitio ya no las lee) pero siguen aceptando INSERT del rol `anon` a nivel de grant — no es grave pero es basura/superficie innecesaria.
- Nunca se probó el envío real del formulario de contacto end-to-end (para no ensuciar la bandeja real con un mensaje de prueba).

**Parte 3 (código) — solo reporte:**
- Build limpio, 0 warnings.
- Código muerto: `PortfolioProject`, `CVContent`, `ContactMessage` en `types/index.ts` ya no se usan en ningún lado.
- **Hallazgo real de accesibilidad:** `text-rosa` sobre `bg-crudo-alt` (títulos de las 7 tarjetas de Portfolio + sus modales + título del paper en Blog) tiene contraste ~1.7:1 — falla WCAG AA gravemente (se necesita 4.5:1). `text-hueso/90` sobre el mismo fondo da ~3:1, también insuficiente para texto normal. Es un problema real de legibilidad, no solo un tecnicismo.
- Las 3 fotos del hero pesan ~1.05 MB combinadas, sirviendo 4-6x más resolución de la que se muestra en pantalla — sin compresión, sin WebP, sin `loading="lazy"`.
- Sin `robots.txt`, `sitemap.xml`, tags Open Graph, ni `<title>`/`<meta description>` por página.

**Parte 4 (propuestas, sin implementar) — de mayor a menor prioridad recomendada:**
1. Panel admin simple (leer mensajes de contacto + publicar blog posts sin entrar a Supabase a mano) — alto impacto, esfuerzo alto.
2. Arreglar el contraste rosa/verde-oliva en Portfolio — alto impacto, esfuerzo bajo.
3. Comprimir/optimizar las 3 fotos del hero + lazy loading — alto impacto, esfuerzo bajo.
4. `robots.txt` + `sitemap.xml` + meta/OG por página — impacto medio, esfuerzo bajo.
5. Favicon real de marca + `og:image` — impacto medio, esfuerzo bajo.
6. Analytics básico (Vercel Analytics o Plausible) — impacto medio, esfuerzo bajo.
7. Animaciones de scroll + transición entre páginas — impacto bajo/medio, esfuerzo medio.
8. Escape + focus trap en el modal de Portfolio, loading state en fetch de blog dinámico — pulido menor.

**Decisiones pendientes del usuario tras la auditoría** (no se avanzó porque requieren input de Rodrigo/Nadia):
- Handle real de LinkedIn.
- Confirmar en Supabase dashboard si hay mensajes de contacto sin leer.
- Qué hacer con `portfolio_projects`/`cv_content` (dejar o eliminar).
- Con cuál propuesta de la Parte 4 seguir primero.

## 7. Cosas importantes para la próxima conversación (contexto operativo)

- **NUNCA pegar tokens/contraseñas de GitHub (u otro servicio) en el chat.** Ya pasó dos veces en este proyecto con un PAT (`ghp_...`) que tuvo que ser rechazado y se recomendó revocar. El acceso de push ya está resuelto vía colaborador de GitHub (`rodrigoalexiscelaoviedo-netizen`), no hace falta ningún token para seguir trabajando.
- El repo remoto empezó vacío (solo un `.gitignore` genérico autogenerado por GitHub) — todo el código se subió desde esta máquina en la sesión de rediseño.
- Antes de cualquier `npm run build` local, si aparecen archivos `.js`/`.d.ts`/`.tsbuildinfo` sueltos en `src/` o en la raíz (residuos de builds fallidos anteriores), borrarlos — ya pasó una vez y rompía el build de Vite. Están cubiertos por `.gitignore` (`*.tsbuildinfo`, `vite.config.js`, `vite.config.d.ts`) pero pueden ensuciar el árbol de trabajo local igual.
- `tsconfig.json` requiere `"jsx":"react-jsx"` y `"noEmit":true` — si algún cambio futuro los toca sin querer, el build se rompe con errores de TS crípticos (ya pasó, quedó documentado acá para no perder tiempo repitiendo el diagnóstico).

## 8. Cómo retomar en una conversación nueva

Si volvés a este proyecto en otra sesión de Claude Code, decile a Claude:

> "Estoy retomando el proyecto nadia-web en `C:\Users\Rodrigo\Documents\Cloude Code\nadia-web`. Leé `CIERRE_PROYECTO.md` en la raíz del proyecto para el contexto completo antes de hacer nada."

Eso le da todo el historial de decisiones sin tener que repetir la explicación completa.
