const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
  ]
};