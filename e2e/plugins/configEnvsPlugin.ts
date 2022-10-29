import path from 'path';

import { config as dotEnvCfg } from 'dotenv';

dotEnvCfg({
    path: path.resolve(process.cwd(), '../../.env.e2e'),
});

export const configEnvsPlugin: Cypress.PluginConfig = (_on, config) => {
    return config;
};
