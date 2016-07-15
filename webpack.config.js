var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: './src/js/index.js',
  output: {
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
