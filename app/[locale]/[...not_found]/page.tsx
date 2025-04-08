import siteMetadata from "@/data/siteMetadata"
import NotFound from "@/components/notFound"
export default async function HomePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "404 - 页面未找到",
        "url": siteMetadata.siteUrl + "/not_found",
        "description": "not found page"
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center  text-gray-800">
            <section>
                <script
                    async
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </section>
            <NotFound />
        </div>
    )
}

