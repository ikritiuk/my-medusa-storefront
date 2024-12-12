import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"
import NextHead from "next/head"
import * as React from "react"


export const metadata: Metadata = {
  title: "Luxury24 shop",
  description:
    "Top quality replicas",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  return (
    <>
      <NextHead>
        <meta name="yandex-verification" content="8e708c798b48a43d" />
      </NextHead>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense>
    </>
  )
}
