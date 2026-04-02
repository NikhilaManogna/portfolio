import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Distributed URL Shortener System",
      short: "High-performance backend system for generating and resolving short URLs with low latency.",
      impact: [
        "Handled 50K+ URLs with optimized storage and retrieval",
        "Achieved sub-10ms latency using Redis caching",
      ],
      tech: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker"],
      github: "https://github.com/NikhilaManogna/Distributed-Url-Shortener",
    },
    {
      title: "Real-Time Collaborative Document Editor",
      short: "Google Docs–like platform enabling multiple users to edit documents simultaneously.",
      impact: [
        "Implemented real-time collaboration using WebSockets for multi-user editing",
        "Handled concurrent updates with conflict resolution and live synchronization",
      ],
      tech: ["React", "Java", "Spring Boot", "Redis"],
      github: "https://github.com/NikhilaManogna/Docs-collab-platform",
    },
    {
      title: "E-Commerce Platform",
      short: "Distributed microservices-based platform for managing catalog, orders, and payments.",
      impact: [
        "Designed scalable microservices architecture with fault isolation",
        "Implemented Kafka-based event-driven workflows for reliable order processing",
      ],
      tech: ["Java", "Spring Boot", "Microservices", "Kafka", "PostgreSQL", "Docker"],
      github: "https://github.com/NikhilaManogna/ecommerce-platform",
    },
    {
      title: "Incident Monitoring & Failure Prediction System",
      short: "Real-time monitoring system for detecting anomalies and predicting failures.",
      impact: [
        "Processed 1K+ system metrics/min using Kafka streams",
        "Implemented anomaly detection and secure APIs for system insights",
      ],
      tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL"],
      github: "https://github.com/NikhilaManogna/Incident-monitoring-system",
    },
    {
      title: "Fall Detection via Multimodal Video Classification",
      short: "Deep learning system for detecting human fall events from video data.",
      impact: [
        "Achieved 93.5% accuracy using transformer-based models",
        "Built web interface for real-time video upload and prediction",
      ],
      tech: ["Python", "Deep Learning", "Flask"],
      github: "https://github.com/NikhilaManogna/Human-Fall-detection",
    },
    {
      title: "Customer Segmentation System",
      short: "Machine learning system for grouping customers based on behavior and attributes.",
      impact: [
        "Applied clustering techniques to identify meaningful customer segments",
        "Enabled data-driven decision-making through prediction interface",
      ],
      tech: ["Python", "Flask", "Scikit-learn"],
      github: "https://github.com/NikhilaManogna/CustomerSegementation",
    },
    {
      title: "Insurance Premium Analytics",
      short: "Data analytics project for understanding insurance pricing patterns.",
      impact: [
        "Performed exploratory analysis to identify premium distribution trends",
        "Built visual insights using Power BI and Python",
      ],
      tech: ["Python", "Power BI", "DAX", "Data Analysis"],
      github: "https://github.com/NikhilaManogna/Insurance-Premium-Analytics",
    },
    {
      title: "Enterprise Sales & Delivery Analytics",
      short: "Interactive dashboard for analyzing sales, profit, and delivery performance.",
      impact: [
        "Built dynamic Power BI dashboards with drill-down capabilities",
        "Identified revenue drivers and operational bottlenecks",
      ],
      tech: ["Power BI", "DAX", "Data Analytics"],
      github: "https://github.com/NikhilaManogna/Enterprise-Sales-Operations",
    },
    {
      title: "Blood Bank Management System (AWS)",
      short: "Cloud-based system for managing blood donors and donation requests.",
      impact: [
        "Deployed application on AWS EC2 for improved availability",
        "Streamlined donor and request management workflow",
      ],
      tech: ["AWS EC2", "HTML", "CSS"],
      github: "https://github.com/NikhilaManogna",
    },
    {
      title: "Online Car Rental System",
      short: "Web application for managing car rentals and bookings.",
      impact: [
        "Developed end-to-end booking workflow for users",
        "Improved accessibility for managing rentals digitally",
      ],
      tech: ["HTML", "CSS", "XAMPP"],
      github: "https://github.com/NikhilaManogna/Car-Rental-System",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-zinc-700 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition duration-300"
          >
            {/* Title + GitHub */}
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white"
                >
                  <Github size={20} />
                </a>
              )}
            </div>

            {/* Short Description */}
            <p className="text-gray-400 text-sm mb-2">
              {project.short}
            </p>

            {/* Impact Points */}
            <ul className="text-gray-500 text-sm space-y-1 mb-3">
              {project.impact.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}