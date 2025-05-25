import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Peri Limited - Premium Horticulture Exports",
  description:
    "Peri Limited specializes in exporting high-quality flowers, vegetables, and coffee from Kenya to global markets.",
  keywords:
    "horticulture, export, flowers, solidago, hypericum, vegetables, french beans, cabbage, coffee, maize, Kenya",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
