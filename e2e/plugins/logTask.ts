export const logTaskPlugin: Cypress.PluginConfig = (on, config) => {
    on('task', {
        log(message) {
            console.log(message);

            return null;
        },
    });

    return config;
};
