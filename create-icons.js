const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a simple PNG icon
function createIcon(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#6366f1';
  ctx.fillRect(0, 0, size, size);
  
  // Text
  ctx.fillStyle = 'white';
  ctx.font = `bold ${Math.floor(size * 0.25)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('IMG', size / 2, size / 2);
  
  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`Created ${filename}`);
}

// Create icons
createIcon(192, './public/icon-192x192.png');
createIcon(512, './public/icon-512x512.png');
createIcon(180, './public/apple-touch-icon.png');
createIcon(32, './public/favicon-32x32.png');
createIcon(16, './public/favicon-16x16.png');

console.log('All icons created successfully!');
