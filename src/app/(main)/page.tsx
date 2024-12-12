import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import React, { Suspense } from "react"
import NextHead from "next/head"

export const metadata: Metadata = {
  title: "Luxury24 shop",
  description: "Top quality replicas",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  return (
    <>
      <NextHead>
        {/* Adding the custom meta tag for Yandex verification */}
        <meta name="yandex-verification" content="8e708c798b48a43d" />
      </NextHead>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense>
    </>
  )
}
