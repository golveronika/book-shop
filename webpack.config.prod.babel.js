// import '@babel/polyfill';

import "core-js/stable";
import "regenerator-runtime/runtime";

import path from 'path';

import webpack from 'webpack';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import CleanWebpackPlugin from 'clean-webpack-plugin';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import ImageMinPlugin from 'imagemin-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import autoprefixer from 'autoprefixer';

module.exports = {
  devtool: false,
  entry: {
    main: [
    //   '@babel/polyfill',
      'core-js/stable',
    //   'regenerator-runtime/runtime',
      './src/client/index.js',
    //   'bootstrap/dist/css/bootstrap.min.css',
      './src/client/style/main.scss',
    ],
    // bundle: ['jquery', 'popper.js', 'bootstrap'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
          },
        }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer,
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ],
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   Popper: ['popper.js', 'default'],
    // }),
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' },
    ]),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({ sourceMap: true }),
      new ImageMinPlugin({
        test: /\.(png|jpe?g|gif|svg)$/,
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { sourceMap: true },
      }),
    ],
  },
};