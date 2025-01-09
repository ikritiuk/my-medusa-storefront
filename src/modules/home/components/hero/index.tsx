import Link from "next/link";
import React from "react"

const imageTextRow0 = [
  "Часы Rolex изготавливаются из высококачественных металлов, таких как нержавеющая сталь 904L, отличающаяся высоким содержанием никеля и хрома. Эта стальная сплав имеет повышенную устойчивость к коррозии и немного тяжелее других видов стали.",
  "Мастера Rolex с особым вниманием создают свои эксклюзивные хронометры. Их внимание к мельчайшим деталям делает часы идеальными.",
  "Полное соответствие по размеру и функционалу. Обработка краев корпуса, ход безельного кольца, зазор между звеньями браслета. Полуавтоматическая обработка заготовок гарантирует точные размеры и соответствующую тактильность."]


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
      <div className="content-container">
        <div className="w-full max-w-8xl px-6 py-12 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">О нас</h1>
          <p className="text-lg mb-6">
            В нашем Telegram-канале вы найдете огромное количество отзывов от наших счастливых клиентов.
            Мы специализируемся на элитных брендах, от архивных моделей до новейших. В нашем магазине вы найдете
            только самый полный ассортимент.
            Отличное качество и надежность гарантированы.
          </p>


          <div className="flex flex-col md:flex-row md:flex-wrap md:-mx-2 lg:-mx-4">
            {[
              {
                src: "https://medusajs-server.fra1.digitaloceanspaces.com/static/1-im-detail.jpg",
                alt: "Photo 1",
                title: "Лучшие материалы",
              },
              {
                src: "https://medusajs-server.fra1.digitaloceanspaces.com/static/2-im-detail.jpg",
                alt: "Photo 2",
                title: "Внимание к мелочам",
              },
              {
                src: "https://medusajs-server.fra1.digitaloceanspaces.com/static/3-im-detail.jpg",
                alt: "Photo 3",
                title: "Премиум качество",
              },
            ].map((photo, index, array) => (
              <div key={index} className={`w-full md:w-1/3 lg:w-1/3 md:px-2 lg:px-4 mb-8 `}>
                <h3 className="text-lg mt-2 font-bold mb-6">{photo.title}</h3>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-lg">{imageTextRow0[index]}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
