import FaqTemplate from "@modules/account/templates/faq-template"
import { Metadata as BaseMetadata } from "next"

// Extend the Metadata type
interface Metadata extends BaseMetadata {
  "yandex-verification"?: string
}

export const metadata: { title: string; description: string;  "yandex": boolean} = {
  title: "Вопросы",
  description: "FAQ",
  yandex: true
}

export default function Faq() {
  return <FaqTemplate />
}
