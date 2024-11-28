import { Dialog, Transition } from "@headlessui/react"
import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import useToggleState from "@lib/hooks/use-toggle-state"
import { Button } from "@medusajs/ui"
import ChevronDown from "@modules/common/icons/chevron-down"
import X from "@modules/common/icons/x"
import clsx from "clsx"
import React, { Fragment, useMemo } from "react"
import OptionSelect from "../option-select"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type MobileActionsProps = {
  product: PricedProduct
  show: boolean
}

const MobileActions: React.FC<MobileActionsProps> = ({ product, show }) => {
  const { variant, addToCart, options, inStock, updateOptions } =
    useProductActions()
  const { state, open, close } = useToggleState()

  const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <>
      <div
        className={clsx("lg:hidden sticky inset-x-0 bottom-0", {
          "pointer-events-none": !show,
        })}
      >
        <Transition
          as={Fragment}
          show={show}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-white flex flex-col gap-y-3 justify-center items-center text-large-regular p-4 h-full w-full border-t border-gray-200">
            <div className="flex items-center gap-x-2">
              <span>{product.title}</span>
              <span>—</span>
              {selectedPrice ? (
                <div className="flex items-end gap-x-2 text-gray-700">
                  {selectedPrice.price_type === "sale" && (
                    <p>
                      <span className="line-through text-small-regular">
                        {selectedPrice.original_price}
                      </span>
                    </p>
                  )}
                  <span
                    className={clsx({
                      "text-ui-fg-interactive":
                        selectedPrice.price_type === "sale",
                    })}
                  >
                    {selectedPrice.calculated_price}
                  </span>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="grid grid-cols-2 w-full gap-x-4">
              <Button
                onClick={() => {
                  // Get the current URL and path
                  const currentPath = window.location.href; // Full URL with current path

                  // Construct the message without encoding
                  const message = `Запрос: ${currentPath}`;

                  // Construct the Telegram URL
                  const finalUrl = `https://t.me/luxury24manager?text=${message}`;

                  // Open the URL in a new tab
                  window.open(finalUrl, '_blank');
                }}
                disabled={!inStock}
                className="w-full flex items-center justify-center gap-x-2"
              >
                {!inStock ? (
                  "Нет в наличии"
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm4.564 8.16l-1.758 8.31c-.132.589-.476.732-.963.456l-2.665-1.964-1.287 1.238c-.142.143-.262.262-.535.262l.191-2.69 4.896-4.415c.213-.19-.046-.295-.331-.105l-6.06 3.82-2.615-.818c-.569-.18-.581-.569.118-.84l10.278-3.968c.478-.174.896.118.745.838z" />
                    </svg>
                    {/* Telegram Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 2C6.478 2 2 6.478 2 12c0 5.522 4.478 10 10 10s10-4.478 10-10c0-5.522-4.478-10-10-10zm4.91 7.487l-1.347 6.353c-.103.488-.386.6-.79.402L11.99 14.1l-1.048 1.014c-.116.116-.213.213-.436.213l.156-2.252 4.105-3.707c.178-.162-.038-.252-.276-.09L9.935 11.5l-1.77-.553c-.386-.123-.395-.386.08-.57l7.973-3.075c.37-.145.693.086.577.684z" />
                    </svg>
                    Заказать в Telegram
                  </>
                )}
              </Button>

            </div>
          </div>
        </Transition>
      </div>
      <Transition appear show={state} as={Fragment}>
        <Dialog as="div" className="relative z-[75]" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed bottom-0 inset-x-0">
            <div className="flex min-h-full h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="w-full h-full transform overflow-hidden text-left flex flex-col gap-y-3">
                  <div className="w-full flex justify-end pr-6">
                    <button
                      onClick={close}
                      className="bg-white w-12 h-12 rounded-full text-gray-900 flex justify-center items-center"
                    >
                      <X />
                    </button>
                  </div>
                  <div className="bg-white px-6 py-12">
                    {product.variants.length > 1 && (
                      <div className="flex flex-col gap-y-6">
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
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileActions
