import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  { path: '/', filename: 'index.html' },
  { path: '/portfolio', filename: 'portfolio.html' },
  { path: '/blog', filename: 'blog.html' },
  { path: '/cv', filename: 'cv.html' },
  { path: '/contact', filename: 'contact.html' },
  { path: '/privacy', filename: 'privacy.html' },
  { path: '/cookies', filename: 'cookies.html' },
  { path: '/legal', filename: 'legal.html' },
];

const PORT = process.env.PREVIEW_PORT || 4173;
const BASE_URL = `http://localhost:${PORT}`;

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const distDir = path.join(__dirname, '../dist');

    console.log(`Prerendering ${routes.length} routes...`);
    console.log(`Base URL: ${BASE_URL}\n`);

    for (const route of routes) {
      try {
        const page = await browser.newPage();
        const url = `${BASE_URL}${route.path}`;

        console.log(`Prerendering: ${url}`);

        await page.goto(url, {
          waitUntil: 'networkidle2',
          timeout: 30000,
        });

        // Esperar a que React Helmet inyecte los tags en el head
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));

        // Obtener el HTML renderizado
        const html = await page.content();

        // Determinar la ruta de guardado
        const filePath = path.join(distDir, route.filename);
        const dir = path.dirname(filePath);

        // Crear directorios si no existen
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        // Guardar el HTML
        fs.writeFileSync(filePath, html, 'utf-8');
        console.log(`  ✓ Prerendered: ${route.filename}`);

        await page.close();
      } catch (error) {
        console.error(`  ✗ Error prerendering ${route.path}:`, error.message);
      }
    }

    await browser.close();
    console.log('\n✓ Prerender completo.');
    process.exit(0);
  } catch (error) {
    console.error('Fatal error:', error.message);
    if (browser) {
      await browser.close();
    }
    process.exit(1);
  }
})();
