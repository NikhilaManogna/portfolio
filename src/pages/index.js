import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Publications from "../components/Publications";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}