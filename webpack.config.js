var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',  
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'site/app'),
    filename: 'app.js',
    publicPath: '/app/'
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
  			loaders: ['babel-loader'],
  			exclude: /node_modules/
  		},
    	{
	      test: /\.js$/,
	      loaders: [ 'babel' ],
	      exclude: /node_modules/,
	    },
	    {
	      test: /\.json$/,
	      loaders: [ 'json' ],
	      exclude: /node_modules/,
	    }
    ]
  }
}