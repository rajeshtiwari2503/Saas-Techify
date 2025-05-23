 import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const sections = [
  {
    title: '🚀 Trending Technologies',
    description: 'Technologies gaining rapid traction and adoption across modern SaaS platforms.',
    items: ['AI & ML', 'Cloud Platforms', 'Microservices', 'Next.js', 'DevOps'],
  },
  {
    title: '🌐 Frontend Technologies',
    description: 'Technologies for building responsive, interactive, and accessible user interfaces.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: '⚙️ Backend Technologies',
    description: 'Frameworks and languages that power business logic, APIs, and databases.',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'Java', 'Spring Boot', 'Go', '.NET'],
  },
  {
    title: '🗃️ Databases',
    description: 'Powerful and scalable solutions for data storage, querying, and performance.',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Firebase', 'Supabase', 'ElasticSearch'],
  },
  {
    title: '☁️ Cloud Platforms',
    description: 'Scalable platforms to host, deploy, and manage SaaS infrastructure in the cloud.',
    items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Vercel', 'Netlify', 'Heroku', 'DigitalOcean'],
  },
  {
    title: '🎨 UI/UX Design Tools',
    description: 'Tools for wireframing, prototyping, and crafting user-centric designs.',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Zeplin', 'InVision'],
  },
  {
    title: '🔧 DevOps & Tools',
    description: 'Automation and CI/CD tools that streamline development, deployment, and scaling.',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Terraform', 'Ansible'],
  },
];

const Section = ({ title, description, items }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="bg-gray-100 text-center p-4 rounded-lg shadow-sm hover:bg-primary hover:text-white transition cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  </section>
);

export default function TechnologiesPage() {
  return (
    <>
    <Layout>
      <Head>
        <title>Technologies | Techify SaaS</title>
        <meta
          name="description"
          content="Explore the modern frontend, backend, cloud, and DevOps technologies that power Techify's SaaS solutions."
        />
        <meta
          name="keywords"
          content="Techify, SaaS, Technologies, Frontend, Backend, Cloud, Databases, DevOps, UI/UX"
        />
      </Head>

      {/* <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Technologies We Use</h1>
        {sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            description={section.description}
            items={section.items}
          />
        ))}
      </main> */}
      <main className="container mx-auto px-4 py-12">
  <h1 className="text-4xl font-bold text-center mb-10">Technologies We Use</h1>
  {sections.map((section) => (
    <Section
      key={section.title}
      title={section.title}
      description={section.description}
      items={section.items}
    />
  ))}

  {/* 👇 Get in Touch Link */}
  <div className="text-center mt-16">
    <Link
      href="/contact"
      className="inline-flex items-center text-primary font-semibold text-lg hover:underline hover:text-primary/80 transition"
    >
      Get in Touch
      <svg
        className="ml-2 w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </Link>
  </div>
</main>
</Layout>
    </>
  );
}
