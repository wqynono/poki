/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'cqlln | A free online gaming platform',
  author: 'cqlln.com',
  headerTitle: 'Most popular games include hits like',
  description: 'A free online gaming platform. Our expert team"s goal is to provide the best selection of games on the web and deliver an excellent experience for players.Our game catalog is carefully curated by our team of experts. With thousands of games for all tastes and ages, around 2 million players choose {domain} every month to play and have fun.',
  language: 'en-US, zh-CN, zh-TW, ja-JP, ko-KR,ru-RU',
  theme: 'system', // system, dark or light
  siteUrl: 'https://cqlln.com',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  locale: 'en-US, zh-CN, zh-TW, ja-JP, ko-KR,ru-RU', // 多语言支持
  stickyNav: false,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-T55Q7JXN3M', // e.g. G-XXXXXXX
    },
  }
}

export default siteMetadata