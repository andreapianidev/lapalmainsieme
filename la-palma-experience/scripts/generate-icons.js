/**
 * Script per generare icone PWA da SVG
 *
 * Uso: npm run generate-icons
 *
 * Genera:
 * - icon-192.png (PWA icon)
 * - icon-512.png (PWA icon)
 * - apple-touch-icon.png (180x180 per iOS)
 * - favicon-32x32.png (favicon standard)
 * - favicon-16x16.png (favicon piccolo)
 * - favicon.ico (icona browser)
 *
 * Richiede: sharp (già installato come dev dependency)
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`
🎨 PWA Icon Generator
=====================
Generazione icone da public/icon.svg...
`);

const sizes = [
  { size: 192, name: 'icon-192.png', description: 'PWA icon (standard)' },
  { size: 512, name: 'icon-512.png', description: 'PWA icon (high-res)' },
  { size: 180, name: 'apple-touch-icon.png', description: 'iOS home screen icon' },
  { size: 32, name: 'favicon-32x32.png', description: 'Standard favicon' },
  { size: 16, name: 'favicon-16x16.png', description: 'Small favicon' }
];

const svgPath = path.join(__dirname, '../public/icon.svg');
const publicDir = path.join(__dirname, '../public');

async function generateIcons() {
  // Verifica che il file SVG esista
  if (!fs.existsSync(svgPath)) {
    console.error('❌ File icon.svg non trovato in public/');
    process.exit(1);
  }

  console.log('✨ Generazione icone in corso...\n');

  try {
    // Genera tutte le icone PNG
    await Promise.all(
      sizes.map(async ({ size, name, description }) => {
        const outputPath = path.join(publicDir, name);
        await sharp(svgPath)
          .resize(size, size)
          .png()
          .toFile(outputPath);
        console.log(`✅ ${name} (${size}x${size}) - ${description}`);
      })
    );

    // Genera favicon.ico usando l'icona 32x32
    const favicon32Path = path.join(publicDir, 'favicon-32x32.png');
    const faviconBuffer = await sharp(favicon32Path).toBuffer();
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), faviconBuffer);
    console.log(`✅ favicon.ico - Browser icon`);

    console.log('\n🎉 Tutte le icone generate con successo!\n');
    console.log('📋 Prossimi passi:');
    console.log('1. ✅ Le icone sono state salvate in /public');
    console.log('2. Verifica che manifest.json referenzi le icone corrette');
    console.log('3. Verifica che index.html abbia i link alle icone\n');

  } catch (err) {
    console.error('\n❌ Errore durante la generazione:', err.message);
    console.error(err);
    process.exit(1);
  }
}

generateIcons();
