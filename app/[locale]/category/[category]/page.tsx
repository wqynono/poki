import { getTranslations } from "next-intl/server";
import GameGrid from "@/components/game-grid";
import AdComponent from "@/components/ad"; // 导入广告组件
import { defaultGamelist } from "@/data/game";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import adConfig from "@/data/adConfig";
import type { Metadata } from 'next'
import siteMetadata from "@/data/siteMetadata";
type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { category } = await params
  const tHome = await getTranslations("HomePage");
  const t = await getTranslations("Categories");
  const tDesc = await getTranslations("CategoriesDesc");

  return {
    title: `${t(category.toLowerCase())}${tHome("games")}`,
    description: tDesc(category.toLowerCase()),
  };
}

export default async function Category({ params }: Props) {
  const t = await getTranslations("HomePage"); // 获取 HomePage 翻译
  const tCategories = await getTranslations("Categories"); // 获取 HomePage 翻译
  const { category } = await params; // 解构 category 参数
  const tDesc = await getTranslations("CategoriesDesc");

  // 根据分类过滤游戏列表
  const gamelist = defaultGamelist.filter((game) => game.category === category);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${tCategories(category.toLowerCase())} - ${siteMetadata.name}`,
    "url": siteMetadata.siteUrl,
    "description": `${tDesc(category.toLowerCase())}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": gamelist
    }
  }

  return (
    <div className="min-h-screen">
      <section>
        <script
          async
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <div className="max-w-full mx-auto xl:max-w-[91.67%]">
        <div className="mx-auto px-4 py-6">
          {/* 主内容区域 */}
          <div
            className="grid gap-4 justify-center grid-cols-3 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 2xl:grid-cols-14"
            id="content"
            style={{ height: "auto !important" }}
          >
            {/* 头部区域 */}
            <Header />

            {/* 广告区域 */}
            <div
              className="bg-white col-span-3 row-span-3 row-start-4 md:col-span-3 md:row-span-3 lg:col-start-1 lg:col-span-3 lg:row-start-2 border-1 border-[#cecece] rounded-lg overflow-hidden"
              style={{ height: "auto !important", minHeight: "0px !important" }}
            >
              <div style={{ height: "auto !important", minHeight: "0px !important" }}>
                <div className="w-full flex items-center justify-center text-center text-[#747171] font-medium">
                  {t("advertisement")}
                </div>
                <div className="block min-w-[320px] min-height-[270px]">
                  <AdComponent
                    data-ad-slot={adConfig.zfx[0]}
                    data-ad-format={"auto"}
                    data-full-width-responsive={true}
                  />
                </div>
              </div>
            </div>

            {/* 展示游戏类别 */}
            <div className="col-start-2">
              <div className="text-left font-semibold flex justify-center items-center w-full h-full">
                {t("categoryGames", { category })}
              </div>
            </div>

            {/* 游戏网格 */}
            <GameGrid gamelist={gamelist} gamePcLength={gamelist.length} />
          </div>
        </div>
        <Intro />
        <Footer />
      </div>
      <div>
      </div>
    </div>
  );
}