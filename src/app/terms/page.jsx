"use client";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Terms & Conditions</h1>
        <div className="text-gray-700 space-y-6 max-w-3xl">
          <p>Welcome to <strong>SAAS Techify</strong> (“SAAS Techify”, “we”, “our,” or “us”). These Terms of Service govern your use of our website and the software or services provided herein (collectively, the “Service”). By accessing or using this website, you agree to comply with these Terms and Conditions in full. If you do not agree with any part of these Terms, please do not use our website or services.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Eligibility</h2>
          <p>Use of this website is prohibited for minors or individuals under the age of 18.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Updates to Terms</h2>
          <p>SAAS Techify reserves the right to modify or update these Terms at any time. Continued use of the Service indicates your acceptance of any revisions. Updates will be posted on this page with the corresponding revision date.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">General Conditions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We reserve the right to refuse service to anyone at any time for any reason.</li>
            <li>We provide data “as-is” without verifying ownership or copyright status. You are responsible for ensuring compliance with applicable copyright laws. SAAS Techify is not liable for any legal issues arising from misuse of provided data.</li>
            <li>Third-party tools may be utilized with your consent to fulfill service requirements. We do not monitor or control these third parties and are not responsible for any issues resulting from their use.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-6">Privacy</h2>
          <p>Protecting your privacy is important to us. Please review our <strong>Privacy Policy</strong> for details on how we collect, use, and disclose personal information.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Consent to List as Customer</h2>
          <p>By using our Services, you consent to allow SAAS Techify to use your name, brand name, and logo for marketing purposes, including listing you as part of our clientele.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Termination</h2>
          <p>Either party may terminate these Terms at any time. Obligations and liabilities incurred before termination will remain in effect. You may terminate by notifying us that you no longer wish to use our services or by discontinuing use of the website. We may terminate your access without notice if you violate these Terms.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Payment Terms, Charges, and Taxes</h2>
          <p>You are responsible for any applicable fees and taxes as outlined during the ordering process (e.g., via email or invoice). Payment must be made promptly using a valid payment method, and additional fees may apply where necessary.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">User Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>SAAS Techify will not resell your data but may use aggregated, non-identifiable information for service improvement or marketing purposes.</li>
            <li>You are responsible for ensuring you have lawful rights to any data shared.</li>
            <li>We are not liable for your data usage or any legal consequences arising from its misuse.</li>
            <li>Regular backups and safeguarding of your data are your responsibility.</li>
            <li>If you authorize us to retrieve data from third-party systems, you confirm you have the necessary rights and permissions.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-6">API Usage</h2>
          <p>SAAS Techify offers API access to facilitate service delivery. API usage is subject to these Terms and must not be abused or used for prohibited purposes. Termination of service will revoke API access.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Ownership and Proprietary Rights</h2>
          <p>All services, software, APIs, designs, and content provided by SAAS Techify are our property. Trademarks, service marks, and trade names are owned by SAAS Techify or its affiliates.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Warranty</h2>
          <p>Unless otherwise specified, the Service is provided “as-is” without warranties of any kind regarding reliability, accuracy, or availability.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Indemnification</h2>
          <p>You agree to indemnify and hold harmless SAAS Techify, its affiliates, directors, employees, and partners from any claims or demands arising out of your breach of these Terms or violation of any applicable laws.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Miscellaneous</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that provision.</li>
            <li><strong>Severability:</strong> If any clause is found invalid or unenforceable, the remaining provisions will continue in full effect.</li>
            <li><strong>Assignment:</strong> This Agreement constitutes the entire understanding between you and SAAS Techify and can only be modified in writing with mutual consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-6">Governing Law</h2>
          <p>These Terms are governed by the laws of India, with jurisdiction in Ahmedabad, Gujarat.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6">Refund Policy</h2>
          <p>
            For any concerns regarding service delivery:
            <br />
            1. Contact your assigned project coordinator and technical lead.
            <br />
            2. If unresolved, escalate the issue to your account manager from our Business Development team.
            <br />
            3. If further resolution is needed, email us at <a href="mailto:support@saastechify.com" className="text-blue-600 underline">support@saastechify.com</a> with full details of your concern.
          </p>
          <p>Refunds (full or partial) are subject to management’s discretion following a review of your request.</p>

          <p>By using our website and services, you acknowledge that you have read, understood, and agreed to these Terms of Service.</p>
        </div>
      </div>
    </Layout>
  );
}
