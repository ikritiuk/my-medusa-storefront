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
            <Link
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Royal Replica
            </Link>
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
                      }
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
          <div
            style="display: flex; align-items: center; justify-content: space-between; border: 1px solid #ccc; padding: 15px; border-radius: 10px; max-width: 800px; margin: 20px auto;">
            <div>
              <h3>Не нашли желаемую модель часов?</h3>
              <p>Вы можете написать нам персонально, и мы с радостью доставим эту модель со склада специально для
                вас.</p>
            </div>
            <div style="text-align: center;">
              <img src="/qr-footer.png" alt="QR код на Telegram" style="width: 150px;">
              </img>
              <p>Сканируйте QR код для связи через Telegram</p>
            </div>
            <div style="text-align: center; margin-left: 20px;">
              <a href="https://t.me/royalreplicashop" target="_blank" style="text-decoration: none;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram Icon"
                     style="width: 50px;">
                </img>
                <p>Написать в Telegram</p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FooterNav
