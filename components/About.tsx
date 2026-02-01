export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-gray-700 leading-8 text-lg">
            <p className="mb-6">
              I’m a data and analytics professional who enjoys turning complex data into clear, actionable insights. I’ve worked across reporting and analytics, building dashboards, validating data with SQL, and making sure metrics stay consistent and reliable for stakeholders.
            </p>

            <p>
              I like creating clean KPI stories in Power BI, digging into root causes when numbers don’t look right, and translating technical findings into simple business language. I’m also comfortable working in Agile teams gathering requirements, supporting testing, and iterating quickly based on feedback.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Problem Solver", "Team Player", "Fast Learner", "Detail Oriented"].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 border shadow-sm">
            <div className="text-2xl font-semibold mb-2 text-gray-900">
              What I bring
            </div>
            <ul className="list-disc pl-5 text-gray-700 leading-8">
              <li>Python and SQL for analysis, validation, and automation</li>
              <li>Power BI dashboards with clear KPI storytelling</li>
              <li>Strong data quality mindset (checks, reconciliation, consistency)</li>
              <li>Comfortable partnering with stakeholders and explaining insights simply</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
