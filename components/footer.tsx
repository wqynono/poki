import Link from "next/link"
import { useTranslations } from "next-intl"
import LanguageSelector from "@/components/LanguageSelector"

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="bg-white primary-shadow m-t-8 rounded-2xl w-full mb-4">
      <div className="flex flex-col items-center justify-between md:flex-row w-full p-4">
        <div className="flex min-w-3xs items-center">
          <div style={{ marginRight: "12px" }}>
            <a href="./index.html" rel="noopener" style={{ display: "flex", alignItems: "center" }}>
              {/* <Image src="./images/logo.png" title="logo" width="50" height="50" alt="logo" /> */}
            </a>
          </div>
          <span className="font-black">{t("tagline")}</span>
        </div>
        <div>
          <Link
            href="/privacy"
            className="text-sm font-bold text-[#054a91]-500 hover:text-[#054a91]-700 mr-2.5 hover:underline"
          >
            {t("privacyPolicy")}{" "}
          </Link>{" "}
          |
          <Link
            href="/about"
            className="text-sm font-bold text-[#054a91]-500 hover:text-[#054a91]-700 ml-2.5 hover:underline"
          >
            {t("aboutUs")}
          </Link>
        </div>
        <LanguageSelector />
      </div>
      <button type="button" className="w-full text-center text-xs text-gray-500 ">
        {t("copyright")}
      </button>
    </footer>
  )
}

