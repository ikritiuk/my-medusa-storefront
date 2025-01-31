"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { default as React, useState } from "react"
import { SortOptions } from "../components/refinement-list/sort-products"
import FloatingButton from "@modules/home/components/floating-button"

const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const [sortBy, setSortBy] = useState<SortOptions>("created_at")

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6">
      <RefinementList
        refinementList={params}
        setRefinementList={setParams}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <InfiniteProducts params={params} sortBy={sortBy} />
      {/*<FloatingButton/>*/}
    </div>
  )
}

export default StoreTemplate
