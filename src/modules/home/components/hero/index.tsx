import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      <div className="hidden lg:block h-[50vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-2 hidden lg:flex">
          <div className="flex items-center mb-2">
            <Link href="/collections/rolex">
              <a className="m-2 w-full md:w-1/2">
                <img src="hero-rolex.jpg" alt="Logo" />
              </a>
            </Link>
            <Link href="/collections/piguet">
              <a className="m-2 w-1/4">
                <img src="hero-piguet.jpg" alt="Logo" />
              </a>
            </Link>
            <Link href="/collections/patek">
              <a className="m-2 w-1/4">
                <img src="hero-patek.jpg" alt="Logo" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="flex flex-col items-center mb-2">
          <Link href="/collections/rolex">
            <a className="w-full sm:w-full md:w-full sm:max-w-none md:max-w-none h-full">
              <img src="hero-rolex.jpg" alt="hero-image-1" />
            </a>
          </Link>
          <div className="flex items-center justify-between w-full">
            <Link href="/collections/piguet">
              <a className="m-2 w-1/2 h-full">
                <img src="hero-piguet.jpg" alt="hero-image-2" />
              </a>
            </Link>
            <Link href="/collections/patek">
              <a className="m-2 w-1/2 h-full">
                <img src="hero-patek.jpg" alt="hero-image-3" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
