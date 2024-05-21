const baseConfig = require('../../eslint.base');

module.exports = {
    ...baseConfig,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
};
