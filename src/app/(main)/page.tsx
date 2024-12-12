import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense, useEffect } from "react"
import NextHead from "next/head"

export const metadata: Metadata = {
  title: "Luxury24 shop",
  description: "Top quality replicas",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  // Add the Yandex Metrika script after the component has mounted (client-side only)
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    script.src = "https://mc.yandex.ru/metrika/tag.js"
    document.head.appendChild(script)

    script.onload = () => {
      if (window.ym) {
        window.ym(99172678, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          ecommerce: "dataLayer",
        })
      }
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      <NextHead>
        {/* Optional noscript part for Yandex Metrika */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/99172678"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </NextHead>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense>
    </>
  )
}
