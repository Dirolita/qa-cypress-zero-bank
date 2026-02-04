const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://zero.webappsecurity.com",
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
        // implement node event listeners here
    },
  },
});
