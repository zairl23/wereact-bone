var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./app/app.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query:
              {
                presets:['react','es2015']
              }
          },
          { test: /\.css$/, loader: "style!css" },
          {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    devServer: {
        hot: true,
        inline: true
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.UglifyJsPlugin({
         sourceMap: false,
         mangle: false,
         warnings: false
     }),
    ]
};
