"use client";

import Link from "next/link";

// Reusable Image Card Component
const ImageCard = ({ href, imgSrc, imgAlt, label }) => (
  <div className="relative m-2 w-full md:w-1/4">
    <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
      {label}
    </div>
    <Link href={href}>
      <img src={imgSrc} alt={imgAlt} className="rounded" loading="lazy" />
    </Link>
  </div>
);

// Reusable Video Section Component
const VideoSection = ({ href, videoSrc, posterSrc }) => (
  <Link href={href} className="relative w-full overflow-hidden">
    <video
      src={videoSrc}
      poster={posterSrc}
      className="w-full h-full object-cover translate-y-[-10%]"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
  </Link>
);

const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large Screen Layout */}
      <div className="hidden lg:block">
        {/* Promo Banner */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded z-20">
          Премиум часы из высококачественных материалов из Европы. Доставка во все регионы РФ
        </div>

        {/* Video Section */}
        <div className="h-screen w-full border-b border-ui-border-base">
          <VideoSection
            href="/collections/rolex"
            videoSrc="https://medusajs-server.fra1.digitaloceanspaces.com/panda-hero.mp4"
            posterSrc="https://medusajs-server.fra1.digitaloceanspaces.com/panda-hero-preview.jpg"
          />
        </div>

        {/* Popular Brands Title */}
        <div className="w-full text-center my-6">
          <h2 className="text-xl font-bold">Популярные бренды</h2>
        </div>

        {/* Brand Rows */}
        <div className="h-[50vh] w-full border-b border-ui-border-base">
          <div className="flex items-start gap-4">
            <ImageCard
              href="/collections/rolex"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.jpg"
              imgAlt="Rolex"
              label="Rolex"
            />
            <ImageCard
              href="/collections/piguet"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hero-piguet.png"
              imgAlt="Audemars Piguet"
              label="Audemars Piguet"
            />
            <ImageCard
              href="/collections/patek"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hero-patek.png"
              imgAlt="Patek Philippe"
              label="Patek Philippe"
            />
          </div>
        </div>

        <div className="h-[50vh] w-full border-b border-ui-border-base">
          <div className="flex items-start gap-4">
            <ImageCard
              href="/collections/cartier"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/cartier-hero.webp"
              imgAlt="Cartier"
              label="Cartier"
            />
            <ImageCard
              href="/collections/tag-hauer"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/th-hero.webp"
              imgAlt="Tag Hauer"
              label="Tag Hauer"
            />
            <ImageCard
              href="/collections/hublot"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hublot-hero.jpg"
              imgAlt="Hublot"
              label="Hublot"
            />
          </div>
        </div>

        {/* Full-Width Image */}
        <div className="w-full">
          <Link href="/collections/rolex">
            <img
              src="https://medusajs-server.fra1.digitaloceanspaces.com/row-rolex.jpg"
              alt="Full Width Image"
              className="w-full h-auto mt-6 object-cover cursor-pointer"
              loading="lazy"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:md:block lg:hidden">
        <div className="relative w-full">
          <div className="absolute inset-x-4 top-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded z-20 text-center">
            Премиум часы из высококачественных материалов из Европы. Доставка во все регионы РФ
          </div>
          <VideoSection
            href="/collections/rolex"
            videoSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.mp4"
            posterSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex-preview.jpg"
          />
        </div>

        <div className="flex flex-col items-center gap-4 my-6">
          <h2 className="text-lg font-semibold text-center">Популярные бренды</h2>

          {/* Mobile Brand Rows */}
          <ImageCard
            href="/collections/rolex"
            imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hero-rolex.jpg"
            imgAlt="Rolex"
            label="Rolex"
          />
          <div className="flex items-center gap-4">
            <ImageCard
              href="/collections/piguet"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hero-piguet.png"
              imgAlt="Audemars Piguet"
              label="Audemars Piguet"
            />
            <ImageCard
              href="/collections/patek"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hero-patek.png"
              imgAlt="Patek Philippe"
              label="Patek Philippe"
            />
          </div>
          <ImageCard
            href="/collections/cartier"
            imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/cartier-hero.webp"
            imgAlt="Cartier"
            label="Cartier"
          />
          <div className="flex items-center gap-4">
            <ImageCard
              href="/collections/tag-hauer"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/th-hero.webp"
              imgAlt="Tag Hauer"
              label="Tag Hauer"
            />
            <ImageCard
              href="/collections/hublot"
              imgSrc="https://medusajs-server.fra1.digitaloceanspaces.com/hublot-hero.jpg"
              imgAlt="Hublot"
              label="Hublot"
            />
          </div>
        </div>

        <div className="w-full">
          <Link href="/collections/rolex">
            <img
              src="https://medusajs-server.fra1.digitaloceanspaces.com/row-rolex.jpg"
              alt="Full Width Image"
              className="w-full h-auto mt-4 object-cover cursor-pointer"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
