const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env)
  return config
}
