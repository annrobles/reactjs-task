const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
							name: "images/[name].[hash].[ext]",
						},
					},
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
							name: "images/[name].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
};
