const path = require('path');
const HTMLWebpaackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "wireframes", "index.js"),
  output: path.resolve(__dirnam, "build", "bundle.js"),
  modules: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
