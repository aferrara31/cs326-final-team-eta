const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.?(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env', 
              [
                '@babel/preset-react', 
                { "runtime" : "automatic" }
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  mode: "development",
};
