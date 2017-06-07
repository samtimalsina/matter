'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSS_PATH = path.resolve('./css');
const JS_PATH = path.resolve('./js');

const IS_DEV = false;
const IS_PROD = true;

const node = path.resolve(__dirname, 'node_modules');

const banner = [
  '/*!',
  ' Matter ',
  ' Drupal 8 Theme inspired by Material UI',
  '*/',
].join('\n');

const createBannerPlugin = () => new webpack.BannerPlugin({
  banner: banner,
  raw: true,
  entryOnly: true,
});

const CSS_LOADER_CONFIG = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: IS_DEV,
      plugins: () =>[require('autoprefixer')({grid: false})],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: ['node_modules', 'node_modules/@material/*']
        .map((d) => path.join(__dirname, d))
        .map((g) => glob.sync(g))
        .reduce((a, c) => a.concat(c), [])
    },
  },
];

module.exports = [
  // {
  //   name: 'material-js',
  //   entry: path.resolve(node, "material-components-web/index.js"),
  //   output: {
  //     path: JS_PATH,
  //     filename: 'material-components-web.js',
  //     libraryTarget: 'umd',
  //     library: 'mdc',
  //   },
  //   devServer: {
  //     disableHostCheck: true,
  //   },
  //   devtool: IS_DEV ? 'source-map' : false,
  //   module: {
  //     rules: [{
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader',
  //       options: {
  //         cacheDirectory: true,
  //       },
  //     }],
  //   }
  // },
  {
    name: 'js-components',
    entry: path.resolve('./app/matter.js'),
    output: {
      path: JS_PATH,
      filename: 'matter.js',
    },
    devServer: {
      disableHostCheck: true,
    },
    devtool: IS_DEV ? 'source-map' : false,
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }],
    },
    plugins: [
      createBannerPlugin(),
    ],
  },
  {
    name: 'css',
    entry: {
      // 'material-components-web': [
      //   path.resolve(node, "material-components-web/material-components-web.scss"),
      // ],
      matter: [
        path.resolve('./scss/matter.scss'),
      ]
    },
    output: {
      path: CSS_PATH,
      filename: '[name].css' + (IS_DEV ? '.js' : '-entry'),
    },
    devtool: IS_DEV ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: IS_DEV ? [{loader: 'style-loader'}].concat(CSS_LOADER_CONFIG) : ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: CSS_LOADER_CONFIG,
          }),
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
      createBannerPlugin(),
    ],
  }
];
