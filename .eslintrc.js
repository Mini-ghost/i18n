'use strict'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'mocha'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'mocha/no-mocha-arrows': 'error'
  }
}
