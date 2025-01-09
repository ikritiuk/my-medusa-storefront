"use client"
import React from "react"

const imageTextRow0 = [
  "Часы Rolex изготавливаются из высококачественных металлов, таких как нержавеющая сталь 904L, отличающаяся высоким содержанием никеля и хрома. Эта стальная сплав имеет повышенную устойчивость к коррозии и немного тяжелее других видов стали.",
  "Мастера Rolex с особым вниманием создают свои эксклюзивные хронометры. Их внимание к мельчайшим деталям делает часы идеальными. Наши копии практически невозможно отличить от оригинала без микроскопа.",
  "Полное соответствие по размеру и функционалу. Обработка краев корпуса, ход безельного кольца, зазор между звеньями браслета. Полуавтоматическая обработка заготовок гарантирует точные размеры и соответствующую тактильность."]

const imageTextRow1 = [
  "Все модели Rolex, выпущенные после 2002 года, имеют крошечную заводную головку, выгравированную лазером в положении «6 часов». Он расположен в стекле часов рядом с надписью «Сделано в Швейцарии» и виден только при использовании специальных инструментов.",
  "Daytona, Submariner и Sea-Dweller оснащены дополнительным изолирующим стеклом между корпусом часов и заводной головкой. Производитель часов придает большое значение герметичности механизма и заводного механизма.",
  "Если снять ремешок часов и отодвинуть штифт в сторону тонким предметом, можно увидеть серийный номер и номер модели (серийный номер находится в положении «6 часов», а номер модели — в положении «12 часов»). Все этикетки должны выглядеть идеально и точно даже в увеличенном виде.",
]

const imageTextRow2 = [
  "Все модели Rolex, выпущенные после 2002 года, имеют крошечную заводную головку, выгравированную лазером в положении «6 часов». Он расположен в стекле часов рядом с надписью «Сделано в Швейцарии» и виден только при использовании специальных инструментов.",
  "Стальной браслет Rolex Glidelock оснащен двойной системой удлинения ремешка. Его можно расширить до 20 мм с шагом 2 мм. Удлинительный элемент флиплок позволяет удлинить браслет на 26 мм.",
  "Если снять ремешок часов и отодвинуть штифт в сторону тонким предметом, можно увидеть серийный номер и номер модели (серийный номер находится в положении «6 часов», а номер модели — в положении «12 часов»). Все этикетки должны выглядеть идеально и точно даже в увеличенном виде.",
]

const AboutUsPage = () => {
  return (
    <div className="py-12">
      <div className="content-container">
        <div className="w-full max-w-8xl px-6 py-12 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">О нас</h1>
          <p className="text-lg mb-6">
            Мы специализируемся на элитных брендах, от архивных моделей до новейших. В нашем магазине вы найдете
            только самый полный ассортимент.
            Мы предлагаем качественные копии часов европейского производства. Мы не продаем дешевые подделки из Турции
            или Китая. Отличное качество и надежность гарантированы.
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


          <div className="flex flex-col md:flex-row md:flex-wrap md:-mx-2 lg:-mx-4">
            {[
              {
                src: "https://medusajs-server.fra1.digitaloceanspaces.com/static/5-im-detail.jpg",
                alt: "Photo 5",
                title: "Микрогравировка",
              },
              {
                src: "https://medusajs-server.fra1.digitaloceanspaces.com/static/6-im-detail.jpg",
                alt: "Photo 6",
                title: "Водонепроницаемость",
              },
              {
                src: "https://medusajs-server.fra1.digitaloceanspaces.com/static/7-im-detail.jpg",
                alt: "Photo 7",
                title: "Гравировка на корпусе",
              },
            ].map((photo, index) => (
              <div key={index} className={`w-full md:w-1/3 lg:w-1/3 md:px-2 lg:px-4 mb-8 `}>
                <h3 className="text-lg mt-2 font-bold mb-6">{photo.title}</h3>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-lg">{imageTextRow1[index]}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap md:-mx-2 lg:-mx-4">
            {[
              {
                src: "https://medusajs-server.fra1.digitaloceanspaces.com/static/7-im-detail.jpg",
                alt: "Photo 7",
                title: "Cапфировое стекло",
              },
              {
                src: "https://medusajs-server.fra1.digitaloceanspaces.com/static/8-im-detail.jpg",
                alt: "Photo 8",
                title: "Застежка GLIDELOCK",
              },
              {
                src: "https://medusajs-server.fra1.digitaloceanspaces.com/static/9-im-detail.jpg",
                alt: "Photo 9",
                title: "Точность",
              },
            ].map((photo, index, array) => (
              <div key={index} className={`w-full md:w-1/3 lg:w-1/3 md:px-2 lg:px-4 mb-8 `}>
                <h3 className="text-lg mt-2 font-bold mb-6">{photo.title}</h3>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-lg">{imageTextRow2[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
