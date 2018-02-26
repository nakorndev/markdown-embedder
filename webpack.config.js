const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  entry: {
    'markdown-embedder': './src/markdown-embedder.js',
    'markdown-embedder.min': './src/markdown-embedder.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/
    })
  ]
};