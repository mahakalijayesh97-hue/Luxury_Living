const fs = require('fs');
const https = require('https');
const path = require('path');

const contentFile = 'src/lib/content.ts';
let content = fs.readFileSync(contentFile, 'utf8');

const regex = /'https:\/\/images\.pexels\.com\/photos\/(\d+)\/[^']+'/g;
let match;
const downloads = [];

while ((match = regex.exec(content)) !== null) {
  const url = match[0].slice(1, -1);
  const id = match[1];
  const filename = `pexels-${id}.jpg`;
  const localPath = `/images/${filename}`;
  const fullPath = path.join('public', 'images', filename);
  
  downloads.push({ url, localPath, fullPath, originalMatch: match[0] });
}

async function run() {
  for (const d of downloads) {
    if (!fs.existsSync(d.fullPath)) {
      console.log(`Downloading ${d.url}...`);
      await new Promise((resolve) => {
        https.get(d.url, (res) => {
          if (res.statusCode === 302 || res.statusCode === 301) {
             https.get(res.headers.location, (res2) => {
               const file = fs.createWriteStream(d.fullPath);
               res2.pipe(file);
               file.on('finish', () => { file.close(); resolve(); });
             });
          } else {
             const file = fs.createWriteStream(d.fullPath);
             res.pipe(file);
             file.on('finish', () => { file.close(); resolve(); });
          }
        });
      });
    }
    content = content.replace(d.originalMatch, `'${d.localPath}'`);
  }
  
  fs.writeFileSync(contentFile, content);
  console.log('Done replacing images in content.ts');
}

run();
