import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProductsShowcase from "@/components/products-showcase"
import SustainabilitySection from "@/components/sustainability-section"
import PhotoGallery from "@/components/photo-gallery"
import InteractiveMap from "@/components/interactive-map"
import QuoteRequestForm from "@/components/quote-request-form"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ProductsShowcase />
      <SustainabilitySection />
      <PhotoGallery />
      <InteractiveMap />
      <QuoteRequestForm />
    </div>
  )
}
