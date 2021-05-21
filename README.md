# Eleventy Starter

A starter project built with Eleventy, Webpack and PostCSS.

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b8df50f-2855-4db2-968f-a0e9a4221c83/deploy-status)](https://app.netlify.com/sites/ess-eleventy-starter/deploys)

Demo: https://ess-eleventy-starter.netlify.app

## Contents

- [Project overview](#project-overview)
- [Getting started](#getting-started)
  - [Install dependencies](#install-dependencies)
  - [Working locally](#working-locally)
  - [Creating a production build](#creating-a-production-build)
- [Deployment](#deployment)
- [Credits](#credits)
- Deploy this to your own site

---

## Project Overview

- The project uses [Eleventy](https://11ty.io) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/) (can be changed if you want)
- PostCSS set up to handle:
  - CSS Imports
  - Tailwind CSS
  - Autoprefixer
- HTML minified in production
- CSS inlined and minified in production
- Webpack used to bundle scripts
- Scripts optimized for production
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

---

## Getting Started

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm start
```

### Tailwind config viewer

Spin up a [local UI tool](https://github.com/rogden/tailwind-config-viewer) for visualizing the Tailwind CSS configuration file.

```
npm run tw-config
```

### Creating a production build

Minify HTML, compress JS, inline and minify CSS.

```
npm run build
```

---

#### Credits

- [Eleventy](https://11ty.io)
- [PostCSS](https://github.com/postcss)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)

## Deploy this to your own site

These builders are amazing—try them out to get your own Eleventy site in a few clicks!

- [Get your own Eleventy web site on Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/eastslopestudio/eleventy-starter)
- [Get your own Eleventy web site on Vercel](https://vercel.com/import/project?template=eastslopestudio%2Feleventy-starter)
