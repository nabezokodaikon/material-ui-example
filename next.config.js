const withPlugins = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')
const withTypescript = require('@zeit/next-typescript')

module.exports = withPlugins([
  [withSourceMaps, {
    webpack(config, options) {
      return config
    }
  }],
  [withTypescript, {
    webpack(config, options) {
      return config
    }
  }]
])
