const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин 
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: { 
    main: path.resolve(__dirname, 'src', 'pages', 'index.js') },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  // devtool: 'source-map', //ВЫКЛЮЧИТЬ
  mode: 'development', // добавили режим разработчика
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080,
    watchFiles: ['*/**/*.html']
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

  ]
} 