const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'main-bundle.js',
    path: './build/'
  },
  module:{
    // test: ''
    exclude: /node_modules/,
    loader: 'graphql-tag/loader'
  }
}