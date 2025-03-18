const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Изменено на development для devServer
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, 
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
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Где искать файлы
    port: 8080, // Можно изменить порт, если нужно
    open: true, // Автооткрытие в браузере
    hot: true, // Горячая перезагрузка
    compress: true, // Сжатие файлов для быстроты
    historyApiFallback: true, // Для SPA, если используешь маршрутизацию
  },
};
