import type { MetadataRoute } from 'next'
import { defaultGamelist, categoryList } from '@/data/game'
import { laguageList } from '@/i18n/routing'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const URL = "https://cqlln.com"
    const languages = laguageList // ['en', 'zh', 'ja', 'ko', 'ru']

    const defaultRoutes = [
        {
            url: `${URL}/`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
            alternates: {
                languages: languages.reduce((acc, lang) => ({
                    ...acc,
                    [lang]: `${URL}/${lang}/`
                }), {})
            }
        },
        {
            url: `${URL}/category`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
            alternates: {
                languages: languages.reduce((acc, lang) => ({
                    ...acc,
                    [lang]: `${URL}/${lang}/category`
                }), {})
            }
        },
        {
            url: `${URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
            alternates: {
                languages: languages.reduce((acc, lang) => ({
                    ...acc,
                    [lang]: `${URL}/${lang}/about`
                }), {})
            }
        },
        {
            url: `${URL}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
            alternates: {
                languages: languages.reduce((acc, lang) => ({
                    ...acc,
                    [lang]: `${URL}/${lang}/privacy`
                }), {})
            }
        },
        {
            url: `${URL}/search`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
            alternates: {
                languages: languages.reduce((acc, lang) => ({
                    ...acc,
                    [lang]: `${URL}/${lang}/search`
                }), {})
            }
        }
    ]

    const categoryRoutes = categoryList.flatMap(item => {
        const baseRoutes = [
            {
                url: `${URL}/category/${item.name}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.8,
                alternates: {
                    languages: languages.reduce((acc, lang) => ({
                        ...acc,
                        [lang]: `${URL}/${lang}/category/${item.name}`
                    }), {})
                }
            }
        ]

        const langRoutes = languages.map(lang => ({
            url: `${URL}/${lang}/category/${item.name}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
            alternates: {
                languages: {
                    ...languages.reduce((acc, l) => ({
                        ...acc,
                        [l]: `${URL}/${l}/category/${item.name}`
                    }), {}),
                    'x-default': `${URL}/category/${item.name}`
                }
            }
        }))

        return [...baseRoutes, ...langRoutes]
    })

    const gameRoutes = defaultGamelist.flatMap(item => {
        const baseRoutes = [
            {
                url: `${URL}/game/${item.name}`,
                lastModified: new Date(),
                changeFrequency: 'daily' as const,
                priority: 1,
                alternates: {
                    languages: languages.reduce((acc, lang) => ({
                        ...acc,
                        [lang]: `${URL}/${lang}/game/${item.name}`
                    }), {})
                }
            }
        ]

        const langRoutes = languages.map(lang => ({
            url: `${URL}/${lang}/game/${item.name}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
            alternates: {
                languages: {
                    ...languages.reduce((acc, l) => ({
                        ...acc,
                        [l]: `${URL}/${l}/game/${item.name}`
                    }), {}),
                    'x-default': `${URL}/game/${item.name}`
                }
            }
        }))

        return [...baseRoutes, ...langRoutes]
    })

    return [...defaultRoutes, ...categoryRoutes, ...gameRoutes]
}