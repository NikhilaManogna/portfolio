import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Nikhila Manogna Renduchintala
        </h1>

        {/* Role */}
        <p className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-300">
          Software Engineer | Data Analytics & Machine Learning Enthusiast
        </p>

        {/* Summary */}
        <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
          Software Engineer with a strong foundation in backend development, data
        analytics, and machine learning. Experienced in building scalable
        systems, designing REST APIs, and working with data-driven models for
        real-world problem solving. Focused on clean architecture, performance,
        and practical application of ML and analytics concepts.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/NikhilaManogna"
            target="_blank"
            className="text-gray-600 hover:text-white"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/nikhila-manogna-477a57227/"
            target="_blank"
            className="text-gray-600 hover:text-white"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:nikhilamanogna@gmail.com"
            className="text-gray-600 hover:text-white"
          >
            <Mail size={24} />
          </a>
        </div>


        {/* CTA */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/Nikhila_Manogna_Renduchintala_Resume.pdf"
            target="_blank"
            className="px-6 py-2 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
          >
            Resume
          </a>

          <a
            href="#projects"
            className="px-6 py-2 rounded-lg border border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition"
          >
            Projects
          </a>
        </div>
      </div>
    </section>
  );
}