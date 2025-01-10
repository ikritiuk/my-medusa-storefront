"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-screen w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded z-20">
          Премиум часы из высококачественных материалов из Европы. Доставка во все регионы РФ
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2">
          {/* Video Section */}
          <div className="flex items-center mb-2 w-full">
            <Link href="/collections/rolex" className="m-2 w-full">
              <div className="relative w-full h-full overflow-hidden">
                <video
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/panda-hero.mp4"
                  poster="https://medusajs-server.fra1.digitaloceanspaces.com/panda-hero-preview.jpg"
                  className="w-full h-full object-cover translate-y-[-10%]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="hidden lg:block w-full text-center my-6">
        <h2 className="text-xl font-bold">Популярные бренды</h2>
      </div>

      {/* Row of 3 Images */}
      <div className="hidden lg:block h-[50vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <div className="flex items-start mb-2 gap-4">
            <div className="relative m-2 w-1/2">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                Rolex
              </div>
              <Link href="/collections/rolex">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.jpg"
                  alt="Rolex"
                  className="rounded"
                />
              </Link>
            </div>
            <div className="relative m-2 w-1/4">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                Audemars Piguet
              </div>
              <Link href="/collections/piguet">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-piguet.png"
                  alt="Audemars Piguet"
                  className="rounded"
                />
              </Link>
            </div>
            <div className="relative m-2 w-1/4">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                Patek Philippe
              </div>
              <Link href="/collections/patek">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-patek.png"
                  alt="Patek Philippe"
                  className="rounded"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Row of 3 Images */}
      <div className="hidden lg:block h-[50vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <div className="flex items-start mb-2 gap-4">
            <div className="relative m-2 w-1/2">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                Cartier
              </div>
              <Link href="/collections/cartier">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/cartier-hero.webp"
                  alt="Cartier"
                  className="rounded"
                />
              </Link>
            </div>
            <div className="relative m-2 w-1/4">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                Tag Hauer
              </div>
              <Link href="/collections/tag-hauer">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/th-hero.webp"
                  alt="Tag Hauer"
                  className="rounded"
                />
              </Link>
            </div>
            <div className="relative m-2 w-1/4">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                Hublot
              </div>
              <Link href="/collections/hublot">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/hublot-hero.jpg"
                  alt="Hublot"
                  className="rounded"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Image */}
      <div className="hidden lg:block w-full">
        <Link href="/collections/rolex">
          <img
            src="https://medusajs-server.fra1.digitaloceanspaces.com/row-rolex.jpg"
            alt="Full Width Image"
            className="w-full h-auto mt-6 object-cover cursor-pointer"
          />
        </Link>
      </div>

      {/* Mobile Layout */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        {/* Video Section for Mobile */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-4 bg-black bg-opacity-50 text-white text-lg px-4 py-6 rounded z-20 text-center">
            Премиум часы из высококачественных материалов из Европы. Доставка во все регионы РФ
          </div>
          <Link href="/collections/rolex" className="w-full">
            <video
              src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.mp4"
              poster="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex-preview.jpg"
              className="w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center mb-6 gap-4">
          {/* Title Section */}
          <h2 className="text-lg font-semibold mb-4">Популярные бренды</h2>
          {/* Brand Images */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative text-center w-full">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded">
                Rolex
              </div>
              <Link href="/collections/rolex">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.jpg"
                  alt="Rolex"
                  className="rounded"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <div className="relative w-1/2 text-center">
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded">
                  Audemars Piguet
                </div>
                <Link href="/collections/piguet">
                  <img
                    src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-piguet.png"
                    alt="Audemars Piguet"
                    className="rounded"
                  />
                </Link>
              </div>
              <div className="relative w-1/2 text-center">
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded">
                  Patek Philippe
                </div>
                <Link href="/collections/patek">
                  <img
                    src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-patek.png"
                    alt="Patek Philippe"
                    className="rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative text-center w-full">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded">
                Cartier
              </div>
              <Link href="/collections/cartier">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/cartier-hero.webp"
                  alt="Cartier"
                  className="rounded"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <div className="relative w-1/2 text-center">
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded">
                  Tag Hauer
                </div>
                <Link href="/collections/tag-hauer">
                  <img
                    src="https://medusajs-server.fra1.digitaloceanspaces.com/th-hero.webp"
                    alt="Tag Hauer"
                    className="rounded"
                  />
                </Link>
              </div>
              <div className="relative w-1/2 text-center">
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded">
                  Hublot
                </div>
                <Link href="/collections/hublot">
                  <img
                    src="https://medusajs-server.fra1.digitaloceanspaces.com/hublot-hero.jpg"
                    alt="Hublot"
                    className="rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Link href="/collections/rolex">
            <img
              src="https://medusajs-server.fra1.digitaloceanspaces.com/row-rolex.jpg"
              alt="Full Width Image"
              className="w-full h-auto mt-4 object-cover cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
