import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
  yandex: true
}

export default function StorePage() {
  return <StoreTemplate />
}
