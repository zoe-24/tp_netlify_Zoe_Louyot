const markdownIt = require('markdown-it')
const picture = require('./picture')

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
    return picture(src, alt)
  }
})
