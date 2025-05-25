import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy - Peri Limited",
  description: "Cookie policy for Peri Limited website.",
}

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

      <div className="prose prose-green max-w-none">
        <p>Last updated: May 22, 2025</p>

        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They
          are widely used to make websites work more efficiently and provide information to the website owners.
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be
            switched off.
          </li>
          <li>
            <strong>Performance cookies:</strong> These help us understand how visitors interact with our website by
            collecting and reporting information anonymously.
          </li>
          <li>
            <strong>Functional cookies:</strong> These enable the website to provide enhanced functionality and
            personalization.
          </li>
          <li>
            <strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a
            profile of your interests.
          </li>
        </ul>

        <h2>3. Types of Cookies We Use</h2>
        <table className="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Cookie Name</th>
              <th className="border border-gray-300 px-4 py-2">Purpose</th>
              <th className="border border-gray-300 px-4 py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">_ga</td>
              <td className="border border-gray-300 px-4 py-2">Used by Google Analytics to distinguish users</td>
              <td className="border border-gray-300 px-4 py-2">2 years</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">_gid</td>
              <td className="border border-gray-300 px-4 py-2">Used by Google Analytics to distinguish users</td>
              <td className="border border-gray-300 px-4 py-2">24 hours</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">cookieconsent_status</td>
              <td className="border border-gray-300 px-4 py-2">Stores your cookie consent preferences</td>
              <td className="border border-gray-300 px-4 py-2">1 year</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Managing Cookies</h2>
        <p>
          Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or
          to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from
          version to version.
        </p>
        <p>
          Please note that blocking or deleting cookies may impact your experience on our website, as some features may
          not function properly.
        </p>

        <h2>5. Changes to This Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie
          Policy on this page and updating the "Last updated" date.
        </p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions about our Cookie Policy, please contact us at info@perilimited.co.ke.</p>
      </div>
    </div>
  )
}
