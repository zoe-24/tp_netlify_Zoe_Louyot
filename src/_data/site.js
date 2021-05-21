module.exports = {
  isProduction: process.env.ELEVENTY_ENV === 'production',
  title: 'Eleventy Starter',
  description: 'A starter project built with Eleventy, Webpack and PostCSS.',
  url: 'https://ess-eleventy-starter.netlify.app',
  author: 'East Slope Studio',
  meta: {
    default_social_image: '/static/images/social-image.jpg',
    facebook: 'https://facebook.com/eastslopestudio',
    twitter: '@eastslopestudio',
  },
  currentYear: new Date().getFullYear(),
}
