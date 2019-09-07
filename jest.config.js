// currently doesn't work, but may be some day!

const config = {
  ...require('./jest.client.config'),
  projects: [
    '<rootDir>/packages/devfractal/examples',
    '<rootDir>/packages/common/spec',
    '<rootDir>/packages/common/utils',
    '<rootDir>/packages/devfractal/api',
  ],
}

module.exports = config
