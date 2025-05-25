"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Peri Limited</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Empowering global markets with premium Kenyan horticulture products since 2025
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Peri Limited Farm"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="font-bold text-green-600 text-xl">15+</p>
              <p className="text-gray-600 dark:text-gray-400">Years of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4">
              Leading Horticulture Export Company in Kenya
            </motion.h3>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-6">
              Peri Limited is a premier horticulture company dedicated to growing and exporting high-quality flowers,
              vegetables, and coffee to markets worldwide. Our mission is to showcase Kenya's exceptional agricultural
              products through sustainable farming practices and innovative growing techniques.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2025, Peri Limited is a young but innovative horticulture export company specializing in
              premium flowers, vegetables, and coffee. Though new to the market, our team brings decades of combined
              experience in horticulture and international trade to deliver exceptional products to global markets.
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Premium Export-Quality Products",
                "Sustainable Farming Practices",
                "Global Distribution Network",
                "Innovative Growing Techniques",
                "Comprehensive Quality Control",
                "Environmentally Friendly Approaches",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-2 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full overflow-hidden relative">
                <Image src="/placeholder.svg?height=64&width=64" alt="CEO" fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">John Doe</p>
                <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
