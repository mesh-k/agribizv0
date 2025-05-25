import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Legal Information - Peri Limited",
  description: "Legal information and compliance details for Peri Limited.",
}

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Legal Information</h1>

      <div className="prose prose-green max-w-none">
        <h2>Company Information</h2>
        <p>
          Peri Limited is a company registered in Kenya under registration number [Registration Number]. Our registered
          office is located at [Registered Address].
        </p>

        <h2>Regulatory Compliance</h2>
        <p>
          Peri Limited complies with all applicable laws and regulations in Kenya and other jurisdictions where we
          operate, including:
        </p>
        <ul>
          <li>Agricultural Products Regulations</li>
          <li>Environmental Protection Standards</li>
          <li>Consumer Protection Laws</li>
          <li>Data Protection Regulations</li>
        </ul>

        <h2>Certifications</h2>
        <p>Our products and operations are certified by various regulatory bodies and industry standards, including:</p>
        <ul>
          <li>ISO 9001:2015 (Quality Management)</li>
          <li>ISO 14001:2015 (Environmental Management)</li>
          <li>Global G.A.P. Certification</li>
          <li>Kenya Bureau of Standards (KEBS) Certification</li>
        </ul>

        <h2>Legal Documents</h2>
        <p>Please refer to the following documents for detailed information about our legal policies:</p>
        <ul>
          <li>
            <Link href="/terms" className="text-green-600 hover:text-green-800">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-green-600 hover:text-green-800">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/cookies" className="text-green-600 hover:text-green-800">
              Cookie Policy
            </Link>
          </li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All trademarks, logos, product names, and company names or logos displayed on this website are the property of
          Peri Limited or their respective owners. Nothing contained on this website should be construed as granting any
          license or right to use any trademark without the prior written permission of Peri Limited or the respective
          owner.
        </p>

        <h2>Dispute Resolution</h2>
        <p>
          Any disputes arising from the use of our website or products shall be resolved through arbitration in
          accordance with the laws of Kenya. The place of arbitration shall be Nairobi, Kenya.
        </p>

        <h2>Contact Information</h2>
        <p>For legal inquiries, please contact our legal department at legal@perilimited.co.ke.</p>
      </div>
    </div>
  )
}
