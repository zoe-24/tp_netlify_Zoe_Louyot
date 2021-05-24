const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/static')

  // Minify HTML in production
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (
      process.env.ELEVENTY_ENV === 'production' &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
    }

    return content
  })

  // Watch changes to source assets that are compiled outside of 11ty
  eleventyConfig.addWatchTarget('./src/_assets/')

  return {
    dir: {
      input: 'src/',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
    templateFormats: ['html', 'md', 'njk', 'ico'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
  }
}
