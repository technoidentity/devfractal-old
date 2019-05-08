const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'sourcemap',
  output: {
    publicPath: '/build/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsConfigPathsPlugin(/* { configFileName, compiler } */)],
  },
  devServer: {
    contentBase: 'build',
    open: true,
    openPage: 'build/index.html',
    inline: true,
    hot: true,
    noInfo: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Typescript Starter',
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
