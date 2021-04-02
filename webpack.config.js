const production = process.env.NODE_ENV === 'production' || false
const path = require('path')

module.exports = {
  entry: './Sharelinks.js',
  mode: 'production',
  target: 'es5',
  output: {
    filename: production ? 'Sharelinks.min.js' : 'Sharelinks.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Sharelinks',
    globalObject: 'this',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
}
