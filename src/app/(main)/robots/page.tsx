import { Metadata } from "next"
import Robots from "@modules/account/templates/robots"

export const metadata: Metadata = {
  title: "Robots.txt",
  description: "Robots.txt",
}

export default function Sitemap() {
  return <Robots/>
}
