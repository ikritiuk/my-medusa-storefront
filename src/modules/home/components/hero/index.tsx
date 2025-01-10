"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-screen w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-2 hidden lg:flex">
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
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-4">
          <div className="flex items-start mb-2 gap-4">
            <div className="relative m-2 w-1/2">
              {/* Brand Name */}
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
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
              {/* Brand Name */}
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
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
              {/* Brand Name */}
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
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

      {/* Row of 4 Images */}
      <div className="hidden lg:block w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-4">
          <div className="flex items-start gap-4 mb-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="relative w-1/4">
                {/* Brand Name */}
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
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
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        {/* Row of 3 Images for Mobile */}
        <div className="flex flex-col items-center mb-6 gap-4">
          <h2 className="text-lg font-semibold mb-4">Популярные бренды</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="relative text-center w-full">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
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
              <div className="relative w-1/2">
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
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
              <div className="relative w-1/2">
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
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

        {/* Row of 4 Images for Mobile */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="relative">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                Patek Philippe
              </div>
              <Link href="/collections/patek">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-patek.png"
                  alt="Patek Philippe"
                  className="rounded w-full"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
