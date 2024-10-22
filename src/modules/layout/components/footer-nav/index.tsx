"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="border-t border-ui-border-base w-screen">
      <div className="content-container flex flex-col">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <div className="flex justify-between  p-4 rounded-lg max-w-3xl ">
              <div><h3 className="text-lg font-semibold">Не нашли желаемую модель часов?</h3><p className="text-sm">Вы
                можете написать нам персонально, </p>
                <p className="text-sm">и мы с радостью доставим эту модель со склада </p>
                <p className="text-sm">специально для Вас.</p>
                <div className="">

                  <a href="https://t.me/royalreplicashop" target="_blank"
                     className="text-decoration-none">
                    <p className="text-sm mt-2">Написать в Telegram:</p>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram Icon"
                      className="w-12"/></a></div>
              </div>
            </div>
          </div>
          <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
            <div className="flex flex-col gap-y-2">
              {collections && (
                <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Коллекции
                </span>
                  <ul
                    className={clsx(
                      "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                      {
                        "grid-cols-2": (collections?.length || 0) > 3,
                      },
                    )}
                  >
                    {collections?.slice(0, 6).map((c) => (
                      <li key={c.id}>
                        <Link
                          className="hover:text-ui-fg-base"
                          href={`/collections/${c.handle}`}
                        >
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Royal Replica. Все права защищены.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
