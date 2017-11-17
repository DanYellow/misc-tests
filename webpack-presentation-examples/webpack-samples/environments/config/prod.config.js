const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.[chunkhash].js',
        sourceMapFilename: '[name].source.[chunkhash].js'
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `name:[name] - Production`
        }),
        new webpack.EnvironmentPlugin({
          NODE_ENV: 'production',
        }),
        new UglifyJSPlugin()
      ]
});         