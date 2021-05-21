const fs = require('fs')
const plugins = require('./utils/plugins')
const { shortcodes, asyncShortcodes } = require('./utils/shortcodes')
const filters = require('./utils/filters')
const transforms = require('./utils/transforms')
const collections = require('./utils/collections')

module.exports = function (eleventyConfig) {
  // Copy to build dir (See. 1.1)
  eleventyConfig.addPassthroughCopy('src/static')

  // This allows Eleventy to watch for file changes during local development.
  eleventyConfig.setUseGitIgnore(false)

  // Plugins
  plugins.forEach((plugin) => {
    eleventyConfig.addPlugin(plugin)
  })

  // Shortcodes
  Object.keys(shortcodes).forEach((name) => {
    eleventyConfig.addShortcode(name, shortcodes[name])
  })

  // Async Shortcodes
  Object.keys(asyncShortcodes).forEach((name) => {
    eleventyConfig.addAsyncShortcode(name, asyncShortcodes[name])
  })

  // Filters
  Object.keys(filters).forEach((name) => {
    eleventyConfig.addFilter(name, filters[name])
  })

  // Transforms
  Object.keys(transforms).forEach((name) => {
    eleventyConfig.addTransform(name, transforms[name])
  })

  // Collections
  Object.keys(collections).forEach((name) => {
    eleventyConfig.addCollection(name, collections[name])
  })

  // Override BrowserSync Server Options
  eleventyConfig.setBrowserSyncConfig({
    open: true,
    callbacks: {
      ready: (err, bs) => {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('dist/404.html')
          // Add 404 http status code in request header.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' })
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  return {
    dir: {
      input: 'src/',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
    templateFormats: ['html', 'md', 'njk', 'ico'],
    htmlTemplateEngine: 'njk',

    // 1.1 Enable eleventy to pass dirs specified above
    passthroughFileCopy: true,
  }
}
