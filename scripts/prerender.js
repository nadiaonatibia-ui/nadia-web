/**
 * Prerender estático de meta tags — sin navegador, sin servidor, sin puertos.
 *
 * Lee dist/index.html (el bundle que produjo Vite), y por cada ruta genera
 * dist/<ruta>/index.html con los meta tags de esa página ya escritos en el HTML.
 *
 * Los crawlers de LinkedIn / Facebook / Twitter / Google NO ejecutan JavaScript:
 * solo leen el <head> del HTML que les llega. Esto es todo lo que necesitan.
 *
 * React Helmet sigue funcionando igual en el navegador para el usuario real.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import esbuild from 'esbuild'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')

// URL pública del sitio. og:image y og:url DEBEN ser absolutas o LinkedIn/Facebook las ignoran.
const SITE_URL = (process.env.SITE_URL || 'https://nadiaonatibia.vercel.app').replace(/\/$/, '')

const LANGUAGES = ['es', 'en', 'ca']
const DEFAULT_LANGUAGE = 'es'

const baseRoutes = [
  { path: '', key: 'home', filename: 'index.html' },
  { path: 'portfolio', key: 'portfolio', filename: 'portfolio/index.html' },
  { path: 'blog', key: 'blog', filename: 'blog/index.html' },
  { path: 'cv', key: 'cv', filename: 'cv/index.html' },
  { path: 'contact', key: 'contact', filename: 'contact/index.html' },
  { path: 'privacy', key: 'privacy', filename: 'privacy/index.html' },
  { path: 'cookies', key: 'cookies', filename: 'cookies/index.html' },
  { path: 'legal', key: 'legal', filename: 'legal/index.html' },
]

// Expandir rutas para cada idioma
const routes = []
for (const lang of LANGUAGES) {
  for (const route of baseRoutes) {
    routes.push({
      lang,
      path: `/${lang}/${route.path}`,
      key: route.key,
      filename: `${lang}/${route.filename}`,
    })
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function absolute(url) {
  if (!url) return ''
  if (/^https?:\/\//i.test(url)) return url
  return SITE_URL + (url.startsWith('/') ? url : '/' + url)
}

/**
 * metadata.ts es TypeScript: lo transpilamos en memoria con esbuild (que ya viene
 * con Vite) y lo importamos. Así hay UNA sola fuente de verdad para los textos.
 */
async function loadMetadata() {
  const entry = path.join(projectRoot, 'src/data/metadata.ts')
  const outfile = path.join(projectRoot, 'node_modules/.cache/metadata.prerender.mjs')

  fs.mkdirSync(path.dirname(outfile), { recursive: true })

  await esbuild.build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node18',
    logLevel: 'silent',
  })

  const mod = await import(pathToFileURL(outfile).href + '?t=' + Date.now())
  return mod.metadata
}

function getLocaleFromLanguage(lang) {
  const locales = { es: 'es_ES', en: 'en_US', ca: 'ca_ES' }
  return locales[lang] || 'es_ES'
}

function buildHead(meta, routePath, lang, baseRoute) {
  const canonical = SITE_URL + routePath
  const image = absolute(meta.ogImage)
  const title = escapeHtml(meta.title)
  const description = escapeHtml(meta.description)
  const locale = getLocaleFromLanguage(lang)

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}"/>`,
    `<link rel="canonical" href="${canonical}"/>`,
    `<meta property="og:type" content="website"/>`,
    `<meta property="og:site_name" content="Nadia Oñatibia"/>`,
    `<meta property="og:locale" content="${locale}"/>`,
  ]

  // Agregar og:locale:alternate para otros idiomas
  for (const altLang of LANGUAGES) {
    if (altLang !== lang) {
      tags.push(`<meta property="og:locale:alternate" content="${getLocaleFromLanguage(altLang)}"/>`)
    }
  }

  tags.push(
    `<meta property="og:title" content="${title}"/>`,
    `<meta property="og:description" content="${description}"/>`,
    `<meta property="og:url" content="${canonical}"/>`,
  )

  if (image) {
    tags.push(`<meta property="og:image" content="${image}"/>`)
    tags.push(`<meta property="og:image:alt" content="${title}"/>`)
  }

  tags.push(
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}"/>`,
    `<meta name="twitter:title" content="${title}"/>`,
    `<meta name="twitter:description" content="${description}"/>`,
  )
  if (image) tags.push(`<meta name="twitter:image" content="${image}"/>`)

  // Agregar hreflang para todas las versiones
  for (const altLang of LANGUAGES) {
    const altPath = `/${altLang}${baseRoute === '' ? '' : `/${baseRoute}`}`
    tags.push(`<link rel="alternate" hreflang="${altLang}" href="${SITE_URL}${altPath}"/>`)
  }
  tags.push(`<link rel="alternate" hreflang="x-default" href="${SITE_URL}/es${baseRoute === '' ? '' : `/${baseRoute}`}"/>`)

  return tags.join('')
}

/**
 * Quita del HTML base cualquier title/meta/canonical que ya exista, para que no
 * queden duplicados cuando insertamos los nuestros (LinkedIn se confunde con eso).
 */
function stripExistingMeta(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+[^>]*name=["'](description|twitter:[^"']*)["'][^>]*>/gi, '')
    .replace(/<meta\s+[^>]*property=["']og:[^"']*["'][^>]*>/gi, '')
    .replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi, '')
}

async function main() {
  const templatePath = path.join(distDir, 'index.html')

  if (!fs.existsSync(templatePath)) {
    console.error(`✗ No existe ${templatePath}. ¿Corriste el build de Vite antes?`)
    process.exit(1)
  }

  const metadata = await loadMetadata()
  const template = fs.readFileSync(templatePath, 'utf-8')

  if (!/<\/head>/i.test(template)) {
    console.error('✗ dist/index.html no tiene </head>. No puedo inyectar meta tags.')
    process.exit(1)
  }

  console.log(`Prerenderizando ${routes.length} rutas (${LANGUAGES.length} idiomas × ${baseRoutes.length} páginas)`)
  console.log(`Site URL: ${SITE_URL}\n`)

  let failed = 0

  for (const route of routes) {
    const meta = metadata[route.key]?.[route.lang]

    if (!meta) {
      console.error(`  ✗ Sin metadata para "${route.key}" en "${route.lang}" — revisá src/data/metadata.ts`)
      failed++
      continue
    }

    const baseRoute = baseRoutes.find(r => r.key === route.key)?.path || ''
    const head = buildHead(meta, route.path, route.lang, baseRoute)
    const html = stripExistingMeta(template).replace(/<\/head>/i, head + '</head>')

    const filePath = path.join(distDir, route.filename)
    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, html, 'utf-8')

    console.log(`  ✓ ${route.path.padEnd(20)} → dist/${route.filename}`)
  }

  if (failed > 0) {
    console.error(`\n✗ Prerender incompleto: ${failed} ruta(s) sin metadata.`)
    process.exit(1)
  }

  // Generar sitemap.xml
  const sitemapEntries = routes.map(route => {
    return `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route.key === 'home' ? '1.0' : '0.8'}</priority>
  </url>`
  }).join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:hreflang="http://www.w3.org/1999/xhtml">
${sitemapEntries}
</urlset>`

  const sitemapPath = path.join(distDir, 'sitemap.xml')
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8')
  console.log(`✓ Sitemap generado: dist/sitemap.xml (${routes.length} URLs)`)

  console.log('\n✓ Prerender completo.')
}

main().catch((error) => {
  console.error('✗ Error fatal en el prerender:', error)
  process.exit(1)
})
