export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

      <div className="max-w-4xl mx-auto border border-zinc-700 rounded-xl p-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-xl font-semibold">
            Bachelor of Technology in Computer Science & Engineering
          </h3>
          <span className="text-zinc-400 mt-2 sm:mt-0">
            2021 – 2025
          </span>
        </div>
        <p className="text-zinc-400 mt-1">
          GPA: 9.28 / 10
        </p>
        <p className="text-zinc-400 mt-2">
            VIT-AP University
        </p>
        <p className="text-zinc-400 mt-2">
          Specialization in Data Analytics
        </p>
      </div>
    </section>
  );
}