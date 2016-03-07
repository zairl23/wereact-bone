var webpack = require('webpack');
// var path = '/home/ney/projects/yiwan/wp-content/plugins/yiwan/public';
// var nodeModulesPath = '/node_modules';
// var ignoreJqueryFiles = new webpack.IgnorePlugin(/\.\/jquery.js$/);
// var ignoreBxsliderFiles = new webpack.IgnorePlugin(/\.\/bxSlider.js$/);
module.exports = {
    entry: {
        Home: "./weixin/src/home.js",
        Product: "./weixin/src/product-page.js",
        Cart: "./weixin/src/cart-page.js",
        Account: "./weixin/src/account-page.js",
        Orders: "./weixin/src/orders-page.js",
        Points: "./weixin/src/points-page.js",
        Setting: "./weixin/src/setting-page.js",
        Address: './weixin/src/address-page.js',
        // Picshow: './weixin/src/picshow-page.js',
        Post: './weixin/src/post-page.js',
        Posts: './weixin/src/posts-page.js',
        // Cart: "./weixin/entries/cart.js",
        // Account: "./weixin/entries/account.js"
        Discuss: './weixin/src/discuss-page.js',
        Discusses: './weixin/src/discusses-page.js'
    },
    output: {
      path: './weixin/production',
      filename: "[name].js",
      publicPath: '/wp-content/plugins/yiwan/public/weixin/production/'
    },
    module: {
        // noParse: ['/home/ney/projects/yiwan/wp-content/plugins/yiwan/public/node_modules/react/dist/react.min', '/home/ney/projects/yiwan/wp-content/plugins/yiwan/public/node_modules/react/dist/react-dom.min'],
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            },
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
            {
              test   : /\.woff/,
              loader : 'url-loader?prefix=font/&limit=10000&mimetype=application/font-woff'
            }, {
              test   : /\.ttf/,
              loader : 'file-loader?prefix=font/'
            }, {
              test   : /\.eot/,
              loader : 'file-loader?prefix=font/'
            }, {
              test   : /\.svg/,
              loader : 'file-loader?prefix=font/'
            }
            // ,
            // {test: require.resolve('jquery'), loader: 'expose?jQuery'},
            // {test: require.resolve('bxslider'), loader: 'imports-loader'},
        ]
    },
    resolve: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js', '.json', '.coffee']
    },
    plugins: [
      // ignoreJqueryFiles,
      // ignoreBxsliderFiles,
   new webpack.BannerPlugin('This file is created by yiwanliangpu'),
   new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
            warnings: false
        }),
   new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  //   //bxslider
  //   new webpack.ProvidePlugin({
  //      bxslider: "bxslider"
  //    }),

]
};
