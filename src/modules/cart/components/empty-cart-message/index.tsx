import { Heading, Text } from "@medusajs/ui"
import UnderlineLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Корзина
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        У вас пока нет товаров в корзине.
        Давайте это изменим!
        Используйте ссылку ниже, чтобы начать просматривать наши товары.
      </Text>
      <div>
        <UnderlineLink href="/store">Изучить товары</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
