var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
//  context: path.join(__dirname, "src2"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
//      src : "./src/app/Index.js",
//      src2 : "./src2/js/client.js",
      frontend :"./src3/app.js",
//      style :"./scr3/style.scss"
  },
  output: {
    path: __dirname + "/outputjs/",
    filename: "[name]-app-min.js"
  },
  module: {
    loaders: [
      {
         test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?stage=0',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
        ,
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.png$/, loader: "url-loader?limit=100000" },
        { test: /\.jpg$/, loader: "file-loader" },
//       {
//        test: /\.css$/,
//        use: ExtractTextPlugin.extract({
//          fallback: "style-loader",
//          use: "css-loader"
//        })
//      }
        
    ]
  },
  
  plugins: debug ? [ new webpack.optimize.UglifyJsPlugin({
        minimize: true,
          compress: {
              warnings: false,
              booleans: false,
              unused: false }})
                   ] 
    :[    
//    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourcemap: false
    }),      
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
    watch: true
};
