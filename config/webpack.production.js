const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');

const env = dotenv.config().parsed;

console.log('fuuuu', env);

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //     },
      //   ]
      // },
      // @TODO fix mini extract for prod.. shits broken right now.
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.EnvironmentPlugin({
      ...env,
      NODE_ENV: 'production',
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
});
