/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL,
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.8,
  exclude: ["/server-sitemap.xml", "/admin", "/admin/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/about-us"),
    await config.transform(config, "/our-services"),
    await config.transform(config, "/tour-listing"),
    await config.transform(config, "/visa"),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/admin", "/admin/*"],
      },
    ],
    additionalSitemaps: [process.env.NEXT_PUBLIC_URL + "/server-sitemap.xml"],
  },
};
