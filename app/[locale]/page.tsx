import GameGrid from "@/components/game-grid"
import AdComponent from "@/components/ad" // 导入广告组件
import LazyAd from "@/components/LazyAd" // 导入广告组件
import { defaultGamelist } from "@/data/game"

export default function HomePage() {
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
            <div className="col-span-1 md:col-span-2 h-[94px] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2.5 bg-white">
              <a href="index.html" className="block h-1/2">
                <h1 className="flex items-center justify-center h-full text-3xl font-bold text-[#302B63] font-['titleFont',cursive]">
                  cqlln
                </h1>
              </a>

              <div className="h-1/2 flex items-center justify-center border-t-2 border-[#f0f5fc] rounded-b-lg bg-white">
                <a
                  href="./index.html"
                  title="Home"
                  aria-label="Home"
                  className="flex items-center justify-center h-full w-1/2 border-r border-[#f0f5fc] hover:bg-[#f0f5fc]"
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
                </a>
                <button
                  type="button"
                  title="search"
                  aria-label="search"
                  id="openModal"
                  className="flex items-center justify-center h-full w-1/2 border-l border-[#f0f5fc] hover:bg-[#f0f5fc] bg-transparent border-0 cursor-pointer font-inherit text-base"
                >
                  <span className="sr-only">你今天要玩什么呢？</span>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2312"
                  >
                    <path
                      d="M469.312 42.688a426.688 426.688 0 1 0 270.08 756.992l169.088 169.152a42.688 42.688 0 0 0 60.352-60.352l-169.152-169.152A426.688 426.688 0 0 0 469.312 42.624zM128 469.312a341.312 341.312 0 1 1 682.688 0A341.312 341.312 0 0 1 128 469.312z"
                      fill="#302B63"
                      p-id="2313"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* 广告区域1 */}
            <div
              className="col-span-3 row-span-3 row-start-4 md:col-span-3 md:row-span-3 lg:col-start-1 lg:col-span-3 lg:row-span-3 lg:row-start-2 border-1 border-[#cecece] rounded-lg overflow-hidden   bg-white"
              style={{ height: "auto !important" }}
            >
              <div style={{ height: "auto !important", minHeight: "0px !important" }}>
                <div className="w-full flex items-center justify-center text-center text-[#747171] font-medium">
                  Advertisement
                </div>
                <div className="block">
                  <AdComponent data-ad-slot={"222222"} data-ad-format={"auto"} data-full-width-responsive={true} />
                </div>
              </div>
            </div>

            {/* 广告区域2（懒加载） */}
            <LazyAd />

            {/* 游戏网格 */}
            <GameGrid
              gamelist={defaultGamelist}
              gamePcLength={defaultGamelist.length}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

