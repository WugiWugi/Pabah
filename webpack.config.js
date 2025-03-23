const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  performance: {
    hints: false,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer',
      favicon: './src/image/logo.svg',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    watchFiles: ['src/**/*'],
    hot: true,
    open: true,
    port: 3010,
  },
};