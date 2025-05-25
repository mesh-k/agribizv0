"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const sectionId = href.substring(2)
      scrollToSection(sectionId)
    }
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products", dropdown: true },
    { name: "About Us", href: "/#about" },
    { name: "Sustainability", href: "/#sustainability" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ]

  const productCategories = [
    { name: "Flowers", href: "/products?category=flowers" },
    { name: "Vegetables", href: "/products?category=vegetables" },
    { name: "Coffee", href: "/products?category=coffee" },
    { name: "Maize", href: "/products?category=maize" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="relative h-10 w-10"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" className="fill-green-600 dark:fill-green-500" />
                <path
                  d="M20 5C18.5 5 15 6 13 10C11 14 11 18 13 22C15 26 18 28 20 28C22 28 25 26 27 22C29 18 29 14 27 10C25 6 21.5 5 20 5Z"
                  className="fill-white dark:fill-gray-100"
                  stroke="none"
                />
                <path
                  d="M20 10C19.5 10 18 10.5 17 12C16 13.5 16 15 17 16.5C18 18 19.5 19 20 19C20.5 19 22 18 23 16.5C24 15 24 13.5 23 12C22 10.5 20.5 10 20 10Z"
                  className="fill-green-600 dark:fill-green-500"
                  stroke="none"
                />
                <path
                  d="M13 28C13 28 14 32 20 32C26 32 27 28 27 28"
                  className="stroke-white dark:stroke-gray-100"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M13 31C13 31 15 35 20 35C25 35 27 31 27 31"
                  className="stroke-white dark:stroke-gray-100"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            <motion.span
              className={cn(
                "font-bold text-xl transition-colors duration-300",
                isScrolled || pathname !== "/" ? "text-gray-900 dark:text-white" : "text-white",
              )}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Peri Limited
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <motion.button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className={cn(
                      "flex items-center space-x-1 py-2 font-medium transition-colors duration-300",
                      pathname === link.href || pathname.startsWith(`${link.href}/`)
                        ? "text-green-600 dark:text-green-400"
                        : isScrolled || pathname !== "/"
                          ? "text-gray-700 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
                          : "text-white hover:text-green-200",
                    )}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-300" />
                  </motion.button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {productCategories.map((category, catIndex) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "py-2 font-medium transition-colors duration-300",
                      pathname === link.href || pathname.startsWith(`${link.href}/`)
                        ? "text-green-600 dark:text-green-400"
                        : isScrolled || pathname !== "/"
                          ? "text-gray-700 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
                          : "text-white hover:text-green-200",
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ),
            )}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "rounded-full transition-transform hover:scale-110",
                  isScrolled || pathname !== "/"
                    ? "border-gray-300 dark:border-gray-600"
                    : "border-white/30 text-white",
                )}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "rounded-full transition-transform hover:scale-105",
                  isScrolled || pathname !== "/"
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-white text-green-600 hover:bg-green-50",
                )}
              >
                Get a Quote
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "rounded-full",
                  isScrolled || pathname !== "/"
                    ? "border-gray-300 dark:border-gray-600"
                    : "border-white/30 text-white",
                )}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md transition-colors duration-300",
                isScrolled || pathname !== "/"
                  ? "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10",
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) =>
                link.dropdown ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          className="pl-4 space-y-1 mt-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {productCategories.map((category, catIndex) => (
                            <motion.div
                              key={category.name}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.05 * catIndex }}
                            >
                              <Link
                                href={category.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                              >
                                {category.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        pathname === link.href || pathname.startsWith(`${link.href}/`)
                          ? "text-green-600 bg-gray-50 dark:text-green-400 dark:bg-gray-800"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700",
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ),
              )}

              <motion.div
                className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => {
                    scrollToSection("contact")
                    setIsOpen(false)
                  }}
                >
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation
