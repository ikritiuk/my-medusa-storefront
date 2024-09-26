import { useCheckout } from "@lib/context/checkout-context"
import { Button, Heading, Text, clx } from "@medusajs/ui"
import { CheckCircleSolid } from "@medusajs/icons"
import Spinner from "@modules/common/icons/spinner"
import Divider from "@modules/common/components/divider"
import { useForm } from "react-hook-form"
import { RadioGroup } from "@headlessui/react"
import Radio from "@modules/common/components/radio"
import { ErrorMessage } from "@hookform/error-message"
import { formatAmount, useCart, useCartShippingOptions } from "medusa-react"
import { useEffect, useMemo, useState } from "react"
import { Cart } from "@medusajs/medusa"

type ShippingOption = {
  value?: string
  label?: string
  price: string
}

type ShippingProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const Shipping: React.FC<ShippingProps> = ({ cart }) => {
  const {
    editAddresses: { state: isAddressesOpen, close: closeAddresses },
    editShipping: { state: isOpen, open, close },
    editPayment: {
      state: isPaymentOpen,
      open: openPayment,
      close: closePayment,
    },
    addressReady,
    shippingReady,
  } = useCheckout()

  const currentShippingOption =
    cart.shipping_methods?.[0]?.shipping_option.id || ""

  const [shippingOptionId, setShippingOptionId] = useState(currentShippingOption)
  const [submitted, setSubmitted] = useState(false)

  const { addShippingMethod, setCart } = useCart()

  const {
    setError,
    formState: { errors },
  } = useForm()

  // Fetch shipping options
  const { shipping_options, refetch } = useCartShippingOptions(cart.id, {
    enabled: !!cart.id,
  })

  useEffect(() => {
    const refetchShipping = async () => {
      await refetch()
    }
    refetchShipping()
  }, [cart, refetch])

  const submitShippingOption = (soId: string) => {
    addShippingMethod.mutate(
      { option_id: soId },
      {
        onSuccess: ({ cart }) => {
          setCart(cart)
          close()
          openPayment()
          setSubmitted(true) // Set submitted to true after success
        },
        onError: () =>
          setError(
            "soId",
            {
              type: "validate",
              message: "An error occurred while adding shipping. Please try again.",
            },
            { shouldFocus: true }
          ),
      }
    )
  }

  const handleChange = (value: string) => {
    setShippingOptionId(value)
  }

  const handleEdit = () => {
    open()
    closeAddresses()
    closePayment()
  }

  const editingOtherSteps = isAddressesOpen || isPaymentOpen

  const shippingMethods: ShippingOption[] = useMemo(() => {
    if (shipping_options && cart?.region) {
      return shipping_options.map((option) => ({
        value: option.id,
        label: option.name,
        price: formatAmount({
          amount: option.amount || 0,
          region: cart.region,
        }),
      }))
    }
    return []
  }, [shipping_options, cart])

  // Automatically submit the shipping option when selected
  useEffect(() => {
    if (shippingOptionId && !submitted) {
      submitShippingOption(shippingOptionId)
    }
  }, [shippingOptionId, submitted]) // Run effect when shippingOptionId changes

  return (
    <div className="bg-white p-4 small:px-8">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none":
                editingOtherSteps && !shippingReady,
            }
          )}
        >
          Доставка
          {!isOpen && currentShippingOption && shippingReady && (
            <CheckCircleSolid />
          )}
        </Heading>
        {!isOpen && addressReady && !submitted && (
          <Text>
            <button onClick={handleEdit} className="text-ui-fg-interactive">
              Редактировать
            </button>
          </Text>
        )}
      </div>
      {!editingOtherSteps && isOpen && !submitted ? (
        <div className="pb-8">
          <div>
            <RadioGroup
              value={shippingOptionId}
              onChange={handleChange}
            >
              {shippingMethods && shippingMethods.length ? (
                shippingMethods.map((option) => (
                  <RadioGroup.Option
                    key={option.value}
                    value={option.value}
                    className={clx(
                      "flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active",
                      {
                        "border-ui-border-interactive": option.value === shippingOptionId,
                      }
                    )}
                  >
                    <div className="flex items-center gap-x-4">
                      <Radio checked={shippingOptionId === option.value} />
                      <span className="text-base-regular">{option.label}</span>
                    </div>
                    <span className="justify-self-end text-gray-700">{option.price}</span>
                  </RadioGroup.Option>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center px-4 py-8 text-gray-900">
                  <Spinner />
                </div>
              )}
            </RadioGroup>
            <ErrorMessage
              errors={errors}
              name="soId"
              render={({ message }) => (
                <div className="pt-2 text-rose-500 text-small-regular">
                  <span>{message}</span>
                </div>
              )}
            />
          </div>

          {!submitted && (
            <Button
              size="large"
              className="mt-6"
              onClick={() => submitShippingOption(shippingOptionId)}
            >
              Continue to payment
            </Button>
          )}
        </div>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && shippingReady && (
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">Метод</Text>
                <Text className="txt-medium text-ui-fg-subtle">
                  {cart.shipping_methods[0].shipping_option.name} (
                  {formatAmount({
                    amount: cart.shipping_methods[0].price,
                    region: cart.region,
                  })
                    .replace(/,/g, "")
                    .replace(/\./g, ",")}
                  )
                </Text>
              </div>
            )}
          </div>
        </div>
      )}
      <Divider className="mt-8" />
    </div>
  )
}

export default Shipping
