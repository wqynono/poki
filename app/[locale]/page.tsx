import GameGrid from "@/components/game-grid"
import Header from "@/components/Header"
import AdComponent from "@/components/ad" // 导入广告组件
import LazyAd from "@/components/LazyAd" // 导入广告组件
import { defaultGamelist } from "@/data/game"
import Footer from "@/components/footer"
import { getTranslations } from "next-intl/server"
import Intro from "@/components/intro"
import adConfig from "@/data/adConfig"
export default async function HomePage() {
  const t = await getTranslations("HomePage")

  return (
    <div className="min-h-screen">
      <div className="min-h-screen max-w-full mx-auto xl:max-w-[91.67%]">
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
                  {t("advertisement")}
                </div>
                <div className="block min-w-[320px] min-height-[270px] mx-auto">
                  <AdComponent data-ad-slot={adConfig.zfx[0]} data-ad-format={"auto"} data-full-width-responsive={true} />
                </div>
              </div>
            </div>

            {/* 广告区域2（懒加载） */}
            <LazyAd />

            {/* 游戏网格 */}
            <GameGrid
              gamelist={defaultGamelist.filter((game) => game.isfunny === "1")}
              gamePcLength={defaultGamelist.filter((game) => game.isfunny === "1").length}
            />
          </div>
          <Intro />
          <Footer />
        </div>

      </div>
    </div>
  )
}

