const baseConfig = require('../../eslint.base');

const overridesConfig = baseConfig.overrides.map((cfg, idx) => {
    if (idx === 0) {
        return {
            ...cfg,
            extends: [
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
                ...cfg.extends,
            ],
            rules: {
                ...cfg.rules,
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: 'app',
                        style: 'camelCase',
                    },
                ],
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        prefix: 'app',
                        style: 'kebab-case',
                    },
                ],
            },
        };
    }

    return cfg;
});

module.exports = {
    ...baseConfig,
    overrides: [
        ...overridesConfig,
        {
            files: ['*.html'],
            extends: [
                'plugin:@angular-eslint/template/recommended',
                'plugin:@angular-eslint/template/accessibility',
                'plugin:prettier/recommended',
            ],
        },
    ],
};
