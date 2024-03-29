import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Корзина",
  description: "View your cart",
}

export default function Cart() {
  return <CartTemplate />
}
