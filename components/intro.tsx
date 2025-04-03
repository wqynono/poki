import Link from "next/link"
import { useTranslations } from "next-intl"
import { categoryList } from "@/data/game"
export default function Intro() {
    const homeT = useTranslations("HomePage")
    const domain = "cqlln.com"; // 网站域名
    return (
        <div className="text-gray-700 text-sm mb-4 leading-relaxed space-y-6 bg-white primary-shadow p-6 rounded-xl">
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
                    {categoryList.slice(0, 5).map((category) => {
                        return (
                            <li>
                                <Link key={category.name} href={category.href} className="text-blue-600 hover:underline">
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
    )
}

