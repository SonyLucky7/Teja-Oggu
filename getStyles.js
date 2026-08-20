const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://thoughtful-focus-537972.framer.app/', { waitUntil: 'networkidle0' });
  
  const styles = await page.evaluate(() => {
    // Find elements containing "BEYOND" or "ORDINARY"
    const elements = Array.from(document.querySelectorAll('*')).filter(el => 
      el.children.length === 0 && el.textContent.includes('B E Y O N D')
    );
    
    const subtitleElements = Array.from(document.querySelectorAll('*')).filter(el => 
      el.children.length === 0 && el.textContent.includes('Crafting moments')
    );

    let h1Style = null;
    let subStyle = null;

    if (elements.length > 0) {
      const computed = window.getComputedStyle(elements[0]);
      h1Style = {
        fontSize: computed.fontSize,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        fontWeight: computed.fontWeight,
        fontFamily: computed.fontFamily,
      };
    }
    
    if (subtitleElements.length > 0) {
      const computed = window.getComputedStyle(subtitleElements[0]);
      subStyle = {
        fontSize: computed.fontSize,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        fontWeight: computed.fontWeight,
        fontFamily: computed.fontFamily,
      };
    }

    return { h1Style, subStyle };
  });
  
  console.log("STYLES:\n", JSON.stringify(styles, null, 2));
  await browser.close();
})();
