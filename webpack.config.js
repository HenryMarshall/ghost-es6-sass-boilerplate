module.exports = {
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
