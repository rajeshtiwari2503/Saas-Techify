 'use client';

import { motion } from 'framer-motion';
import Layout from '../components/Layout';

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
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-primary mb-10 text-center  grow-and-move-heading"
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
          className="mb-12"
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
