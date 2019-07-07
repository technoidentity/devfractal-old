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
      },
    },
  },
  require: [path.join(__dirname, '../../node_modules/bulma/css/bulma.css')],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      propFilter: props =>
        props.parent && props.parent.fileName.startsWith('lib/src'),
    },
  ).parse,

  webpackConfig: createConfig([babel(), typescript(), css(), fsErrorFix()]),
  components: './src/**/[A-Z]*.tsx',
  ignore: [
    './src/App.tsx',
    './src/base',
    './src/stories',
    './src/crud/Views.tsx',
    './src/utils/TableContentLoader.tsx',
    './src/dynamic/DynamicRouter.tsx',
    './src/simple/SimpleForm.tsx',
    './src/**/*.test.tsx',
    './src/**/*.test.ts',
  ],
}
