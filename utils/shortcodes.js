module.exports = {
  icon: function (name, classes) {
    return `<svg class="${classes}" role="img" aria-hidden="true">
                <use xlink:href="#icon-${name}"></use>
            </svg>`
  },
}
