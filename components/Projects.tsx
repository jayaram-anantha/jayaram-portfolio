const projects = [
  {
    tag: "Power BI + Python",
    title: "Conagra Brands – Sales & Marketing Analytics",
    desc:
      "Quantified share gap (21.4% vs 46.7%) and identified 65M+ units/year opportunity via missing flavor profiles; built LASSO sales driver model (test R² = 0.87) and measured promo lift (~2× for Feature & Display).",
    link: "https://github.com/jayaram-anantha",
  },
  {
    tag: "AWS + Power BI",
    title: "Cloud-Based Predictive Outage Monitoring (AWS)",
    desc:
      "Built KPI reporting in Power BI over Redshift; ingested IoT metrics every 60 seconds via Kinesis and detected anomalies to predict failures ~48 hours early; automated alerts (CloudWatch/Lambda/SNS) to reduce time-to-awareness.",
    link: "https://github.com/jayaram-anantha",
  },
  {
    tag: "Spark + Hive",
    title: "Big Data Analytics on IPEDS Dataset (Hadoop, Hive & Spark)",
    desc:
      "Cleaned and consolidated 466,157+ records (2020–2023) across schema-variant files; found 28% surge in online enrollment (71.7M in 2022 vs 55.8M in 2020) and quantified adoption correlation (Pearson r = 0.56).",
    link: "https://github.com/jayaram-anantha",
  },
  {
    tag: "ML + Explainability",
    title: "Credit Risk Analytics (Default Prediction + Strategy)",
    desc:
      "Built default-risk model on 1.1M+ applications (13 months) achieving AUC 0.946 vs 24.65% baseline default rate; engineered 55+ features, designed tiered threshold strategy, and produced SHAP explainability for audit-ready insights.",
    link: "https://github.com/jayaram-anantha",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border shadow-sm overflow-hidden bg-white">
              <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-start justify-end p-4">
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                  {p.tag}
                </span>
              </div>

              <div className="p-6">
                <div className="text-xl font-semibold text-gray-900">{p.title}</div>
                <p className="text-gray-600 mt-3 leading-7">{p.desc}</p>

                <a
                  href={p.link}
                  className="inline-block mt-5 bg-indigo-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
