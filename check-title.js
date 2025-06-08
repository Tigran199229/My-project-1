const { chromium, firefox } = require('playwright');

const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';

(async () => {
  const browserChromium = await chromium.launch();
  const pageChromium = await browserChromium.newPage();
  await pageChromium.goto('https://playwright.dev/');
  const titleChromium = await pageChromium.title();

  if (titleChromium === expectedTitle) {
    console.log('✅ Chromium: заголовок совпадает');
  } else {
    console.log('❌ Chromium: заголовок не совпадает');
  }

  await browserChromium.close();

  const browserFirefox = await firefox.launch();
  const pageFirefox = await browserFirefox.newPage();
  await pageFirefox.goto('https://playwright.dev/');
  const titleFirefox = await pageFirefox.title();

  if (titleFirefox === expectedTitle) {
    console.log('✅ Firefox: заголовок совпадает');
  } else {
    console.log('❌ Firefox: заголовок не совпадает');
  }

  await browserFirefox.close();
})();
