import { useCheckout } from "@lib/context/checkout-context"
import { Button, Heading, Text } from "@medusajs/ui"
import { CheckCircleSolid } from "@medusajs/icons"
import BillingAddress from "../billing_address"
import ShippingAddress from "../shipping-address"
import Divider from "@modules/common/components/divider"
import { useCart, useSetPaymentSession } from "medusa-react"
import Spinner from "@modules/common/icons/spinner"
import { useState } from "react"

// Define types for the form data structure
interface Address {
  first_name: string
  last_name: string
  address_1: string
  address_2?: string
  postal_code: string
  city: string
  country_code: string
  phone?: string
}

interface FormData {
  shipping_address: Address
  billing_address?: Address // Optional if same as shipping
}

const Addresses = () => {
  const {
    sameAsBilling: { state: isBillingSameAsShipping, toggle: toggleBillingSameAsShipping },
    editAddresses: { state: isEditing, open: openEdit },
    editShipping: { close: closeShipping },
    editPayment: { close: closePayment },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()

  const { addShippingMethod } = useCart()
  const { mutate: setPaymentSessionMutation } = useSetPaymentSession(cart?.id!)

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle the edit button click to enable address editing
  const handleEditClick = () => {
    openEdit()
    closeShipping()
    closePayment()
  }

  // Handle form submission
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Extract form data based on whether billing address is the same as shipping address
    const formData: FormData = {
      shipping_address: {
        first_name: cart?.shipping_address?.first_name || "",
        last_name: cart?.shipping_address?.last_name || "",
        address_1: cart?.shipping_address?.address_1 || "",
        postal_code: cart?.shipping_address?.postal_code || "",
        city: cart?.shipping_address?.city || "",
        country_code: cart?.shipping_address?.country_code || "US", // Default to 'US' if undefined
      },
      billing_address: isBillingSameAsShipping
        ? undefined
        : {
          first_name: cart?.billing_address?.first_name || "",
          last_name: cart?.billing_address?.last_name || "",
          address_1: cart?.billing_address?.address_1 || "",
          postal_code: cart?.billing_address?.postal_code || "",
          city: cart?.billing_address?.city || "",
          country_code: cart?.billing_address?.country_code || "US",
        },
    }

    try {
      // Set the addresses in the checkout context
      await setAddresses(formData)

      // Set the default shipping method if available
      const defaultShippingOption = cart?.shipping_options?.[0]?.id
      if (defaultShippingOption) {
        await addShippingMethod.mutateAsync({ option_id: defaultShippingOption })
      }

      // Set the default payment method if available
      const defaultPaymentProvider = cart?.payment_sessions?.[0]?.provider_id
      if (defaultPaymentProvider) {
        await setPaymentSessionMutation({ provider_id: defaultPaymentProvider })
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white px-4 small:px-8">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading level="h2" className="flex flex-row text-3xl-regular gap-x-2 items-baseline">
          Адрес доставки
          {!isEditing && <CheckCircleSolid />}
        </Heading>
        {!isEditing && (
          <Text>
            <button onClick={handleEditClick} className="text-ui-fg-interactive">
              Редактировать
            </button>
          </Text>
        )}
      </div>
      {isEditing ? (
        <form onSubmit={onSubmit} className="pb-8">
          {/* Shipping Address Section */}
          <ShippingAddress checked={isBillingSameAsShipping} onChange={toggleBillingSameAsShipping} />

          {/* Conditional Billing Address Section */}
          {!isBillingSameAsShipping && (
            <div>
              <Heading level="h2" className="text-3xl-regular gap-x-4 pb-6 pt-8">
                Адрес для выставления счета
              </Heading>
              <BillingAddress />
            </div>
          )}

          {/* Submit Button */}
          <Button size="large" className="mt-6" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Continue to Review"}
          </Button>
        </form>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart?.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="flex items-start gap-x-1 w-full">
                  {/* Shipping Address Summary */}
                  <div className="flex flex-col w-1/3">
                    <Text className="txt-medium-plus text-ui-fg-base mb-1">Адрес доставки</Text>
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

                  {/* Contact Information Summary */}
                  <div className="flex flex-col w-1/3">
                    <Text className="txt-medium-plus text-ui-fg-base mb-1">Контактная информация</Text>
                    <Text className="txt-medium text-ui-fg-subtle">{cart.shipping_address.phone}</Text>
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
