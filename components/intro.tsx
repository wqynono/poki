import Link from "next/link"
import { useTranslations } from "next-intl"
import { categoryList } from "@/data/game"
import Image from "next/image"
export default function Intro() {
    const homeT = useTranslations("HomePage")
    const domain = "cqlln.com"; // 网站域名
    return (
        <div className="text-gray-700 text-sm leading-relaxed space-y-6 bg-white m-4">
            <div className="flex flex-wrap gap-4 px-4 mb-4">
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
                            className="object-contain h-24 md:h-22 w-auto"
                        />
                        <span className="font-bold text-xl md:text-sm text-center truncate">
                            {category.name} Games
                        </span>
                    </Link>
                ))}
            </div>
            <div className="mb-4  p-6 rounded-xl primary-shadow ">
                <p>{homeT("catalogDesc", { domain })}</p>
                <p>
                    {homeT("popularGamesDesc")}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Fireboy and Watergirl
                    </Link>
                    ,{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Moto X3M
                    </Link>
                    ,{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Penalty Shooters 2
                    </Link>
                    ,{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Bad Ice Cream
                    </Link>
                    ,{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Bubble Shooter
                    </Link>
                    , {homeT("andMore")}{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Tic-Tac-Toe
                    </Link>
                    ,{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Pac-Man
                    </Link>
                    ,{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Solitaire
                    </Link>
                    ,{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        2048
                    </Link>
                    ,{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Dino Chrome.
                    </Link>
                </p>

                {/* 网站介绍*/}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">{homeT("findFavoriteGames")}</h2>
                    <p className="mb-4">{homeT("gamesOrganized")}</p>
                    <ul className="list-disc pl-6 space-y-1">
                        {categoryList.slice(0, 5).map((category, index) => {
                            return (
                                <li key={index} >
                                    <Link href={category.href} className="text-blue-600 hover:underline">
                                        <span>{category.name} Games</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* 关于网站 */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">{homeT("about", { domain })}</h2>
                    <p className="mb-4">{homeT("aboutDesc1", { domain })}</p>
                    <p className="mb-4">{homeT("aboutDesc2", { domain })}</p>
                </div>
            </div>
        </div>
    )
}

