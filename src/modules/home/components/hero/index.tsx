"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-[80vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl font-bold mb-2">Премиум часы</h1>
            <p className="text-lg mb-4">Высококачественные материалы из Европы. Доставка во все регионы РФ.</p>
            <Link href="/collections/rolex" className="inline-block bg-white text-black font-semibold px-6 py-2 rounded">Explore Now</Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        <video
          src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/panda-hero.mp4"
          poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/panda-hero-preview.jpg"
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
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
                  src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex.jpg"
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
                  src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-piguet.png"
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
                  src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-patek.png"
                  alt="Patek Philippe"
                  className="rounded"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional sections remain unchanged */}
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
        {/* Video Section for Mobile */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-x-4 top-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded z-20 text-center">
            Премиум часы из высококачественных материалов из Европы. Доставка во все регионы РФ
          </div>
          <Link href="/collections/rolex" className="w-full">
            <video
              src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex.mp4"
              poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex-preview.jpg"
              className="w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
