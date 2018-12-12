process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const webpack = require('webpack')
const _ = require('lodash')
const path = require('path')

const config = (module.exports = require('./webpack.config.js'))

config.output = _.merge(config.output, {
  path: path.resolve('./public/assets'),
  filename: '[name]-bundle-[chunkhash].js',
  chunkFilename: '[id]-bundle-[chunkhash].js',
})

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin()
)
