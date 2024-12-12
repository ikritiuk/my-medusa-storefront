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

export default function Home() {
  return (
    <main>
      <h1>Welcome to Luxury24 Shop</h1>
    </main>
  )
}
