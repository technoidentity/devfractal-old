// @ts-ignore
const { createConfig, babel, typescript, css } = require('webpack-blocks')
const path = require('path')

const fsErrorFix = () => (_, { merge }) => merge({ node: { fs: 'empty' } })

const bulmaPath = './node_modules/bulma/css/bulma.css'

module.exports = {
  styles: {
    StyleGuide: {
      '@global .token.tag': {
        fontSize: 'inherit',
        height: 'auto',
        lineHeight: 'initial',
        padding: 'initial',
        margin: 'initial',
        display: 'initial',
        pointerEvents: 'none',
        whiteSpace: 'pre-wrap',
      },
    },
  },
  require: [
    path.resolve(__dirname, bulmaPath),
    path.resolve('.', 'styleguideSetup.js'),
  ],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      propFilter: props =>
        !(props.parent && props.parent.fileName.includes('node_modules')),
    },
  ).parse,

  webpackConfig: createConfig([babel(), typescript(), css(), fsErrorFix()]),
  components: './src/**/[A-Z]*.tsx',
  exampleMode: 'expand',
  pagePerSection: true,
  title: 'devfractal-ui-core Style Guide',
  ignore: ['./src/App.tsx', './src/**/*.test.tsx', './src/**/*.test.ts'],
}
