
import Image from "next/image"
import Link from "next/link"
import { defaultGamelist, type Game } from "@/data/game"

export default function GameGrid({
  gamelist = defaultGamelist,
  gamePcLength = 49,
}: {
  gamelist?: Game[]
  gamePcLength?: number
}) { // 中间卡片的索引
  const middleIndex = [20, 21, 31, 41, 51, 61, 75, 78, 80, 91, 101, 120]


  return (
    <>

      {gamelist.map((game, index) => {

        return (
          middleIndex.includes(index) ? (
            <Link
              key={String(game.id)}
              className={`relative overflow-hidden cursor-pointer rounded-lg shadow-lg col-span-2 row-span-2 aspect-square group`}
              href={`/game/${game.name}`}
            >
              <Image
                alt={game.name}
                src={game.icon || "/placeholder.svg"}
                width={200}
                height={200}
                priority={index < 12 ? true : false} // 如果是LCP元素则标记为高优先级
                loading={index < 12 ? "eager" : "lazy"} // 禁用懒加载（对LCP元素很重要）
                placeholder="blur" // 添加模糊占位符
                className="w-full h-full object-cover"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmN2ZhIi8+PC9zdmc+"
              />
              {/* 游戏名称 - 默认隐藏，悬停时显示 */}
              <div
                className="
              absolute bottom-0 left-0 right-0 z-[6] p-1.5 text-white text-center text-xs font-bold
              opacity-0 pointer-events-none translate-y-2
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-y-0"
              >
                {game.name}
              </div>
              {/* 渐变遮罩 - 默认隐藏，悬停时显示 */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent
              opacity-0 transition-opacity duration-200
              group-hover:opacity-100 group-hover:animate-coAni"
              ></div>
            </Link>
          ) : (
            <Link
              key={String(game.id)}
              className={`relative overflow-hidden cursor-pointer rounded-lg shadow-lg col-span-1 row-span-1 aspect-square group`}
              href={`/game/${game.name}`}
            >
              <Image
                alt={game.name}
                src={game.icon || "/placeholder.svg"}
                width={120}
                height={120}
                priority={index < 12 ? true : false} // 如果是LCP元素则标记为高优先级
                loading={index < 12 ? "eager" : "lazy"} // 禁用懒加载（对LCP元素很重要）
                placeholder="blur" // 添加模糊占位符
                className="w-full h-full object-cover"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmN2ZhIi8+PC9zdmc+"

              />
              {/* 游戏名称 - 默认隐藏，悬停时显示 */}
              <div
                className="
              absolute bottom-0 left-0 right-0 z-[6] p-1.5 text-white text-center text-xs font-bold
              opacity-0 pointer-events-none translate-y-2
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-y-0"
              >
                {game.name}
              </div>
              {/* 渐变遮罩 - 默认隐藏，悬停时显示 */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent
              opacity-0 transition-opacity duration-200
              group-hover:opacity-100 group-hover:animate-coAni"
              ></div>
            </Link>
          )





        )
      })}
    </>
  )
}

