var webpack = require('webpack');
module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'./client/client.js',
		'webpack-hot-middleware/client'
	],
	output: {
		path: require("path").resolve("./dist"),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'react-hmre']
				} 
			}
		]
	}
}