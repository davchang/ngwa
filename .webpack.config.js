'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const environment = process.env.NODE_ENV || 'development';



const WEBPACK_DEV_SERVER = "webpack-dev-server/client?http://localhost:8080";

const entry = {
	app: [ "./index.js" ]
};
let devtool = 'source-map';

if (environment !== "production") {
	entry.app = entry.app.concat([ WEBPACK_DEV_SERVER ]);
	devtool = 'cheap-module-eval-source-map';
}

module.exports = {

	devtool,

	entry,

	eslint: {
		configFile: path.join(__dirname, '.eslintrc.js'),
		emitError: true,
		emitWarning: true,
		failOnError: false,
		failOnWarning: false
	},

	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				test: /\.js$/
			},
			{
				exclude: /node_modules/,
				loader: 'url-loader',
				test: /(\.svg|\.png)$/
			},
			{
				loader: 'json-loader',
				test: /\.json$/
			},
			{
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('css!postcss!sass'),
				test: /\.scss$/
			},
			{
				include: path.resolve('app'),
				loader: 'isparta-loader',
				test: /\.js$/
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				loader: 'file?name=[name].[ext]&publicPath=assets/fonts/'
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('dist/[name].css'),
		new webpack.DefinePlugin({
			"process.env": { 'NODE_ENV': JSON.stringify(environment) }
		})
	],

	output: {
		filename: "dist/[name].js"
	},

	postcss: [
		autoprefixer({ browsers: [ 'last 3 versions' ] })
	]

};
