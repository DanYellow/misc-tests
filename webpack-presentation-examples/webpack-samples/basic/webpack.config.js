const path = require('path');

console.log(
  path.resolve(__dirname, 'dist')
)

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};