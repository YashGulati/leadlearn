var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      index: './src/index.js'
  },
  output: { path: path.join(__dirname, 'app/scripts'), filename: '[name].js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          "plugins": [
              ["transform-es2015-arrow-functions", { "spec": true }],
              ["transform-class-properties"]
          ]
        }
      },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },
};
