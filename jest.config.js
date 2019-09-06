// currently doesn't work, but may be some day!

const config = {
  ...require('./jest.client.config'),
  projects: ['<rootDir>/packages/**/*'],
}

module.exports = config
