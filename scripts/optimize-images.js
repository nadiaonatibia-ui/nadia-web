import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

async function optimizeGroup1() {
  console.log('=== GRUPO 1: Hero Image ===\n');

  const heroPath = path.join(projectRoot, 'public/images/hero-headshot.jpg');
  const heroOutput = path.join(projectRoot, 'public/images/hero-headshot.optimized.jpg');

  const heroStats = fs.statSync(heroPath);
  console.log(`Original: ${path.basename(heroPath)} - ${(heroStats.size / 1024).toFixed(1)} KB`);

  // Recompress with quality 78 (mozjpeg equivalent)
  await sharp(heroPath)
    .withMetadata()
    .jpeg({ quality: 78, progressive: true, mozjpeg: true })
    .toFile(heroOutput);

  const optimizedStats = fs.statSync(heroOutput);
  const savings = ((1 - optimizedStats.size / heroStats.size) * 100).toFixed(1);
  console.log(`Optimized: ${path.basename(heroOutput)} - ${(optimizedStats.size / 1024).toFixed(1)} KB`);
  console.log(`Savings: ${savings}% reduction\n`);
}

async function optimizeGroup2() {
  console.log('=== GRUPO 2: Role Card & Modal Images ===\n');

  const roleImages = [
    { src: 'public/images/01_headshot_principal.jpg', name: '01_headshot_principal' },
    { src: 'public/images/02_escenario_patheatry.jpg', name: '02_escenario_patheatry' },
    { src: 'public/images/03_panel_miretage_horizontal.jpg', name: '03_panel_miretage' },
    { src: 'public/images/pm-panel.jpg', name: 'pm-panel' },
    { src: 'public/images/facilitadora-beyond-gender.jpg', name: 'facilitadora-beyond-gender' },
    { src: 'public/images/productora-collage.jpg', name: 'productora-collage' },
  ];

  // For a 3-column grid on desktop with ~1280px width, each column is ~380-400px
  // Account for gap, padding, etc. Target ~380px for desktop view
  const sizes = [380, 760]; // normal and 2x for retina

  for (const img of roleImages) {
    const fullPath = path.join(projectRoot, img.src);
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠ ${img.name}: file not found, skipping`);
      continue;
    }

    const stats = fs.statSync(fullPath);
    console.log(`\n${img.name}:`);
    console.log(`  Original: ${(stats.size / 1024).toFixed(1)} KB`);

    // Generate optimized JPEG variants
    for (const size of sizes) {
      const variantPath = path.join(projectRoot, `public/images/${img.name}-${size}w.jpg`);
      await sharp(fullPath)
        .resize(size, Math.floor(size * 1.33), { withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(variantPath);

      const variantStats = fs.statSync(variantPath);
      console.log(`    ${size}w JPG: ${(variantStats.size / 1024).toFixed(1)} KB`);
    }

    // Generate WebP variants
    for (const size of sizes) {
      const webpPath = path.join(projectRoot, `public/images/${img.name}-${size}w.webp`);
      await sharp(fullPath)
        .resize(size, Math.floor(size * 1.33), { withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(webpPath);

      const webpStats = fs.statSync(webpPath);
      console.log(`    ${size}w WebP: ${(webpStats.size / 1024).toFixed(1)} KB`);
    }
  }
}

async function main() {
  try {
    await optimizeGroup1();
    await optimizeGroup2();
    console.log('\n✓ Optimization complete. Files saved with suffixes.');
    console.log('⚠ WAIT FOR CONFIRMATION before replacing originals.\n');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
