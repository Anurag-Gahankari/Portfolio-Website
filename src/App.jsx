import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-primary/30 selection:text-primary">
      {/* Background ambient lighting */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-12">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-8 text-center text-textMuted text-sm border-t border-white/5 mx-6 sm:mx-12">
        <p>© {new Date().getFullYear()} Anurag Gahankari. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
