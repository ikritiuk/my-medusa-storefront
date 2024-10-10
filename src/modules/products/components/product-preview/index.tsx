import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import { formatCurrency } from '../../../common/utils/utils';

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
        <div className="flex items-center gap-x-2">
          {price ? (
            <>
              <Text className="line-through text-ui-fg-muted"> {/* Added line-through and muted class */}
                {formatCurrency((Number(price.original_price) * 2).toString())} {/* Convert to string */}
              </Text>
            </>
          ) : (
            <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
          )}
        </div>
        <div className="flex items-center gap-x-2">
          {price ? (
            <>
              {price.price_type === "sale" && (
                <Text className="line-through text-ui-fg-muted">
                  {formatCurrency(price.original_price)}
                </Text>
              )}
              <Text
                className={clsx("text-ui-fg-muted", {
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
  </Link>
)

export default ProductPreview
