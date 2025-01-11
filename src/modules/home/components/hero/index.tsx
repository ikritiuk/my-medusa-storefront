"use client"

import { useState } from "react"
import Link from "next/link"

const trendingWatches = [
  {
    name: "Rolex Submariner Date Black Dial Blue Bezel",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/rolex-submariner-date-126619lb-white-gold-black-dial-blue-bezel-2023-rolex-41374317052148_1280x-1720021169543.jpg",
    link: "https://www.luxury24.shop/products/rolex-submariner-date-126619-lb-white-gold-black-dial-blue-bezel",
  },
  {
    name: "Patek Philippe Nautilus",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-patek.avif",
    link: "/collections/patek",
  },
  {
    name: "Cartier Santos",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/cartier-hero.avif",
    link: "/collections/cartier",
  },
  {
    name: "Tag Heuer Carrera",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/th-hero.avif",
    link: "/collections/tag-hauer",
  },
]

const Hero = () => {
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)

  const handleNextDesktop = () => {
    setDesktopIndex((prev) => (prev + 1) % trendingWatches.length)
  }

  const handlePrevDesktop = () => {
    setDesktopIndex((prev) =>
      prev === 0 ? trendingWatches.length - 1 : prev - 1,
    )
  }

  const handleNextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % trendingWatches.length)
  }

  const handlePrevMobile = () => {
    setMobileIndex((prev) =>
      prev === 0 ? trendingWatches.length - 1 : prev - 1,
    )
  }
  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-[80vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl font-bold mb-2">Премиум часы</h1>
            <p className="text-lg mb-4">Высококачественные материалы из Европы. Доставка во все регионы РФ.</p>
            <Link href="/collections/rolex"
                  className="inline-block bg-white text-black font-semibold px-6 py-2 rounded">Подробнее</Link>
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

      {/* Title Section */}
      <div className="hidden lg:block w-full text-center my-6">
        <h2 className="text-xl font-bold">Популярные бренды</h2>
      </div>

      {/* Row of 3 Images */}
      <div className="hidden lg:block w-full border-b border-ui-border-base">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/rolex">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex-daytona.avif"
                    alt="Rolex"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Rolex</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/piguet">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-piguet.avif"
                    alt="Audemars Piguet"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Audemars Piguet</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/patek">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-patek.avif"
                    alt="Patek Philippe"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Patek Philippe</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of 3 Images */}
      <div className="hidden lg:block w-full border-b border-ui-border-base py-8">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/cartier">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/cartier-hero.avif"
                    alt="Cartier"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Cartier</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/tag-hauer">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/th-hero.avif"
                    alt="Tag Hauer"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Tag Hauer</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/hublot">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hublot-hero.avif"
                    alt="Hublot"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Hublot</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Carousel */}
      <div className="hidden lg:block relative mt-8 px-4">
        <h2 className="text-lg font-semibold text-center mb-4">
          Trending Watches
        </h2>
        <div className="overflow-hidden relative w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${desktopIndex * 100}%)`,
              width: `${trendingWatches.length * 100}%`,
            }}
          >
            {trendingWatches.map((watch, index) => (
              <div key={index} className="flex-none w-full px-2">
                <Link href={watch.link}>
                  <div className="relative">
                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="rounded-lg shadow-lg object-cover w-full h-60"
                    />
                    <div
                      className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg">
                      {watch.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrevDesktop}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70 z-10"
        >
          &larr;
        </button>
        <button
          onClick={handleNextDesktop}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70 z-10"
        >
          &rarr;
        </button>
      </div>
      {/* Full-Width Image */}
      <div className="hidden lg:block w-full">
        <Link href="/collections/rolex">
          <img
            src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/row-rolex.jpg"
            alt="Full Width Image"
            className="w-full h-auto mt-6 object-cover cursor-pointer"
          />
        </Link>
      </div>


      {/* Mobile Layout */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        {/* Fancy Mobile Video Section */}
        <div className="relative w-full overflow-hidden">
          <div
            className="absolute inset-x-4 top-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded z-20 text-center animate-fade-in">
            Премиум часы из высококачественных материалов из Европы. Доставка во все регионы РФ
          </div>
          <Link href="/collections/rolex" className="w-full">
            <video
              src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex.mp4"
              poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex-preview.avif"
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          {/* Title Section */}
          <div className="flex items-center justify-center h-auto py-4 px-4">
            <h2 className="text-lg font-semibold text-center max-w-[90%]">Популярные бренды</h2>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6 gap-4">

          {/* Brand Images */}
          <div className="flex flex-col items-center gap-4">
            {/* Brand Images */}
            <div className="relative text-center w-full">
              <div
                className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                Rolex
              </div>
              <Link href="/collections/rolex">
                <img
                  src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex.avif"
                  alt="Rolex"
                  className="rounded shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-1"
                />
              </Link>
            </div>

            {/* Grid with Swipeable Effect */}
            <div className="flex items-center justify-between w-full gap-4">
              <div className="relative w-1/2 text-center">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  Audemars Piguet
                </div>
                <Link href="/collections/piguet">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-piguet-mobile.avif"
                    alt="Audemars Piguet"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </Link>
              </div>
              <div className="relative w-1/2 text-center">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  Patek Philippe
                </div>
                <Link href="/collections/patek">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-patek-mobile.avif"
                    alt="Patek Philippe"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative text-center w-full">
              <div
                className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                Cartier
              </div>
              <Link href="/collections/cartier">
                <img
                  src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/cartier-hero-mobile.avif"
                  alt="Cartier"
                  className="rounded shadow-lg transition-transform duration-500 hover:scale-105 hover:-rotate-1"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <div className="relative w-1/2 text-center">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  Tag Hauer
                </div>
                <Link href="/collections/tag-hauer">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/th-hero-mobile.avif"
                    alt="Tag Hauer"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </Link>
              </div>
              <div className="relative w-1/2 text-center">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  Hublot
                </div>
                <Link href="/collections/hublot">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hublot-hero-mobile.avif"
                    alt="Hublot"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden relative mt-8 px-4">
          <h2 className="text-lg font-semibold text-center mb-4">
            Trending Watches
          </h2>
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
            {trendingWatches.map((watch, index) => (
              <div
                className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
                <div key={index} className="flex-none w-80">
                  <Link href={watch.link}>
                    <div className="relative">
                      <img
                        src={watch.image}
                        alt={watch.name}
                        className="rounded-lg shadow-lg object-cover w-full h-60"
                      />
                      <div
                        className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg">
                        {watch.name}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
