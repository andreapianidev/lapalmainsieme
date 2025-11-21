// Script to analyze POI database
const fs = require('fs');
const path = require('path');

// Import places data
const placesPath = path.join(__dirname, 'src/data/places.js');
const placesContent = fs.readFileSync(placesPath, 'utf8');

// Parse the places array (simple extraction)
const placesMatch = placesContent.match(/export const places = \[([\s\S]*)\];/);
if (!placesMatch) {
  console.log('Could not parse places data');
  process.exit(1);
}

// Use eval to parse the array (in a controlled environment)
const places = eval('[' + placesMatch[1] + ']');

console.log('=== POI DATABASE ANALYSIS ===\n');
console.log(`Total POIs: ${places.length}\n`);

// Count by type
const byType = {};
places.forEach(p => {
  byType[p.type] = (byType[p.type] || 0) + 1;
});

console.log('POIs by type:');
Object.entries(byType).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
  console.log(`  ${type}: ${count}`);
});

console.log('\n=== IMAGE ANALYSIS ===\n');

// Check images
const localImages = places.filter(p => p.image && p.image.startsWith('/images/'));
const unsplashImages = places.filter(p => p.image && p.image.includes('unsplash.com'));
const noImage = places.filter(p => !p.image);

console.log(`POIs with local images: ${localImages.length}`);
console.log(`POIs with Unsplash images: ${unsplashImages.length}`);
console.log(`POIs without images: ${noImage.length}\n`);

console.log('POIs using Unsplash (need local images):');
unsplashImages.forEach(p => {
  console.log(`  ID ${p.id}: ${p.name} (${p.type})`);
});

console.log('\n=== DUPLICATE DETECTION ===\n');

// Check for duplicate names
const nameMap = {};
places.forEach(p => {
  if (!nameMap[p.name]) {
    nameMap[p.name] = [];
  }
  nameMap[p.name].push(p.id);
});

const duplicates = Object.entries(nameMap).filter(([name, ids]) => ids.length > 1);
console.log(`Potential duplicates found: ${duplicates.length}\n`);
duplicates.forEach(([name, ids]) => {
  console.log(`  "${name}": IDs ${ids.join(', ')}`);
});

console.log('\n=== DESCRIPTION QUALITY ===\n');

// Check description length
const shortDescriptions = places.filter(p => p.description && p.description.length < 200);
console.log(`POIs with short descriptions (<200 chars): ${shortDescriptions.length}`);
shortDescriptions.forEach(p => {
  console.log(`  ID ${p.id}: ${p.name} - ${p.description.length} chars`);
});

console.log('\n=== AVAILABLE LOCAL IMAGES ===\n');

// Check available images in public/images
const imagesDir = path.join(__dirname, 'public/images');
if (fs.existsSync(imagesDir)) {
  const imageFiles = fs.readdirSync(imagesDir);
  console.log(`Total image files available: ${imageFiles.length}\n`);
  imageFiles.forEach(file => {
    const used = places.find(p => p.image === `/images/${file}`);
    console.log(`  ${file} - ${used ? `✓ Used by "${used.name}"` : '✗ NOT USED'}`);
  });
}

console.log('\n=== POI LIST BY TYPE ===\n');

Object.keys(byType).sort().forEach(type => {
  console.log(`\n${type.toUpperCase()}:`);
  const poisOfType = places.filter(p => p.type === type);
  poisOfType.forEach(p => {
    const imageStatus = p.image ? (p.image.startsWith('/images/') ? '✓' : '⚠') : '✗';
    const descLen = p.description ? p.description.length : 0;
    console.log(`  ${imageStatus} ID ${p.id}: ${p.name} (${descLen} chars)`);
  });
});
