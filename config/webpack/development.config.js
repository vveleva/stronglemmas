var _ = require('lodash');
var WebpackNotifierPlugin = require('webpack-notifier')
var config = module.exports = require('./webpack.config.js');

config = _.merge(config, {
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  devtool: 'cheap-eval-source-map',
});

config.plugins.push(new WebpackNotifierPlugin())
