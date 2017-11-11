const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.[chunkhash].js',
        sourceMapFilename: '[name].bundle.source.[chunkhash].js'
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `name:[name] - Production`
        }),
        new webpack.EnvironmentPlugin({
          NODE_ENV: 'production',
        })
      ]
});         