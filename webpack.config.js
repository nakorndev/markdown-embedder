const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  entry: './src/git-embedder.js',
  output: {
    filename: 'git-embedder.js',
    path: path.resolve(__dirname, 'dist')
  }
};