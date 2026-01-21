import React from "react";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="border border-zinc-700 rounded-xl p-8 hover:border-white/30 transition">
          {/* Role & Duration */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
            <h3 className="text-xl font-semibold">
              Software Engineer Apprentice
            </h3>
            <span className="text-sm text-zinc-400">
              Jun 2024 – Jun 2025
            </span>
          </div>

          {/* Company */}
          <p className="text-sm text-zinc-400 mb-4">
            DBS Tech India · Hyderabad, IN
          </p>

          {/* Bullets */}
          <ul className="space-y-3 text-zinc-300 text-sm leading-relaxed list-disc pl-5">
            <li>
              Contributed to backend development of enterprise applications by
              designing and implementing RESTful APIs using Java and Spring Boot.
            </li>
            <li>
              Worked closely with cross-functional teams to analyze requirements,
              improve system reliability, and enhance application performance.
            </li>
            <li>
              Assisted in database design and optimization, ensuring efficient
              data retrieval and consistency across services.
            </li>
            <li>
              Gained hands-on experience with production-level code, version
              control, and agile development workflows.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}