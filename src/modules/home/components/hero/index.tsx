import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-screen w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 z-10">
          {/* Text Section */}
          <div className="absolute top-6 left-6 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold max-w-md leading-snug">
              Выглядите роскошно – платите разумно. Для вас и ваших любимых.
            </h1>
          </div>

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
        <div className="relative w-full h-full">
          {/* Text Section */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md shadow-md">
            <h1 className="text-lg font-medium max-w-sm leading-snug">
              Выглядите роскошно – платите разумно. Для вас и ваших любимых.
            </h1>
          </div>

          {/* Video Section */}
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
        <div className="flex flex-col items-center mb-2 gap-4">
          <Link href="/collections/rolex" className="w-full sm:w-full md:w-full sm:max-w-none md:max-w-none h-full">
            <img src="hero-rolex.jpg" alt="hero-image-1" />
          </Link>
          <div className="flex items-center justify-between w-full gap-4">
            <Link href="/collections/piguet" className="w-1/2 h-full">
              <img src="hero-piguet.png" alt="hero-image-2" />
            </Link>
            <Link href="/collections/patek" className="w-1/2 h-full">
              <img src="hero-patek.png" alt="hero-image-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
