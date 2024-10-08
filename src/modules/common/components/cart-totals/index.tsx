import { Cart, Order } from "@medusajs/medusa"
import { Tooltip } from "@medusajs/ui"
import { InformationCircleSolid } from "@medusajs/icons"
import { formatAmount } from "medusa-react"
import React from "react"
import { formatCurrency } from '../../utils/utils';

type CartTotalsProps = {
  data: Omit<Cart, "refundable_amount" | "refunded_total"> | Order
}

const CartTotals: React.FC<CartTotalsProps> = ({ data }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = data

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: data.region,
      includeTaxes: false,
    })
  }

  return (
    <div>
      <div className="flex flex-col gap-y-2 txt-medium text-ui-fg-subtle ">
        <div className="flex items-center justify-between">
          <span className="flex gap-x-1 items-center">
            Итого
            <Tooltip content="Итоговая сумма без учета доставки">
              <InformationCircleSolid color="var(--fg-muted)" />
            </Tooltip>
          </span>
          <span>{formatCurrency(getAmount(subtotal))}</span>
        </div>
        {!!discount_total && (
          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span className="text-ui-fg-interactive">
              - {formatCurrency(getAmount(discount_total))}
            </span>
          </div>
        )}
        {!!gift_card_total && (
          <div className="flex items-center justify-between">
            <span>Подарочная карта</span>
            <span className="text-ui-fg-interactive">
              - {formatCurrency(getAmount(gift_card_total))}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span>Доставка</span>
          <span>{formatCurrency(getAmount(shipping_total))}</span>
        </div>
        {/*<div className="flex justify-between">*/}
        {/*  <span className="flex gap-x-1 items-center ">Налоги</span>*/}
        {/*  <span>{formatCurrency(getAmount(tax_total))}</span>*/}
        {/*</div>*/}
      </div>
      <div className="h-px w-full border-b border-gray-200 my-4" />
      <div className="flex items-center justify-between text-ui-fg-base mb-2 txt-medium ">
        <span>Итого</span>
        <span className="txt-xlarge-plus">{formatCurrency(getAmount(total))}</span>
      </div>
      <div className="h-px w-full border-b border-gray-200 mt-4" />
    </div>
  )
}

export default CartTotals
