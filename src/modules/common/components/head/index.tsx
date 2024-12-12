import NextHead from "next/head"
import React from "react"

type HeadProps = {
  title?: string
  description?: string | null
  image?: string | null
  yandex?: boolean | null
}

const Head: React.FC<HeadProps> = ({ title, description, image, yandex }) => {

  return (
    <NextHead>
      <title>{title} | Luxury24</title>
      <meta itemProp="name" content={title} />
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
      {yandex && <meta itemProp="yandex-verification" content="8e708c798b48a43d" />}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
