import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"

import Head from "next/head"

export const metadata: Metadata = {
  title: "Luxury24 shop",
  description: "Top quality replicas",
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name="yandex-verification" content="8e708c798b48a43d" />
      </Head>
      <main>
        <h1>Welcome to Luxury24 Shop</h1>
      </main>
    </>
  )
}
