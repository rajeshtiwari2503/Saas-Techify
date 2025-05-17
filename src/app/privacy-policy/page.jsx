"use client";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
        <div className="text-gray-700 space-y-6 max-w-3xl">

          <p>This Privacy Policy (“Policy”) explains how SaaS Techify (“we”, “our”, or “us”) collects, uses, and protects your personal information when you use our platform or visit our website at <a href="https://www.saastechify.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.saastechify.com/</a> (“Site”). By using our services, you agree to the practices described in this Policy.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Information We Collect</h2>
          <p>When you interact with our Site or SaaS platform—such as during sign-up, using billing services, or contacting support—we may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number, and shop-related information</li>
            <li>Subdomain or tenant-specific usage data</li>
            <li>Device/browser information and IP address</li>
            <li>Login timestamps, activity logs, and purchase histories</li>
            <li>Preferences, billing records, and uploaded documents</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-6">When and Why We Collect Data</h2>
          <p>We collect data when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Register for a SaaS Techify account or subscribe to a plan</li>
            <li>Use our grocery billing system or related modules</li>
            <li>Contact support or fill out any form</li>
            <li>Receive marketing communications or alerts</li>
            <li>Download invoices, reports, or documents</li>
          </ul>
          <p>We use this data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personalize user experience and tenant dashboards</li>
            <li>Improve our services, performance, and customer support</li>
            <li>Process billing, generate reports, and manage subscriptions</li>
            <li>Communicate important updates, reminders, and offers</li>
            <li>Maintain security and audit logs per tenant</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-6">Data Security</h2>
          <p>We use secure hosting, HTTPS, and encrypted storage to safeguard your data. Access to your information is limited to authorized personnel only and is protected by role-based access control, tenant isolation, and full audit trails.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Cookies & Tracking</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Store user preferences and session tokens</li>
            <li>Improve navigation and UI performance</li>
            <li>Track usage analytics and feature adoption</li>
          </ul>
          <p>You can manage cookie settings via your browser at any time.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Third-Party Disclosure</h2>
          <p>We do not sell or trade your personal data. Limited sharing occurs only with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment providers like Razorpay or Stripe for billing</li>
            <li>Email/SMS providers like SendGrid or Twilio for communication</li>
            <li>Hosting and infrastructure services (e.g., Azure, AWS)</li>
          </ul>
          <p>All third parties are contractually obligated to maintain confidentiality.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">External Links</h2>
          <p>Our Site may contain links to other platforms (e.g., help desk, tutorials). These sites have separate privacy practices, and we are not liable for their policies.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Children’s Privacy (COPPA Compliance)</h2>
          <p>Our platform is designed for business users. We do not knowingly collect data from children under 13 years of age.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">CalOPPA Compliance</h2>
          <p>To comply with the California Online Privacy Protection Act:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our Privacy Policy is publicly available</li>
            <li>Users can browse our site anonymously</li>
            <li>We notify users about Privacy Policy changes on this page</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-6">CAN-SPAM Compliance</h2>
          <p>We collect your email to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Send login access, updates, or alerts</li>
            <li>Share onboarding materials or feature announcements</li>
          </ul>
          <p>We pledge to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Never use misleading subjects or sender info</li>
            <li>Clearly mark marketing emails and include unsubscribe options</li>
            <li>Honor opt-out requests quickly</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-6">Contact Information</h2>
          <p>For privacy-related concerns, contact us at: <a href="mailto:privacy@saastechify.com" className="text-blue-600 underline">privacy@saastechify.com</a></p>
        </div>
      </div>
    </Layout>
  );
}
