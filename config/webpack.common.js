const path = require('path');
const dobenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = dobenv.config().parsed;

module.exports = {
  entry: [
    'normalize.css',
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
      },
      {
        type: 'javascript/auto',
        test: /.(js|jsx|mjs)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: false,
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.EnvironmentPlugin({
      ...env,
    }),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: {
      disableDotRule: true,
    },
    contentBase: './public',
  },
};
