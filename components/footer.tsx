import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import LanguageSelector from "@/components/LanguageSelector"
export default function Footer() {

  const t = useTranslations("Footer")
  const homeT = useTranslations("HomePage")


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div style={{ marginRight: "12px" }}>
            <a href="./index.html" rel="noopener" style={{ display: "flex", alignItems: "center" }}>
              {/* <Image src="./images/logo.png" title="logo" width="50" height="50" alt="logo" /> */}
            </a>
          </div><span className="slogan">Experience Unhindered Fun: Online H5 Games Hub</span>
        </div>
        <div className="footer-menu">
          <a href="./privacy-policy.html">Privacy Policy </a>
          <a href="./about.html">About Us</a>
        </div>
        <div className="language-select ignore" id="translate"></div>


      </div>
      <button type="button" className="buttonReset footer-bot ignore">
        Copyright © 2025 cqlln.com All Rights Reserved.
      </button>
    </footer >
  )
}

