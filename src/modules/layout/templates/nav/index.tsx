"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 px-8 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav
          className="txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle}/>
            </div>
            <div className="hidden small:block h-full">
              <SideMenu searchModalOpen={searchModalOpen}/>
            </div>
          </div>
          <div>
            <a
              href="/">
              <img className="w-full h-auto md:w-1/1 mx-auto" src="/logo.svg" alt="Logo"/>
            </a>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {/*{process.env.FEATURE_SEARCH_ENABLED && (*/}
              {/*  <DesktopSearchModal*/}
              {/*    state={searchModalState}*/}
              {/*    close={searchModalClose}*/}
              {/*    open={searchModalOpen}*/}
              {/*  />*/}
              {/*)}*/}
              {/*<a href="https://t.me/luxury24manager" target="_blank"*/}
              {/*   className="text-decoration-none">*/}
              {/*  <img*/}
              {/*    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram Icon"*/}
              {/*    className="w-12 p-2"/></a>*/}
              <Link href="/faq" className="hover:text-ui-fg-base">
                Вопросы
              </Link>
              <Link href="/about-us" className="hover:text-ui-fg-base">
                О нас
              </Link>
            </div>
            {/*<CartDropdown/>*/}
          </div>
        </nav>
        <MobileMenu/>
      </header>
    </div>
  )
}

export default Nav
