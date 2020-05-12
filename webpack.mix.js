const mix = require('laravel-mix')

/**
 * Config
 */
const config = {
  src: 'src/assets',
  dist: 'dist/assets',
}

/**
 * Set paths
 */
mix.setPublicPath(config.dist)
mix.setResourceRoot(`/${config.src}/`)

/**
 * Process Javascript
 *
 * @link https://laravel.com/docs/master/mix#working-with-scripts
 */
mix.js(`${config.src}/js/app.js`, 'js')

/**
 * Process Styles
 *
 * @link https://laravel.com/docs/master/mix#postcss
 */
mix.postCss(`${config.src}/css/app.css`, 'css', [
  require('postcss-import'),
  require('tailwindcss')('./tailwind.config.js'),
  require('postcss-nested'),
])

/**
 * Sourcemaps
 *
 * Provide extra debugging information to your browser's
 * developer tools when using compiled assets.
 *
 * @link https://laravel.com/docs/master/mix#css-source-maps
 */
mix.sourceMaps()

/**
 * Disable mix-manifest.json
 *
 * @link https://github.com/JeffreyWay/laravel-mix/issues/580#issuecomment-457561221
 */
Mix.manifest.refresh = (_) => void 0
