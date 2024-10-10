import {
  ProductProvider,
  useProductActions,
} from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button, Text } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import React, { useMemo } from "react"
import { formatCurrencyX2 } from "@modules/common/utils/utils"

type ProductActionsProps = {
  product: PricedProduct
}

const ProductActionsInner: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

  const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price
    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <div className="flex flex-col gap-y-2">
      <div>
        {product.variants.length > 1 && (
          <div className="flex flex-col gap-y-4">
            {(product.options || []).map((option) => {
              return (
                <div key={option.id}>
                  <OptionSelect
                    option={option}
                    current={options[option.id]}
                    updateOption={updateOptions}
                    title={option.title}
                  />
                </div>
              )
            })}
            <Divider />
          </div>
        )}
      </div>
      {selectedPrice ? (
        <div className="flex flex-col text-ui-fg-base">
          {/* New Price (Doubled and Crossed) */}
          <p className="text-xl-semi  line-through text-gray-500 mb-2">
            {formatCurrencyX2(selectedPrice.original_price)}
          </p>

          {/* Current Price */}
          <span
            className={clsx("text-xl-semi", {
              "text-ui-fg-interactive": selectedPrice.price_type === "sale",
            })}
          >
            {selectedPrice.calculated_price}
          </span>

          {/* Old Price and Sale Percentage */}
          {selectedPrice.price_type === "sale" && (
            <>
              <div className="flex items-center">
                <p className="text-3xl font-bold line-through text-gray-500 mr-2">
                  {selectedPrice.original_price}
                </p>
                <p className="text-red-500 text-lg font-bold">
                  Limited Time Deal!
                </p>
              </div>
              <span className="text-ui-fg-interactive">
                -{selectedPrice.percentage_diff}% off
              </span>
            </>
          )}
        </div>
      ) : (
        <div></div>
      )}

      <Button
        onClick={addToCart}
        disabled={!inStock || !variant}
        variant="primary"
        className="w-full h-10"
      >
        {!inStock
          ? "Нет в наличии"
          : !variant
            ? "Выбрать вариант"
            : "Добавить в корзину"}
      </Button>
    </div>
  )
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => (
  <ProductProvider product={product}>
    <ProductActionsInner product={product} />
  </ProductProvider>
)

export default ProductActions
