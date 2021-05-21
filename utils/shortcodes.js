const path = require('path')
const markdownIt = require('markdown-it')
const Image = require('@11ty/eleventy-img')

const shortcodes = {
  markdown: (value) => {
    if (!value) {
      return ''
    }

    const markdown = markdownIt({
      html: true,
    })

    return markdown.render(value)
  },
}

const asyncShortcodes = {
  image: async (src, alt, classes = '', sizes = '100vw') => {
    const relativeFilePath = `.${src}`

    const metadata = await Image(relativeFilePath, {
      outputDir: './dist/static/media/_resized',
      urlPath: '/static/media/_resized',
      formats: ['avif', 'webp', 'jpeg'],
      widths: [640, 768, 1024, 1366, 1600, 1920],
    })

    const imageAttributes = {
      alt,
      class: classes,
      sizes,
      loading: 'lazy',
      decoding: 'async',
    }

    return Image.generateHTML(metadata, imageAttributes, {
      whitespaceMode: 'inline',
    })
  },
}

module.exports = { shortcodes, asyncShortcodes }
