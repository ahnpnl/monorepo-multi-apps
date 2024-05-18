const baseJsExtends = [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
];
const baseJsRules = {
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
};

module.exports = {
    plugins: ['import'],
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
            files: ['*.ts'],
            extends: [
                ...baseJsExtends,
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:prettier/recommended',
            ],
            parserOptions: {
                project: ['tsconfig.(app|spec).json'],
            },
            rules: {
                ...baseJsRules,
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
                '@typescript-eslint/prefer-readonly': 'error',
            },
        },
        {
            files: ['*.html'],
            extends: [
                'plugin:@angular-eslint/template/recommended',
                'plugin:@angular-eslint/template/accessibility',
                'plugin:prettier/recommended',
            ],
        },
        {
            files: ['*.{js,cjs,mjs}'],
            extends: [...baseJsExtends, 'plugin:prettier/recommended'],
            rules: {
                ...baseJsRules,
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
