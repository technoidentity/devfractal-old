module.exports = {
  ...require('../../../jest.client.config'),
  globals: { 'ts-jest': { isolatedModules: true } },
  setupFiles: ['<rootDir>/src/setupTests.ts'],
}
