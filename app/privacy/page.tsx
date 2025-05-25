import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Peri Limited",
  description: "Privacy policy for Peri Limited website and services.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-green max-w-none">
        <p>Last updated: May 22, 2025</p>

        <h2>1. Introduction</h2>
        <p>
          At Peri Limited, we respect your privacy and are committed to protecting your personal data. This Privacy
          Policy explains how we collect, use, and safeguard your information when you visit our website or use our
          services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal identification information (Name, Email address, Phone number, Company name) and
          non-personal identification information (Browser type, Device information, Log data).
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain our website and services</li>
          <li>Improve, personalize, and expand our website and services</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you for customer service, updates, and marketing purposes</li>
          <li>Process transactions and send related information</li>
          <li>Prevent fraudulent transactions and monitor against theft</li>
        </ul>

        <h2>4. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our website and hold certain
          information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2>5. Data Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or rent your personal identification information to others. We may share generic
          aggregated demographic information not linked to any personal identification information with our business
          partners and trusted affiliates.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement appropriate data collection, storage, processing practices, and security measures to protect
          against unauthorized access, alteration, disclosure, or destruction of your personal information.
        </p>

        <h2>7. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal data, including the right to
          access, correct, delete, restrict processing, and data portability.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at info@perilimited.co.ke.</p>
      </div>
    </div>
  )
}
