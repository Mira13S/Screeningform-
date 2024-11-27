import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://graphql.pomelosolutions.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
