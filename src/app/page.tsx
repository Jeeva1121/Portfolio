import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <ScrollToTop />

      <footer className="py-12 border-t border-white/10 text-center text-slate-500 dark:text-slate-400">
        <div className="container mx-auto px-6">
          <p>© 2026 JS. Developed with Precision & Glassmorphism.</p>
        </div>
      </footer>
    </main>
  );
}
