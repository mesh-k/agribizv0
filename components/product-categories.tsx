"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

const ProductCategories = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentCategory = searchParams.get("category") || "all"

  const categories = [
    { id: "all", name: "All Products" },
    { id: "flowers", name: "Flowers" },
    { id: "vegetables", name: "Vegetables" },
    { id: "coffee", name: "Coffee" },
    { id: "maize", name: "Maize" },
  ]

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (categoryId === "all") {
      params.delete("category")
    } else {
      params.set("category", categoryId)
    }

    router.push(`/products?${params.toString()}`)
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              currentCategory === category.id
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </Suspense>
  )
}

export default ProductCategories
