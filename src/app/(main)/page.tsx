import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Suspense } from "react"

import { Metadata as BaseMetadata } from "next"

// Extend the Metadata type
interface Metadata extends BaseMetadata {
  "yandex-verification"?: string
}

export const metadata: { description: string; "yandex-verification": string; title: string } = {
  title: "Luxury24 shop",
  description: "Top quality replicas",
  "yandex-verification": "8e708c798b48a43d", // Add custom meta key
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense>
    </>
  )
}
