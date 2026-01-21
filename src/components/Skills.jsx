export default function Skills() {
  const skills = {
    "Programming Languages": [
        "Java",
        "Python",
        "SQL",
    ],

    "Backend & Systems": [
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "Redis",
    ],

    "Data Analytics & Machine Learning": [
        "Machine Learning",
        "scikit-learn",
        "Power BI",
        "DAX",
        "Tableau"
    ],

    "Databases & Cloud": [
        "PostgreSQL",
        "MySQL",
        "MariaDB",
    ],

    "Tools & Platforms": [
        "Docker",
        "Jenkins",
        "Git",
        "Flask",
        "HTML",
        "CSS",
    ],
  };

  return (
    <section id="skills" className="py-20 px-6">

      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="border border-zinc-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">{category}</h3>

            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <span
                  key={index}
                    className="text-sm bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}