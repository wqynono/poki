
import Image from "next/image"
import Link from "next/link"
import { defaultGamelist, type Game } from "@/data/game"

export default function GameGrid({
  gamelist = defaultGamelist,
  gamePcLength = 49,
}: {
  gamelist?: Game[]
  gamePcLength?: number
}) {
  return (
    <>
      {gamelist.map((game, index) => {
        // 中间卡片的索引
        const middleIndex = [6, 20, 32, 50, 60, 75]
        const isMiddleCard = middleIndex.includes(index) && gamePcLength > 18

        return (
          <Link
            key={String(game.id)}
            className={`
              relative overflow-hidden cursor-pointer rounded-md shadow-md col-span-1 row-span-1
              ${isMiddleCard ? "md:col-span-2 md:row-span-2" : ""}
              aspect-square
              group
            `}
            href={`/game/${game.name}`}
          >
            <Image
              alt={game.name}
              loading="lazy"
              src={game.icon || "/placeholder.svg"}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            {/* 游戏名称 - 默认隐藏，悬停时显示 */}
            <div
              className="
              absolute bottom-0 left-0 right-0 z-[6] p-1.5 text-white text-center text-xs font-bold
              opacity-0 pointer-events-none translate-y-2
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-y-0
            "
            >
              {game.name}
            </div>
            {/* 渐变遮罩 - 默认隐藏，悬停时显示 */}
            <div
              className="
              absolute inset-0 bg-gradient-to-t from-black/30 to-transparent
              opacity-0 transition-opacity duration-200
              group-hover:opacity-100 group-hover:animate-coAni"
            ></div>
          </Link>
        )
      })}
    </>
  )
}

