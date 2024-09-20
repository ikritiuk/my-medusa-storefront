import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { ChangeEvent } from "react"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setSortBy: (value: string) => void
}

const sortOptions = [
  {
    value: "created_at",
    label: "Новинки",
  },
  {
    value: "price_asc",
    label: "Цена по возрастанию",
  },
  {
    value: "price_desc",
    label: "Цена по убыванию",
  },
]

const SortProducts = ({ sortBy, setSortBy }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    setSortBy(e.target.value)
  }

  return
  // (
  //   <FilterRadioGroup
  //     title="Сортировать"
  //     items={sortOptions}
  //     value={sortBy}
  //     handleChange={handleChange}
  //   />
  // )
}

export default SortProducts
