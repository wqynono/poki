import Link from "next/link"
import { useTranslations } from "next-intl"
import { categoryList } from "@/data/game"
import Image from "next/image"
import { defaultGamelist } from "@/data/game"
export default function Intro() {
    const homeT = useTranslations("HomePage")
    const domain = "cqlln.com"; // 网站域名
    return (
        <div className="text-gray-700 text-sm leading-relaxed space-y-6 bg-white m-4">
            <div className="flex flex-wrap gap-4 mb-4">
                {categoryList.map((category, index) => (
                    <Link
                        key={index}
                        href={category.href}
                        className="bg-white primary-shadow rounded-xl p-2 w-full md:w-[calc(16.666%-1rem)] */
                                flex flex-row items-center justify-center md:flex-col" >
                        <Image
                            src={`/${category.name.toLowerCase()}_tag.avif`}
                            width={204}
                            height={204}
                            alt={category.name}
                            className="object-contain h-24 md:h-22 w-auto aspect-square"
                        />
                        <span className="font-bold text-sm md:text-lg text-center truncate">
                            {category.name} Games
                        </span>
                    </Link>
                ))}
            </div>
            <div className="mb-4  p-6 rounded-xl primary-shadow ">
                <h2 className="text-sm md:text-lg font-bold text-gray-800 mb-4">{homeT("catalogDesc", { domain })}</h2>
                <h3 className="text-sm  font-medium text-gray-800 mb-4">
                    {homeT("popularGamesDesc")}



                    {defaultGamelist.slice(0, 8).map((game, index) => {
                        return index !== 6 ? (
                            <Link key={index} href={`/game/${game.name}`} className="text-[#002b51] underline">
                                <span>{game.name},  </span>
                            </Link>
                        ) : <span>{homeT("andMore")}  </span>
                    })
                    }
                </h3>

                {/* 网站介绍*/}
                <div>
                    <h2 className="text-sm md:text-lg font-bold text-gray-800 mb-4">{homeT("findFavoriteGames")}</h2>
                    <h3 className="mb-4">{homeT("gamesOrganized")}</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        {categoryList.slice(0, 5).map((category, index) => {
                            return (
                                <li key={index} >
                                    <Link href={category.href} className="text-[#002b51] underline">
                                        <span>{category.name} Games</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* 关于网站 */}
                <div>
                    <h2 className="text-sm md:text-lg font-bold text-gray-800 mb-4">{homeT("about", { domain })}</h2>
                    <h3 className="text-sm font-b text-gray-800 mb-4">{homeT("aboutDesc1", { domain })}</h3>
                    <h3 className="text-sm font-b text-gray-800 mb-4">{homeT("aboutDesc2", { domain })}</h3>
                </div>
            </div>
        </div>
    )
}

