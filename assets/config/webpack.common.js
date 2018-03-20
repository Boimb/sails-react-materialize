var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
  entry: {
    bundle: './assets/react/index.js',
    vendor: VENDOR_LIBS
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/, // Check for sass or scss file names
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.md/,
        use: 'raw-loader'
      }
    ]
  },


  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),

    new ExtractTextPlugin({filename:'style.css'}),
    new HtmlWebpackPlugin({
      title: 'Sails React',
      template: './assets/react/index.html'
    })
  ]
};
