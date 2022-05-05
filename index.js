module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  globals: {
    document: false,
    navigator: false,
    window: false,
    globalThis: false,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  plugins: [
    'eslint-plugin-html',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-classes-per-file': ['off', 1],
    'import/extensions': ['off'],
    'import/newline-after-import': ['off'],
    'import/first': ['off'],
    'import/no-named-as-default-member': ['off'],
    'import/no-relative-packages': ['off'],
    'max-len': ['off'],
    'no-plusplus': ['off'],
    'lines-between-class-members': ['off'],
    'no-console': ['off'],
    'no-alert': ['off'],
    'no-param-reassign': ['error', { props: false }],
    'prefer-destructuring': ['off'],
    'no-bitwise': ['off'],
    'camelcase': ['off'],
    'radix': ['error', 'as-needed'],
    'object-curly-newline': ['off'],
    'quote-props': ['off'],
  },
};
