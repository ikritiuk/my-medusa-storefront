import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-screen w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 z-20 flex flex-col justify-start items-start gap-4 p-6">
          {/* Text Section */}
          <div className="bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold max-w-md leading-snug">
              Выглядите роскошно – платите разумно. Для вас и ваших любимых.
            </h1>
          </div>
        </div>

        {/* Video Section */}
        <div className="absolute inset-0 z-10">
          <Link href="/collections/rolex">
            <video
              src="https://medusajs-server.fra1.digitaloceanspaces.com/submariner-hero.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </Link>
        </div>
      </div>

      {/* Small and medium screens (sm to md) */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="relative w-full h-full">
          {/* Text Section */}
          <div className="absolute top-4 left-4 z-20 bg-black bg-opacity-60 text-white px-4 py-3 rounded-md shadow-md">
            <h1 className="text-base font-medium leading-snug">
              Выглядите роскошно – платите разумно. <br /> Для вас и ваших любимых.
            </h1>
          </div>

          {/* Video Section */}
          <Link href="/collections/rolex">
            <video
              src="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.mp4"
              className="absolute inset-0 w-full h-full object-cover z-10"
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
