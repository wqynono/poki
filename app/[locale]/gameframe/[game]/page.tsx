"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { defaultGamelist, type Game } from "@/data/game"
import GameGrid from "@/components/game-grid"
import AdComponent from "@/components/ad"
import React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import adConfig from "@/data/adConfig"
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ gameName: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { gameName } = await params

  return {
    title: gameName,
    description: defaultGamelist.find((item) => item.name === gameName)?.desc_text,
  };
}

export default function GamePage({ params }: any) {
  const t = useTranslations("Game")
  const resolvedParams = React.use(params) as { game: string }
  const { game } = resolvedParams
  const gameDetail: Game = defaultGamelist.find((item) => item.name === game) || ({} as Game)
  const [showGame, setShowGame] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  useEffect(() => {
    // 计时器
    setTimeout(() => {
      setShowGame(true)
    }, 7000)
  })

  return (
    <div className="min-h-screen">
      <Link
        href={`/game/${gameDetail.name}`}
        className="fixed flex items-center flex-row p-1 top-2 left-0 z-30  text-black bg-white rounded-r-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 34" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.87783 17.0907L14.5257 26.7888C15.1578 27.3645 15.1578 28.289 14.5257 28.8647C13.8802 29.4527 12.8234 29.4527 12.178 28.8647L0.610534 18.3291C0.424737 18.1599 0.293553 17.9605 0.216981 17.7487C-0.14149 17.1869 -0.0557925 16.4592 0.474075 15.9766L12.0415 5.44093C12.687 4.85302 13.7438 4.85302 14.3892 5.44093C15.0213 6.01665 15.0213 6.94113 14.3893 7.51685L3.87783 17.0907Z"
            fill="#28ABFA"
          ></path>
        </svg>
        <span className="text-sm pr-2">{t("back")}</span>
      </Link>
      <div className={`h-full w-full relative ${showGame ? "hidden" : ""}`}>
        {/* 游戏背景图片 */}
        <div className="h-[100vh] w-[100vw] bg-black">
          <Image
            src={gameDetail.icon || "/placeholder.svg"}
            alt={gameDetail.name}
            width={1200}
            height={1200}
            className="h-full w-full object-cover rounded-t-md opacity-40"
          />
        </div>

        <div className="absolute top-0 left-0 z-10 w-full h-[100vh] overflow-y-scroll p-5 text-white">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-10">
              <div className="game-card">
                <Image
                  src={gameDetail.icon || "/placeholder.svg"}
                  alt={gameDetail.name}
                  width={180}
                  height={180}
                  className="object-cover rounded-xl"
                />
              </div>
              <h1 className="text-2xl font-bold mt-2">{gameDetail.name}</h1>
              <div className="w-full max-w-[400px]">
                <div className="w-full max-w-[400px]">
                  <div className="relative w-full h-4 bg-[#3a3a3a] rounded-lg overflow-hidden mt-5">
                    {/* 滑块 - 确保宽度w-[60px]与动画中的计算值一致 */}
                    <div className="absolute h-full bg-amber-400 w-[60px] animate-smooth-slide rounded-[20px]">
                      <div className="progress-emoji">😊</div>
                    </div>
                  </div>
                  <p className="progress-text text-center mt-2">{t("loadingGameResources")}</p>
                </div>
              </div>
            </div>

            {/* 广告区域 */}
            <div className="border border-[#cecece] rounded-lg min-w-[330px] min-h-[270px]">
              <div style={{ height: "auto !important", minHeight: "0px !important" }}>
                <div className="w-full flex items-center justify-center text-center text-[#cfcfcf] font-medium">
                  {t("advertisement")}
                </div>
                <div className="block">
                  <AdComponent data-ad-slot={adConfig.zfx[0]} data-ad-format={"auto"} data-full-width-responsive={true} />
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-bold mt-4 mb-2 w-full text-left">{t("topGames")}</h1>
            <div className="grid gap-4 justify-center grid-cols-3 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 2xl:grid-cols-14">
              <GameGrid gamelist={defaultGamelist.slice(0, 24)} gamePcLength={defaultGamelist.slice(0, 24).length} />
            </div>
          </div>
        </div>
      </div>

      <iframe
        ref={iframeRef}
        src={gameDetail.html}
        title={gameDetail.name}
        className={`w-full min-h-screen ${showGame ? "block" : "hidden"}`}
        allowFullScreen
      />
    </div>
  )
}

