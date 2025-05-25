import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
  isNew?: boolean
  isBestSeller?: boolean
}

interface ProductsGridProps {
  products: Product[]
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <div className="relative h-64 w-full">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-2">
              {product.isNew && <Badge className="bg-blue-600">New</Badge>}
              {product.isBestSeller && <Badge className="bg-amber-600">Best Seller</Badge>}
            </div>
          </div>

          <CardContent className="p-6">
            <div className="mb-2">
              <Badge variant="outline" className="text-xs font-normal">
                {product.category}
              </Badge>
            </div>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <Button size="sm" variant="outline">
                Details
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Request Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ProductsGrid
