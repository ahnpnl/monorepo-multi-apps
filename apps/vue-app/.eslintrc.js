const baseConfig = require('../../eslint.base');

module.exports = {
    ...baseConfig,
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleAttributePerLine: true,
                printWidth: 120,
                singleQuote: true,
                tabWidth: 4,
                semi: true,
                trailingComma: 'all',
            },
        ],
    },
    overrides: [
        ...baseConfig.overrides,
        {
            files: ['**/*.vue'],
            extends: [
                '@vue/eslint-config-typescript/recommended',
                'plugin:vue/vue3-recommended',
                'plugin:prettier/recommended',
            ],
            rules: {
                'vue/html-indent': [
                    'error',
                    4,
                    {
                        attribute: 1,
                        baseIndent: 1,
                        closeBracket: 0,
                        alignAttributesVertically: true,
                        ignores: [],
                    },
                ],
                'vue/no-deprecated-slot-attribute': 'off', // web component needs this
                'vue/no-duplicate-attr-inheritance': 'error',
                'vue/no-restricted-props': ['error', 'type'],
                'vue/no-unused-properties': 'error',
                'vue/no-unused-refs': 'error',
                'vue/html-self-closing': 'off',
                'vue/v-on-function-call': ['error', 'never'],
            },
        },
    ],
};
