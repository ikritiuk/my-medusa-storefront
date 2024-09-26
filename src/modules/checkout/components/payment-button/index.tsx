import { useCheckout } from "@lib/context/checkout-context"
import { PaymentSession } from "@medusajs/medusa"
import { Button, clx, Heading, Text } from "@medusajs/ui"
import { OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useCart } from "medusa-react"
import React, { useEffect, useState } from "react"

type PaymentButtonProps = {
  paymentSession?: PaymentSession | null
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ paymentSession }) => {
  const { cart } = useCart()

  const notReady =
    !cart ||
    !cart.shipping_address;

  switch (paymentSession?.provider_id) {
    case "stripe":
      return (
        <StripePaymentButton session={paymentSession} notReady={notReady} />
      )
    case "manual":
      return <ManualTestPaymentButton notReady={notReady} />
    case "paypal":
      return (
        <PayPalPaymentButton notReady={notReady} session={paymentSession} />
      )
    default:
      return <Review >Проверка</Review>
  }
}

const Review = () => {
  const {
    cart,
    editPayment: { state: isEditPayment },
    editAddresses: { state: isEditAddresses },
    editShipping: { state: isEditShipping },
  } = useCheckout()

  const previousStepsCompleted =
    !!cart?.shipping_address

  const editingOtherSteps = isEditAddresses

  return (
    <div className="bg-white px-4 small:px-8">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none": editingOtherSteps,
            }
          )}
        >
          Проверка
        </Heading>
      </div>
      {!editingOtherSteps && previousStepsCompleted && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                Нажимая кнопку Оформить заказ, вы подтверждаете, что прочитали, поняли и принимаете наши Условия использования,
                Условия продажи и Политику возврата, а также подтверждаете, что ознакомлены с Политикой конфиденциальности Royal Replica.
                Наш менеджер свяжется с Вами в ближайшее время.
              </Text>
            </div>
          </div>
          <PaymentButton paymentSession={cart?.payment_session} />
        </>
      )}
    </div>
  )
}

const StripePaymentButton = ({
                               session,
                               notReady,
                             }: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const stripe = useStripe()
  const elements = useElements()
  const card = elements?.getElement("cardNumber")

  const disabled = !stripe || !elements ? true : false

  const handlePayment = async () => {
    setSubmitting(true)

    // if (!stripe || !elements || !card || !cart) {
    //   setSubmitting(false)
    //   return
    // }

    // await stripe
    //   .confirmCardPayment(session.data.client_secret as string, {
    //     payment_method: {
    //       card: card,
    //       billing_details: {
    //         name:
    //           cart.billing_address.first_name +
    //           " " +
    //           cart.billing_address.last_name,
    //         address: {
    //           city: cart.billing_address.city ?? undefined,
    //           country: cart.billing_address.country_code ?? undefined,
    //           line1: cart.billing_address.address_1 ?? undefined,
    //           line2: cart.billing_address.address_2 ?? undefined,
    //           postal_code: cart.billing_address.postal_code ?? undefined,
    //           state: cart.billing_address.province ?? undefined,
    //         },
    //         email: cart.email,
    //         phone: cart.billing_address.phone ?? undefined,
    //       },
    //     },
    //   })
    //   .then(({ error, paymentIntent }) => {
    //     if (error) {
    //       const pi = error.payment_intent
    //
    //       if (
    //         (pi && pi.status === "requires_capture") ||
    //         (pi && pi.status === "succeeded")
    //       ) {
    //         onPaymentCompleted()
    //       }
    //
    //       setErrorMessage(error.message)
    //       return
    //     }
    //
    //     if (
    //       (paymentIntent && paymentIntent.status === "requires_capture") ||
    //       paymentIntent.status === "succeeded"
    //     ) {
    //       return onPaymentCompleted()
    //     }
    //
    //     return
    //   })
    //   .finally(() => {
    //     setSubmitting(false)
    //   })
  }

  return (
    <>
      <Button
        disabled={disabled || notReady}
        onClick={handlePayment}
        size="large"
        isLoading={submitting}
      >
        Оформить заказ
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ""

const PayPalPaymentButton = ({
                               session,
                               notReady,
                             }: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const handlePayment = async (
    _data: OnApproveData,
    actions: OnApproveActions
  ) => {
    actions?.order
      ?.authorize()
      .then((authorization) => {
        if (authorization.status !== "COMPLETED") {
          setErrorMessage(`An error occurred, status: ${authorization.status}`)
          return
        }
        onPaymentCompleted()
      })
      .catch(() => {
        setErrorMessage(`An unknown error occurred, please try again.`)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
  return (
    <PayPalScriptProvider
      options={{
        "client-id": PAYPAL_CLIENT_ID,
        currency: cart?.region.currency_code.toUpperCase(),
        intent: "authorize",
      }}
    >
      {errorMessage && (
        <span className="text-rose-500 mt-4">{errorMessage}</span>
      )}
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={async () => session.data.id as string}
        onApprove={handlePayment}
        disabled={notReady || submitting}
      />
    </PayPalScriptProvider>
  )
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)

  const { onPaymentCompleted } = useCheckout()

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()

    setSubmitting(false)
  }

  return (
    <Button
      disabled={notReady}
      isLoading={submitting}
      onClick={handlePayment}
      size="large"
    >
      Place order
    </Button>
  )
}

export default PaymentButton
