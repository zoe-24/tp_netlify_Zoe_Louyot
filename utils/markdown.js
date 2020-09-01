const path = require('path')
const markdownIt = require('markdown-it')
const picture = require('./picture')

// Get config
const config = require('@config')

module.exports = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
}).use((md) => {
  md.renderer.rules.image = (tokens, index) => {
    const token = tokens[index]
    const src = token.attrs[token.attrIndex('src')][1]
    const alt = token.content

    // Do not process absolute images or GIF's
    if (src.match('^([A-Za-z]+://|//)') || path.extname(src) === '.gif') {
      const srcPath = path.posix.join('/', config.dir.media, src)
      return `<img src="${srcPath}" alt="${alt}">`
    }

    return picture(src, alt)
  }
})
