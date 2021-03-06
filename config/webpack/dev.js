import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

import {
  SOURCE_PATH,
  BUILD_PATH,
  TEMPLATES_PATH
} from '../defaults'

export default {
  entry: path.join(SOURCE_PATH, 'index.js'),
  output: {
    path: BUILD_PATH,
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader/url'
          },
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.css'
    ],
    modules: [
      'node_modules',
      SOURCE_PATH
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(TEMPLATES_PATH, 'app.html')
    })
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
}
