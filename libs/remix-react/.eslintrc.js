/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@remix-run/eslint-config'],
  rules: {
    '@typescript-eslint/no-redeclare': 'off',
  },
}
