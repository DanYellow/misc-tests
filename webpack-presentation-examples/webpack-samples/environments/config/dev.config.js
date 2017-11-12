const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `name:[name] - Development`
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    })
  ]
});
