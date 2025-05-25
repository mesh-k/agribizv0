import type { Metadata } from "next"
import ProductsGrid from "@/components/products-grid"
import ProductCategories from "@/components/product-categories"
import { products } from "@/lib/products-data"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Horticulture Products - Peri Limited",
  description: "Explore our range of premium export-quality flowers, vegetables, and coffee from Kenya.",
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Horticulture Products</h1>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground">
            Peri Limited offers a comprehensive range of export-quality flowers, vegetables, and coffee grown using
            sustainable practices in Kenya's ideal climate conditions.
          </p>
        </div>

        <ProductCategories />

        <div className="mt-16">
          <ProductsGrid products={products} />
        </div>
      </div>
    </Suspense>
  )
}
