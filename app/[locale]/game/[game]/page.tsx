import Image from "next/image"
import Link from "next/link"
import AdComponent from "@/components/ad"
import { defaultGamelist, type Game } from "@/data/game"
import GameGrid from "@/components/game-grid"

export default function GamePage() {
  // 模拟游戏数据 - 实际应用中应该从params或API获取
  const game: Game = defaultGamelist[0]

  return (
    <div className="min-h-screen">
      <div className="min-h-screen max-w-full mx-auto xl:max-w-[91.67%]">
        <div className="mx-auto px-4 py-6">
          {/* 主内容区域 - 单一grid布局 */}
          <div
            className="grid gap-4 justify-center grid-cols-3 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 2xl:grid-cols-14"
            id="content"
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


            {/* 游戏主体 - 直接放在主grid布局中 */}
            <div
              className="col-span-3 md:col-span-4 md:col-start-4 md:row-start-2 md:row-span-4 lg:col-span-6 lg:col-start-4 lg:row-start-2 lg:row-span-4 xl:col-span-8 xl:col-start-4 xl:row-start-2 xl:row-span-5 2xl:col-span-9 2xl:col-start-4 2xl:row-start-2 2xl:row-span-5 
              min-h-[7.5rem] flex flex-col bg-white rounded-md shadow-[0px_2px_12px_4px_#5d6b8414,0px_23px_9px_0px_#5d6b8408,0px_13px_8px_0px_#5d6b8417,0px_6px_6px_0px_#5d6b8426,0px_1px_3px_0px_#5d6b842e]"
            >
              {/* 游戏顶部 */}
              <div className="top min-h-[5.8333333333rem] flex-1 relative">
                <Image
                  src={game.icon || "/placeholder.svg"}
                  alt={game.name}
                  fill
                  className="absolute h-full w-full object-cover rounded-t-md"
                />
              </div>

              {/* 游戏底部 */}
              <div className="bottom flex justify-between portrait:h-[1.6666666667rem] portrait:p-[.1388888889rem] landscape:h-[64px]">
                <div className="left text-[#002b51] font-[Roboto] text-[.4166666667rem] font-bold ml-[.2777777778rem] w-[60%] portrait:w-[60%] landscape:w-auto">
                  <Image
                    src={game.icon || "/placeholder.svg"}
                    alt={game.name}
                    width={40}
                    height={40}
                    className="align-middle rounded-[.1388888889rem] m-0 mx-[.1388888889rem] portrait:w-[.4861111111rem] portrait:h-[.4861111111rem] portrait:m-[.1388888889rem] landscape:h-[40px] landscape:w-[40px]"
                  />
                  {game.name}
                </div>

                <div className="right flex justify-center items-center portrait:w-[40%] landscape:w-[20%]">
                  <div className="topsvg flex-2 w-full flex justify-center items-center">
                    <div className="son h-full relative flex flex-col items-center text-[#002b51] font-[Roboto] text-[.2777777778rem] font-medium rounded-lg cursor-pointer w-[50px] transition-all duration-500 py-[10px] portrait:nth-of-type-2:mr-[-51px] landscape:last:w-[24px]">
                      <svg className="text-[#55a9f3] w-[25px] h-[25px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                      </svg>
                      喜欢
                    </div>

                    <div className="son h-full relative flex flex-col items-center text-[#002b51] font-[Roboto] text-[.2777777778rem] font-medium rounded-lg cursor-pointer w-[50px] transition-all duration-500 py-[10px]">
                      <svg className="text-[#55a9f3] w-[25px] h-[25px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" fill="currentColor" />
                      </svg>
                      分享
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* 游戏网格 */}
            <GameGrid
              gamelist={defaultGamelist}
              gamePcLength={defaultGamelist.length}
            />
          </div>

          {/* 游戏介绍 - 放在grid布局外面 */}
          <div className="intro bg-white p-[.4166666667rem] mt-[.6944444444rem] rounded-md shadow-[0px_2px_12px_4px_#5d6b8414,0px_23px_9px_0px_#5d6b8408,0px_13px_8px_0px_#5d6b8417,0px_6px_6px_0px_#5d6b8426,0px_1px_3px_0px_#5d6b842e]">
            <div className="nav text-[#002b51] font-[Roboto] text-[.2777777778rem] font-normal leading-[20px]">
              <Link href="/" className="text-[#002b51]">首页</Link>
              <span className="mx-[.1388888889rem]">&gt;</span>
              <Link href={`/category/${game.category}`} className="text-[#002b51]">{game.category}</Link>
              <span className="mx-[.1388888889rem]">&gt;</span>
              <span>{game.name}</span>
            </div>

            <h1 className="text-[#002b51] text-[20px] font-black leading-[.8333333333rem] tracking-[.0138888889rem]">
              {game.name}
            </h1>

            <div className="label1 mt-[-0.2777777778rem]">
              <span className="itemm mr-[.2777777778rem] rounded-[3.1944444444rem] py-0 px-[.3472222222rem] inline-block shadow-none bg-[#e5e7eb] text-[#5d6b84] font-[Roboto] text-[.2777777778rem] font-semibold leading-[20px]">
                {game.category}
              </span>
              <Link href={`/category/${game.category}`} className="cateLabel mr-[.2777777778rem] rounded-[3.1944444444rem] py-0 px-[.3472222222rem] inline-block shadow-none bg-[#e5e7eb] text-[#5d6b84] hover:text-[#55a9f3] font-[Roboto] text-[.3055555556rem] font-semibold leading-[20px] cursor-pointer">
                {game.category}
              </Link>
            </div>

            <p className="text-[#002b51] font-[Roboto] text-[18px] font-normal leading-[20px] tracking-[.0138888889rem]">
              {game.desc_text}
            </p>
          </div>
          {/* 相关游戏 - 也放在grid布局外面 */}
          {/* <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">相关游戏</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {defaultGamelist.slice(0, 8).map((relatedGame) => (
                <Link 
                  key={relatedGame.id} 
                  href={`/game/${relatedGame.name}`}
                  className="gameIcon relative transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image 
                      src={relatedGame.icon || "/placeholder.svg"} 
                      alt={relatedGame.name} 
                      fill 
                      className="object-cover"
                    />
                    <div className="co absolute inset-0 bg-gradient-to-t from-[#0000004d] via-transparent to-transparent opacity-0"></div>
                    <div className="gameName bottom-0 text-white font-bold text-xs left-0 p-[6px] absolute right-0 z-[6] opacity-0 pointer-events-none text-center transform translate-y-2 transition-all duration-300 ease-in-out w-full">
                      {relatedGame.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>

    </div>
  )
}
