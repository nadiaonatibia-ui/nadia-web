# Nadia Oñatibia — Web personal — Documento maestro de cierre

Última actualización: 2026-08-03 · commit `3a16668` en `main`

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
- Deploy: Vercel, sin `vercel.json` (se removió a pedido; build command y output dir se configuran directamente en el dashboard de Vercel, no en el repo)

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
- **Home**: hero con polaroids (fotos placeholder con texto "foto" — ver pendientes), manifiesto "Lo que creo", 3 acordeones "Tres Registros", CTA final.
- **Portfolio**: 6 proyectos reales (Rassif, SMASH, Miretage, Beyond Gender, Reignite, EDI Go) con filtro por sector y modal de detalle. Datos hardcodeados en `Portfolio.tsx`.
- **CV**: timeline de 6 "actos" (trayectoria), formación, idiomas. Botón de descarga del CV **ya activo** → `/documents/CV_Nadia_Onatibia.pdf`.
- **Blog**: paper destacado con botón **ya activo** → `/documents/Paper_Culture_as_Democratic_Infrastructure.pdf`, + 8 reflexiones estáticas, + sección dinámica opcional desde Supabase si hay posts.
- **Contact**: fondo vino con marco gingham teal, "Hablemos" en Dancing Script, formulario conectado a Supabase (`contact_messages`) funcionando.
- **Navbar/Footer**: restilizados con logo pill y paleta nueva.

Multiidioma: estructura ES/EN/CA existe en todos los componentes, pero el contenido real (textos del rediseño) solo está cargado en español. EN/CA usan el mismo texto ES temporalmente — pendiente que Nadia revise traducciones.

## 4. PDFs ya conectados (recién hecho)

- `public/documents/CV_Nadia_Onatibia.pdf` (5118 bytes) — generado con ReportLab, colores de marca. Linkeado desde CV.tsx.
- `public/documents/Paper_Culture_as_Democratic_Infrastructure.pdf` (9840 bytes) — ensayo en inglés sobre los 4 proyectos (Rassif, SMASH, Miretage, Beyond Gender). Linkeado desde Blog.tsx.
- Se agregó `.gitattributes` con `*.pdf binary` para evitar que Git (con `core.autocrlf=true` en esta máquina Windows) corrompiera los PDFs al convertir saltos de línea. Verificado byte a byte que los blobs commiteados coinciden exactamente con los archivos originales.
- Ambos links verificados en local: `fetch()` devuelve `200` y `content-type: application/pdf` para ambas rutas.

## 5. Pendientes explícitos (lo que falta para considerar el sitio "terminado")

1. **Fotos reales del hero** — hay un brief detallado ya escrito (`Brief_Fotos_Hero.md` en la carpeta de outputs de la sesión de agente local, no en el repo). Resumen: 1 foto principal vertical (mín. 1200×1500px) + 2 fotos secundarias (mín. 800×1000px), luz natural cálida, nada corporativo. Cuando Nadia las tenga, hay que:
   - Subirlas a `public/images/` (crear la carpeta) con nombres tipo `hero-main.jpg`, `hero-secondary-1.jpg`, `hero-secondary-2.jpg`.
   - En `src/pages/Home.tsx`, reemplazar los 3 `<div className="polaroid-photo">foto</div>` por `<img src="/images/..." alt="..." className="w-full h-full object-cover" />` dentro de cada `.polaroid`.
2. **Traducciones EN/CA reales** — todo el contenido del rediseño (Home, Portfolio, CV, Blog, Contact) está en español únicamente. Falta traducir y separar los objetos de contenido por idioma en cada página.
3. **Revisión de contenido de los PDFs** — el CV y el paper fueron generados como borrador con ReportLab (scripts `build_cv.py` / `build_paper.py` en la sesión de agente local, no en el repo). Nadia debería revisar el contenido y, si quiere cambios de texto/diseño del PDF en sí (no del link), hay que regenerarlos y reemplazar los archivos en `public/documents/` con el mismo nombre (o actualizar el link si cambia el nombre).
4. **Variables de entorno en Vercel** — confirmar que `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` estén configuradas en el dashboard de Vercel (Project Settings → Environment Variables), ya que `.env.local` no se sube a git y Vercel no las tiene automáticamente a menos que se hayan cargado ahí manualmente en algún momento anterior.
5. **Confirmar visualmente en producción** — no pude verificar el sitio en `https://nadia-web-theta.vercel.app` desde este entorno (el navegador de este entorno no tiene acceso a dominios externos). Falta que alguien lo revise directamente en el navegador real, en especial:
   - Que el redeploy de Vercel haya tomado el último push (`3a16668`).
   - Que los dos PDFs abran bien desde el sitio en vivo.
   - Look & feel general en mobile real (se verificó sin overflow horizontal en un viewport simulado de 375px, pero no en un dispositivo real).
6. **Rewrite de rutas SPA** — se removió `vercel.json` a pedido explícito en una iteración anterior. Esto significa que si alguien entra directo a una URL tipo `nadia-web-theta.vercel.app/portfolio` (no navegando desde `/`) o recarga la página en esa ruta, es probable que dé 404, salvo que Vercel esté manejando el fallback de otra forma (frameworks preset de Vite en Vercel a veces lo resuelve automático, pero no está garantizado sin el rewrite explícito). **Confirmar si esto es un problema real en producción** y, si lo es, decidir si se vuelve a agregar un `vercel.json` con el bloque `rewrites`.

## 6. Cosas importantes para la próxima conversación (contexto operativo)

- **NUNCA pegar tokens/contraseñas de GitHub (u otro servicio) en el chat.** Ya pasó dos veces en este proyecto con un PAT (`ghp_...`) que tuvo que ser rechazado y se recomendó revocar. El acceso de push ya está resuelto vía colaborador de GitHub (`rodrigoalexiscelaoviedo-netizen`), no hace falta ningún token para seguir trabajando.
- El repo remoto empezó vacío (solo un `.gitignore` genérico autogenerado por GitHub) — todo el código se subió desde esta máquina en la sesión de rediseño.
- Antes de cualquier `npm run build` local, si aparecen archivos `.js`/`.d.ts`/`.tsbuildinfo` sueltos en `src/` o en la raíz (residuos de builds fallidos anteriores), borrarlos — ya pasó una vez y rompía el build de Vite. Están cubiertos por `.gitignore` (`*.tsbuildinfo`, `vite.config.js`, `vite.config.d.ts`) pero pueden ensuciar el árbol de trabajo local igual.
- `tsconfig.json` requiere `"jsx":"react-jsx"` y `"noEmit":true` — si algún cambio futuro los toca sin querer, el build se rompe con errores de TS crípticos (ya pasó, quedó documentado acá para no perder tiempo repitiendo el diagnóstico).

## 7. Cómo retomar en una conversación nueva

Si volvés a este proyecto en otra sesión de Claude Code, decile a Claude:

> "Estoy retomando el proyecto nadia-web en `C:\Users\Rodrigo\Documents\Cloude Code\nadia-web`. Leé `CIERRE_PROYECTO.md` en la raíz del proyecto para el contexto completo antes de hacer nada."

Eso le da todo el historial de decisiones sin tener que repetir la explicación completa.
