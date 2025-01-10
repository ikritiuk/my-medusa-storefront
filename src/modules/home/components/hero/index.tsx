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

      <div className="hidden lg:block h-[50vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-4">
          {/* Title Section */}
          <h2 className="text-xl font-bold mb-6">Популярные бренды</h2>
          {/* Brand Names and Images */}
          <div className="flex items-center mb-2">
            <div className="m-2 w-full md:w-1/2 text-center">
              <p className="font-medium mb-2">Rolex</p>
              <Link href="/collections/rolex">
                <img src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.jpg" alt="Rolex" />
              </Link>
            </div>
            <div className="m-2 w-1/4 text-center">
              <p className="font-medium mb-2">Audemars Piguet</p>
              <Link href="/collections/piguet">
                <img src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-piguet.png" alt="Audemars Piguet" />
              </Link>
            </div>
            <div className="m-2 w-1/4 text-center">
              <p className="font-medium mb-2">Patek Philippe</p>
              <Link href="/collections/patek">
                <img src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-patek.png" alt="Patek Philippe" />
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

      {/* Small and medium screens (sm to md) */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="flex flex-col items-center mb-6">
          <Link href="/collections/rolex" className="w-full sm:w-full md:w-full sm:max-w-none md:max-w-none h-full">
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
          {/* Brand Names and Images */}
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="font-medium mb-2">Rolex</p>
              <Link href="/collections/rolex">
                <img
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.jpg"
                  alt="Rolex"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <div className="w-1/2 text-center">
                <p className="font-medium mb-2">Audemars Piguet</p>
                <Link href="/collections/piguet">
                  <img
                    src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-piguet.png"
                    alt="Audemars Piguet"
                  />
                </Link>
              </div>
              <div className="w-1/2 text-center">
                <p className="font-medium mb-2">Patek Philippe</p>
                <Link href="/collections/patek">
                  <img
                    src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-patek.png"
                    alt="Patek Philippe"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Full-Width Image for Mobile */}
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
