const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://thoughtful-focus-537972.framer.app/', { waitUntil: 'networkidle0' });
  
  const styles = await page.evaluate(() => {
    let maxFontSize = 0;
    let mainEl = null;
    
    Array.from(document.querySelectorAll('h1, h2, div, span, p')).forEach(el => {
      const style = window.getComputedStyle(el);
      const fs = parseFloat(style.fontSize);
      if (fs > maxFontSize) {
        maxFontSize = fs;
        mainEl = style;
      }
    });

    return {
      fontSize: mainEl.fontSize,
      lineHeight: mainEl.lineHeight,
      letterSpacing: mainEl.letterSpacing,
      fontWeight: mainEl.fontWeight,
      fontFamily: mainEl.fontFamily,
    };
  });
  
  console.log("STYLES:\n", JSON.stringify(styles, null, 2));
  await browser.close();
})();
