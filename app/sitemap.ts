import type { MetadataRoute } from 'next'
import { defaultGamelist, categoryList } from '@/data/game'
import { laguageList } from '@/i18n/routing'

// 导出一个默认的异步函数，用于生成网站地图
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // 定义网站的URL
    const BASE_URL = "https://funnytiming.com"
    const languages = laguageList
    const lastModified = new Date();
    const entries: MetadataRoute.Sitemap = [];

    // 首页多语言
    for (const lang of languages) {
        entries.push({
            url: `${BASE_URL}/${lang}`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 1,
        });
    }

    // 分类页多语言
    for (const lang of languages) {
        for (const category of categoryList) {
            entries.push({
                url: `${BASE_URL}/${lang}${category.href}`,
                lastModified,
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        }
    }

    // 游戏页多语言
    for (const lang of languages) {
        for (const game of defaultGamelist) {
            entries.push({
                url: `${BASE_URL}/${lang}${game.name}`,
                lastModified,
                changeFrequency: 'daily',
                priority: 0.9,
            });
        }
    }
    return entries;
}

// import type { MetadataRoute } from 'next'

// export default function sitemap(): MetadataRoute.Sitemap {
//     const URL = "https://funnytiming.com/"
//     return [
//         {
//             url: URL,
//             lastModified: new Date(),
//             changeFrequency: 'daily',
//             priority: 1,
//         },
//         {
//             url: URL + '/about',
//             lastModified: new Date(),
//             changeFrequency: 'monthly',
//             priority: 0.8,
//         },
//         {
//             url: URL + '/privacy',
//             lastModified: new Date(),
//             changeFrequency: 'monthly',
//             priority: 0.5,
//         },
//     ]
// }