const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [path.resolve(__dirname, './node_modules')],
        options: {
          presets: ["env", "stage-2", "react"]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/temp.html')
    })
  ]
}

module.exports = config
