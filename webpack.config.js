const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports =  function (evn, argv) {
  var mode = argv.mode || "development";
  var isProduction = mode === "production";
  console.log("Webpack mode: " + mode);

  return {
    entry: "./src/App.fsproj",
    mode: mode,
    output: {
      path: path.join(__dirname, "./public"),
      filename: "bundle.js",
    },
    devServer: {
        contentBase: "./public",
        port: 8080,
        historyApiFallback: {
          index: 'index.html'
        },        
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
                'postcss-loader',
              ],
            }),
          },
          {
            test: /\.fs(x|proj)?$/,
            use: "fable-loader"
          }]
    },
    plugins: [
      new ExtractTextPlugin('style.css', {
        disable: process.env.NODE_ENV === 'development',
      }),
      new MinifyPlugin({}, {})
    ],
  }
}