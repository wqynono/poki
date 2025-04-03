import { getTranslations } from "next-intl/server"
import GameGrid from "@/components/game-grid"
import AdComponent from "@/components/ad"
import { type Game, defaultGamelist } from "@/data/game"
import { getSearchGames } from "@/api/game"
import Footer from "@/components/footer"
import Header from "@/components/Header"
import Intro from "@/components/intro"
import adConfig from "@/data/adConfig"
import type { Metadata } from 'next'

interface PageParams {
  locale: string
  searchValue: string
}
type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const tHome = await getTranslations("HomePage");
  const tA = await getTranslations("About");

  return {
    title: tHome("categoryGames", { category: (await params).category }),
    description: tA("joinUs"),
  };
}
export default async function Search({
  params,
}: {
  params: Promise<PageParams>
}) {
  // 等待params解析完成
  const resolvedParams = await params
  const searchValue = resolvedParams.searchValue || ""

  // 使用服务器端翻译
  const t = await getTranslations("Search")
  const tGame = await getTranslations("Game")

  // 在服务器端获取搜索结果
  let searchResults: Game[] = []
  let defaultGames: Game[] = []

  try {
    searchResults = await getSearchGames(searchValue)
    if (searchResults.length === 0) {
      defaultGames = defaultGamelist
    } else {
      defaultGames = searchResults
    }
  } catch (error) {
    console.error("搜索失败:", error)
    defaultGames = defaultGamelist
  }

  return (
    <>
      <div className="min-h-screen">
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

              {/* 广告区域1 */}
              <div
                className="col-span-3 row-span-3 row-start-4 md:col-span-3 md:row-span-3 lg:col-start-1 lg:col-span-3 lg:row-span-3 lg:row-start-2 border-1 border-[#cecece] rounded-lg overflow-hidden  "
                style={{ height: "auto !important" }}
              >
                <div style={{ height: "auto !important", minHeight: "0px !important" }}>
                  <div className="w-full flex items-center justify-center text-center text-[#747171] font-medium">
                    {tGame("advertisement")}
                  </div>
                  <div className="block min-w-[320px] min-height-[270px]">
                    <AdComponent data-ad-slot={adConfig.zfx[1]} data-ad-format={"auto"} data-full-width-responsive={true} />
                  </div>
                </div>
              </div>

              {/* 展示游戏类别 */}
              <div className="col-start-2">
                <div className="text-left font-semibold flex just-center items-center w-full h-full">
                  {t("categoryGames", { category: searchValue })}
                </div>
              </div>

              {/* 游戏网格 */}
              <GameGrid gamelist={defaultGames} gamePcLength={defaultGames.length} />
            </div>
          </div>
          <Intro />
          <Footer />
        </div>
        <div></div>

      </div>
    </>
  )
}

