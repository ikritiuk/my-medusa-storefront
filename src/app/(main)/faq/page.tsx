import FaqTemplate from "@modules/account/templates/faq-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Вопросы",
  description: "FAQ",
}

export default function Faq() {
  return <FaqTemplate />
}
