var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      tests: './scripts/tests.jsx'
  },
  output: { path: path.join(__dirname, 'app/scripts'), filename: '[name].js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
