// @ts-ignore
const { createConfig, babel, typescript, css } = require('webpack-blocks')
const path = require('path')

const fsErrorFix = () => (context, { merge }) =>
  merge({ node: { fs: 'empty' } })

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
        fontSize: 'inherit',
      },
    },
  },
  require: [path.join(__dirname, 'node_modules/bulma/css/bulma.css')],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      propFilter: props =>
        props.parent && props.parent.fileName.startsWith('ui/src'),
    },
  ).parse,

  webpackConfig: createConfig([babel(), typescript(), css(), fsErrorFix()]),
  components: './src/**/[A-Z]*.tsx',
  ignore: [
    './src/App.tsx',
    './src/stories',
    './src/**/*.test.tsx',
    './src/**/*.test.ts',
  ],
}
