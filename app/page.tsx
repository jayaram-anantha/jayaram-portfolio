import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 text-gray-900">
            Hi, I&apos;m{" "}
            <span className="text-indigo-600">Anantha Jayaram Avula</span>
          </h1>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Data Analyst with 3+ years of experience delivering KPI dashboards and actionable insights using Power BI (Power Query, DAX, data modeling), SQL (CTEs, window functions), and Excel (PivotTables, Power Pivot, XLOOKUP/VLOOKUP). Experienced in data validation, metric standardization, and requirements-to-dashboard delivery in Agile teams with UAT, user stories/acceptance criteria, and JIRA/Confluence.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-indigo-600 text-indigo-600 px-7 py-3 rounded-xl font-medium hover:bg-indigo-50 transition"
            >
              Get In Touch
            </a>

            <a
              href="/resume.pdf"
              className="bg-indigo-600/10 text-indigo-700 px-7 py-3 rounded-xl font-medium hover:bg-indigo-600/20 transition"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-0">
          <div className="rounded-full p-1 bg-gradient-to-r from-indigo-500 to-purple-500">
            <img
              src="/profile.jpg"
              alt="Jayaram profile"
              className="w-72 h-72 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <About />
      <Skills />
      <Journey />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
