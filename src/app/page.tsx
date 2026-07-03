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
    <main className="relative bg-[#fafafa] text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      <Navbar />
      
      {/* Editorial Flow */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      
      <ScrollToTop />

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-black/5 text-center bg-[#fafafa] text-slate-500">
        <div className="container mx-auto px-6">
          <p className="text-xs md:text-sm font-medium tracking-widest uppercase">
            © 2026 Jeevanantham S. Creative Developer.
          </p>
        </div>
      </footer>
    </main>
  );
}
