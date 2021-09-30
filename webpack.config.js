const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => ({
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: env.MODE === 'production' ? 'bundle.[contenthash].js' : 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/images/[hash][ext][query]',
    clean: true,
  },
  mode: env.MODE,
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(s*)css$/i,
        use:
        [
          env.MODE === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'sass-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TODO-TEAMS',
      filename: './index.html',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src', 'assets/images'),
        to: 'assets/images',
      }],
    }),
    ...(env.MODE === 'production' ? [] : [new BundleAnalyzerPlugin()]),

  ],
  optimization: {
    minimizer: [
      new TerserPlugin({ parallel: true }),
      new CssMinimizerPlugin({ parallel: true }),
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      overlay: true,
      progress: true,
    },
    open: true,
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
});
