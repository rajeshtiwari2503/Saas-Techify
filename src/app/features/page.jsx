 'use client';

import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import GradientCard from '../components/GradientBg';

// Animation variants for smooth fade-in and sliding up
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  },
};

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        {/* Blinking Heading */}
          <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="grow-and-move-heading text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Key Features
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                      Powered by our deep expertise in CRM, ERP, and cloud-based SaaS platforms.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "CRM Automation",
                        description: "Manage leads, track customer interactions, and automate sales pipelines effortlessly.",
                        image: "/images/crm.png",
                      },
                      {
                        title: "Smart ERP",
                        description: "Integrate all your operations—from inventory to HR—into a single intuitive platform.",
                        image: "/images/erp.png",
                      },
                      {
                        title: "Real-Time Analytics",
                        description: "Gain deep insights with dashboards and reporting tools that track performance instantly.",
                        image: "/images/analytic.png",
                      },
                      {
                        title: "Cloud-Based CRM",
                        description: "Access your customer data securely anytime, anywhere with our cloud-powered CRM.",
                        image: "/images/cloudcrm.png",
                      },
                      {
                        title: "Billing Software",
                        description: "Generate professional invoices, track payments, and manage subscriptions with ease.",
                        image: "/images/billing.png",
                      },
                      {
                        title: "Business Automation",
                        description: "Automate repetitive tasks and streamline operations to maximize productivity.",
                        image: "/images/business.png",
                      },
                    ].map((f, i) => (
                      <GradientCard key={i}>
                        <img
                          src={f.image}
                          alt={f.title}
                          className="w-full h-40 object-contain mb-4 rounded-2xl "
                        />
                        {/* <h3 className="text-xl font-semibold mb-2 text-[#0c4b6e]">
                          {f.title}
                        </h3> */}
                        <p className="text-gray-600">{f.description}</p>
                      </GradientCard>
                    ))}
                  </div>
        
        <motion.h1
          className="text-3xl sm:text-4xl mt-5 md:mt-10 font-bold text-primary mb-5 text-center  grow-and-move-heading"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
         Core Features
        </motion.h1>

        {/* Smart Lead Management */}
        <motion.section
          className="mb-5"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            Smart Lead Management
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Capture, assign, and follow up on leads effortlessly with our dynamic lead management system.
            Use real-time analytics, automated follow-ups, and intelligent routing to convert more leads.
            Integrations with chat, forms, and CRMs ensure that no opportunity is missed. 
            Visual pipelines and performance metrics help your sales team stay on top of every lead’s journey.
          </p>
        </motion.section>

        {/* New Features for Software Company */}
        <motion.section
          className="mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            User Access Control
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Manage user roles and permissions efficiently. Assign different levels of access to various users, ensuring secure data handling and seamless collaboration.
            Customizable permissions for administrators, managers, and regular users.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            Cloud Integration
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Integrate your data and services with leading cloud platforms (AWS, Google Cloud, Microsoft Azure).
            Achieve high availability, scalability, and secure data backup and synchronization across locations.
            Access your business tools anytime and anywhere with full cloud-based access.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            API Support
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Easily integrate with third-party applications using RESTful API support. Extend the functionality of your platform with custom integrations to meet your business needs.
            Connect with other software, automate workflows, and exchange data seamlessly.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            Automation Tools
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Automate repetitive tasks, workflows, and business processes. Use custom automation rules to handle data processing, customer outreach, reporting, and more.
            Increase productivity while reducing manual errors and time spent on mundane tasks.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            Real-Time Collaboration
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Collaborate seamlessly with your team in real time. Share documents, discuss strategies, and track project progress all in one platform.
            Enable faster decision-making and communication, improving overall team efficiency.
          </p>
        </motion.section>
      </div>
    </Layout>
  );
}
