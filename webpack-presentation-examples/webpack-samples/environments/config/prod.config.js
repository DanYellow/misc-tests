const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.[chunkhash].js',
    },
});