var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry: ['./src/js/app.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	devtool: 'source-map',

	// use the webpack dev server to serve up the web application
	devServer: {
		inline: true,
		// files are served from this folder
		contentBase: 'dist',
		// support HTML5 History API for react router
		historyApiFallback: true,
		// listen to port 5000, change this to another port if another server 
		// is already listening on this port
		port: 5000,
		clientLogLevel: "info",
		noInfo: false
	},
	module: {
			loaders: [
				{
					loader: 'babel-loader',
					test: /\.jsx?$/,
					query: {
						plugins: ['transform-runtime']
					},
					exclude: [path.resolve(__dirname, "node_modules")]
				}
			]
		},
		resolve: {
			extensions: ['.js']
		},
		plugins: [
			new webpack.ProvidePlugin({
				_: "underscore-contrib"
			}),
			new HtmlWebpackPlugin(
				/*{
							template: 'index.template.ejs',
							inject: 'body',
						}*/
			),
			new CleanWebpackPlugin(['dist'])
		],
	}

/*module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './dist',
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/,query: {
        plugins:["transform-runtime"]
      }}
    ]
  }
}*/