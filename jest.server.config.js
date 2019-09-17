module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  globals: { __DEV__: true },
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
}
