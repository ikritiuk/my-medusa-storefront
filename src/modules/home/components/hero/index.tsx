const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      <div className="h-[50vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-2">
          <div className="flex items-center mb-2">
            <img
              src="hero-rolex.png" // Use the larger image for the first one
              alt="Logo"
              className="m-1 w-1/2" // Two times bigger than the others, but not exceeding parent width
            />
            <img
              src="hero-piguet.png" // Use the smaller images for the second and third
              alt="Logo"
              className="m-1 w-1/4"
            />
            <img
              src="hero-patek.png" // Use the smaller images for the second and third
              alt="Logo"
              className="m-1 w-1/4"
            />
          </div>
          <div className="flex flex-wrap justify-between gap-1">
            <a href="/store" className="hover:no-underline">
              <button
                className="border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150"
              >
                Магазин
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
