const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://aakarsh-devhq.vercel.app/', { waitUntil: 'networkidle0' });
  
  const extractedText = await page.evaluate(() => document.body.innerText);
  console.log("TEXT:\n", extractedText.substring(0, 500));
  
  await browser.close();
})();
