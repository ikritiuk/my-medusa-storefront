
const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      <div className="h-[75vh] w-full border-b border-ui-border-base">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 gap-6">
          <div className="flex items-center">
            <img src="collection-cover.jpg" alt="Logo"/>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <a href="/store" className="hover:no-underline">
              <button
                className="border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150">
                Магазин
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
