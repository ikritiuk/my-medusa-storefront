import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Button, Text } from "@medusajs/ui"
import { formatCurrency, formatCurrencyX2 } from "../../../common/utils/utils"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
}: ProductPreviewType) => (
  <Link href={`/products/${handle}`} className="group">
    <div>
      <Thumbnail thumbnail={thumbnail} size="full" isFeatured={isFeatured} />
      <div className="flex txt-compact-medium mt-4 justify-between">
        <Text className="text-ui-fg-subtle w-4/5">{title}</Text>
        <div className="flex flex-col gap-y-2"> {/* Use flex-col to stack items vertically */}
          <div className="flex items-center gap-x-2">
            {price ? (
              <>
                <Text className="line-through text-ui-fg-muted">
                  {formatCurrencyX2(price.original_price)} {/* Convert to string */}
                </Text>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
          </div>
          <div className="flex items-center gap-x-2">
            <Button
              onClick={() => {

                // Construct the message without encoding
                const message = `3anpoc : ${title}`;

                // Construct the Telegram URL
                const finalUrl = `https://t.me/luxury24manager?text=${message}`;

                // Open the URL in a new tab
                window.open(finalUrl, '_blank');
              }}
              variant="primary"
              className="w-full h-12 flex items-center justify-center gap-x-2 text-lg font-semibold"
            >
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
            </Button>
            {price ? (
              <>
                {price.price_type === "sale" && (
                  <Text className="line-through text-ui-fg-subtle">
                    {formatCurrency(price.original_price)}
                  </Text>
                )}
                <Text
                  className={clsx("text-ui-fg-subtle", {
                    "text-ui-fg-interactive": price.price_type === "sale",
                  })}
                >
                  {formatCurrency(price.calculated_price)}
                </Text>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default ProductPreview
