# Auditoría completa — nadia-web
2026-08-03 · commit `acff452` en `main`

---

## PARTE 1 — Navegación y botones (arreglado)

Recorrí las 5 páginas (Home, Portfolio, Blog, CV, Contact) en ES/EN/CA probando cada link, botón, modal, acordeón y el formulario. Metodología: lectura de código + pruebas funcionales en el navegador (clicks reales, verificación de rutas, estado de React, console de errores).

### Arreglado en este pase

1. **Scroll no se reseteaba al cambiar de página.** React Router no resetea el scroll por defecto al navegar entre rutas — si estabas a la mitad de Portfolio y hacías click en "CV", aterrizabas a mitad de la página de CV. Agregué un componente `ScrollToTop` en `App.tsx` que escucha los cambios de ruta y hace `window.scrollTo(0,0)` en cada navegación. Afecta a **todos** los links de navegación, no solo el logo.

2. **Logo sin función real.** Ya tenía `Link to="/"` (o sea, sí navegaba a Home), pero si ya estabas en Home no pasaba nada visible al clickearlo — parecía muerto. Ahora: si estás en otra página, te lleva a Home (como antes); si ya estás en Home, hace scroll suave hacia arriba.

3. **Favicon roto (404 en producción).** `index.html` apuntaba a `/vite.svg`, un archivo que nunca existió en el proyecto — en desarrollo Vite lo simula automáticamente así que no se notaba, pero en el build de producción (lo que corre en Vercel ahora mismo) tira 404 en cada carga de página. Saqué la referencia. Falta un favicon de marca real — lo dejo como propuesta en la Parte 4.

### Encontrado pero NO arreglado (necesito info tuya)

4. **Link de LinkedIn probablemente inválido.** Tanto en el Footer como en Contact.tsx apunta a `https://linkedin.com/in/nadiaoñatibia`. LinkedIn no permite letras acentuadas en sus URLs de perfil (`ñ` no es válido en un slug de LinkedIn) — este link casi seguro nunca fue verificado y no lleva al perfil real de Nadia. Necesito el handle real (ej. `nadia-onatibia-xxxxx` o como sea que lo tenga configurado) para corregirlo en los dos archivos.

### Verificado sin problemas
- Navbar: 5 links (desktop + mobile) con hrefs correctos en los 3 idiomas.
- Home: 4 chips (decorativos, no clickeables — correcto), 3 acordeones abren/cierran bien, 2 CTAs finales navegan bien.
- Portfolio: filtro por sector funciona, los 7 modales abren y cierran (click en ×, click fuera, y no se pisan entre sí), los 7 links "Visitar sitio" tienen las URLs correctas con `target="_blank" rel="noopener noreferrer"`.
- CV: link a EMAD funciona, botón de descarga del PDF funciona.
- Blog: botón del paper funciona, las 8 tarjetas de reflexión son informativas (no rotas, simplemente no son clickeables por diseño).
- Contact: formulario válido (revisado por código — no lo sometí de verdad para no crear un mensaje falso en tu bandeja real; ver Parte 2).
- Footer: mailto y ubicación correctos; LinkedIn ver punto 4.

Nota técnica: el "scroll to top" con animación suave no lo pude confirmar visualmente en este entorno (el navegador de esta sesión no compone frames, así que `window.scrollTo` con `behavior:'smooth'` no se puede screenshotear) — pero es el patrón estándar de React Router y lo confirmé a nivel de código y de que no rompe nada (sin errores de consola, navegación funciona).

---

## PARTE 2 — Auditoría de Supabase (solo reporte, no toqué nada)

Consulté las 4 tablas usando la **anon key** (la misma que usa el sitio en el navegador — es pública por diseño, embebida en el JS del cliente).

| Tabla | Filas visibles con anon key | ¿La usa el sitio hoy? |
|---|---|---|
| `contact_messages` | 0 | Sí — el formulario de Contact inserta ahí |
| `blog_posts` | 0 | Sí — Blog.tsx la consulta, muestra sección extra si hay posts |
| `portfolio_projects` | 0 | **No** — Portfolio.tsx tiene los 7 proyectos hardcodeados desde el rediseño |
| `cv_content` | 0 | **No** — CV.tsx es completamente estático desde el rediseño |

### Hallazgo importante: no puedo confirmar si hay mensajes de contacto sin leer

Las 4 tablas devuelven 0 filas vía anon key, pero **esto es ambiguo y no pude resolverlo desde acá**: puede significar que están genuinamente vacías, o puede significar que las políticas RLS bloquean correctamente la lectura pública (lo cual sería el comportamiento *correcto y deseable* para `contact_messages`, que no debería ser legible por cualquier visitante). Con la anon key no hay forma de distinguir un caso del otro — necesitaría la `service_role` key (que no tengo ni debería pedirte que me des) o que vos mismo revises el **Table Editor del dashboard de Supabase** (ese sí usa tus credenciales de owner y te muestra las filas reales).

