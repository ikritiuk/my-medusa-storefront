import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Войти в аккаунт",
  description: "Sign in to your Royal-Replica account.",
}

export default function Login() {
  return <LoginTemplate />
}
