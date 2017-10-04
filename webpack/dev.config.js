var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: './src/client/main.js',
		admin: './src/client/admin.js',
		vendor: [
			'@blueprintjs/core',
			'axios',
			'babel-polyfill',
			'core-js',
			'history',
			'lodash.merge',
			'localforage',
			'marked',
			'react', 
			'react-animate-on-scroll', 
			'react-apollo', 
			'redux-devtools-extension', 
			'react-dom', 
			'react-redux', 
			'react-responsive', 
			'react-router-dom', 
			'react-transition-group',
			'redux-storage', 
			'redux', 
			'redux-logger', 
			'redux-promise-middleware', 
			'redux-storage-engine-localforage', 
			'redux-thunk'
		]
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'es2015', 'stage-0'],
							plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader?sourceMap', options: { minimize: true } },
						{ loader: 'sass-loader?sourceMap' }
					]
				})
			},
			{
				test: /\.(ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: 'file-loader', options: {name: '[name].[ext]'}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: 'file-loader', options: {name: 'fonts/[name].[ext]'}
			},
			{
				test: /\.(jpg|gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: 'file-loader', options: {name: 'images/[name].[ext]'}
			}
		]
	},
	output: {
		path: __dirname + '/../public',
		filename: 'js/[name]-[chunkhash].min.js',
		publicPath: '/'
	},
	plugins: [
		new CleanWebpackPlugin([
			'public/css/*.css',
			'public/js/*.js',
			'public/js/*.map'
		],
		{ root: __dirname + '/..' }),

		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		
		new ExtractTextPlugin('css/[name]-[chunkhash].css'),
		
		new HTMLWebpackPlugin({
			filename: 'index.html',
			chunks: ['vendor', 'main'],
			template: 'src/client/assets/index.html'
		}),

		new HTMLWebpackPlugin({
			filename: 'admin.html',
			chunks: ['vendor', 'admin'],
			template: 'src/client/assets/admin.html'
		})
	],
	devtool: 'source-map'
};
