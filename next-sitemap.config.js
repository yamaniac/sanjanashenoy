/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.SITE_URL || 'https://sanjanashenoy.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
} 