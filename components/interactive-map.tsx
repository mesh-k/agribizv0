"use client"

import { useEffect, useRef } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for actual map integration
    // In a real implementation, you would use a library like Leaflet or Google Maps API
    const initMap = () => {
      if (mapRef.current) {
        // Simulate map loading with a colored background
        mapRef.current.style.backgroundColor = "#e5e7eb"

        // Add a "map loaded" text to indicate where the map would be
        const mapText = document.createElement("div")
        mapText.className = "absolute inset-0 flex items-center justify-center text-gray-500"
        mapText.innerHTML = `
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p class="text-lg font-medium">Interactive Map</p>
            <p class="text-sm">Map would be loaded here using Google Maps or Leaflet</p>
          </div>
        `
        mapRef.current.appendChild(mapText)

        // Add a pin to simulate a marker
        const pin = document.createElement("div")
        pin.className = "absolute"
        pin.style.top = "50%"
        pin.style.left = "50%"
        pin.style.transform = "translate(-50%, -50%)"
        pin.innerHTML = `
          <div class="text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        `
        mapRef.current.appendChild(pin)
      }
    }

    initMap()
  }, [])

  return (
    <section id="location" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Visit our headquarters or get in touch with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div ref={mapRef} className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md"></div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Agriculture Road
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +254 123 456 789
                    <br />
                    +254 987 654 321
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@perilimited.co.ke
                    <br />
                    sales@perilimited.co.ke
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h4>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveMap
