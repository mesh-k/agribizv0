"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ProductsShowcase = () => {
  const [activeTab, setActiveTab] = useState("flowers")

  const categories = [
    { id: "flowers", name: "Flowers" },
    { id: "vegetables", name: "Vegetables" },
    { id: "coffee", name: "Coffee" },
    { id: "maize", name: "Maize" },
  ]

  const products = {
    flowers: [
      { id: 1, name: "Solidago (Golden Rod)", image: "/placeholder.svg?height=300&width=300" },
      { id: 2, name: "Hypericum Berries", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "Mixed Cut Flowers", image: "/placeholder.svg?height=300&width=300" },
    ],
    vegetables: [
      { id: 1, name: "French Beans", image: "/placeholder.svg?height=300&width=300" },
      { id: 2, name: "Cabbage", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "Assorted Vegetables", image: "/placeholder.svg?height=300&width=300" },
    ],
    coffee: [
      { id: 1, name: "Arabica Coffee Beans", image: "/placeholder.svg?height=300&width=300" },
      { id: 2, name: "Robusta Coffee Beans", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "Specialty Coffee", image: "/placeholder.svg?height=300&width=300" },
    ],
    maize: [
      { id: 1, name: "Premium Maize", image: "/placeholder.svg?height=300&width=300" },
      { id: 2, name: "White Maize", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "Yellow Maize", image: "/placeholder.svg?height=300&width=300" },
    ],
  }

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Discover our range of high-quality agricultural products designed to enhance your farming experience
          </p>
        </motion.div>

        <Tabs defaultValue="flowers" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div
            className="flex justify-center mb-8 overflow-x-auto pb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <TabsList className="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white transition-all duration-300"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {Object.entries(products).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                        <Button
                          variant="outline"
                          className="w-full group transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20"
                        >
                          <span>View Details</span>
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Link href={`/products?category=${category}`}>
                  <Button
                    variant="outline"
                    className="group transition-all duration-300 hover:border-green-600 hover:text-green-600 dark:hover:border-green-400 dark:hover:text-green-400"
                  >
                    View All {categories.find((c) => c.id === category)?.name}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default ProductsShowcase
