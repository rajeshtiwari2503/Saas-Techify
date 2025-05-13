"use client";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          About Our Company
        </h1>

        <p className="text-gray-700 max-w-3xl mb-6">
          <strong>SaaS Techify</strong> is a modern software company focused on
          helping businesses work smarter and grow faster. We deliver powerful,
          easy-to-use <strong>business management solutions</strong> that bring
          your entire organization onto a single, scalable platform.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Our Core Products
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            <strong>CRM (Customer Relationship Management)</strong> – Capture,
            manage, and convert leads into long-term customers with our
            intuitive <strong>CRM software</strong>.
          </li>
          <li>
            <strong>ERP (Enterprise Resource Planning)</strong> – Simplify
            operations by managing sales, inventory, teams, and operations in
            one centralized <strong>ERP solution</strong>.
          </li>
          <li>
            <strong>Billing & Tax Management</strong> – Generate professional
            invoices, track payments, and manage GST/taxes effortlessly with our
            <strong> billing and tax software</strong>.
          </li>
        </ul>

        <p className="text-gray-700 mb-6">
          We focus on simplicity, automation, and real-time data to help your
          team reduce manual work and make smarter decisions—faster.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Why Choose SaaS Techify?
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Simplify Operations:</strong> Eliminate the need for
            multiple tools by managing everything in one SaaS business platform.
          </li>
          <li>
            <strong>Data-Driven Decisions:</strong> Get real-time reports and
            insights that empower smart and timely decision-making.
          </li>
          <li>
            <strong>Scalability & Flexibility:</strong> Whether you're a startup
            or an enterprise, our solutions scale with your growing needs.
          </li>
          <li>
            <strong>Client-Centric Approach:</strong> We focus on continuous
            support and value delivery to ensure your long-term success.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Our Promise
        </h2>
        <p className="text-gray-700 max-w-3xl mb-6">
          At <strong>SaaS Techify</strong>, we’re more than just a software
          provider—we are your long-term partner in{" "}
          <strong>digital transformation</strong> and{" "}
          <strong>business growth</strong>. With our intuitive SaaS tools and
          responsive support, we help you streamline operations, improve
          efficiency, and stay ahead in today’s competitive market.
        </p>
      </div>
    </Layout>
  );
}
