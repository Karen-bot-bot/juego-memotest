const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
  },
  component: {
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    // Otros ajustes de configuración
  },
});
