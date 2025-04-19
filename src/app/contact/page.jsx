"use client";
 
import Layout from "../components/Layout";

 

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Contact Our Team</h1>
        <p className="text-gray-700 mb-6 max-w-2xl">Have questions or need custom solutions? Reach out and our team will be happy to assist you with demos, pricing, or technical support.</p>
        <button className="btn btn-primary">Send a Message</button>
      </div>
    </Layout>
  );
}
