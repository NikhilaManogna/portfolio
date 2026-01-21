import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Distributed URL Shortener System",
      description:
        "A backend-focused system that converts long URLs into short, shareable links while handling high traffic efficiently. The application is designed with scalability in mind, using caching and rate limiting to ensure fast redirections, prevent abuse, and support analytics such as click tracking and usage patterns.",
      tech: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker"],
      github: "https://github.com/NikhilaManogna/Distributed-Url-Shortener",
    },
    {
      title: "Fall Detection via Multimodal Video Classification",
      description:
        "A deep learning–based video analysis system that detects human falls by learning both spatial and temporal patterns from video data. Multiple pretrained models were fine-tuned and evaluated to compare performance, and the final solution was integrated into a web interface for easy video uploads and predictions.",
      tech: ["Python", "Deep Learning", "Flask"],
      github: "https://github.com/NikhilaManogna/Human-Fall-detection",
    },
    {
      title: "Customer Segmentation System",
      description:
        "A machine learning application that groups customers into meaningful segments based on behavioral and demographic attributes. The system helps businesses understand customer patterns and make data-driven marketing decisions by exposing predictions through a simple web interface.",
      tech: ["Python", "Flask", "Scikit-learn"],
      github: "https://github.com/NikhilaManogna/CustomerSegementation",
    },
    {
      title: "Enterprise Sales & Delivery Analytics",
      description:
        "An interactive analytics dashboard built to visualize sales performance, delivery timelines, and profit trends across regions. The dashboard enables stakeholders to explore data dynamically and gain insights without relying on manual reports or spreadsheets.",
      tech: ["Power BI", "DAX", "Data Analytics"],
      github: "https://github.com/NikhilaManogna/Enterprise-Sales-Operations",
    },
    {
      title: "Blood Bank Management System (AWS)",
      description:
         "A cloud-hosted system designed to manage blood donor information and donation requests efficiently. By deploying the application on AWS infrastructure, the platform ensures better availability and smoother coordination between donors and organizers.",
      tech: ["AWS EC2", "HTML", "CSS"],
      github: "",
    },
    {
      title: "Online Car Rental System",
      description:
        "A web-based application that allows users to browse available cars, make bookings, and manage rentals digitally. The system focuses on simplifying the rental workflow and improving accessibility for both customers and service providers.",
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
            className="border border-zinc-700 rounded-xl p-6 hover:shadow-lg transition"
          >
            {/* Title + GitHub */}
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-600 hover:text-white"
                >
                  <Github size={20} />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-3">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full"
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