// @ts-ignore
const { createConfig, babel, typescript } = require('webpack-blocks')

module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
  ).parse,
  webpackConfig: createConfig([babel(), typescript()]),
  components: './**/[A-Z]*.tsx',
}
