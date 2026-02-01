export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Let&apos;s Work Together</h2>
        <p className="text-gray-600 text-lg mb-10">
          I&apos;m Open to Data Analyst opportunities — feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:ananthajayaram1@gmail.com"
            className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
          >
            Send Email
          </a>

          <a
            href="https://linkedin.com/in/anantha-jayaram"
            target="_blank"
            rel="noreferrer"
            className="border border-indigo-600 text-indigo-600 px-7 py-3 rounded-xl font-medium hover:bg-indigo-50 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/jayaram-anantha"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-300 text-gray-800 px-7 py-3 rounded-xl font-medium hover:bg-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
