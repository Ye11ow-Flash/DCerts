module.exports = {
	entry: {
		app: ["webpack/hot/dev-server", "./pages/index.js"],
	},
	output: {	
		path: './app',
		filename: 'bundle.js'
	},
	module: {
	  loaders: [
			{
			  test: /\.css$/,
			  loader: 'style-loader!css-loader'
			},
			{ test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
	  ],
	  rules: [
	      {
	        test: /\.css$/,
	        use: ['style-loader', 'css-loader'],
	      }
	    ]
	},

};
