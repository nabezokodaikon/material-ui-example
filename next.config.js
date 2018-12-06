const withPlugins = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')({
  devtool: "hidden-source-map"
})
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
  [withSourceMaps, {
    webpack(config, options) {
      return config
    }
  }],
  [withTypescript
  ], 
  [withCSS, {
    cssModules: true
  }]
])
