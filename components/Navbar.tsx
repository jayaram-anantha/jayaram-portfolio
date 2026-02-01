const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-indigo-600">Portfolio</span>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-indigo-600">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
