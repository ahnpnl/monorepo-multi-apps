import { defineConfig } from 'cypress';

import { configEnvsPlugin } from './plugins/configEnvsPlugin';
import { cucumberProcessorPlugin } from './plugins/cucumberProcessor';
import { logTaskPlugin } from './plugins/logTask';

const setupNodeEvents = async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> => {
  logTaskPlugin(on, config);
  configEnvsPlugin(on, config);
  await cucumberProcessorPlugin(on, config);
  
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
};

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 20000,
    downloadsFolder: 'downloads',
    fixturesFolder: 'fixtures',
    specPattern: ['integrations/**/*.feature'],
    supportFile: 'support/index.ts',
    setupNodeEvents,
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});
