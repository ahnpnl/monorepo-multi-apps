module.exports = {
    extends: ['stylelint-config-recommended-scss', 'stylelint-prettier/recommended'],
    rules: {
        'declaration-property-value-disallowed-list': {
            '/^border/': [],
        },
        'selector-class-pattern': [
            '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
            {
                /** This option will resolve nested selectors with & interpolation. - https://stylelint.io/user-guide/rules/selector-class-pattern/#resolvenestedselectors-true--false-default-false */
                resolveNestedSelectors: true,
                /** Custom message */
                message: function expected(selectorValue) {
                    return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
                },
            },
        ],
    },
};
