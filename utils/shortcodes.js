module.exports = {
  icon: function (name, classes, viewBox) {
    const viewBoxAttr = viewBox ? `viewBox="${viewBox}"` : ''
    return `<svg ${viewBoxAttr} class="${classes}" role="img" aria-hidden="true">
                <use xlink:href="#icon-${name}"></use>
            </svg>`
  },
}
