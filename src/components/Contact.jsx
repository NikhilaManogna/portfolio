import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
        Open to software engineering and data analyst roles where I can work on scalable systems
        and data-driven applications.
      </p>

      <div className="flex justify-center gap-8 text-2xl">
        <a
          href="mailto:nikhilamanogna@gmail.com"
          className="hover:text-blue-300 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/nikhilamanogna"
          target="_blank"
          className="hover:text-blue-300 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/nikhila-manogna-477a57227/"
          target="_blank"
          className="hover:text-blue-300 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}