**Recomendación concreta: andá al dashboard de Supabase → Table Editor → `contact_messages` y fijate cuántas filas hay realmente.** Si hay mensajes ahí que nadie leyó, es justo el escenario que sospechabas.

### Grants (permisos a nivel de API, no de fila)

Con `OPTIONS` confirmé que el rol `anon` tiene **GET y POST habilitados en las 4 tablas** (ninguna permite PATCH ni DELETE para anon, eso está bien — nadie puede editar/borrar datos ajenos desde el cliente). Pero esto significa que, a nivel de grant, cualquiera con la anon key (pública) técnicamente puede intentar un INSERT en `portfolio_projects` o `cv_content` aunque el sitio ya no las lea — no es una vulnerabilidad grave (nadie ve esos datos), pero es superficie de ataque innecesaria y basura potencial en la base.

### No pude verificar en vivo

No sometí el formulario de contacto de verdad (para no crear un mensaje falso en tu bandeja real) ni hice un insert/delete de prueba (para no escribir nada en tu base sin permiso explícito, como pediste). Esto significa que **el envío real del formulario nunca fue confirmado end-to-end** — solo revisé que el código esté bien escrito. Si querés, la próxima vez puedo mandar un mensaje de prueba real y confirmar que aparece en el dashboard (avisame si eso está bien).

### Resumen de recomendaciones (parte 2)
- Confirmar en el dashboard cuántas filas tiene `contact_messages` — prioridad alta.
- Decidir qué hacer con `portfolio_projects` y `cv_content`: dejarlas (por si algún día volvés a un modelo dinámico) o eliminarlas para reducir superficie/confusión.
- Revisar las políticas RLS de las 4 tablas directamente en el dashboard (Authentication → Policies) para confirmar que `contact_messages` sea solo-lectura-para-Nadia y `blog_posts` sea lectura-pública/escritura-restringida, como pediste — esto no lo pude verificar por mi cuenta sin acceso privilegiado.

---

## PARTE 3 — Auditoría general de código (solo reporte)

### Build
`npm run build` corre limpio: **0 warnings, 0 errores**. TypeScript tiene `noUnusedLocals` y `noUnusedParameters` activados, así que cualquier import o variable sin usar directamente rompería el build — no hay ninguno ahora mismo.

### Código muerto
- `types/index.ts` exporta `PortfolioProject`, `CVContent` y `ContactMessage` — **ninguno de los tres se usa en ningún lado de `src/`** desde que Portfolio y CV pasaron a ser estáticos con sus propios tipos locales. Además `PortfolioProject.sector` quedó desactualizado (no incluye `'empatia'`, el 7º proyecto) — más razón para limpiarlo.
- No hay componentes ni archivos huérfanos — el árbol de `src/` es mínimo y todo se usa.

### Performance de imágenes
Las 3 fotos del hero pesan bastante para lo que se muestran:

| Archivo | Peso | Dimensión real | Tamaño mostrado (desktop) |
|---|---|---|---|
| `01_headshot_principal.jpg` | 522 KB | 1218×1600 | ~256px de ancho |
| `02_escenario_patheatry.jpg` | 381 KB | 1200×1600 | ~128px de ancho |
| `03_panel_miretage_horizontal.jpg` | 184 KB | 1600×1066 | ~128px de ancho |

Entre las tres suman **~1.05 MB** solo de imágenes decorativas en el hero, sirviendo resoluciones 4 a 6 veces más grandes de lo que realmente se ven en pantalla. Ninguna tiene `loading="lazy"`, no hay versión WebP, ni `srcset` responsive. Esto es peso real en la carga inicial, sobre todo en mobile/redes lentas.

### Accesibilidad

**Alt text:** las 3 imágenes tienen `alt` descriptivo — bien. Detalle menor: el texto del `alt` está hardcodeado en español sin importar el idioma activo (no es un bug grave, pero es inconsistente con el resto del sitio que sí traduce todo).

**Contraste de color — encontré un problema real, no cosmético.** Calculé las razones de contraste (fórmula WCAG, luminancia relativa) de las combinaciones que usa el sitio:

| Combinación | Dónde se usa | Contraste | ¿Pasa WCAG AA? |
|---|---|---|---|
| `text-vino` sobre `bg-crudo` | Títulos principales de página | 6.7:1 | ✅ Sí |
| `text-ink` sobre `bg-crudo` | Cuerpo de texto general | 11.3:1 | ✅ Sí, muy bien |
| **`text-rosa` sobre `bg-crudo-alt`** | **Títulos de tarjetas de Portfolio, modales, título del paper en Blog** | **1.7:1** | ❌ **No — falla gravemente** |
| **`text-hueso/90` sobre `bg-crudo-alt`** | **Bullets y descripciones dentro de las tarjetas verdes** | **~3.0:1** | ❌ **No (texto normal necesita 4.5:1)** |
| `bg-rojo` + `text-hueso` (tags/badges) | Etiquetas de sector en Portfolio | 3.8:1 | ⚠️ Límite (texto chico necesita 4.5:1) |

