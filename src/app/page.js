"use client";
import Layout from "./components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-primary mb-4">Welcome to Our CRM ERP Billing Software</h1>
        <p className="text-gray-700 mb-4">Streamline your business processes with our modern software solutions.</p>
        <div className="flex gap-4">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </Layout>
  );
}
