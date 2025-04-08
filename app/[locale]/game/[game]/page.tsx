import Link from "next/link"
import AdComponent from "@/components/ad"
import { defaultGamelist, type Game } from "@/data/game"
import GameGrid from "@/components/game-grid"
import { getTranslations } from "next-intl/server"
import Footer from "@/components/footer"
import GameShowcase from "@/components/game-showcase"
import RecentlyPlayedSection from "@/components/recently-played-section"
import { History } from "lucide-react"
import Intro from "@/components/intro"
import adConfig from "@/data/adConfig"
import type { Metadata } from 'next'
import siteMetadata from "@/data/siteMetadata"
type Props = {
  params: Promise<{ game: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { game } = await params

  return {
    title: game,
    description: defaultGamelist.find((item) => item.name === game)?.desc_text,
  };
}

export default async function GamePage({ params }: Props) {
  const t = await getTranslations("Game")
  const tHome = await getTranslations("HomePage")
  const { game } = await params

  const gameDetail: Game = defaultGamelist.find((item) => item.name === game) || ({} as Game)
  const showGames = defaultGamelist.filter(
    (item) => item.category === gameDetail.category && item.name !== gameDetail.name,
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "game",
    "name": gameDetail.name,
    "url": `${siteMetadata.siteUrl}/games/${game}`,
    "description": gameDetail.desc_text,
    "image": gameDetail.icon,
    "genre": gameDetail.category,
    "gamePlatform": gameDetail.type,
    "applicationCategory": "Game",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": gameDetail.rating,
      "ratingCount": 100,
      "bestRating": "5",
    },
    "publisher": {
      "@type": "Organization",
      "name": siteMetadata.name
    },
    "datePublished": gameDetail.create_time,
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
      <div className="min-h-screen max-w-full mx-auto xl:max-w-[91.67%]">
        <div className="mx-auto px-4 py-6">
          {/* 头部区域 */}
          <Link
            href="/"
            title="Home"
            aria-label="Home"
            className="flex md:hidden w-9 h-9 mb-2 rounded-lg border-[#5d6b842e] bg-white  items-center justify-center primary-shadow"
          >
            <svg
              className="w-6 h-6 fill-black"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3210"
            >
              <path
                d="M999.103969 450.980217 600.03496 32.435355C559.394816-10.188151 492.394773-10.891714 450.867491 30.861655L26.049704 457.992209C-23.655972 507.968481 1.212199 568.281046 71.688022 567.83196L191.983925 567.065422 156.438281 531.756441 156.438281 917.836305C156.438281 976.336883 203.589196 1023.825676 261.911636 1023.825676L389.99329 1023.825676 389.99329 953.206301 261.911636 953.206301C242.721404 953.206301 227.0793 937.452108 227.0793 917.836305L227.0793 531.756441C227.0793 512.167492 211.12822 496.322622 191.533656 496.447477L71.237753 497.214033C66.173938 497.246289 62.895469 496.713148 61.736428 496.22598 63.980271 497.169102 67.084328 499.993735 69.04654 504.752651 70.980045 509.441972 70.786089 513.494624 69.931418 515.610663 70.455361 514.313455 72.463158 511.484602 76.143505 507.784218L500.961291 80.653664C514.458349 67.083127 535.692465 67.306108 548.901395 81.159669L947.970422 499.704531C951.487338 503.393087 953.386928 506.221746 953.891186 507.578027 953.219595 505.771654 953.125848 502.205128 954.837927 498.082651 956.584273 493.877656 959.306191 491.320776 961.229598 490.464427 960.049848 490.989677 956.841363 491.570786 951.877986 491.602406L952.328255 562.22035C1022.230896 561.774919 1047.266224 501.492949 999.103969 450.980217ZM774.238215 1023.825676C832.500577 1023.825676 879.711571 976.292569 879.711571 917.836305L879.711571 527.597754 844.616195 562.906718 952.328255 562.22035 951.877986 491.602406 844.165926 492.288773C824.747205 492.412516 809.070551 508.184576 809.070551 527.597754L809.070551 917.836305C809.070551 937.402462 793.373788 953.206301 774.238215 953.206301L646.156562 953.206301 646.156562 1023.825676 774.238215 1023.825676ZM582.482144 670.786834C582.575273 670.786834 582.632792 1023.982363 582.632792 1023.982363L653.273812 1023.982363 653.273812 670.618548C653.273812 631.73658 621.484606 600.16746 582.482144 600.16746L441.501384 600.16746C402.513769 600.16746 370.709699 631.646628 370.709699 670.618548L441.350736 670.618548C441.350736 670.806978 582.482144 670.786834 582.482144 670.786834ZM441.350736 670.618548 370.709699 670.618548 370.709699 1023.982363 441.350736 1023.982363 441.350736 670.618548Z"
                fill="#302B63"
                p-id="3211"
              ></path>
            </svg>
          </Link>
          {/* 主内容区域 */}
          <div
            className="grid gap-4 justify-center grid-cols-3 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 2xl:grid-cols-14"
            id="content"
            style={{ height: "auto !important" }}
          >
            {/* 广告区域1 */}
            <div
              className="bg-white col-span-3 row-span-3 row-start-2 col-start-1 border-1 border-[#cecece] rounded-lg overflow-hidden  min-h-[300px]
              md:row-start-6 md:col-start-1
              lg:row-start-2 lg:col-start-7
              xl:row-start-2 xl:col-start-10
              2xl:row-start-2 2xl:col-start-12"
              style={{ height: "auto !important" }}
            >
              <div style={{ height: "auto !important", minHeight: "0px !important" }}>
                <div className="w-full flex items-center justify-center text-center text-[#747171] font-medium">
                  {t("advertisement")}
                </div>
                <div className="block min-w-[320px] min-height-[270px]">
                  <AdComponent data-ad-slot={adConfig.hx} data-ad-format={"auto"} data-full-width-responsive={true} />
                </div>
              </div>
            </div>

            {/* 广告区域2（懒加载） */}
            {/* <LazyAd /> */}
            {/* 游戏主体 - 直接放在主grid布局中 */}
            <div
              className="col-span-3 min-h-[250px] row-start-1 md:col-span-7  
              md:row-span-4 md:min-h-[500px] flex flex-col bg-white rounded-md primary-shadow
              lg:col-span-6 lg:row-span-4 lg:row-start-2 lg:col-start-1
              xl:col-span-8 xl:row-span-5 xl:row-start-2 xl:col-start-2
              2xl:col-span-9 2xl:row-span-5 2xl:row-start-2 2xl:col-start-3"
            >
              <GameShowcase game={gameDetail as Game} />
            </div>

            {/* 游戏网格 */}
            <GameGrid gamelist={showGames} gamePcLength={showGames.length} />

            {/* 玩过的游戏 */}
            <div className="row-start-5 col-start-1 col-end-[-1]  md:row-start-1">
              <div className="flex flex-row justify-between items-center">
                {/* 头部区域 */}
                <Link
                  href="/"
                  title="Home"
                  aria-label="Home"
                  className="hidden md:flex w-9 h-9 mb-2 rounded-lg border-[#5d6b842e] bg-white  items-center justify-center primary-shadow"
                >
                  <svg
                    className="w-6 h-6 fill-black"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3210"
                  >
                    <path
                      d="M999.103969 450.980217 600.03496 32.435355C559.394816-10.188151 492.394773-10.891714 450.867491 30.861655L26.049704 457.992209C-23.655972 507.968481 1.212199 568.281046 71.688022 567.83196L191.983925 567.065422 156.438281 531.756441 156.438281 917.836305C156.438281 976.336883 203.589196 1023.825676 261.911636 1023.825676L389.99329 1023.825676 389.99329 953.206301 261.911636 953.206301C242.721404 953.206301 227.0793 937.452108 227.0793 917.836305L227.0793 531.756441C227.0793 512.167492 211.12822 496.322622 191.533656 496.447477L71.237753 497.214033C66.173938 497.246289 62.895469 496.713148 61.736428 496.22598 63.980271 497.169102 67.084328 499.993735 69.04654 504.752651 70.980045 509.441972 70.786089 513.494624 69.931418 515.610663 70.455361 514.313455 72.463158 511.484602 76.143505 507.784218L500.961291 80.653664C514.458349 67.083127 535.692465 67.306108 548.901395 81.159669L947.970422 499.704531C951.487338 503.393087 953.386928 506.221746 953.891186 507.578027 953.219595 505.771654 953.125848 502.205128 954.837927 498.082651 956.584273 493.877656 959.306191 491.320776 961.229598 490.464427 960.049848 490.989677 956.841363 491.570786 951.877986 491.602406L952.328255 562.22035C1022.230896 561.774919 1047.266224 501.492949 999.103969 450.980217ZM774.238215 1023.825676C832.500577 1023.825676 879.711571 976.292569 879.711571 917.836305L879.711571 527.597754 844.616195 562.906718 952.328255 562.22035 951.877986 491.602406 844.165926 492.288773C824.747205 492.412516 809.070551 508.184576 809.070551 527.597754L809.070551 917.836305C809.070551 937.402462 793.373788 953.206301 774.238215 953.206301L646.156562 953.206301 646.156562 1023.825676 774.238215 1023.825676ZM582.482144 670.786834C582.575273 670.786834 582.632792 1023.982363 582.632792 1023.982363L653.273812 1023.982363 653.273812 670.618548C653.273812 631.73658 621.484606 600.16746 582.482144 600.16746L441.501384 600.16746C402.513769 600.16746 370.709699 631.646628 370.709699 670.618548L441.350736 670.618548C441.350736 670.806978 582.482144 670.786834 582.482144 670.786834ZM441.350736 670.618548 370.709699 670.618548 370.709699 1023.982363 441.350736 1023.982363 441.350736 670.618548Z"
                      fill="#302B63"
                      p-id="3211"
                    ></path>
                  </svg>
                </Link>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2 bg-white text-[#0B459C] px-3 py-1.5 rounded-lg hover:bg-[#0B459C] hover:text-white  transition-colors border-1">
                    <span className={`icon iconfont text-lg`}>{tHome("recentlyPlayed")}</span>
                    <History className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <RecentlyPlayedSection />
            </div>
          </div>
        </div>
        <div className=" text-sm mb-4 leading-relaxed space-y-6 bg-white primary-shadow p-6 rounded-xl">
          <h3 className="text-[14px]">{gameDetail.category} <span className="px-2">{">"}</span> {gameDetail.name}</h3>
          <h2 className="font-bold text-xl">{gameDetail.name}</h2>
          <p className="text-lg text-gray-700">{gameDetail.desc_text}</p>
          <div>
            <Link href={`/category/${gameDetail.category}`} className="bg-gray-100 rounded-2xl p-2.5 font-bold hover:bg-gray-300">{gameDetail.category} Gmaes</Link>
          </div>
        </div>
        <Intro />
        <Footer />
      </div>
    </div>
  )
}

