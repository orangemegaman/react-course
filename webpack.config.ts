import path from 'path';
import HTMLPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'], // при импорте не указываем расширение
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HTMLPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
	],
};

export default config;
