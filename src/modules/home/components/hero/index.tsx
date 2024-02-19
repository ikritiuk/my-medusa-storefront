const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      <div className="h-[50vh] sm:h-[75vh] md:h-[75vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-2">
          <div className="flex flex-col items-center mb-2">
            <img
              src="hero-rolex.jpg"
              alt="hero-image-1"
              className="m-1 w-full mb-2 max-w-md md:w-full md:max-w-none"// Adjusted for mobile and desktop, full-width on tablet
            />
            <div className="flex items-center">
              <img
                src="hero-piguet.jpg"
                alt="hero-image-2"
                className="m-1 w-1/2 max-w-md" // Adjusted for mobile and tablet
              />
              <img
                src="hero-patek.jpg"
                alt="hero-image-3"
                className="m-1 w-1/2 max-w-md" // Adjusted for mobile and tablet
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
