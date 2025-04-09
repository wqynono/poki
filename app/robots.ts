import type { MetadataRoute } from 'next'
import { defaultGamelist, categoryList } from '@/data/game'
import { laguageList } from '@/i18n/routing'

export default function robots(): MetadataRoute.Robots {
    const URL = "https://poki-my.vercel.app/"
    const languages = laguageList // ['en', 'zh', 'ja', 'ko', 'ru']


    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/category',
                    '/game',
                    '/about',
                    '/privacy',
                    '/search',
                    ...categoryList.map(item => `/category/${item.name}`),
                    ...defaultGamelist.map(item => `/game/${item.name}`),

                    ...languages.map(lang => `/${lang}`),
                    ...languages.flatMap(lang =>
                        categoryList.map(item => `/${lang}/category/${item.name}`)),
                    ...languages.flatMap(lang =>
                        defaultGamelist.map(item => `/${lang}/game/${item.name}`)),
                    ...languages.map(lang => `/${lang}/about`),
                    ...languages.map(lang => `/${lang}/privacy`),
                    ...languages.map(lang => `/${lang}/search`),
                    '/sitemap.xml', // 允许 sitemap.xml 路径
                ],
                disallow: [
                    // 禁止爬取可能产生重复内容的路径
                    '/?*',
                    '/search?*'
                ]
            }, {
                userAgent: 'Googlebot-Image',
                allow: [
                    // 允许所有语言的游戏图片
                    ...languages.flatMap(lang =>
                        defaultGamelist.map(item => `/${lang}/game/${item.name}`))
                ],
                disallow: [
                    '/*.svg$',
                    '/*.gif$'
                ]
            }
        ],
        sitemap: `${URL}/sitemap.xml`,
        // 可选：主机配置（通常不需要，Next.js会自动处理）
        host: URL
    }
}