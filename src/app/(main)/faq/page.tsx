import FaqTemplate from "@modules/account/templates/faq-template"
import { Metadata as BaseMetadata } from "next"

// Extend the Metadata type
interface Metadata extends BaseMetadata {
  "yandex-verification"?: string
}

export const metadata: { description: string; "yandex-verification": string; title: string } = {
  title: "Вопросы",
  description: "FAQ",
  "yandex-verification": "8e708c798b48a43d", // Add custom meta key
}

export default function Faq() {
  return <FaqTemplate />
}
