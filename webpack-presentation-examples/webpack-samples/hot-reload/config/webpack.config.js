const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
  // MODE react enables HMR for react components
  const entries = (!env || env.mode !== 'react') ? ['./src/main.js'] : ['react-hot-loader/patch', './src/main.react.js']
  return {
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      hot: true,
      open: true,
      port: 9000,
      after () {
        console.log('server ready')
      }
    },
    entry: [...entries],
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(css|pcss)$/, 
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              { loader: 'css-loader', options: { 
                importLoaders: 1, 
                sourceMap: true,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }},
              'postcss-loader'
            ]
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192 // bytes
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "[name].[contenthash].css",
        disable: true
      }),
      new HtmlWebpackPlugin({
          title: 'My App',
          filename: `index.html`,
          template: 'config/tpl/main.html'
      }),
      new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '..')
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
      // new NpmInstallPlugin()
    ]
  }
};
