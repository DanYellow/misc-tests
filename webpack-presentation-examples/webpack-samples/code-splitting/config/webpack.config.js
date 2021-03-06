const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
      main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test:  /\.(js|.worker.js)$/, 
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|pcss)$/, 
        use: [
          { loader: 'css-loader', options: { 
            importLoaders: 1, 
            sourceMap: true,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }},
          'postcss-loader'
        ]
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
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        template: 'config/tpl/main.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    })
  ]
};
