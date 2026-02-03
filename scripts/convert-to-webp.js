const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const ext = /\.(png|jpe?g)$/i;

function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (ext.test(e.name)) yield full;
  }
}

async function convert(filePath) {
  const out = filePath.replace(ext, '.webp');
  await sharp(filePath).webp({ quality: 85 }).toFile(out);
  console.log(out.replace(publicDir, 'public'));
}

(async () => {
  const files = [...walk(publicDir)];
  await Promise.all(files.map(convert));
})();
