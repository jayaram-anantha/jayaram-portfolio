const journey = [
  {
    year: "2025",
    title: "Data Analyst",
    org: "HealthTech Systems • Richardson, TX",
    period: "May 2025 – Present",
  },
  {
    year: "2024",
    title: "M.S. Business Analytics & AI",
    org: "UT Dallas • GPA 3.8",
    period: "Aug 2023 – May 2025",
  },
  {
    year: "2021",
    title: "Data Analyst",
    org: "Infosys • Hyderabad, India",
    period: "Jan 2021 – Jul 2023",
  },
  {
    year: "2020",
    title: "B.Tech ",
    org: "JNTUK",
    period: "Jun 2018 – May 2022",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Experience & Education</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-indigo-200" />

          <div className="space-y-10">
            {journey.map((j, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow" />

                <div className="w-full md:w-[46%] bg-white rounded-2xl border shadow-sm p-6">
                  <div className="inline-block px-4 py-1 rounded-full bg-indigo-600 text-white font-semibold mb-3">
                    {j.year}
                  </div>
                  <div className="text-xl font-semibold text-gray-900">{j.title}</div>
                  <div className="text-indigo-600 font-medium">{j.org}</div>
                  <div className="text-gray-600">{j.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
