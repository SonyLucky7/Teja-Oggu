const fs = require('fs');
const text = fs.readFileSync('C:/Users/hac/.gemini/antigravity/brain/6b878141-db32-43fd-b2d0-06648972a433/.system_generated/steps/588/content.md', 'utf8');
const textNodes = text.match(/>([^<]+)</g);
if(textNodes) {
    const clean = textNodes.map(t => t.replace(/[><]/g, '').trim()).filter(t => t.length > 2);
    console.log(Array.from(new Set(clean)).join('\n'));
}
