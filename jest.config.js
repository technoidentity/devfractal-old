// currently doesn't work, but may be some day!

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/packages/**/*.(spec|test).{ts,tsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^lodash-es$': 'lodash',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
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
