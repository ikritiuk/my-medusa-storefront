import Link from "next/link";
import * as React from "react"
import { Button } from "@medusajs/ui"

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
                  src="https://medusajs-server.fra1.digitaloceanspaces.com/submariner-hero.mp4"
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
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-2 hidden lg:flex">
          <div className="flex items-center mb-2">
            <Link href="/collections/rolex" className="m-2 w-full md:w-1/2">
              <img src="hero-rolex.jpg" alt="Logo" />
            </Link>
            <Link href="/collections/piguet" className="m-2 w-1/4">
              <img src="hero-piguet.png" alt="Logo" />
            </Link>
            <Link href="/collections/patek" className="m-2 w-1/4">
              <img src="hero-patek.png" alt="Logo" />
            </Link>
          </div>
        </div>
      </div>

      {/* Small and medium screens (sm to md) */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="flex flex-col items-center mb-6">
          <Link href="/collections/rolex" className="w-full sm:w-full md:w-full sm:max-w-none md:max-w-none h-full">
            <video
              src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.mp4"
              className="w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center mb-2 gap-4"> {/* Added gap-4 for spacing */}
          <Link href="/collections/rolex" className="w-full sm:w-full md:w-full sm:max-w-none md:max-w-none h-full">
            <img src="hero-rolex.jpg" alt="hero-image-1" />
          </Link>
          <div className="flex items-center justify-between w-full gap-4"> {/* Added gap-4 */}
            <Link href="/collections/piguet" className="w-1/2 h-full">
              <img src="hero-piguet.png" alt="hero-image-2" />
            </Link>
            <Link href="/collections/patek" className="w-1/2 h-full">
              <img src="hero-patek.png" alt="hero-image-3" />
            </Link>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          // Get the current URL and path
          const currentPath = window.location.href // Full URL with current path

          // Construct the message without encoding
          const message = `3anpoc : ${currentPath}`

          // Construct the Telegram URL
          const finalUrl = `https://t.me/luxury24manager?text=${message}`

          // Open the URL in a new tab
          window.open(finalUrl, "_blank")
        }}
        variant="primary"
        className="w-full h-12 flex items-center justify-center gap-x-2 text-lg font-semibold"
      >

        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path
              d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm4.564 8.16l-1.758 8.31c-.132.589-.476.732-.963.456l-2.665-1.964-1.287 1.238c-.142.143-.262.262-.535.262l.191-2.69 4.896-4.415c.213-.19-.046-.295-.331-.105l-6.06 3.82-2.615-.818c-.569-.18-.581-.569.118-.84l10.278-3.968c.478-.174.896.118.745.838z"/>
          </svg>
          Заказать в Telegram
        </>
      </Button>
      </div>

  );
};

export default Hero;
