module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    './node_modules/prettier-stylelint/config.js',
  ],
  rules: {
    'string-quotes': 'single',
    'order/properties-alphabetical-order': true,
  },
};
