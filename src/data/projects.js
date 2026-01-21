export const projects = [
  {
    title: <b>Distributed URL Shortener System</b>,
    description:
      "Designed and implemented a scalable URL shortening platform with caching, rate limiting, and real-time analytics support.",
    highlights: [
      "Handled 50K+ shortened URLs with 1K+ concurrent redirects per second.",
      "Achieved p99 latency under 10 ms using Redis-based caching.",
      "Reduced database write amplification by 70% using batch analytics pipelines.",
    ],
    tech: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker"],
  },
  {
    title: <b>Fall Detection via Multimodal Video Classification</b>,
    description:
      "Built a web-based system for real-time fall detection using deep learning models on video data.",
    highlights: [
      "Achieved 93.5% accuracy in fall vs non-fall classification.",
      "Integrated multiple models with real-time inference support.",
      "Designed an intuitive interface for healthcare monitoring use cases.",
    ],
    tech: ["Python", "Flask", "Deep Learning", "Computer Vision"],
  },
  {
    title: <b>Customer Segmentation & Analytics Platform</b>,
    description:
      "Developed a data-driven customer segmentation system to improve targeted marketing strategies.",
    highlights: [
      "Improved campaign efficiency with a 10% reduction in ad spend.",
      "Achieved 99.83% model accuracy using ensemble techniques.",
      "Delivered insights through a web-based analytics interface.",
    ],
    tech: ["Python", "Flask", "scikit-learn", "Data Analytics"],
  },
  <a
  href={project.github}
  target="_blank"
  className="mt-6 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
>
  View on GitHub →
</a>
];