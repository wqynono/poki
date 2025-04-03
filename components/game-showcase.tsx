"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { addRecentlyPlayedGame } from "@/utils/recently-plyed"
import { addLikedGame, removeLikedGame, isGameLiked } from "@/utils/like-game"
import type { Game } from "@/data/game"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation" // 添加路由跳转

export default function GameShowcase({ game = {} as Game }: { game?: Game }) {
  const t = useTranslations("Game")
  const tHome = useTranslations("HomePage")
  const router = useRouter() // 初始化路由
  const [showGame, setShowGame] = useState(false)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [likeCount, setLikeCount] = useState(17)
  const [dislikeCount, setDislikeCount] = useState(7)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  // 检测是否为移动设备
  useEffect(() => {
    setLiked(isGameLiked(game))
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // 初始检测
    checkIfMobile()

    // 监听窗口大小变化
    window.addEventListener("resize", checkIfMobile)

    // 清理监听器
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const playGame = () => {
    if (isMobile) {
      // 移动端：跳转到游戏框架页面
      router.push(`/gameframe/${encodeURIComponent(game.name)}`)
    } else {
      // PC端：显示iframe
      setShowGame(true)
      addRecentlyPlayedGame(game)
    }
    addRecentlyPlayedGame(game)
  }

  // 点赞函数
  const likeFn = () => {
    if (liked) {
      setLiked(false)
      setLikeCount((prev) => prev - 1)
      removeLikedGame(game)
    } else {
      setLiked(true)
      setLikeCount((prev) => prev + 1)
      addLikedGame(game)
      if (disliked) {
        setDisliked(false)
        setDislikeCount((prev) => prev - 1)
      }
    }
  }

  // 点踩函数
  const dislikeFn = () => {
    if (disliked) {
      setDisliked(false)
      setDislikeCount((prev) => prev - 1)
    } else {
      setDisliked(true)
      setDislikeCount((prev) => prev + 1)
      removeLikedGame(game)
      if (liked) {
        setLiked(false)
        setLikeCount((prev) => prev - 1)
      }
    }
  }

  return (
    <>
      <div className="relative w-full h-full min-h-[200px]">
        {!showGame && (
          <div className="absolute w-full h-[calc(100%-50px)]">
            <Image
              src={game.icon || "/placeholder.svg"}
              alt={game.name}
              width={1200}
              height={1200}
              priority={true}
              loading="eager"
              className="absolute h-full w-full object-cover rounded-t-md opacity-50"
            />

            <div className="absolute inset-0 flex items-center justify-center animate-jello  w-[150] h-[150] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
              <button title={tHome("playGame")} className="jello-animation cursor-pointer " onClick={playGame}>
                <svg height="110" viewBox="0 0 497 497" width="110">
                  <g>
                    <path
                      d="m248.5 0v497c137.243 0 248.5-111.257 248.5-248.5s-111.257-248.5-248.5-248.5z"
                      fill="#3b88f5"
                    ></path>
                    <path
                      d="m467 248.5c0-137.243-97.826-248.5-218.5-248.5-137.243 0-248.5 111.257-248.5 248.5s111.257 248.5 248.5 248.5c120.674 0 218.5-111.257 218.5-248.5z"
                      fill="#28abfa"
                    ></path>
                    <path
                      d="m376.978 222.511c0-.01-170.201-98.276-170.201-98.276-5.165-2.975-11.132-4.359-17.1-3.951l-.005 256.432c5.968.407 11.935-.977 17.096-3.956l170.21-98.271c8.977-5.185 15.022-14.878 15.022-25.989s-6.045-20.804-15.022-25.989z"
                      fill="#c4f3ff"
                    ></path>
                    <path
                      d="m348.935 274.489c7.807-5.185 13.065-14.878 13.065-25.989s-5.258-20.804-13.065-25.989c0-.01-148.026-98.276-148.026-98.276-3.439-2.278-7.288-3.626-11.233-3.951-4.417.301-8.834 1.579-12.927 3.942-9.623 5.556-14.994 15.638-14.996 26.004-.009.005-.009 196.537-.009 196.537.011 10.371 5.382 20.453 15.005 26.009 4.091 2.362 8.508 3.64 12.922 3.941 3.945-.325 7.793-1.675 11.23-3.956z"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* 游戏iframe - 确保没有覆盖层 */}
        {showGame && !isMobile && (
          <iframe
            ref={iframeRef}
            src={game.html}
            title={game.name}
            className=" w-full h-[calc(100%-50px)]"
            allowFullScreen
          />
        )}

        {/* 游戏顶部 */}
        <div className="absolute top-0  flex-1  bg-gray-100 z-10">
          <Image
            src={game.icon || "/placeholder.svg"}
            alt={game.name}
            width={1200}
            height={1200}
            priority={true}
            loading="eager"
            className="absolute h-full w-full object-contain rounded-t-md"
          />
        </div>

        {/* 游戏底部 */}
        <div className="absolute w-full bg-white bottom flex justify-between h-[50px] px-2.5 z-10 bottom-0">
          <div className="left flex items-center font-bold w-[60%]">
            <Image
              src={game.icon || "/placeholder.svg"}
              alt={game.name}
              width={38}
              height={38}
              priority={true}
              loading="eager"
              className="align-middle rounded-lg mr-3"
            />
            {game.name}
          </div>

          <div className="right flex justify-center items-center">
            <div className="flex-2 w-full flex justify-center items-center text-sm">
              <div className="h-full relative flex flex-col items-center text-[#002b51] font-[Roboto] font-medium rounded-lg cursor-pointer w-[50px] transition-all duration-500 py-[10px] portrait:nth-of-type-2:mr-[-51px] landscape:last:w-[24px]">
                <svg
                  className="text-[#55a9f3] w-[25px] h-[25px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                  />
                </svg>
                {t("like")}
              </div>

              <div className=" h-full relative flex flex-col items-center text-[#002b51] font-[Roboto] font-medium rounded-lg cursor-pointer w-[50px] transition-all duration-500 py-[10px]">
                <svg
                  className="text-[#55a9f3] w-[25px] h-[25px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                    fill="currentColor"
                  />
                </svg>
                {t("share")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

