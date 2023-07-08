const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:qwik/strict',
        'plugin:jsx-a11y/strict',
        'plugin:prettier/recommended',
    ],
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
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
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
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
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        'class-methods-use-this': 'off',
        curly: ['error', 'all'],
        'func-names': 'off',
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
                pathGroups: Object.keys(compilerOptions.paths).map((path) => {
                    return {
                        pattern: path,
                        group: 'internal',
                    };
                }),
                groups: ['builtin', 'external', ['internal', 'parent', 'sibling']],
                pathGroupsExcludedImportTypes: ['internal'],
                'newlines-between': 'always',
            },
        ],
        'import/prefer-default-export': 'off',
        'no-await-in-loop': 'off',
        'no-console': 'off',
        'no-restricted-globals': 'off',
        'no-return-assign': 'off',
        'no-param-reassign': [
            'error',
            {
                props: true,
            },
        ],
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': [
            'error',
            {
                allowAfterThis: true,
            },
        ],
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
    overrides: [
        {
            files: ['src/**/*.ts', 'src/**/*.tsx'],
            extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:jsx-a11y/recommended'],
            rules: {
                '@typescript-eslint/no-misused-promises': [
                    'error',
                    {
                        checksVoidReturn: false,
                    },
                ],
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/prefer-readonly': 'error',
            },
        },
        {
            files: ['stories/**/*.tsx'],
            extends: ['plugin:storybook/recommended'],
        },
        {
            files: ['tests/**/*.spec.ts'],
            extends: ['plugin:vitest/recommended'],
        },
        {
            files: ['*.js', '*.cjs'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
