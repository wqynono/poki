/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'funnytiming A free online games platform',
  author: 'funnytiming.com',
  name: 'funnytiming.com',
  headerTitle: 'Most popular games include hits like',
  description: 'funnytiming.com - A free online gaming platform. Our expert team"s goal is to provide the best selection of games on the web and deliver an excellent experience for players.',
  language: 'en-US, zh-CN, zh-TW, ja-JP, ko-KR,ru-RU',
  theme: 'system', // system, dark or light
  siteUrl: process.env.BASE_PATH || 'https://funnytiming.com',
  siteLogo: `${process.env.BASE_PATH || 'https://funnytiming.com'}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || 'https://funnytiming.com'}/static/images/twitter-card.png`,
  locale: 'en-US, zh-CN, zh-TW, ja-JP, ko-KR,ru-RU', // 多语言支持
  stickyNav: false,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-L55CXQZL4S', // e.g. G-XXXXXXX
    },
  }
}

export default siteMetadata