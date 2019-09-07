// currently doesn't work, but may be some day!

module.exports = {
  ...require('./jest.client.config'),
  roots: [
    '<rootDir>/packages/common/spec',
    '<rootDir>/packages/common/utils',
    '<rootDir>/packages/devfractal/examples',
    '<rootDir>/packages/devfractal/api',
    '<rootDir>/packages/devfractal/starter',
    '<rootDir>/packages/meta/core',
    '<rootDir>/packages/meta/client',
    '<rootDir>/packages/meta/server',
  ],
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsConfig: 'tsconfig.client.json',
      diagnostics: {
        warnOnly: true,
      },
    },
  },
}
