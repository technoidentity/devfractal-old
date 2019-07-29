// @ts-ignore
const { createConfig, babel, typescript, css } = require('webpack-blocks')
const path = require('path')

const fsErrorFix = () => (context, { merge }) =>
  merge({ node: { fs: 'empty' } })

const bulmaPath =
  process.env.NODE_ENV === 'production'
    ? 'node_modules/bulma/css/bulma.css'
    : '../../../node_modules/bulma/css/bulma.css'
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
  require: [path.join(__dirname)],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      propFilter: props =>
        props.parent && props.parent.fileName.startsWith('devfractal'),
    },
  ).parse,

  webpackConfig: createConfig([babel(), typescript(), css(), fsErrorFix()]),
  components: './src/**/[A-Z]*.tsx',
  ignore: ['./src/App.tsx', './src/**/*.test.tsx', './src/**/*.test.ts'],
}
