var webpack = require('webpack');
var path = require('path');
var _ = require('lodash');

var config = module.exports = require('./webpack.config.js');

config.context = __dirname + '/app/assets/javascripts';
config.debug = true;
config.devtool = 'eval-source-map';

var entries = config.entry

config.entry = {}
_.forEach(entries, function(entry, key) {
  config.entry[key] = [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    path.resolve(entry)
  ]
})

config.output = {
  filename: '[name]-bundle.js', // Will output *-bundle.js
  path: path.resolve('/app/assets/javascripts'), // Save to Rails Asset Pipeline
  publicPath: 'http://localhost:8080/assets' // Required for webpack-dev-server
}

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

config.module.loaders.unshift(
  { test: /\.(js|coffee)?$/, exclude: /node_modules/, loaders: ['react-hot'] }
)

config.devServer = {
  publicPath: config.output.publicPath,
  hot: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
}
