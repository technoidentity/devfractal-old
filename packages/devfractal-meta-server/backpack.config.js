module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ['./src/index.ts']
    config.resolve = { extensions: ['.ts', '.js', '.json'] }
    config.module.rules.push({ test: /\.(j|t)s$/, loader: 'babel-loader' })

    config.module.rules.push({
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre',
    })

    return config
  },
}
