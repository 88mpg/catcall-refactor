const config = require('./config');
const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, `${config.src + config.js}main.js`),
  output: {
    path: path.resolve(__dirname, `${config.build}`),
    filename: 'bundle.js'
  },
  watch: false,
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  }
}
