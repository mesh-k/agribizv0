import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-10">
                <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" className="fill-green-600" />
                  <path
                    d="M20 5C18.5 5 15 6 13 10C11 14 11 18 13 22C15 26 18 28 20 28C22 28 25 26 27 22C29 18 29 14 27 10C25 6 21.5 5 20 5Z"
                    className="fill-white"
                    stroke="none"
                  />
                  <path
                    d="M20 10C19.5 10 18 10.5 17 12C16 13.5 16 15 17 16.5C18 18 19.5 19 20 19C20.5 19 22 18 23 16.5C24 15 24 13.5 23 12C22 10.5 20.5 10 20 10Z"
                    className="fill-green-600"
                    stroke="none"
                  />
                  <path
                    d="M13 28C13 28 14 32 20 32C26 32 27 28 27 28"
                    className="stroke-white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 31C13 31 15 35 20 35C25 35 27 31 27 31"
                    className="stroke-white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl">Peri Limited</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing premium export-quality flowers, vegetables, and coffee from Kenya to global markets since 2025.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#sustainability" className="text-gray-400 hover:text-green-400 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-gray-400 hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-green-400 transition-colors">
                  Legal Information
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-400">123 Agriculture Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">+254 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <a
                  href="mailto:info@perilimited.co.ke"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  info@perilimited.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Peri Limited. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Designed and developed with ❤️ using Next.js and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
