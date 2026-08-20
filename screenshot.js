const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport for desktop
  await page.setViewport({ width: 1440, height: 900 });
  
  // Navigate and wait for domcontentloaded
  await page.goto('https://thoughtful-focus-537972.framer.app/', { waitUntil: 'domcontentloaded' });
  
  // Take screenshots at 100ms, 400ms, 800ms, 1500ms to capture the animation
  await page.screenshot({ path: 'shot_100ms.png' });
  
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: 'shot_400ms.png' });
  
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'shot_800ms.png' });
  
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: 'shot_1500ms.png' });
  
  // Extract text from the page
  const text = await page.evaluate(() => document.body.innerText);
  console.log("TEXT EXTRACTED:\n", text);
  
  await browser.close();
})();
