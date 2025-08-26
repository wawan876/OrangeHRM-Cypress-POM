const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile:"cypress/support/e2e.js",
    defaultCommandTimeout: 3000,
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  },
});
