import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LanguagesAssociations } from "./components/LanguagesAssociations";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-dvh bg-[var(--bg-body)] text-[var(--text-main)] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <LanguagesAssociations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
