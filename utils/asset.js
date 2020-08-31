const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

// Get config
const config = require('@config')

// Size of asset hash
const SIZE = 8

// Hash function
function hashContent(content) {
  return crypto.createHash('md5').update(content).digest('hex').slice(0, SIZE)
}

module.exports = (content, extension) => {
  // Hash content
  const hash = hashContent(content)

  // Output assets directory
  const assetsDir = path.join(
    process.cwd(),
    config.dir.output,
    config.dir.assets
  )

  // Ensure the assets folder exists
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, {
      recursive: true,
    })
  }

  // Save hashed asset file
  const filename = `${hash}.${extension}`
  fs.writeFileSync(path.join(assetsDir, filename), content)

  // Output root path from output directory
  return path.posix.join('/', config.dir.assets, filename)
}

module.exports.hashContent = hashContent
