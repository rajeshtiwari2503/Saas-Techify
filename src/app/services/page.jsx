import Layout from "../components/Layout";

export default function ServicesPage() {
 const services = [
  {
    title: 'CRM Solutions',
    description:
      'Custom-built CRM platforms tailored for lead tracking, sales automation, customer segmentation, and engagement analytics. Easily integrate with your email, calendar, and support systems for a 360° customer view.',
  },
  {
    title: 'ERP Integration',
    description:
      'End-to-end ERP software development covering inventory, supply chain, finance, HR, and manufacturing modules. We ensure seamless integration across all departments to boost organizational efficiency.',
  },
  {
    title: 'Custom SaaS Development',
    description:
      'We build secure, scalable, and multi-tenant SaaS applications from scratch with modern tech stacks. From idea validation to post-deployment maintenance, we offer full lifecycle development services.',
  },
  {
    title: 'Analytics & Business Intelligence (BI)',
    description:
      'Transform raw data into meaningful insights with advanced dashboards, KPI tracking, forecasting tools, and custom analytics pipelines integrated with your existing systems.',
  },
  {
    title: 'API Integrations & Microservices',
    description:
      'Enable smooth data flow across platforms using robust REST and GraphQL APIs. We also develop and orchestrate microservices architectures for scalable systems.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Build high-performance mobile apps using React Native or Flutter. Whether it’s B2B or B2C, we ensure seamless user experiences across Android and iOS platforms.',
  },
  {
    title: 'UI/UX Design & Prototyping',
    description:
      'Craft intuitive, engaging interfaces with a user-first approach. From wireframing to high-fidelity prototyping, we create designs that drive conversions and engagement.',
  },
  {
    title: 'DevOps & Cloud Deployment',
    description:
      'CI/CD pipelines, containerization with Docker & Kubernetes, and automated deployments on AWS, Azure, or Google Cloud for secure and scalable hosting.',
  },
  {
    title: 'SaaS Platform Migration & Modernization',
    description:
      'Re-architect legacy software into modern, cloud-native SaaS platforms. We handle code refactoring, database migrations, and performance optimization.',
  },
  {
    title: 'Security & Compliance Services',
    description:
      'Implement robust security protocols including encryption, role-based access control, and audit trails. We ensure your software meets GDPR, HIPAA, and SOC 2 standards.',
  },
  {
    title: 'AI & Machine Learning Solutions',
    description:
      'Integrate predictive analytics, intelligent automation, and natural language processing (NLP) into your SaaS products to enhance decision-making and user experience.',
  },
  {
    title: 'Support & Maintenance',
    description:
      'Ongoing monitoring, bug fixing, feature updates, and performance improvements to ensure your product remains competitive and stable post-launch.',
  },
];

  return (
    <Layout> 
    <main className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <p className="text-lg text-center text-gray-600 mb-14">
        Discover how Techify empowers your business through innovative SaaS solutions.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
    
    </Layout> 
  );
}
