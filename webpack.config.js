var webpack = require('webpack');

module.exports = {
	context: __dirname + '/src'
	, entry: './Player.js'
	, output: {
		path: __dirname + '/dist'
		, filename: 'Player.js'
	}
	, module: {
		loaders: [
			{
				test: /\.js$/
				, loader: 'babel'
				, exclude: /node_modules/
				, query: {
					modules: 'common'
				}
			}
		]
	}
	, plugins: [
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
				warnings: false
		    }
		    , sourceMap: true
		})	
	]
	, resolve: {
		extensions: ['', '.js']
		, alias: {
			'react': __dirname + '/bower_components/react/react'
			, 'react-dom': __dirname + '/bower_components/react/react-dom'
		}
	}
};