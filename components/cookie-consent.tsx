"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")

    if (!cookieConsent) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">We use cookies</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              This website uses cookies to enhance your browsing experience. By clicking "Accept", you consent to our
              use of cookies. Learn more in our{" "}
              <Link href="/cookies" className="text-green-600 hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={declineCookies}>
              Decline
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={acceptCookies}>
              Accept
            </Button>
            <Button variant="ghost" size="icon" onClick={declineCookies} className="md:hidden">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
