const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),
  ],
});
