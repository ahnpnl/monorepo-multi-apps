module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: ['@typescript-eslint', 'import'],
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'typeParameter',
                format: ['PascalCase'],
                prefix: ['T'],
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                suffix: ['Interface'],
            },
            {
                selector: 'typeAlias',
                format: ['PascalCase'],
                suffix: ['Type'],
            },
        ],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
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
            files: ['*.ts'],
            extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: 'tsconfig.eslint.json',
            },
            rules: {
                '@typescript-eslint/prefer-readonly': 'error',
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
