const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const {extendDefaultPlugins} = require('svgo');

module.exports = (env, argv) => ({
	entry: ['@babel/polyfill', './src/index.js'],
	devtool: argv.mode === 'development' ? 'source-map' : false,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[fullhash].js',
	},
	// Optimization: {
	// 	minimize: argv.mode === 'production',
	// 	minimizer: [new TerserPlugin()],
	// },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			favicon: path.resolve(__dirname, 'src/assets/favicon.ico'),
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin(
			{
				patterns: [
					{
						from: path.resolve(__dirname, 'src/assets/favicon.ico'),
						to: path.resolve(__dirname, 'dist'),
					},
				],
			}),
	],
	resolve: {
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', ['@babel/preset-react', {
							runtime: 'automatic',
						}]],
					},
				},
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.png|svg|jpg|gif$/,
				use: ['file-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', 'css-loader', 'postcss-loader', 'sass-loader',
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset',
			},
		],
	},
	optimization: {
		minimize: argv.mode === 'production',
		minimizer: [
			new TerserPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						// Lossless optimization with custom option
						// Feel free to experiment with options for better result for you
						plugins: [
							['gifsicle', {interlaced: true}],
							['jpegtran', {progressive: true}],
							['optipng', {optimizationLevel: 5}],
							// Svgo configuration here https://github.com/svg/svgo#configuration
							[
								'svgo',
								{
									plugins: extendDefaultPlugins([
										{
											name: 'removeViewBox',
											active: false,
										},
										{
											name: 'addAttributesToSVGElement',
											params: {
												attributes: [{xmlns: 'http://www.w3.org/2000/svg'}],
											},
										},
									]),
								},
							],
						],
					},
				},
			}),
		],
	},
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	devServer: {
		historyApiFallback: true,
	},
});
