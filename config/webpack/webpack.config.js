/* eslint-disable */
require('es6-promise').polyfill();
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    "shared": './app/frontend/entry.jsx',
    "dashboard-entry": './app/frontend/dashboard-entry.jsx',
  },
  output: {
    path: path.resolve('./app/assets/javascripts/'),
    filename: "[name]-bundle.js",
    publicPath: '/assets'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [ 'node_modules' ],
    root: [ path.resolve('./app/frontend') ]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loaders: ["style", "css", "postcss"] },
      { test: /\.sass$/, loaders: ["style", "css", "postcss", "sass?indentedSyntax"] },
      { test: /\.less$/, loaders: ["style", "css", "postcss", "less"] },
      { test: /\.(gif|png)$/, loader: "url?mimetype=image/png" },
      { test: /\.wav$/, loader: "url?mimetype=audio/x-wav" },
      { test: /\.ogg$/, loader: "url?mimetype=audio/ogg" },
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url?mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file?name=[name].[ext]" },
      { test: require.resolve("react"), loader: "expose?React" },
      { test: require.resolve("react-dom"), loader: "expose?ReactDOM" },
      { test: require.resolve("prop-types"), loader: "expose?PropTypes" }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  // externals: {
  //   "gon": "gon",
  //   "listjs": "List",
  //   "clipboard": "Clipboard",
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)}
    }),
    new webpack.ProvidePlugin({
      '_': 'lodash',
      moment: 'moment',
      gon: 'gon',
      React: 'react',
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'commons', minChunks: 3})
  ]
};
