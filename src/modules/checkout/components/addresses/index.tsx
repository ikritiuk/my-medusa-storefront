import { useCheckout } from "@lib/context/checkout-context"
import { Button, Heading, Text } from "@medusajs/ui"
import { CheckCircleSolid } from "@medusajs/icons"
import BillingAddress from "../billing_address"
import ShippingAddress from "../shipping-address"
import Divider from "@modules/common/components/divider"
import { useCart, useSetPaymentSession } from "medusa-react"
import Spinner from "@modules/common/icons/spinner"
import { useState } from "react"

// Define types for the address data
interface AddressData {
  shipping_address: {
    first_name: string
    last_name: string
    address_1: string
    address_2?: string
    postal_code: string
    city: string
    country_code: string
    phone?: string
  }
  billing_address?: {
    first_name: string
    last_name: string
    address_1: string
    address_2?: string
    postal_code: string
    city: string
    country_code: string
    phone?: string
  }
}

const Addresses = () => {
  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isOpen, open },
    editShipping: { close: closeShipping },
    editPayment: { close: closePayment },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()

  const { setCart, addShippingMethod } = useCart()
  const { mutate: setPaymentSessionMutation } = useSetPaymentSession(cart?.id!)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEdit = () => {
    open()
    closeShipping()
    closePayment()
  }

  // Handle all submissions at once
  const handleAllSteps = async (data: AddressData) => {
    setIsSubmitting(true)

    try {
      // Set the addresses
      await handleSubmit(setAddresses)(data)

      // Automatically set the shipping method (assuming default)
      const defaultShippingOption = cart?.shipping_options?.[0]?.id
      if (defaultShippingOption) {
        await addShippingMethod.mutateAsync({ option_id: defaultShippingOption })
      }

      // Automatically set the payment method (assuming default)
      const defaultPaymentProvider = cart?.payment_sessions?.[0]?.provider_id
      if (defaultPaymentProvider) {
        await setPaymentSessionMutation({ provider_id: defaultPaymentProvider })
      }
    } catch (error) {
      console.error("An error occurred:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white px-4 small:px-8">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading level="h2" className="flex flex-row text-3xl-regular gap-x-2 items-baseline">
          Адрес доставки
          {!isOpen && <CheckCircleSolid />}
        </Heading>
        {!isOpen && (
          <Text>
            <button onClick={handleEdit} className="text-ui-fg-interactive">
              Редактировать
            </button>
          </Text>
        )}
      </div>
      {isOpen ? (
        <div className="pb-8">
          <ShippingAddress checked={checked} onChange={onChange} />

          {!checked && (
            <div>
              <Heading level="h2" className="text-3xl-regular gap-x-4 pb-6 pt-8">
                Billing address
              </Heading>

              <BillingAddress />
            </div>
          )}

          <Button size="large" className="mt-6" onClick={() => handleAllSteps({ /* data */ })} disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Continue to Review"}
          </Button>
        </div>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="flex items-start gap-x-1 w-full">
                  <div className="flex flex-col w-1/3">
                    <Text className="txt-medium-plus text-ui-fg-base mb-1">
                      Адрес доставки
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.first_name} {cart.shipping_address.last_name}
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.address_1} {cart.shipping_address.address_2}
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.postal_code}, {cart.shipping_address.city}
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.country_code?.toUpperCase()}
                    </Text>
                  </div>

                  <div className="flex flex-col w-1/3 ">
                    <Text className="txt-medium-plus text-ui-fg-base mb-1">
                      Контактная информация
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle">
                      {cart.shipping_address.phone}
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle">{cart.email}</Text>
                  </div>
                </div>
              </div>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      )}
      <Divider className="mt-8" />
    </div>
  )
}

export default Addresses
