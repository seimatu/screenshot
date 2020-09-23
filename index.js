const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    // ここのbrowserTypeを変えることで、対象のブラウザを変更することができます。
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://yourbrowser.is/');
    await page.screenshot({ path: `example-${browserType}.png` });
    await browser.close();
  }
})();