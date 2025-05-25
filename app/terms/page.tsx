import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Peri Limited",
  description: "Terms and conditions for using Peri Limited services and products.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-green max-w-none">
        <p>Last updated: May 22, 2025</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Peri Limited. These Terms of Service govern your use of our website and the products and services
          we offer. By accessing or using our website, you agree to be bound by these Terms.
        </p>

        <h2>2. Definitions</h2>
        <p>
          "Company", "We", "Us", or "Our" refers to Peri Limited, a company registered in Kenya. "Website" refers to
          perilimited.co.ke and all associated domains. "Products" refers to all agricultural products and services
          offered by Peri Limited. "You" refers to the individual accessing or using our Website and Products.
        </p>

        <h2>3. Products and Services</h2>
        <p>
          Peri Limited offers various agricultural products and services. All product descriptions, specifications, and
          prices are subject to change without notice. We reserve the right to discontinue any product at any time.
        </p>

        <h2>4. Ordering and Payment</h2>
        <p>
          When placing an order through our Website or directly with our sales team, you agree to provide accurate and
          complete information. Payment terms will be specified at the time of order and may vary depending on the
          products ordered and your account status.
        </p>

        <h2>5. Delivery and Returns</h2>
        <p>
          Delivery times are estimates only and are not guaranteed. Risk of loss and title for products pass to you upon
          delivery. Our return policy allows returns within 14 days of delivery, subject to certain conditions.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All content on our Website, including text, graphics, logos, and software, is the property of Peri Limited and
          is protected by copyright and other intellectual property laws.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Peri Limited shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages resulting from your use or inability to use our Products or
          Website.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its
          conflict of law provisions.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on
          our Website. Your continued use of our Website after any changes indicates your acceptance of the modified
          Terms.
        </p>

        <h2>10. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at info@perilimited.co.ke.</p>
      </div>
    </div>
  )
}
