export default function Publications() {
  return (
    <section id="publications" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>

      <div className="max-w-4xl mx-auto border border-zinc-700 rounded-xl p-6">
        <a
          href="https://link.springer.com/chapter/10.1007/978-981-97-4359-9_38"
          target="_blank"
          className="text-lg font-semibold hover:underline"
        >
          Predictive Insights for Enhancing Customer Retention in Banking
        </a>

        <p className="text-zinc-400 mt-2">
          MAI Conference · NIT Patna · Springer Proceedings · 2024
        </p>

        <p className="text-zinc-500 mt-3 leading-relaxed">
          Proposed a data-driven churn prediction framework integrating Random
          Forest models with Power BI dashboards to support real-time business
          decision-making.
        </p>
      </div>
    </section>
  );
}