const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Find all img tags
      const imgRegex = /<img([\s\S]*?)\/?>/g;
      
      let modified = content.replace(imgRegex, (match, attrs) => {
        let newAttrs = attrs;
        
        // Add loading="lazy" if not present
        if (!newAttrs.includes('loading=')) {
          newAttrs += ' loading="lazy"';
        }
        
        // Add width="800" if not present
        if (!newAttrs.includes('width=')) {
          newAttrs += ' width="800"';
        }
        
        // Add height="600" if not present
        if (!newAttrs.includes('height=')) {
          newAttrs += ' height="600"';
        }
        
        // Add alt if not present
        if (!newAttrs.includes('alt=')) {
          newAttrs += ' alt="Image description"';
        }
        
        return `<img${newAttrs} />`;
      });
      
      if (content !== modified) {
        fs.writeFileSync(fullPath, modified);
        console.log('Updated', fullPath);
      }
    }
  }
}

processDir('./src/components');
