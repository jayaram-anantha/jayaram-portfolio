const skills = [
  { title: "Data Analysis & BI", items: ["Power BI (Power Query, DAX, Data Modeling)", "Tableau", "Excel (PivotTables, Power Pivot, XLOOKUP/VLOOKUP)", "KPI Dashboards", "Data Visualization"] },
  { title: "SQL", items: ["CTEs", "Window Functions", "Ranking Functions", "Data Modeling", "Query Optimization"] },
  { title: "Programming", items: ["Python (pandas, NumPy, Matplotlib, Seaborn)", "R"] },
  { title: "Statistics", items: ["Hypothesis Testing", "Regression", "A/B Testing", "Time Series Forecasting", "Predictive Modeling"] },
  { title: "Data Quality", items: ["User Stories", "UAT", "Agile/Scrum", "JIRA/Confluence", "Visio"] },
  { title: "Additional", items: ["Agentic AI", "LLM", "Machine Learning (scikit-learn, model evaluation, SHAP)", "AWS (S3, IAM, EC2, CloudWatch)", "Azure", "Git/GitHub", "Jupyter Notebook"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Skills</h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          {skills.map((s) => (
            <details
              key={s.title}
              className="group bg-white rounded-2xl border shadow-sm p-5"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-900">
                  {s.title}
                </span>
                <span className="text-gray-400 group-open:rotate-180 transition">
                  ⌄
                </span>
              </summary>

              <div className="mt-4 flex flex-wrap gap-3">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
