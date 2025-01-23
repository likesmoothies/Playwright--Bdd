import { chromium } from '@playwright/test';
import { createBdd, scenario } from 'playwright-bdd';

const { Before, After, BeforeAll, AfterAll } = createBdd();
let browser;
let context;
let page;

BeforeAll(async () => {
  browser = await chromium.launch();
});

AfterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

Before(async () => {
  context = await browser.newContext();
  page = await context.newPage();
  global.context = context;
  global.page = page;
});

After(async () => {
  if (global.context) {
    await global.context.close();
  }
  if (global.page && !global.page.isClosed()) {
    await global.page.close();
  }
});