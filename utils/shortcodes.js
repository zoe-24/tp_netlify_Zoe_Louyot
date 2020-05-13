module.exports = {
  svg: function (name, classes, viewBox) {
    const viewBoxAttr = viewBox ? `viewBox="${viewBox}"` : ''
    return `<svg ${viewBoxAttr} class="${classes}" role="img" aria-hidden="true">
                <use xlink:href="#symbol-${name}"></use>
            </svg>`
  },
}
