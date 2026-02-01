const certs = [
  {
    name: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    link: "#",
  },
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    org: "Microsoft",
    link: "#",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    org: "Microsoft",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certs.map((c) => (
            <div key={c.name} className="bg-white rounded-2xl border shadow-sm p-6">
              <div className="text-xl font-semibold text-gray-900">{c.name}</div>
              <div className="text-gray-600 mt-1">{c.org}</div>

              <a
                href={c.link}
                className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Credential →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
