import AddressesTemplate from "@modules/account/templates/addresses-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Адрес",
  description: "View your addresses",
}

export default function Addresses() {
  return <AddressesTemplate />
}
