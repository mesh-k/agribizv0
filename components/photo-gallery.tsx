"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Flower Fields",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Hypericum Berries",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Irrigation System",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Vegetable Harvesting",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Coffee Plants",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Packing Facility",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Explore our agricultural operations and products through our gallery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <X className="h-8 w-8" />
            </motion.button>

            <motion.button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Previous image"
              whileHover={{ scale: 1.1, x: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.div
              className="relative h-[80vh] w-[80vw] max-w-5xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.button
              onClick={() => navigateImage("next")}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Next image"
              whileHover={{ scale: 1.1, x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PhotoGallery
