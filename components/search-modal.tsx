"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"
import GameGrid from "./game-grid"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { type Game, defaultGamelist, categoryList } from "@/data/game"
import { getSearchGames } from "@/api/game"

type SearchModalProps = {
  onClose: () => void
  isOpen: boolean
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function SearchModal({ onClose, isOpen, searchQuery, setSearchQuery }: SearchModalProps) {
  const t = useTranslations("Search")
  const router = useRouter()

  const [isMobile, setIsMobile] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [popularGames, setPopularGames] = useState<Game[]>([])
  const [searchResults, setSearchResults] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // 获取搜索结果
  useEffect(() => {
    // 如果搜索词长度大于等于2，则调用搜索接口
    if (searchQuery && searchQuery.length >= 2) {
      setIsLoading(true)
      getSearchGames(searchQuery)
        .then((data) => {
          setSearchResults(data)
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      // 清空搜索结果
      setSearchResults([])
    }
  }, [searchQuery])

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 990)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    // 设置本周流行游戏
    setPopularGames([...defaultGamelist].slice(0, 12))

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery && searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery)}`)
      onClose()
    }
  }

  // 如果不是打开状态，不渲染任何内容
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-10"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.5,
              ease: "easeInOut",
            }}
            className="fixed top-0 left-0 w-[688px] max-w-full h-full z-20 flex flex-col p-[32px_20px_0] primary-shadow modal-with-bg overflow-y-scroll"
            ref={modalRef}
            style={{ willChange: "transform" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center bg-white h-10 mr-12 md:mr-16  md:h-16 rounded-lg primary-shadow">
              <button
                className="flex items-center rounded-[8px_0_0_8px] border-r-2 border-[#f0f5fc] h-full p-[0_8px_0_8px] bg-none border-0 cursor-pointer font-inherit text-base"
                onClick={onClose}
              >
                <span className="mobile_back hidden md:hidden">
                  <svg
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="7414"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M260.964848 477.246061c0.310303-0.310303 0.620606-0.620606 1.086061-0.930909L693.21697 44.993939c18.773333-18.773333 51.044848-18.773333 69.818182 0 18.773333 18.773333 18.773333 51.044848 0 69.818182L364.916364 511.379394l398.118788 398.118788c18.773333 18.773333 18.773333 51.044848 0 69.818182-8.533333 8.533333-22.186667 13.653333-33.978182 13.653333-11.946667 0-23.893333-5.12-33.978182-13.653333l-433.027879-431.321212-0.930909-0.93091c-9.309091-9.309091-14.118788-22.186667-13.963636-34.90909-0.310303-12.722424 4.499394-25.444848 13.808484-34.909091z"
                      p-id="7415"
                      fill="#515151"
                    ></path>
                  </svg>
                </span>
                <div className="pc_back block md:block w-6 h-6 relative">
                  <Image src="/placeholder.svg?height=24&width=24" alt="back" width={24} height={24} />
                </div>
              </button>

              <div className="flex h-full justify-between w-full border-l-2 border-[#f0f5fc]">
                <input
                  ref={inputRef}
                  className="bg-transparent border-none text-lg md:text-[22px] h-full   min-w-0 outline-0 w-full "
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex items-center h-full pr-[10px] cursor-pointer" onClick={handleSearch}>
                  <svg
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="8598"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M996.73 938.88L838.52 780.66c75.54-82.92 121.67-193.09 121.67-313.84C960.19 209.61 750.93 0.36 493.73 0.36S27.26 209.62 27.26 466.83s209.26 466.46 466.46 466.46c93.03 0 179.71-27.48 252.57-74.6L911.61 1024l85.12-85.12zM147.64 466.83c0-190.83 155.25-346.08 346.08-346.08S839.8 276 839.8 466.83 684.56 812.91 493.73 812.91 147.64 657.66 147.64 466.83z"
                      p-id="8599"
                      fill="#cdcdcd"
                    ></path>
                  </svg>
                </div>
              </div>
              <button
                aria-label="close"
                onClick={onClose}
                className="fixed z-50 flex items-center justify-center bg-white border-none rounded-full cursor-pointer h-10 w-10  right-[5px]  md:h-16 md:w-16 primary-shadow"
              >
                <svg
                  className="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7414"
                  width="24"
                  height="24"
                >
                  <path
                    d="M260.964848 477.246061c0.310303-0.310303 0.620606-0.620606 1.086061-0.930909L693.21697 44.993939c18.773333-18.773333 51.044848-18.773333 69.818182 0 18.773333 18.773333 18.773333 51.044848 0 69.818182L364.916364 511.379394l398.118788 398.118788c18.773333 18.773333 18.773333 51.044848 0 69.818182-8.533333 8.533333-22.186667 13.653333-33.978182 13.653333-11.946667 0-23.893333-5.12-33.978182-13.653333l-433.027879-431.321212-0.930909-0.93091c-9.309091-9.309091-14.118788-22.186667-13.963636-34.90909-0.310303-12.722424 4.499394-25.444848 13.808484-34.909091z"
                    p-id="7415"
                    fill="#515151"
                  ></path>
                </svg>
              </button>
            </div>

            <div>
              <nav className="flex items-center mt-2 flex-nowrap overflow-x-scroll whitespace-nowrap md:flex-wrap md:overflow-x-auto">
                {categoryList.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    onClick={onClose}
                    className="rounded-3xl text-sm inline-block bg-white my-2 mx-1.5 p-[8px_20px] select-none primary-shadow"
                  >
                    {category.name} Game
                  </Link>
                ))}
              </nav>

              <h2 className="text-lg md:text-xl font-bold my-4">{t("searchResults")}</h2>

              {searchResults.length === 0 ? (
                <div className="w-full text-[#747171] font-medium">{isLoading ? t("loading") : t("noResults")}</div>
              ) : (
                <div
                  className="grid gap-4 justify-center grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
                  id="content"
                >
                  <GameGrid gamelist={searchResults.slice(0, 20)} gamePcLength={searchResults.slice(0, 20).length} />
                </div>
              )}

              <h2 className="text-lg md:text-xl font-bold my-4">{t("popularThisWeek")}</h2>

              <div
                className="grid gap-4 justify-center grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
                id="content"
              >
                <GameGrid gamelist={defaultGamelist.slice(0, 12)} gamePcLength={defaultGamelist.slice(0, 12).length} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

