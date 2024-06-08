const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: "./e2e-tests",
    timeout: 3000,
    fullyParallel: false,
    workers: 1,
    webServer: {
        command: 'npm run start',
        url: 'http://127.0.0.1:8080',
        timeout: 20 * 1000,
        reuseExistingServer: !process.env.CI,
      },
      use: {
        baseURL: 'http://localhost:8080/',
      },
  })