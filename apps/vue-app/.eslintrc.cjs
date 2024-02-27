const prettierConfig = {
    printWidth: 120,
    singleQuote: false,
    tabWidth: 4,
    semi: true,
    trailingComma: "all",
};

module.exports = {
    root: true,
    env: {
        node: true,
    },
    plugins: ["@typescript-eslint", "import", "testing-library"],
    extends: ["airbnb-base", "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/lines-between-class-members": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "typeParameter",
                format: ["PascalCase"],
                prefix: ["T"],
            },
            {
                selector: "interface",
                format: ["PascalCase"],
                suffix: ["Interface"],
            },
            {
                selector: "typeAlias",
                format: ["PascalCase"],
                suffix: ["Type"],
            },
        ],
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                functions: false,
            },
        ],
        "@typescript-eslint/no-useless-constructor": "error",
        "arrow-body-style": "off",
        "class-methods-use-this": "off",
        curly: ["error", "all"],
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-relative-packages": "off",
        "import/no-unresolved": "off",
        "import/order": [
            "error",
            {
                alphabetize: {
                    order: "asc",
                },
                groups: ["builtin", "external", ["internal", "parent", "sibling"]],
                "newlines-between": "always",
            },
        ],
        "import/prefer-default-export": "off",
        "lines-between-class-members": "off",
        "no-console": "off",
        "no-debugger": "error",
        "no-else-return": "error",
        "no-empty-function": "off",
        "no-param-reassign": [
            "error",
            {
                props: true,
                ignorePropertyModificationsFor: ["app", "state"],
            },
        ],
        "no-shadow": "off",
        "no-plusplus": "off",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "padding-line-between-statements": ["error", { blankLine: "always", prev: "*", next: "return" }],
    },
    overrides: [
        {
            files: ["**/*.vue"],
            extends: [
                "@vue/eslint-config-typescript/recommended",
                "plugin:vue/vue3-recommended",
                "plugin:prettier-vue/recommended",
            ],
            settings: {
                "prettier-vue": {
                    SFCBlocks: {
                        template: false,
                    },
                },
            },
            rules: {
                "prettier-vue/prettier": ["error", prettierConfig],
                "vue/v-on-event-hyphenation": "off",
                "vue/html-closing-bracket-newline": "warn",
                "vue/html-closing-bracket-spacing": "warn",
                "vue/html-end-tags": "warn",
                "vue/html-indent": [
                    "error",
                    4,
                    {
                        attribute: 1,
                        baseIndent: 1,
                        closeBracket: 0,
                        alignAttributesVertically: true,
                        ignores: [],
                    },
                ],
                "vue/html-quotes": "warn",
                "vue/html-self-closing": "warn",
                "vue/multiline-html-element-content-newline": "warn",
                "vue/multi-word-component-names": [
                    "error",
                    {
                        ignores: ["layout", "index"],
                    },
                ],
                "vue/mustache-interpolation-spacing": "warn",
                "vue/max-attributes-per-line": "warn",
                "vue/no-deprecated-slot-attribute": "off", // web component needs this
                "vue/no-duplicate-attr-inheritance": "warn",
                "vue/no-multi-spaces": "warn",
                "vue/no-restricted-props": ["error", "type"],
                "vue/no-spaces-around-equal-signs-in-attribute": "warn",
                "vue/no-unused-properties": "error",
                "vue/no-unused-refs": "error",
                "vue/prefer-import-from-vue": "warn",
                "vue/singleline-html-element-content-newline": "warn",
                "vue/v-on-function-call": ["error", "never"],
            },
        },
        {
            files: ["*.ts", "*.js", "*.cjs", "*.js"],
            extends: ["plugin:prettier/recommended"],
            rules: {
                "prettier/prettier": ["error", prettierConfig],
            },
        },
    ],
};