El problema más serio es el rosa sobre verde oliva (`crudo-alt`) — es el patrón visual central de toda la sección de Portfolio (títulos de los 7 proyectos, los 7 modales) y también el título del paper en Blog. Con 1.7:1 de contraste, cualquier persona con baja visión —y honestamente, mucha gente sin ningún problema visual, en pantallas con brillo bajo o luz solar— va a tener dificultad real para leer esos títulos. Esto no es un tecnicismo de accesibilidad, se nota a simple vista si lo mirás con atención.

**Otros:**
- El modal de Portfolio no cierra con la tecla Escape, y no hay "focus trap" (con Tab podés salir del modal y seguir navegando la página de atrás mientras el modal sigue abierto visualmente).
- No hay skip-link ("saltar al contenido") para usuarios de teclado/lector de pantalla.

### Otros hallazgos
- No hay ESLint configurado — solo el chequeo estricto de TypeScript. Funciona, pero un linter atraparía cosas que TS no cubre (imports mal ordenados, hooks mal usados, etc.).
- No hay `robots.txt`, `sitemap.xml`, ni tags `og:` (Open Graph) — si alguien comparte un link del sitio en WhatsApp/redes, no va a mostrar imagen ni descripción linda, solo texto genérico del navegador.
- `<title>` y `<meta name="description">` son fijos y únicos para las 5 rutas — cada página debería tener su propio título (ej. "Portfolio — Nadia Oñatibia" en vez de repetir el mismo título home en todas partes).

---

## PARTE 4 — Propuestas priorizadas (sin implementar)

### Funcionalidad

| # | Propuesta | Por qué importa | Esfuerzo |
|---|---|---|---|
| 1 | **Panel admin simple** (leer mensajes de contacto + publicar blog posts sin tocar Supabase a mano) | Ahora mismo, si llega un mensaje de contacto, la única forma de verlo es entrar al dashboard de Supabase — nada avisa que llegó. Mismo problema para publicar en el blog dinámico. Esto es lo que más impacto real tiene sobre el uso diario del sitio. | Alto (requiere auth + páginas nuevas protegidas) |
| 2 | `robots.txt` + `sitemap.xml` + meta/OG por página | Sin esto, Google indexa mal y compartir links en redes se ve genérico y poco profesional. | Bajo |
| 3 | Favicon real de marca + `og:image` | Ahora mismo no hay favicon (recién lo saqué porque estaba roto) ni imagen de preview al compartir. | Bajo |
| 4 | Analytics básico (Vercel Analytics o Plausible) | Hoy no hay ninguna visibilidad de cuánta gente visita el sitio ni qué páginas mira. | Bajo |
| 5 | Decidir destino de `portfolio_projects`/`cv_content` en Supabase | Prolijidad y reducir superficie de ataque innecesaria (ver Parte 2). | Bajo |

### Diseño / UX

| # | Propuesta | Por qué importa | Esfuerzo |
|---|---|---|---|
| 6 | **Comprimir/optimizar las fotos del hero** (resize + WebP + `loading="lazy"`) | Impacto directo y medible en velocidad de carga, especialmente en mobile. Es la mejora de performance más barata y con más retorno de todo lo que encontré. | Bajo |
| 7 | **Arreglar el contraste rosa/verde-oliva** en tarjetas y modales de Portfolio | Problema de accesibilidad real, no cosmético — afecta legibilidad para mucha gente, no solo usuarios de lectores de pantalla. | Bajo (es cambiar 1-2 clases de color) |
| 8 | Escape + focus trap en el modal de Portfolio | Pulido de accesibilidad, mejora la experiencia con teclado. | Bajo |
| 9 | Animaciones sutiles al hacer scroll (fade-in de secciones) | Hoy las secciones aparecen de golpe; es lo que más "se siente a medio hacer" comparado con sitios de este estilo teatral/editorial. | Medio |
| 10 | Transición entre páginas (fade breve al navegar) | Mismo motivo que el punto anterior — ahora mismo el cambio de ruta es instantáneo y seco. | Medio |
| 11 | Loading state en el fetch de `blog_posts` dinámico | Ahora mismo no hay ningún indicador mientras carga — si la conexión es lenta, se ve un parpadeo/vacío momentáneo. | Bajo |

---

## Resumen ejecutivo

- **3 bugs reales arreglados** (scroll roto en toda la navegación, logo sin función, favicon 404).
- **1 bug encontrado que necesito que resuelvas vos** (LinkedIn URL inválida — mandame el handle real).
- **Supabase:** no puedo confirmarte si hay mensajes de contacto sin leer — **revisá el Table Editor del dashboard vos mismo**, es lo más urgente de esta auditoría.
- **Código:** limpio y sin warnings, pero con código muerto menor (3 tipos sin usar) y un problema de contraste de color real en Portfolio que vale la pena resolver pronto.
- **Propuestas:** el panel admin (func. #1) y arreglar contraste + comprimir imágenes (diseño #6/#7) son, en mi opinión, lo que más impacto tiene por esfuerzo invertido.
