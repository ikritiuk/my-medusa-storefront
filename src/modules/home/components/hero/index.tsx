const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      <div className="sm:md:hidden lg:block h-[50vh] w-full border-b border-ui-border-base relative overflow-hidden">

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-2">
          <div className="flex items-center mb-2">
            <img
              src="hero-rolex.jpg" // Use the larger image for the first one
              alt="Logo"
              className="m-1 w-1/2" // Two times bigger than the others, but not exceeding parent width
            />
            <img
              src="hero-piguet.jpg" // Use the smaller images for the second and third
              alt="Logo"
              className="m-1 w-1/4"
            />
            <img
              src="hero-patek.jpg" // Use the smaller images for the second and third
              alt="Logo"
              className="m-1 w-1/4"
            />
          </div>
        </div>
      </div>

      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div
          className="flex flex-col items-center mb-2"
          style={{
            minHeight: '50vh',
            '@media (max-width: 640px)': { minHeight: 'auto' },
          }}
        >
          <img
            src="hero-rolex.jpg"
            alt="hero-image-1"
            className="m-1 w-full mb-2 max-w-md max-w-sm md:w-full md:max-w-none sm:w-full sm:max-w-none"
            style={{ height: '100%' }}
          />
          <div className="hidden md:flex sm:flex items-center justify-between w-full">
            <img
              src="hero-piguet.jpg"
              alt="hero-image-2"
              className="m-1 w-1/2"
              style={{ height: '100%' }}
            />
            <img
              src="hero-patek.jpg"
              alt="hero-image-3"
              className="m-1 w-1/2"
              style={{ height: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


