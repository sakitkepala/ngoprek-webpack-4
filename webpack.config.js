const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    page: "./js/entry.js",
    card: "./js/card.js",
  },
  output: {
    filename: "bundle.[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  // ? Di contohnya modenya diubah jadi production,
  // ? apakah optimization cuma bisa berlaku ketika production saja?
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [new OptimizeCssAssetsPlugin(), new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: "./dist",
    port: 3030,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.mp4$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          // Path video ini akan ada di dalam direktori dist
          // yang sudah diset di path output di atas.
          // Bundle dari entry.js yang posisinya udah di dalam dist
          // akan mereferensi video ke path ini.
          outputPath: "video/",
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "image/",
          // publicPath: "./" // ?
        },
      },
      {
        test: /\.ico$/,
        loader: "file-loader",
        // outputPath tidak dinyatakan untuk favicon supaya
        // dikeluarkannya di direktori dist langsung, mengikuti
        // path di output di atas
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./template.html",
      favicon: "./favicon.ico",
    }),
  ],
};
