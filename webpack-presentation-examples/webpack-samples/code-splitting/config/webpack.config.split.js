const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
      main: './src/main.js',
      amain: './src/another-main.js',
      main3: './src/main3.js',
  },
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        chunks: ['main', 'common'],
        template: 'config/tpl/main.html'
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.split.html',
      chunks: ['amain', 'common'],
      template: 'config/tpl/main.html'
  }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // Specify the common bundle's name.
    })
  ]
};
