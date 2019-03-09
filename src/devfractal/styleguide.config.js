// @ts-ignore
const { createConfig, babel, typescript, css } = require('webpack-blocks')
const path = require('path')

module.exports = {
  require: [path.join(__dirname, 'node_modules/bulma/css/bulma.css')],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
  ).parse,
  webpackConfig: createConfig([babel(), typescript(), css()]),
  components: './**/[A-Z]*.tsx',
}
