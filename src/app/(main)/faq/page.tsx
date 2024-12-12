import FaqTemplate from "@modules/account/templates/faq-template"
import { Metadata as BaseMetadata } from "next"

// Extend the Metadata type
interface Metadata extends BaseMetadata {
  "yandex-verification"?: string
}

export const metadata: { title: string; description: string;  a: string; "yandex-verification": string} = {
  title: "Вопросы",
  description: "FAQ1",
  a: "b",
  "yandex-verification": "8e708c798b48a43d", // Add custom meta key
}

export default function Faq() {
  return <FaqTemplate />
}
