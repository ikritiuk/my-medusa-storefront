import { Metadata } from "next"
import Sitemap from "@modules/account/templates/sitemap"

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Sitemap",
}

export default function Sitemap() {
  return <Sitemap/>
}
