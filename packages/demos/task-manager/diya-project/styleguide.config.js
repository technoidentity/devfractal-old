module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
  ).parse,
  components: 'src/**/[A-Z]*.tsx',
  webpackConfig: require('react-scripts/config/webpack.config.js'),
}
