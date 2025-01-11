import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
                  children,
                  className,
                  isLoading = false,
                  variant = "primary",
                  ...props
                }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50",
        {
          // Telegram Primary Variant
          "text-white bg-[#0088cc] border-[#0088cc] hover:bg-white hover:text-[#0088cc] hover:border-[#0088cc] disabled:hover:bg-[#0088cc] disabled:hover:text-white":
            variant === "primary",

          // Telegram Secondary Variant
          "text-[#0088cc] bg-transparent border-[#0088cc] hover:bg-[#f5f8fa]":
            variant === "secondary",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button
