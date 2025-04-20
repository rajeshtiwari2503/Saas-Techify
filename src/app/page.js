"use client";
import Image from "next/image";
import Layout from "./components/Layout";
import Link from "next/link";

export default function Page() {
  return (
    <Layout>
      <div className="p-6 sm:p-10">

        {/* Hero Section */}
        <section className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-primary">Welcome to SaaS Techify</h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Streamline CRM, ERP & Billing in one modern platform.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/signup">
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
            <Link href="/features">
              <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-gray-700 transition">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Feature 1 - Dashboard */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-2">All-in-One Dashboard</h2>
            <p className="text-gray-600">
              Gain complete visibility into your business processes with an intuitive and customizable dashboard.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/Logo.png"
              alt="Dashboard"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Feature 2 - AI Insights */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-2">AI-Powered Insights</h2>
            <p className="text-gray-600">
              Let our intelligent algorithms help you identify trends, customer behavior, and opportunities.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/Logo.png"
              alt="AI Insights"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Feature 3 - Invoicing */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-2">Smart Invoicing</h2>
            <p className="text-gray-600">
              Automate and track your billing process with our seamless invoicing system.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/Logo.png"
              alt="Invoicing"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Feature 4 - Team Collaboration */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Team Collaboration
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Keep your team connected with real-time updates, task assignments, and shared goals.
            </p>
          </div>

          {/* Image Content */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/Logo.png"
              alt="Team Collaboration"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

      </div>
    </Layout>
  );
}
