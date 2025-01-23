import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: ['tests/features/*.feature'],
  steps: ['tests/stepDefinitions/****step.js', 'setup/fixtures/fixture.js', 'setup/hooks.js'],
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter('json', { outputFile: 'reports/report.json' }),
    process.env.CI
      ? ['list']
      : ['list'],
  ],
  retries: 1,
  timeout: 75000,
  use: {
    headless: true,
    baseURL: process.env.BASE_URL || 'https://www.bloomberg.com/asia',
    screenshot: 'only-on-failure',
    screenshotPath: 'reports/screenshots/',
    viewport: {
      width: 1280,
      height: 720,
    },
    navigationTimeout: 10000,
    actionTimeout: 5000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
