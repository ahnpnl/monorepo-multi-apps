const baseConfig = require('../../eslintrc.base');

module.exports = {
    ...baseConfig,
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
};
