const baseJsTsConfig = {
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.eslint.json',
    },
    rules: {
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-readonly': 'error',
        curly: ['error', 'all'],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-relative-packages': 'off',
        'import/no-unresolved': 'off',
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
                groups: ['builtin', 'external', ['internal', 'parent', 'sibling']],
                'newlines-between': 'always',
            },
        ],
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'no-empty-function': 'off',
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
    },
}

module.exports = {
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                singleQuote: true,
                tabWidth: 4,
                semi: true,
                trailingComma: 'all',
            },
        ],
    },
    overrides: [
        {
            ...baseJsTsConfig,
            files: ['*.ts', '*.js'],
        },
        {
            ...baseJsTsConfig,
            files: ['*.spec.ts'],
            plugins: ['vitest'],
        },
    ],
}
