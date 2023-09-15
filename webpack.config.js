
const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const tagPlugin = require("html-webpack-tags-plugin");

const plugin = new htmlPlugin({template: "./public/index.html"});

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    allowedHosts: 'all',
    static: path.join(__dirname, "dist")
  },
  devtool: 'inline-source-map',
  plugins: [plugin, new tagPlugin({tags: ["styles.css"]})]
}