const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: '/',
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
  devServer: {
    historyApiFallback: true,
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
