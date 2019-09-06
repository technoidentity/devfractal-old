module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.(spec|test).{ts,tsx}'],
  globals: {
    __DEV__: true,
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  bail: true,
}
