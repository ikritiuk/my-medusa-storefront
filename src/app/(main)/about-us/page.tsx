import AboutUsTemplate from "@modules/account/templates/about-us"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "О нас",
  description: "About us",
}

export default function AboutUs() {
  return <AboutUsTemplate />
}
