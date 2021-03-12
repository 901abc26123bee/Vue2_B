const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWeboackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
    //publicPath: 'dist/'
	},
	module: {
    rules: [
      { 
      	test: /\.css$/, 
        // css-loader 只負責將css文件進行加載，不負責解析
        // style-loader 負責將樣式添加到DOM中
        // when using multi loader, right first
      	use: ['style-loader', 'css-loader'] 
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 200,
              // limit need to greater than image size(byte)
              // when the loading image size<limit, the image would be compiled as base64字符串形式
              // ifimage size>limit ==> error ==> need using file-loader module to compile
              
              name: 'img/[name].[hash:8].[ext]'
              // img/[name] ===> name is variable
              // img/name  ===> name is string
              // hash:8  ===> hash is 32位，太潮，只截取8位
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('final copyright belong to webpack and vue'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UglifyjsWeboackPlugin()
  ],
  // devServer: {
  //   contentBase: './dist',
  //   inline: true
  // }
}