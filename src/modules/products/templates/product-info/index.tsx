import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"
import React from "react"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <Link
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </Link>
        )}
        <Heading
          level="h2"
          className="text-xl leading-7 text-ui-fg-base sm:text-3xl sm:leading-10"
        >
          {product.title}
        </Heading>

        <Text className="text-medium text-ui-fg-subtle">
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
