"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Leaf, Droplets, Sun, Wind, Recycle, Shield } from "lucide-react"

const SustainabilitySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const sustainabilityPractices = [
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: "Organic Farming",
      description: "We promote organic farming methods that avoid synthetic pesticides and fertilizers.",
    },
    {
      icon: <Droplets className="h-10 w-10 text-blue-600" />,
      title: "Water Conservation",
      description: "Our irrigation systems are designed to minimize water usage while maximizing crop yield.",
    },
    {
      icon: <Sun className="h-10 w-10 text-yellow-600" />,
      title: "Renewable Energy",
      description: "We incorporate solar power in our operations and promote renewable energy solutions.",
    },
    {
      icon: <Wind className="h-10 w-10 text-teal-600" />,
      title: "Carbon Footprint Reduction",
      description: "We actively work to reduce carbon emissions throughout our supply chain.",
    },
    {
      icon: <Recycle className="h-10 w-10 text-indigo-600" />,
      title: "Waste Management",
      description: "Our packaging is designed to be biodegradable or recyclable to minimize environmental impact.",
    },
    {
      icon: <Shield className="h-10 w-10 text-red-600" />,
      title: "Biodiversity Protection",
      description: "We support farming practices that protect and enhance local biodiversity.",
    },
  ]

  return (
    <section
      id="sustainability"
      className="py-20 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Sustainability</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            At Peri Limited, we believe in sustainable agriculture that respects the environment and supports local
            communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Sustainable Horticulture for Global Markets</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Sustainability is at the core of everything we do at Peri Limited. As a horticulture export company, we
              understand that the quality of our flowers, vegetables, and coffee depends on responsible growing
              practices that preserve our natural resources for generations to come.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our approach to sustainable agriculture focuses on three key pillars:
            </p>
            <ul className="space-y-3 mb-6">
              <motion.li
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mt-1">
                  <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Environmental Stewardship:</strong> Protecting natural resources and biodiversity in our
                  growing operations
                </span>
              </motion.li>
              <motion.li
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mt-1">
                  <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Quality Assurance:</strong> Maintaining the highest standards for our export products through
                  sustainable practices
                </span>
              </motion.li>
              <motion.li
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mt-1">
                  <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Social Responsibility:</strong> Supporting our workers and local communities through fair
                  labor practices
                </span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sustainable Farming"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <p className="font-bold text-green-600 text-xl">100%</p>
              <p className="text-gray-600 dark:text-gray-400">Eco-Friendly</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sustainabilityPractices.map((practice, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {practice.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{practice.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SustainabilitySection
