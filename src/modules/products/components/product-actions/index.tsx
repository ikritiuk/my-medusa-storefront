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
          <p className="text-xl  line-through text-gray-500 mb-2">
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
        onClick={() => {
          // Get the current URL and path
          const currentPath = window.location.href; // Full URL with current path

          // Construct the message without encoding
          const message = `3anpoc : ${currentPath}`;

          // Construct the Telegram URL
          const finalUrl = `https://t.me/luxury24manager?text=${message}`;

          // Open the URL in a new tab
          window.open(finalUrl, '_blank');
        }}
        disabled={!inStock || !variant}
        variant="primary"
        className="w-full h-10 flex items-center justify-center gap-x-2 text-lg font-semibold"
      >
        {!inStock ? (
          "Нет в наличии"
        ) : !variant ? (
          "Выбрать вариант"
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm4.564 8.16l-1.758 8.31c-.132.589-.476.732-.963.456l-2.665-1.964-1.287 1.238c-.142.143-.262.262-.535.262l.191-2.69 4.896-4.415c.213-.19-.046-.295-.331-.105l-6.06 3.82-2.615-.818c-.569-.18-.581-.569.118-.84l10.278-3.968c.478-.174.896.118.745.838z" />
            </svg>
            Заказать в Telegram
          </>
        )}
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
