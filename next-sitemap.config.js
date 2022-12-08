/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false, // Not needed unless site is large
  // ...other options, such as exclude: ['/admin/*', '/private/*']
};
