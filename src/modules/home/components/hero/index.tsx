import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-screen w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-4">
          {/* Text Section */}
          <h1 className="text-4xl font-bold text-white max-w-2xl leading-snug drop-shadow-md">
            Выглядите роскошно – платите разумно. Для вас и ваших любимых.
          </h1>

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

      {/* Small and medium screens (sm to md) */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="flex flex-col items-center text-center gap-4 mb-6">
          {/* Text Section */}
          <h1 className="text-xl font-semibold text-black max-w-sm leading-normal px-4">
            Позвольте себе и своим любимым выглядеть роскошно по разумной цене
          </h1>

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
