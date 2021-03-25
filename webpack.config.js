const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist/assets/js'),
    filename: 'main.js'
  },
  entry: {
    main: './src/main.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
    ]
  }
}