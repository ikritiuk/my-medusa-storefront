"use client"

import { useState } from "react"
import Link from "next/link"

const trendingWatches = [
  {
    name: "Rolex Submariner Date Black Dial Blue Bezel",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/rolex-submariner-date-126619lb-white-gold-black-dial-blue-bezel-2023-rolex-41374317052148_1280x-1720021169543.jpg",
    link: "/products/rolex-submariner-date-126619-lb-white-gold-black-dial-blue-bezel",
  },
  {
    name: "Audemars Piguet Yellow Gold",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/audemars-piguet-royal-oak-15202ba-oo-1240ba-02-jumbo-40th-anniversary-extra-thin-yellow-gold-audemars-piguet-40258760081652_1280x-1720184726491.webp",
    link: "/products/audemars-piguet-royal-oak-extra-thin-yellow-gold",
  },
  {
    name: "Patek Philippe Nautilus Green Dial",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/patek-philippe-nautilus-5711-1a-014-stainless-steel-green-dial-patek-philippe-40297153462516_1280x-1720185629726.webp",
    link: "/collections/patek",
  },
  {
    name: "Rolex Submariner Yellow Gold Blue Dial",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/rolex-submariner-date-126613lb-stainless-steel-yellow-gold-blue-dial-2021-rolex-41593886769396_1280x-1720020948071.webp",
    link: "/products/rolex-submariner-date-126613-lb-stainless-steel-yellow-gold-blue-dial",
  },
]

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-[80vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl font-bold mb-2">Премиум часы</h1>
            <p className="text-lg mb-4">Изготовлены из премиальной стали 904L и оснащены лучшими механизмами на рынке.</p>
            <p className="text-lg mb-4">Эти часы подчеркнут Ваш безупречный стиль.</p>
            <p className="text-lg mb-4">Только самые популярные модели с непревзойденным качеством исполнения.</p>
            <p className="text-lg mb-4">Качество, доступное каждому, по выгодной цене.</p>

            <p className="text-3xl font-bold text-yellow-400 mt-6 mb-6 tracking-wide">
              Цены от 25 000 рублей
            </p>

            <div className="flex justify-center gap-4">
              <Link
                href="/collections/rolex"
                className="inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                Подробнее
              </Link>
              <Link
                href="https://t.me/yourtelegramlink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0088CC] text-white font-semibold px-6 py-2 rounded hover:bg-[#0077B5] transition-colors"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center gap-2">
                  <span>Присоединиться к Telegram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-5 h-5 ${isHovered ? "animate-bounce" : ""}`}
                  >
                    <path d="M21.2 2.8L2.8 9.2l7.2 2.8 2.8 7.2 6.4-18.4z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        <video
          src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/panda-hero.mp4"
          poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/panda-hero-preview.jpg"
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Mobile Layout */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-x-4 top-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded z-20 text-center animate-fade-in">
            <p className="text-xl font-extrabold leading-relaxed mb-4">
              Премиум часы из высококачественных материалов из Европы.
            </p>
            <p className="text-lg mb-4">Качество, доступное каждому, по выгодной цене.</p>
            <p className="text-2xl font-bold text-[#D4AF37] mt-4">
              Цены от 25 000 рублей
            </p>
            <Link
              href="https://t.me/yourtelegramlink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0088CC] text-white font-semibold px-6 py-2 rounded mt-4 hover:bg-[#0077B5] transition-colors"
            >
              Присоединиться к Telegram
            </Link>
          </div>
          <Link href="/collections/rolex" className="w-full">
            <video
              src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex.mp4"
              poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex-preview.avif"
              className="w-full object-cover transition-transform duration-500 hover:scale-110"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </Link>
        </div>
      </div>

      {/* Rest of the code remains the same */}
    </div>
  )
}

export default Hero