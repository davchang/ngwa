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

	module: {
		rules: [
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
				test: /.s?css$/,
	      use: ExtractTextPlugin.extract({
	        // fallback: 'style-loader',
	        use: [
	          {
	            loader: 'css-loader',
	          },
	          {
	            loader: 'postcss-loader',
	            options: {
	              plugins: function() {
									return [
	                	autoprefixer({ browsers: [ 'last 3 versions' ] })
	              	]
								}
	            }
	          },
	          {
	            loader: 'sass-loader',
	          },
						{
							loader: 'sass-resources-loader',
							options: {
								resources: ['./src/globals/scss/_variables.scss',
								'./src/globals/scss/mixins/_alert.scss',
								'./src/globals/scss/mixins/_background-variant.scss',
								'./src/globals/scss/mixins/_badge.scss',
								'./src/globals/scss/mixins/_border-radius.scss',
								'./src/globals/scss/mixins/_breakpoints.scss',
								'./src/globals/scss/mixins/_buttons.scss',
								'./src/globals/scss/mixins/_cards.scss',
								'./src/globals/scss/mixins/_clearfix.scss',
								'./src/globals/scss/mixins/_color-variants.scss',
								'./src/globals/scss/mixins/_float.scss',
								'./src/globals/scss/mixins/_fonts.scss',
								'./src/globals/scss/mixins/_forms.scss',
								'./src/globals/scss/mixins/_gradients.scss',
								'./src/globals/scss/mixins/_grid-framework.scss',
								'./src/globals/scss/mixins/_grid.scss',
								'./src/globals/scss/mixins/_hover.scss',
								'./src/globals/scss/mixins/_image.scss',
								'./src/globals/scss/mixins/_list-group.scss',
								'./src/globals/scss/mixins/_lists.scss',
								'./src/globals/scss/mixins/_nav-divider.scss',
								'./src/globals/scss/mixins/_navbar-align.scss',
								'./src/globals/scss/mixins/_pagination.scss',
								'./src/globals/scss/mixins/_reset-text.scss',
								'./src/globals/scss/mixins/_resize.scss',
								'./src/globals/scss/mixins/_screen-reader.scss',
								'./src/globals/scss/mixins/_size.scss',
								'./src/globals/scss/mixins/_table-row.scss',
								'./src/globals/scss/mixins/_text-emphasis.scss',
								'./src/globals/scss/mixins/_text-hide.scss',
								'./src/globals/scss/mixins/_text-truncate.scss',
								'./src/globals/scss/mixins/_transforms.scss',
								'./src/globals/scss/mixins/_visibility.scss',
								'./src/globals/scss/utilities/_align.scss',
								'./src/globals/scss/utilities/_background.scss',
								'./src/globals/scss/utilities/_borders.scss',
								'./src/globals/scss/utilities/_clearfix.scss',
								'./src/globals/scss/utilities/_display.scss',
								'./src/globals/scss/utilities/_flex.scss',
								'./src/globals/scss/utilities/_float.scss',
								'./src/globals/scss/utilities/_position.scss',
								'./src/globals/scss/utilities/_screenreaders.scss',
								'./src/globals/scss/utilities/_sizing.scss',
								'./src/globals/scss/utilities/_spacing.scss',
								'./src/globals/scss/utilities/_text.scss',
								'./src/globals/scss/utilities/_visibility.scss',
								'./src/globals/scss/_base.scss',
								'./src/globals/scss/_mixins.scss' ]
							}
						}
	        ]
	      })
			},
			{
				include: path.resolve('app'),
				loader: 'isparta-loader',
				test: /\.js$/
			}
		]
	},

	output: {
		filename: "dist/[name].js"
	},

	plugins: [
		new ExtractTextPlugin('dist/[name].css'),
		new webpack.DefinePlugin({
			"process.env": { 'NODE_ENV': JSON.stringify(environment) }
		}),
		new webpack.LoaderOptionsPlugin({
			// test: /\.xxx$/, // may apply this only for some modules
			options: {
				eslint: {
					configFile: path.join(__dirname, '.eslintrc.js'),
					emitError: true,
					emitWarning: true,
					failOnError: false,
					failOnWarning: false
				}
			}
		})
	]
};
