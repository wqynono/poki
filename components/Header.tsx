"use client"

import { useState } from "react"
import Link from "next/link"
import SearchModal from "./search-modal"
export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    return (
        <>
            <div className="col-span-1 h-full rounded-lg overflow-hidden primary-shadow transition-transform duration-300 bg-white">
                <Link href="/" className="block h-1/2">
                    <h1 className="flex items-center h-full text-xl font-bold p-2.5 text-[#302B63]">
                        Funny<br />Timing
                    </h1>
                </Link>

                <div className="h-1/2 flex items-center justify-center border-t-2 border-[#5d6b842e] rounded-b-lg bg-white">
                    <Link
                        href="/"
                        title="Home"
                        aria-label="Home"
                        className="flex items-center justify-center h-full w-1/2 border-r border-[#5d6b842e]"
                    >
                        <svg
                            className="w-6 h-6 fill-black"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="3210"
                        >
                            <path
                                d="M999.103969 450.980217 600.03496 32.435355C559.394816-10.188151 492.394773-10.891714 450.867491 30.861655L26.049704 457.992209C-23.655972 507.968481 1.212199 568.281046 71.688022 567.83196L191.983925 567.065422 156.438281 531.756441 156.438281 917.836305C156.438281 976.336883 203.589196 1023.825676 261.911636 1023.825676L389.99329 1023.825676 389.99329 953.206301 261.911636 953.206301C242.721404 953.206301 227.0793 937.452108 227.0793 917.836305L227.0793 531.756441C227.0793 512.167492 211.12822 496.322622 191.533656 496.447477L71.237753 497.214033C66.173938 497.246289 62.895469 496.713148 61.736428 496.22598 63.980271 497.169102 67.084328 499.993735 69.04654 504.752651 70.980045 509.441972 70.786089 513.494624 69.931418 515.610663 70.455361 514.313455 72.463158 511.484602 76.143505 507.784218L500.961291 80.653664C514.458349 67.083127 535.692465 67.306108 548.901395 81.159669L947.970422 499.704531C951.487338 503.393087 953.386928 506.221746 953.891186 507.578027 953.219595 505.771654 953.125848 502.205128 954.837927 498.082651 956.584273 493.877656 959.306191 491.320776 961.229598 490.464427 960.049848 490.989677 956.841363 491.570786 951.877986 491.602406L952.328255 562.22035C1022.230896 561.774919 1047.266224 501.492949 999.103969 450.980217ZM774.238215 1023.825676C832.500577 1023.825676 879.711571 976.292569 879.711571 917.836305L879.711571 527.597754 844.616195 562.906718 952.328255 562.22035 951.877986 491.602406 844.165926 492.288773C824.747205 492.412516 809.070551 508.184576 809.070551 527.597754L809.070551 917.836305C809.070551 937.402462 793.373788 953.206301 774.238215 953.206301L646.156562 953.206301 646.156562 1023.825676 774.238215 1023.825676ZM582.482144 670.786834C582.575273 670.786834 582.632792 1023.982363 582.632792 1023.982363L653.273812 1023.982363 653.273812 670.618548C653.273812 631.73658 621.484606 600.16746 582.482144 600.16746L441.501384 600.16746C402.513769 600.16746 370.709699 631.646628 370.709699 670.618548L441.350736 670.618548C441.350736 670.806978 582.482144 670.786834 582.482144 670.786834ZM441.350736 670.618548 370.709699 670.618548 370.709699 1023.982363 441.350736 1023.982363 441.350736 670.618548Z"
                                fill="#302B63"
                                p-id="3211"
                            ></path>
                        </svg>
                    </Link>
                    <button
                        type="button"
                        title="search"
                        aria-label="search"
                        id="openModal"
                        onClick={toggleSearch}
                        className="flex items-center justify-center h-full w-1/2 border-l border-[#5d6b842e] hover:bg-[#5d6b842e] bg-transparent border-0 cursor-pointer font-inherit text-base"
                    >
                        <span className="sr-only">你今天要玩什么呢？</span>
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2312"
                        >
                            <path
                                d="M469.312 42.688a426.688 426.688 0 1 0 270.08 756.992l169.088 169.152a42.688 42.688 0 0 0 60.352-60.352l-169.152-169.152A426.688 426.688 0 0 0 469.312 42.624zM128 469.312a341.312 341.312 0 1 1 682.688 0A341.312 341.312 0 0 1 128 469.312z"
                                fill="#302B63"
                                p-id="2313"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={toggleSearch}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        </>
    )
}

