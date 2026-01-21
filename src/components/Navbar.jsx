import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="font-semibold text-lg hover:text-white transition">
          Nikhila Manogna
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="#home"
            className="nav-link"
          >
            About
          </a>
          <a 
            href="#experience"
            className="nav-link"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="nav-link"
          >
            Projects
          </a>
          <a 
            href="#skills"
            className="nav-link"
          >
            Skills
          </a>
          <a 
            href="#contact"
            className="nav-link"
          >
            Contact
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <a href="#home" onClick={() => setOpen(false)}>About</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}